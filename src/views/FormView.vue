<template>
  <header class="py-3">
    <nav class="container navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/logo-white.png"
            alt="Logo"
            style="width: 85px; aspect-ratio: 1"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars text-white fs-2"></i>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav align-items-end">
            <router-link
              to="/"
              class="nav-link text-white fs-5 px-3 fw-bold active"
              aria-current="page"
              >Home</router-link
            >
            <router-link
              to="/login"
              class="nav-link text-white fs-5 px-3 fw-bold"
              >Login</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <section class="container text-white mt-5 px-5 px-md-0">
      <h1 class="display-3 my-5">Technical Assistance <br />Center</h1>
      <h5 class="my-md-5 w-50">
        The Huawei TAC intern program is an opportunity for all those who want to venture into the world of telecommunications. To all those who want to learn and find out how far they are able to surpass themselves in both technical knowledge and soft skills.
      </h5>
      <div class="my-5">
        <router-link to="/" class="btn btn-primary">Know more</router-link>
      </div>
    </section>
  </header>
  <main class="container">
    <section class="mt-5 row justify-content-center">
      <div class="col col-12 col-lg-8">
        <h1>
          Become part of <span class="title-gradient">HUAWEI Mexico TAC</span>
        </h1>
        <p>Hi!, welcome to the application form to apply to our internship program, please enter your data correctly.</p>
        <hr class="hr" />
        <hr />
      </div>
      <form class="form-group col col-12 col-lg-8" @submit.prevent="saveIntern">
        <div class="mb-3" id="icon-relative">
          <label for="inputName" class="form-label">Your name</label>
          <input type="text" class="form-control ps-5" id="inputName" v-model="intern.FIRST_NAME" required />
            <span id="icon">
              <i class="fa-solid fa-circle-user"></i>
            </span>
        </div>
        <div class="mb-3" id="icon-relative">
          <label for="inputBachelor" class="form-label">
            Your bachelor degree
          </label>
          <input type="text" class="form-control ps-5" id="inputBachelor" v-model="intern.DEGREE" required />
          <span id="icon">
              <i class="fa-solid fa-graduation-cap"></i>
            </span>
        </div>
        <div class="mb-3" id="icon-relative">
          <label for="inputSchool" class="form-label">
            Your school
          </label>
          <input class="form-control ps-5" list="school" name="school" v-model="intern.SCHOOL" required>
          <datalist id="school">
            <option value="Universidad Politécnica de Querétaro"></option>
            <option value="Universidad Tecnológica de San Juan del Río"></option>
            <option value="Instituto Politécnico Nacional"></option>
            <option value="Universidad Nacional Autónoma de México"></option>
            <option value="Universidad Autónoma del Estado de Hidalgo"></option>
            <option value="Instituto Tecnológico Superior del Occidente del Estado de Hidalgo"></option>
            <option value="Universidad Autónoma Metropolitana"></option>
          </datalist>
          <span id="icon">
            <i class="fa-solid fa-school"></i>
          </span>
        </div>
        <div class="mb-3">
          <label for="inputParticipate" class="form-label">
            Why would you like to participate in the program?
          </label>
          <textarea
            class="form-control"
            id="inputParticipate"
            rows="3"
            maxlength="250"
            v-model="intern.INTEREST"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="inputMotivation" class="form-label">
            What is your motivation to participate in the program?
          </label>
          <textarea
            class="form-control"
            id="inputMotivation"
            rows="3"
            maxlength="250"
            v-model="intern.MOTIVATION"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="inputExperience" class="form-label">
            Have you had experience in telecommunications? Please, give us
            details.
          </label>
          <textarea
            class="form-control"
            id="inputExperience"
            rows="3"
            maxlength="250"
            v-model="intern.EXPERIENCE"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="inputEnglish" class="form-label">
            What is your english level?
          </label>
          <input
            type="range"
            class="form-range"
            min="0"
            max="5"
            step="1"
            id="inputEnglish"
            v-model="englishLevel"
            required
          />
          <small>
            {{ `${englishLevels[englishLevel].name}: ${englishLevels[englishLevel].description}` }}
          </small>
        </div>
        <div class="mb-3">
          <label for="inputBachelor" class="form-label">
            What position interests you?
          </label>
          <select class="form-select" aria-label="Default select example" v-model="intern.ID_POSITION" required>
            <option selected disabled value="">Select a position</option>
            <option v-for="position in positions" :key="position.ID_POSITION" :value="position.ID_POSITION">
              {{ position.POSITION }}
            </option>
          </select>
        </div>
        <div class="mb-3" id="icon-relative">
          <label for="inputNumber" class="form-label">
            What is your phone number?
          </label>
          <input type="text" class="form-control ps-5" id="inputNumber" v-model="intern.PHONE_NUMBER" required />
          <span id="icon">
              <i class="fa-solid fa-phone"></i>
            </span>
        </div>
        <div class="mb-3" id="icon-relative">
          <label for="inputEmail" class="form-label">
            What is your email address?
          </label>
          <input type="email" class="form-control ps-5" id="inputEmail" v-model="intern.EMAIL" required/>
          <span id="icon">
              <i class="fa-solid fa-envelope"></i>
            </span>
        </div>
        <form class="mb-3" id="inputCV">
          <label for="inputCV" class="form-label">
            Please, share your CV in english with us
          </label>
          <input type="file" class="form-control" name="file" id="file" @change="uploadCV" accept="application/pdf"/>
        </form>
        <button type="submit" class="btn btn-primary d-flex m-auto justify-content-center px-5 py-3 mb-5" :disabled="!ready">Send</button>
      </form>
    </section>
  </main>
