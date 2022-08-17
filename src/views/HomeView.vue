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
          <div class="navbar-nav">
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
    <br>
  </main>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
header {
  background-image: url('../assets/hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title-gradient{
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

.break{
  background: linear-gradient(98.92deg, #9A080D 0.79%, #CF0A2C 39.01%);
  border-radius: 30px;
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
</style>
