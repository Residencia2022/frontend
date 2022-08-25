<template>
  <header class="py-3">
    <nav class="container navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo-white.png" alt="Logo" style="width: 85px; aspect-ratio: 1;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars text-white fs-2"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav align-items-end">
            <a class="nav-link text-white fs-5 px-3 fw-bold active" aria-current="page" href="#">Home</a>
            <a class="nav-link text-white fs-5 px-3 fw-bold" href="#about">About us</a>
            <a class="nav-link text-white fs-5 px-3 fw-bold" href="#intern">Intern</a>
            <router-link to="/login" class="nav-link text-white fs-5 px-3 fw-bold">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
    <section class="container text-white mt-5 px-5 px-md-0">
      <h1 class="display-3 my-5">Technical Assistance <br>Center</h1>
      <h5 class="my-5 w-50">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure tempora inventore quibusdam, deserunt accusamus magnam porro explicabo adipisci et vel unde fuga optio dignissimos asperiores dolorem tempore voluptatibus. Deserunt, unde.
      </h5>
      <div class="my-5">
        <a class="btn btn-primary" href="#about">Know more</a>
      </div>
    </section>
  </header>
  <main class="container">
    <section id="about" class="text-center mt-5">
      <h1 class="title-gradient">About Us</h1>
      <p>
        Founded in 1987,  Huawei is a provider of information and communications technology (ICT) infrastructure and smart devices. We have approximately 195,000 employees and operate in more than 170 countries and regions, serving more than 3 billion people around the world.
      </p>
      <article class=" justify-content-center row mt-5">
        <div class="col col-12 col-md-6 col-lg-4 p-3">
          <div class="card">
            <img src="../assets/mission.png" class="card-img-top p-5" alt="...">
            <div class="card-body">
              <h5 class="card-title">Mission</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col col-12 col-md-6 col-lg-4 p-3">
          <div class="card">
            <img src="../assets/vision.png" class="card-img-top p-5" alt="...">
            <div class="card-body">
              <h5 class="card-title">Vision</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col col-12 col-md-6 col-lg-4 p-3">
          <div class="card">
            <img src="../assets/values.png" class="card-img-top p-5" alt="...">
            <div class="card-body">
              <h5 class="card-title">Values</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section id="intern" class="text-center mt-5">
      <h1 class="title-gradient">Interns</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, tortor quis vivamus odio ac risus. Arcu, et a posuere mi interdum porta. Convallis quisque odio tincidunt commodo. Nibh ut blandit semper est leo fusce.
      </p>
    </section>
    <section class="break mt-5 p-5 row">
      <div class="col col-12 col-md-8 text-white">
        <h1>Become a part of us!</h1>
        <h3>Apply to the internship program</h3>
      </div>
      <div class="col col-12 col-md-4 d-flex align-items-center justify-content-end">
        <router-link class="btn btn-dark" to="/login">Apply now</router-link>
      </div>
    </section>
    <section class="mt-5 row">
      <figure class="col col-12 col-md-6 col-lg-4">
        <img src="../assets/learn.png" class="img-fluid" alt="Learn">
      </figure>
      <article class="col col-12 col-md-6 col-lg-8 ps-md-5">
        <h4 class="title-gradient">Technical Assistance Center</h4>
        <h3>What you will learn in this course?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div class="accordion" id="accordionProductLines">
          <div class="accordion-item p-2">
            <h2 class="accordion-header d-flex" id="productLineOne">
              <img src="../assets/icon1.svg" alt="">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProductLineOne" aria-expanded="true" aria-controls="collapseProductLineOne">
                Wireless Network
              </button>
            </h2>
            <div id="collapseProductLineOne" class="accordion-collapse collapse show" aria-labelledby="productLineOne" data-bs-parent="#accordionProductLines">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div class="accordion-item p-2">
            <h2 class="accordion-header d-flex" id="productLineTwo">
              <img src="../assets/icon2.svg" alt="">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProductLineTwo" aria-expanded="true" aria-controls="collapseProductLineTwo">
                Fixed Network
              </button>
            </h2>
            <div id="collapseProductLineTwo" class="accordion-collapse collapse" aria-labelledby="productLineTwo" data-bs-parent="#accordionProductLines">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div class="accordion-item p-2">
            <h2 class="accordion-header d-flex" id="productLineThree">
              <img src="../assets/icon3.svg" alt="">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProductLineThree" aria-expanded="true" aria-controls="collapseProductLineThree">
                IT&OSS
              </button>
            </h2>
            <div id="collapseProductLineThree" class="accordion-collapse collapse" aria-labelledby="productLineThree" data-bs-parent="#accordionProductLines">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div class="accordion-item p-2">
            <h2 class="accordion-header d-flex" id="productLineFour">
              <img src="../assets/icon4.svg" alt="">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProductLineFour" aria-expanded="true" aria-controls="collapseProductLineFour">
                Cloud Core Network
              </button>
            </h2>
            <div id="collapseProductLineFour" class="accordion-collapse collapse" aria-labelledby="productLineFour" data-bs-parent="#accordionProductLines">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div class="accordion-item p-2">
            <h2 class="accordion-header d-flex" id="productLineFive">
              <img src="../assets/icon5.svg" alt="">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProductLineFive" aria-expanded="true" aria-controls="collapseProductLineFive">
                Application & Software
              </button>
            </h2>
            <div id="collapseProductLineFive" class="accordion-collapse collapse" aria-labelledby="productLineFive" data-bs-parent="#accordionProductLines">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div class="accordion-item p-2">
            <h2 class="accordion-header d-flex" id="productLineSix">
              <img src="../assets/icon6.svg" alt="">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProductLineSix" aria-expanded="true" aria-controls="collapseProductLineSix">
                Remote Delivery
              </button>
            </h2>
            <div id="collapseProductLineSix" class="accordion-collapse collapse" aria-labelledby="productLineSix" data-bs-parent="#accordionProductLines">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <br>
    <section class="text-center mt-5">
      <h5 class="title-gradient">Testimonials</h5>
      <h1>Our experience</h1>
    </section>
    <section class="breaks my-5 p-5">
      <article class="white mt-5 p-5 row">
        <div class="col col-12 col-md-8">
          <div class="rounded-circle bg-danger mb-3 p-2 d-inline-block text-white">
            <i class="fa-solid fa-quote-left fs-2"></i>
          </div>
          <h4 class="name">
            {{ testimonials[testimonialSelected].name }}
          </h4>
          <h5 class="text-black-50">
            {{ testimonials[testimonialSelected].job }}
          </h5>
          <p>
            {{ testimonials[testimonialSelected].testimonial }}
          </p>
        </div>
        <div class="col col-12 col-md-4 text-center">
          <img :src="testimonials[testimonialSelected].image" :alt="testimonials[testimonialSelected].name" class="img-fluid rounded-circle">
        </div>
        <div class="col col-12 col-md-12 d-flex mt-4">
          <img v-for="(testimonial, index) in testimonials" :key="index" :src="testimonials[index].image" :alt="testimonials[index].name" @click="changeTestimonial(index)" :class="['me-2 rounded-circle testimonial-img', index !== testimonialSelected ? 'disabled' : '']">
        </div>
      </article>
    </section>
    <footer class="mt-5 p-5 row">
      <section class="col col-12 col-md-8 d-flex flex-column flex-md-row align-items-center mb-5">
        <img src="../assets/logo.png" alt="Logo" style="width: 85px; height: 85px; aspect-ratio: 1" class="mb-3" />
        <div class="ms-md-4">
          <h5 class="title-gradient">Technical Assistance Center</h5>
          <p>Our vision and mission is to bring digital to every person, home and organization for a fully connected, intelligent world.</p>
          <div class="d-flex gap-2">
            <a href="" class="p-2 rounded shadow">
              <img src="../assets/fb.svg" alt="" >
            </a>
            <a href="" class="p-2 rounded shadow">
              <img src="../assets/ig.svg" alt="" >
            </a>
            <a href="" class="p-2 rounded shadow">
              <img src="../assets/tw.svg" alt="" >
            </a>
            <a href="" class="p-2 rounded shadow">
              <img src="../assets/wa.svg" alt="" >
            </a>
          </div>
        </div>
      </section>
      <section class="col col-12 col-md-4">
        <h4 class="title-gradient">Be part of us!</h4>
        <p>Apply to the internship program.</p>
        <router-link class="btn btn-primary" to="/login">Apply now</router-link>
      </section>
      <section class="col col-12 p-5">
        <p class="text-center">
          <b>&copy; 2022 | Huawei Mexico TAC | All Rights Reserved.</b>
        </p>
      </section>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      testimonials: [
        {
          name: 'Cameron Williams',
          job: 'ICT Engineer',
          testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus id aliquam aenean. Aliquet tellus non faucibus dignissim ipsum. Et sed proin nibh adipiscing ac',
          image: 'https://picsum.photos/200'
        },
        {
          name: 'Harvey Specter',
          job: 'ICT Engineer',
          testimonial: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus id aliquam aenean. Aliquet tellus non faucibus dignissim ipsum. Et sed proin nibh adipiscing ac',
          image: 'https://picsum.photos/200'
        },
        {
          name: 'Mike Ross',
          job: 'ICT Engineer',
          testimonial: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus id aliquam aenean. Aliquet tellus non faucibus dignissim ipsum. Et sed proin nibh adipiscing ac',
          image: 'https://picsum.photos/200'
        },
        {
          name: 'Rachel Green',
          job: 'Ingeniero Chato',
          testimonial: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus id aliquam aenean. Aliquet tellus non faucibus dignissim ipsum. Et sed proin nibh adipiscing ac',
          image: 'https://scontent.fmex25-1.fna.fbcdn.net/v/t1.6435-1/75266082_951238738587964_2211145770680188928_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Z8d50jxg4V4AX-4wLGU&_nc_ht=scontent.fmex25-1.fna&oh=00_AT_SLctveRm2WM8QZrXFR5hLrSkBDcs3AZDGk4oHiQ0M5w&oe=6326149D'
        }
      ],
      testimonialSelected: 0
    }
  },
  methods: {
    changeTestimonial (index) {
      this.testimonialSelected = index
    }
  }
}
</script>

