<template>
  <div class="pt-3 pb-5 container">
    <div class="title-sm pb-3">
      <h5>
        <nuxt-link to="/play/personal-test">
          <b-icon icon="chevron-left" class="mr-2"></b-icon>
        </nuxt-link>
        Personal Test
      </h5>
    </div>
    <div class="timer">
      <b-progress :max="maxTime" height="2rem">
        <b-progress-bar :value="countDown">
          <span
            ><b-icon icon="clock" class="mr-2"></b-icon
            >{{ countDown }} sec</span
          >
        </b-progress-bar>
      </b-progress>
    </div>
    <div class="questions-label mt-3">
      <h3>
        Question {{ questionNumber }} <span style="font-size: 1.3rem">/10</span>
      </h3>
    </div>
    <div class="main mt-3 pt-4 pb-3 container">
      <h5>
        <strong>{{ surah }}</strong>
      </h5>
      <div class="question-section pt-3 pb-3">
        <h3>{{ currentQuestion.text }}</h3>
      </div>
      <div v-if="showResult" class="answer-section">
        <div v-for="(option, index) in currentQuestion.options" :key="index">
          <b-button
            v-if="option.isCorrect"
            id="correct-ans"
            class="ans-option-btn"
            variant="primary"
          >
            <div class="row">
              <div class="col-2 icon-ans">
                <b-icon id="green-color" icon="check-circle-fill"></b-icon>
              </div>
              <div class="col-10 text-ans">
                {{ option.text }}
              </div>
            </div>
          </b-button>
          <b-button
            v-else-if="!option.isCorrect && option.selected"
            id="wrong-ans"
            class="ans-option-btn"
            variant="primary"
          >
            <div class="row">
              <div class="col-2 icon-ans">
                <b-icon id="red-color" icon="x-circle-fill"></b-icon>
              </div>
              <div class="col-10 text-ans">
                {{ option.text }}
              </div>
            </div>
          </b-button>
          <b-button v-else class="ans-option-btn" variant="primary">
            <div class="row">
              <div class="col-2 icon-ans">
                <b-icon icon="circle"></b-icon>
              </div>
              <div class="col-10 text-ans">
                {{ option.text }}
              </div>
            </div>
          </b-button>
        </div>
      </div>
      <div v-else class="answer-section">
        <b-button
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          class="ans-option-btn"
          variant="primary"
          @click="handleAnswerClick(option.isCorrect, index)"
        >
          <div class="row">
            <div class="col-2 icon-ans">
              <b-icon icon="circle"></b-icon>
            </div>
            <div class="col-10 text-ans">
              {{ option.text }}
            </div>
          </div>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Dummy from "~/assets/AlBaqarah.json";

export default {
  data() {
    return {
      timer: null,
      maxTime: 25,
      countDown: 25,
      questionNumber: 1,
      currentQuestion: null,
      currentVerseNumber: null,
      juzData: null,
      surah: null,
      showResult: false,
      score: 0,
      review: {},
    };
  },
  created() {
    this.juzData = Dummy.data[0].ayahs;
    this.surah = this.$route.params.chosen;
    this.currentQuestion = this.getQuestion();
    this.countDownTimer();
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.handleAnswerClick(false);
      }
    },
    getQuestion() {
      var currentAyah = Math.floor(Math.random() * this.juzData.length - 1);
      var question = {
        text: this.juzData[currentAyah].text,
        surah: this.juzData[currentAyah].surah,
        verseNumber: this.juzData[currentAyah].number,
        options: this.getOption(currentAyah),
      };
      return question;
    },
    getOption(currentAyah) {
      var arrNum = [
        currentAyah + 1,
        currentAyah + 2,
        currentAyah + 3,
        currentAyah + 4,
      ];
      var currentIndex = arrNum.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arrNum[currentIndex];
        arrNum[currentIndex] = arrNum[randomIndex];
        arrNum[randomIndex] = temporaryValue;
      }

      var options = [];
      arrNum.forEach((num) => {
        var option = {
          text: this.juzData[num].text,
          isCorrect: false,
          selected: false,
        };
        if (num - currentAyah == 1) option.isCorrect = true;
        options.push(option);
      });
      return options;
    },
    handleAnswerClick(isCorrect, index) {
      if (this.showResult) return; // prevent user clicked button when state is showing result

      clearTimeout(this.timer);
      this.review[this.questionNumber - 1] = {
        name: this.currentQuestion.surah,
        verseNum: this.currentQuestion.verseNumber,
        isCorrect: isCorrect,
      };

      // handling if time is out and user not answered
      if (this.countDown > 0) {
        this.currentQuestion.options[index].selected = true;
      }
      if (isCorrect) {
        this.score++;
      }
      this.showResult = true;
      setTimeout(() => {
        if (this.questionNumber + 1 <= 10) {
          this.questionNumber++;
          this.currentQuestion = this.getQuestion();
          this.countDown = this.maxTime;
          this.countDownTimer();
        } else {
          this.$store.commit("SET_PLAY_RESULT", {
            review: this.review,
            totalQuestion: this.questionNumber,
            totalCorrectness: this.score,
          });
          this.$router.push({
            name: "play-personal-test-result",
          });
        }
        this.showResult = false;
      }, 2000);
    },
  },
};
</script>

<style>
.title-sm h5 {
  margin-bottom: 0;
  font-weight: 600;
}

.timer .progress {
  background-color: #216170;
  border-radius: 2rem;
  text-align: right;
  padding: 2px;
}

.timer .progress span {
  font-size: 1rem;
  margin-left: 1.5rem;
}

.timer .progress-bar {
  background-color: #49c0db;
  border-radius: 2rem;
}

.timer .progress-bar span {
  font-size: 1rem;
  text-align: left;
  margin-left: 1.5rem;
}

.main {
  border: 1px solid #c1c1c1;
  border-radius: 2rem;
}

.ans-option-btn {
  border-radius: 1rem;
  padding: 1rem;
  min-width: 50%;
  font-size: 1.75rem;
  line-height: 1.7;
  color: black;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  text-align: right;
  font-family: "Kitab";
  background-color: white;
  border: 1px solid#C1C1C1;
  width: 100%;
}

.ans-option-btn:hover {
  background-color: #49c0db;
  border: 1px solid #49c0db;
}

.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.question-section {
  line-height: 1.7;
  text-align: right;
  font-family: "Kitab";
}

.icon-ans {
  display: flex;
  text-align: left;
  font-size: 1.2rem;
  align-items: center;
}

#correct-ans {
  border-radius: 1rem;
  padding: 1rem;
  min-width: 50%;
  font-size: 1.75rem;
  line-height: 1.7;
  color: black;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  text-align: right;
  font-family: "Kitab";
  background-color: #f0f9ee;
  border: 1px solid#6AC259;
  width: 100%;
}

#green-color {
  color: #6ac259;
}

#wrong-ans {
  border-radius: 1rem;
  padding: 1rem;
  min-width: 50%;
  font-size: 1.75rem;
  line-height: 1.7;
  color: black;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  text-align: right;
  font-family: "Kitab";
  background-color: #fdeaea;
  border: 1px solid#E92E30;
  width: 100%;
}

#red-color {
  color: #e92e30;
}
</style>
