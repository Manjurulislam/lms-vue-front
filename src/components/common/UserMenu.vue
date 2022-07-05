<template>
  <div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
    <div class="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click"
         data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" @click.prevent="toggleUserMenu">
      <img src="/assets/media/avater.png" alt="user"/>
    </div>
      <div
          class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
          :class="{ show: showMenu }"
          data-kt-menu="true"
          style="z-index: 105; position: fixed; inset: 0px 0px auto auto; margin: 0px; transform: translate(-30px, 65px);">
        <div class="menu-item px-3">
          <div class="menu-content d-flex align-items-center px-3">
            <div class="symbol symbol-50px me-5">
              <img alt="Logo" src="/assets/media/avater.png"/>
            </div>
            <div class="d-flex flex-column">
              <div class="fw-bolder d-flex align-items-center fs-5">{{ user.name }}
                <span class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span>
              </div>
              <a href="#" class="fw-bold text-muted text-hover-primary fs-7">{{ user.email }}</a>
            </div>
          </div>
        </div>
        <div class="separator my-2"></div>
        <div class="separator my-2"></div>
        <div class="menu-item px-5">
          <router-link :to="{name: 'logout'}" class="menu-link px-5">Sign Out</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data: () => ({
    showMenu: false,
  }),

  computed: {
    ...mapState(['user'])
  },

  methods: {
    signOut() {
      console.log('signOut');
    },
    toggleUserMenu() {
      this.showMenu = !this.showMenu
    },
    hideMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      }
    }
  },

}
</script>

<style scoped>

</style>