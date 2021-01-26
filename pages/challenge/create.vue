<template>
  <div class="pt-3 pb-5 container">
    <div class="title-sm pb-3">
      <h5>
        <nuxt-link to="/play/personal-test">
          <b-icon icon="chevron-left" class="mr-2"></b-icon>
        </nuxt-link>
        Ujian Tahfidz Pondok A
      </h5>
    </div>
    <h5 style="margin-left: 2.5rem">By Verse : {{ surah }}</h5>
    <div class="questions-label mt-3">
      <h3 class="text-center">
        <b-icon
          v-if="questionNumber > 1"
          icon="chevron-left"
          class="mr-2"
          @click="changeQuestion(questionNumber - 1)"
        ></b-icon>
        Question {{ questionNumber }}
        <b-icon
          icon="chevron-right"
          class="ml-2"
          @click="changeQuestion(questionNumber + 1)"
        ></b-icon>
      </h3>
    </div>
    <div class="main mt-3 pt-4 pb-3 container">
      <div v-if="currentQuestion" class="question-section py-3 font-kitab">
        <h3>{{ currentQuestion.text }}</h3>
      </div>
      <div v-else class="question-section text-center py-5">
        <h5 class="font-weight-bold" @click="selectQuestion()">
          Select Question Verse
        </h5>
      </div>
      <div v-if="currentQuestion" class="answer-section">
        <b-button
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          class="ans-option-btn"
          variant="primary"
          @click="chooseAnswer()"
        >
          <div class="row">
            <div class="col-2 icon-ans">
              <b-icon icon="circle"></b-icon>
            </div>
            <div v-if="option.text" class="col-10 text-ans font-kitab">
              {{ option.text }}
            </div>
            <div v-else class="col-10 text-ans text-left no-option">
              Edit option
            </div>
          </div>
        </b-button>
      </div>
      <div else class="answer-section">
        <b-button
          v-for="index in 4"
          :key="index"
          class="ans-option-btn"
          variant="primary"
          @click="chooseAnswer()"
        >
          <div class="row">
            <div class="col-2 icon-ans">
              <b-icon icon="circle"></b-icon>
            </div>
            <div class="col-10 text-ans text-left no-option">Edit option</div>
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
      questionNumber: 1,
      currentQuestion: null,
      currentOptions: null,
      juzData: null,
      surah: null,
      questions: [
        {
          id: 0,
          question: null,
          options: null,
        },
      ],
    };
  },
  created() {
    this.juzData = Dummy.data[0].ayahs;
    this.surah = "Al Baqarah";
  },
  methods: {
    selectQuestion() {
      return;
    },
    selectOption() {
      return;
    },
    chooseAnswer() {
      return;
    },
    changeQuestion(questionNumber) {
      var question_id = questionNumber - 1;
      this.questionNumber = questionNumber;
      if (question_id >= 0) {
        if (this.questions.length <= question_id) {
          this.questions[question_id] = {
            id: question_id,
            question: null,
            options: null,
          };
        }
        this.currentQuestion = this.questions[question_id].question;
        this.currentOptions = this.questions[question_id].options;
      }
    },
  },
};
</script>

<style>
.font-kitab {
  font-family: "Kitab";
  font-size: 1.75rem;
}

.title-sm h5 {
  margin-bottom: 0;
  font-weight: 900;
}

.main {
  border: 1px solid #c1c1c1;
  border-radius: 2rem;
}

.ans-option-btn {
  border-radius: 1rem;
  padding: 1rem;
  min-width: 50%;
  line-height: 1.7;
  color: black;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  text-align: right;
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
}

.question-section h5:hover,
.questions-label .b-icon:hover {
  cursor: pointer;
  color: #848484;
}

.icon-ans {
  display: flex;
  text-align: left;
  font-size: 1.2rem;
  align-items: center;
}

#choosen-ans {
  border-radius: 1rem;
  padding: 1rem;
  min-width: 50%;
  line-height: 1.7;
  color: black;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  text-align: right;
  background-color: #f0f9ee;
  border: 1px solid#6AC259;
  width: 100%;
}

#green-color {
  color: #6ac259;
}
</style>