<style scoped>
header {
  background-image: url('../assets/hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title-gradient {
  background: linear-gradient(259.43deg, #EF593F 0%, #9A080D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card {
  box-shadow: 2px 2px 20px 5px rgba(0, 0, 0, 0.09);
  transition: all 0.3s ease-in-out;
}

.card:hover {
  border: 1px solid #CF0A2C;
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

body {
  background: #F8FAFF;
}

.break {
  background: linear-gradient(98.92deg, #9A080D 0.79%, #CF0A2C 39.01%);
  border-radius: 30px;
}

.breaks {
  background: linear-gradient(259.43deg, #EF593F 0%, #9A080D 100%);
  box-shadow: 18px 19px 6px -9px rgba(0, 0, 0, 0.2);
  border-radius: 0px 80px;
}

.name{
  color: #232527;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.white {
  background: #FFFFFF;
  border-radius: 20px;
}

.accordion-button {
  background: none !important;
}

.accordion-button:active, .accordion-button:focus {
  box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
  box-shadow: none;
}

.testimonial-img {
  width: 40px;
}

.testimonial-img.disabled {
  opacity: 0.6 !important;
}

.img-fluid.rounded-circle {
  width: 250px !important;
}

@media (max-width: 768px) {
  .w-50 {
    width: 100% !important;
  }
}

@media (min-width: 1025px) {
  header {
    min-height: 100vh;
  }
}

:target {
  scroll-margin-top: 3rem !important;
}
</style>