</template>

<script>
import InternsService from '@/services/InternsService'
import PositionsService from '@/services/PositionsService'

import { url } from '@/http'

export default {
  name: 'FormView',
  data () {
    return {
      englishLevel: 0,
      englishLevels: [
        {
          name: 'A1',
          description: 'Basic language skills, simple and limited communication, basic vocabulary.'
        },
        {
          name: 'A2',
          description: 'Communicate in everyday situations, use simple but longer and more complete sentences, use of present and future tense expressions.'
        },
        {
          name: 'B1',
          description: 'Describe situations in conditional and past forms, more coherent and complex speech, express yourself through speech with greater fluency.'
        },
        {
          name: 'B2',
          description: 'Upper-intermediate language level, able to create fluent speeches spontaneously.'
        },
        {
          name: 'C1',
          description: 'Use of impersonal expressions, and modalities of action verbs, communication with native speakers in a fluent and coherent manner.'
        },
        {
          name: 'C2',
          description: 'Use of vocabulary related to the world of business and companies, use of the future in its various forms.'
        }
      ],
      intern: {
        FIRST_NAME: '',
        DEGREE: '',
        SCHOOL: '',
        INTEREST: '',
        MOTIVATION: '',
        EXPERIENCE: '',
        ID_POSITION: '',
        PHONE_NUMBER: '',
        EMAIL: '',
        CV: ''
      },
      positions: [],
      ready: false
    }
  },
  async mounted () {
    this.positions = await PositionsService.getAll()
  },
  watch: {
    intern: {
      handler () {
        if (this.intern.CV) {
          this.ready = true
        }
      },
      deep: true
    }
  },
  methods: {
    uploadCV () {
      const form = document.getElementById('inputCV')
      const formData = new FormData(form)
      InternsService.uploadCV(formData)
        .then(response => {
          this.intern.CV = `${url}/files/${response}`
        }).catch(error => {
          this.$swal.fire({
            title: 'Error',
            text: error.response.data.error,
            icon: 'error'
          })
        })
    },
    saveIntern () {
      this.intern.ENGLISH_LEVEL = this.englishLevels[this.englishLevel].name
      InternsService.create(this.intern)
        .then(response => {
          this.$swal.fire({
            title: 'Success',
            text: response,
            icon: 'success'
          }).then(() => {
            this.clearForm()
          })
        }).catch(error => {
          const errors = error.response.data.error
          let errorsFormatted = errors.replace(/"/g, '').replace(/_/g, ' ')
          if (errorsFormatted.includes('Duplicate entry')) {
            errorsFormatted = errorsFormatted.replace('Duplicate entry', 'This email is already registered')
          }
          this.$swal.fire({
            title: 'Error',
            text: errorsFormatted,
            icon: 'error'
          })
        })
    },
    clearForm () {
      this.intern = {
        FIRST_NAME: '',
        DEGREE: '',
        INTEREST: '',
        MOTIVATION: '',
        EXPERIENCE: '',
        ID_POSITION: '',
        PHONE_NUMBER: '',
        EMAIL: '',
        CV: ''
      }
    }
  }
}
</script>

<style scoped>
header {
  background-image: url(../assets/Fondo.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title-gradient {
  background: linear-gradient(259.43deg, #ef593f 0%, #9a080d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

hr {
  display: inline-block;
  width: 15%;
  margin-right: 3rem;
}

hr.hr {
  border: 1px solid #cf0a2c;
}

div#icon-relative{
  max-width: 1025px;
  position: relative;
}

#icon{
  position: absolute;
  display: block;
  bottom: .5rem;
  left: 1rem;
  user-select: none;
  color: #cf0a2c;
}

#icon-right{
  position: absolute;
  display: block;
  bottom: .5rem;
  right: 1rem;
  user-select: none;
  color: #cf0a2c;
}

.form-range::-webkit-slider-thumb {
  background-color: #cf0a2c;
}

@media (max-width: 768px) {
  h5.w-50 {
    width: 100% !important;
  }
}

</style>
