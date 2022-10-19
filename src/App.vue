<template>
  <router-view/>
</template>

<style>
:root {
  --red-color: #CF0A2C;
  --wireless-color: #0CAEC5;
  --fixed-color: #C12743;
  --it-color: #176EBF;
  --core-color: #FF3E30;
  --app-color: #F7B529;
  --remote-color: #179C52;
}

*:not(.fa):not(.fas):not(.fa-regular):not(.fa-solid) {
  font-family: 'Manrope', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700 !important;
}

a, button {
  font-weight: 600 !important;
}

p {
  font-weight: 400 !important;
}

main.row {
  width: 100%;
  min-height: 100vh;
  margin: 0;
}

.form-select, .form-control {
  border-color: var(--red-color) !important;
}

.form-select:focus, .form-control:focus {
  box-shadow: 0 0 0 0.2rem rgba(207, 10, 44, 0.25) !important;
}

.form-check-input {
  border-color: var(--red-color) !important;
}

.form-check-input:focus, .btn-outline-primary:focus {
  box-shadow: none !important;
}

.form-check-input:checked {
  background-color: var(--red-color) !important;
  box-shadow: 0 0 0 0.2rem rgba(207, 10, 44, 0.25) !important;
}

.btn-primary, .swal2-confirm {
  border-color: var(--red-color) !important;
  background-color: var(--red-color) !important;
}

.btn-outline-primary {
  border-color: var(--red-color) !important;
  color: var(--red-color) !important;
}

.btn-outline-primary:active, .btn-outline-primary:hover {
  background-color: var(--red-color) !important;
  color: white !important;
}

.btn-primary:active, .btn-primary:focus, .btn-outline-primary:active, .swal2-confirm:focus {
  box-shadow: 0 0 0 0.2rem rgba(207, 10, 44, 0.25) !important;
}

.bg-huawei {
  background: linear-gradient(180deg, #fde7df 0%, #e1b4b6 90%);
}

.bg-wireless {
  background-color: var(--wireless-color) !important;
}

.card.bg-wireless:hover {
  box-shadow: 0px 0px 20px 15px rgba(12, 174, 197, 0.25) !important;
}

.bg-fixed {
  background-color: var(--fixed-color) !important;
}

.card.bg-fixed:hover {
  box-shadow: 0px 0px 20px 15px rgba(193, 39, 67, 0.25) !important;
}

.bg-it {
  background-color: var(--it-color) !important;
}

.card.bg-it:hover {
  box-shadow: 0px 0px 20px 15px rgba(23, 110, 191, 0.25) !important;
}

.bg-core {
  background-color: var(--core-color) !important;
}

.card.bg-core:hover {
  box-shadow: 0px 0px 20px 15px rgba(255, 62, 48, 0.25) !important;
}

.bg-app {
  background-color: var(--app-color) !important;
}

.card.bg-app:hover {
  box-shadow: 0px 0px 20px 15px rgba(247, 181, 41, 0.25) !important;
}

.bg-remote {
  background-color: var(--remote-color) !important;
}

.card.bg-remote:hover {
  box-shadow: 0px 0px 20px 15px rgba(23, 156, 82, 0.25) !important;
}
</style>
