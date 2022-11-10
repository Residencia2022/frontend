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
        Customers can access Huawei Technical Assistance Center (TAC) 24 hours a day, 7 days a week through TAC hotlines, emails, websites, and mobile APP for product technical consultation, troubleshooting issues, and other service requests.
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
      <Carousel :autoplay="2000" :wrapAround="true" :breakpoints="breakpoints">
        <Slide v-for="slide in 5" :key="slide">
          <img class="carousel__item" src="https://picsum.photos/800" alt="slide">
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </section>
    <section class="break mt-5 p-5 row">
      <div class="col col-12 col-md-8 text-white">
        <h1>Become a part of us!</h1>
        <h3>Apply to the internship program</h3>
      </div>
      <div class="col col-12 col-md-4 d-flex align-items-center justify-content-end">
        <router-link class="btn btn-dark" to="/apply">Apply now</router-link>
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
                <b>5G</b><br>
                The development of global 5G in network, deployment, ecology and experience is beyond imagination. Whether for individuals, families or every organization, 5G is creating unprecedented value. We will work closely with our customers and partners to focus on 5G innovative applications, prosper the 5G ecosystem, and accelerate 5G commercial success.<br><br>
                <b>LTE Network</b><br>
                Zero fallback refers to expansion of the fundamental LTE network coverage so that it is the same as that of 2G and 3G networks. With expanded coverage, LTE data, VoLTE, and IoT services will always be provided by the LTE network. Users will no longer fall back to 2G or 3G networks. The enhanced coverage also lays a foundation for 2G and 3G users to be migrated to LTE networks.<br><br>
                <b>Microwave</b><br>
                Huawei microwave equipment provides a maximum of 20 Gbit/s capacity by using microwave technologies such as CA (carrier aggregation), MIMO (multiple-input multiple-output technology), common microwave frequency band, and E-band realize dual-frequency microwave, through the combination of "1" dual-frequency antenna + "2" (6-86GHz) RF units of any frequency band.<br>
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
                <b>Data Communication</b><br>
                Huawei’s NetEngine, CloudEngine, AirEngine, and HiSecEngine products are used to build a leading data communication solutions. Working with the intelligent Network Cloud Engine, these products allow for simplified, highly available, and multi-service networks and intelligent connections, bringing IP networks into the intelligent era.<br><br>
                <b>Transmission Network</b><br>
                Huawei is committed to providing carrier and enterprise customers with high-performance transmission solutions featuring high availability, large bandwidth, and intelligence. These carry multiple services, such as video, DC interconnection, and premium private line services. Huawei's leading 200G WDM solutions have served more than 100 operators around the world. <br><br>
                <b>Access Network</b><br>
                In the access domain, Huawei provides high-bandwidth, intelligent, and simplified all-optical access solutions. These solutions will enable smooth evolution to 10G PON or 50G PON, and meet customer needs for wide Gigabit coverage, 8K and VR videos, and enterprise private lines.
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
                Huawei provides reliable, resilient, cost-effective, full-stack cloud solutions, from public cloud, hybrid or private cloud, to edge cloud, meeting carriers' diverse needs. <br><br>
                Huawei provides all-scenario data infrastructure designed for carrier workloads. Huawei storage resource pool solution features on-demand allocation, intelligent management, and multi-cloud convergence to reconstruct carriers data infrastructure for service innovation.<br><br>
                Huawei is committed to pursuing ongoing innovation in technical architecture and engineering fields. By following the principle of "open hardware, open-source software, partner enablement, and talent cultivation", we grow together with ecosystem partners and provide carriers with intelligent computing featuring ultimate performance.
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
                Core network is the pivot connecting industry networks, communications networks, and the Internet. The Huawei Cloud Core Network product line provides a full series of core network products and solutions, helping carriers build simplified, agile, convergent, efficient, and reliable core networks, enable a wide range of industries, and achieve business success.
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
                Provides global carriers with industry-leading, secure, and reliable end-to-end solutions, covering network planning, construction, O&M, optimization, and service operations. Over the past 30 years, Huawei has gradually become one of the world's largest and most advanced service and software providers, with delivery capabilities and resources that are distributed around the world. In the future, Huawei, as an always reliable strategic partner of carriers, will continue to devote itself to helping carriers achieve digital transformation and business success.
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
    <div class="container p-lg-5">
      <article class="main-gallery p-lg-5">
        <div class="box1"><img src="../assets/uno.jpg" alt=""></div>
        <div class="box2"><img src="../assets/dos.jpg" alt=""></div>
        <div class="box3"><img src="../assets/tres.jpg" alt=""></div>
        <div class="box4"><img src="../assets/cuatro.jpg" alt=""></div>
        <div class="box5"><img src="../assets/cinco.jpg" alt=""></div>
        <div class="box6"><img src="../assets/seis.jpg" alt=""></div>
      </article>
    </div>
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
        <div class="col col-12 col-md-12 mt-4">
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
        <router-link class="btn btn-primary" to="/apply">Apply now</router-link>
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
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
    Pagination
  },
  data () {
    return {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          itemsToShow: 3.5
        },
        1024: {
          itemsToShow: 5
        }
      },
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
          image: 'https://picsum.photos/200'
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

:target {
  scroll-margin-top: 3rem !important;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__slide {
  height: 30rem;
}

.carousel__slide img {
  height: 100%;
  width: 100%;
  object-fit: cover !important;
}

.main-gallery {
  width: 100%;
  margin: auto;
  display: grid;
  grid-template:
    "u d d" 33vh
    "t t c" 33vh
    "q s c" 33vh /
    auto auto auto;
}

.box1 {
  grid-area: u;
}

.box2 {
  grid-area: d;
}

.box3 {
  grid-area: t;
}

.box4 {
  grid-area: c;
}

.box5 {
  grid-area: q;
}

.box6 {
  grid-area: s;
}

.main-gallery div img {
  width: 96%;
  height: 96%;
  border-radius: 2rem;
  object-fit: cover;
}

@media (max-width: 768px) {
  .w-50 {
    width: 100% !important;
  }

  .main-gallery {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template:
      "u d d" 20vh
      "t t c" 20vh
      "q s c" 20vh /
      auto auto auto;
  }
}

@media (min-width: 1025px) {
  header {
    min-height: 100vh;
  }
}
</style>
