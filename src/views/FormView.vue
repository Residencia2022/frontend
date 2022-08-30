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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure tempora
        inventore quibusdam, deserunt accusamus magnam porro explicabo adipisci
        et vel unde fuga optio dignissimos asperiores dolorem tempore
        voluptatibus. Deserunt, unde.
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <hr class="hr" />
        <hr />
      </div>
      <form class="form-group col col-12 col-lg-8" @submit.prevent="">
        <div class="mb-3" id="icon-relative">
          <label for="inputName" class="form-label">Your name</label>
          <input type="text" class="form-control ps-5" id="inputName" required />
            <span id="icon">
              <i class="fa-solid fa-circle-user"></i>
            </span>
        </div>
        <div class="mb-3" id="icon-relative">
          <label for="inputBachelor" class="form-label">
            Your bachelor degree
          </label>
          <input type="text" class="form-control ps-5" id="inputBachelor" required />
          <span id="icon">
              <i class="fa-solid fa-graduation-cap"></i>
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
          <select class="form-select" aria-label="Default select example" required>
            <option value="1" selected>Select one</option>
          </select>
        </div>
        <div class="mb-3" id="icon-relative">
          <label for="inputNumber" class="form-label">
            What is your phone number?
          </label>
          <input type="number" class="form-control ps-5" id="inputNumber" required />
          <span id="icon">
              <i class="fa-solid fa-phone"></i>
            </span>
        </div>
        <div class="mb-3" id="icon-relative">
          <label for="inputEmail" class="form-label">
            What is your email address?
          </label>
          <input type="email" class="form-control ps-5" id="inputEmail" required/>
          <span id="icon">
              <i class="fa-solid fa-envelope"></i>
            </span>
        </div>
        <div class="mb-3" id="icon-relative">
          <label for="inputCV" class="form-label">
            Please, share your CV in english with us
          </label>
          <input type="file" class="form-control" id="inputCV" required/>
          <span id="icon-right">
              <i class="fa-solid fa-cloud-arrow-up"></i>
            </span>
        </div>
        <button type="submit" class="btn btn-primary d-flex m-auto justify-content-center px-5 py-3 mb-5">Send</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'FormView',
  data () {
    return {
      englishLevel: 0,
      englishLevels: [
        {
          name: 'A1',
          description: 'lorem a1'
        },
        {
          name: 'A2',
          description: 'lorem a2'
        },
        {
          name: 'B1',
          description: 'lorem b1'
        },
        {
          name: 'B2',
          description: 'lorem b2'
        },
        {
          name: 'C1',
          description: 'lorem c1'
        },
        {
          name: 'C2',
          description: 'lorem c2'
        }
      ]
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
