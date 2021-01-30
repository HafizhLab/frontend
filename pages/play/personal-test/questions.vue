<template>
  <div>
    <div v-if="isLoading" class="pt-3 pb-5 container text-center">
      <h5>Generating questions...</h5>
    </div>
    <div v-else class="pt-3 pb-5 container">
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
          Question {{ questionNumber }}
          <span style="font-size: 1.3rem">/10</span>
        </h3>
      </div>
      <div class="main mt-3 pt-4 pb-3 container">
        <h5 v-if="$route.params.basedOn == 'Surah'">
          <strong>{{ surah }}</strong>
        </h5>
        <h5 v-else>
          <strong>Juz {{ surah }}</strong>
        </h5>
        <div class="question-section pt-3 pb-3">
          <h3>{{ question.text }}</h3>
        </div>
        <div v-if="showResult" class="answer-section">
          <div v-for="(option, index) in question.options" :key="index">
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
            v-for="(option, index) in question.options"
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
  </div>
</template>

<script>
import apiInterface from "~/api/apiInterface.js";
// import Dummy from "~/assets/AlBaqarah.json";

export default {
  data() {
    return {
      timer: null,
      maxTime: 25,
      countDown: 25,
      questionNumber: 1,
      question: null,
      surah: null,
      showResult: false,
      score: 0,
      isLoading: true,
    };
  },
  created() {
    this.surah = this.$route.params.chosen;
    this.question = this.getQuestion();

    // console.log(this.$store.state.question);
    // if (this.$store.state.question == null) {
    //   this.getQuestion();
    //   this.surah = this.$route.params.chosen;
    // } else {
    //   this.surah = this.$store.state.question.conf.number;
    //   this.question = this.$store.state.question.currentQuestion;
    //   this.questionNumber = this.$store.state.question.questionNumber;
    //   this.countDown = this.$store.state.countDown;
    //   this.isLoading = false;
    // }
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
    async getQuestion() {
      await apiInterface
        .getQuestion({
          mode: this.$route.params.type.toLowerCase(),
          type: this.$route.params.basedOn.toLowerCase(),
          number: this.$route.params.chosen,
        })
        .then((response) => {
          this.question = response.data;
          this.isLoading = false;
          clearTimeout(this.timer);
          this.countDownTimer();
        });
    },
    handleAnswerClick(isCorrect, index) {
      if (this.showResult) return; // prevent user clicked button when state is showing result

      clearTimeout(this.timer);

      // handling if time is out and user not answered
      if (this.countDown > 0) {
        this.question.options[index].selected = true;
      }
      if (isCorrect) {
        this.score++;
      }
      this.showResult = true;
      setTimeout(() => {
        if (this.questionNumber + 1 <= 10) {
          this.questionNumber++;
          this.question = this.getQuestion();
          this.countDown = this.maxTime;
          this.countDownTimer();
        } else {
          this.$router.push({
            name: "play-personal-test-result",
            params: {
              score: this.score,
            },
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
