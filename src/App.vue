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

main.row {
  width: 100%;
  min-height: 100vh;
  margin: 0;
}

.form-control {
  border-color: var(--red-color) !important;
}

.form-control:focus {
  box-shadow: 0 0 0 0.2rem rgba(207, 10, 44, 0.25) !important;
}

.form-check-input {
  border-color: var(--red-color) !important;
}

.form-check-input:focus {
  box-shadow: none !important;
}

.form-check-input:checked {
  background-color: var(--red-color) !important;
  box-shadow: 0 0 0 0.2rem rgba(207, 10, 44, 0.25) !important;
}

.btn-primary {
  border-color: var(--red-color) !important;
  background-color: var(--red-color) !important;
}

.btn-primary:active, .btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(207, 10, 44, 0.25) !important;
}

.bg-huawei {
  background: linear-gradient(180deg, rgba(248, 175, 151, 0.3) 0%, rgba(154, 8, 13, 0.3) 96.13%);
}

.bg-wireless {
  background-color: var(--wireless-color) !important;
}

.bg-fixed {
  background-color: var(--fixed-color) !important;
}

.bg-it {
  background-color: var(--it-color) !important;
}

.bg-core {
  background-color: var(--core-color) !important;
}

.bg-app {
  background-color: var(--app-color) !important;
}

.bg-remote {
  background-color: var(--remote-color) !important;
}
</style>
