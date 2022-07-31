<template>
  <div class="offcanvas offcanvas-start bg-huawei" tabindex="-1" id="MenuContainer"
    aria-labelledby="MenuContainerLabel">
    <image-logo />
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="MenuContainerLabel">Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <menu-content :items="items" />
      <button-logout />
    </div>
  </div>
  <menu-content :items="items" class="position-fixed top-0 start-0 min-vh-100" desktop />
</template>

<script>
import ButtonLogout from '@/components/ButtonLogout.vue'
import ImageLogo from '@/components/ImageLogo.vue'
import MenuContent from '@/components/MenuContent.vue'

export default {
  name: 'MenuContainer',
  components: {
    ButtonLogout,
    ImageLogo,
    MenuContent
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
