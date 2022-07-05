<template>
  <div id="kt_aside" class="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside"
       data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
       data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
       data-kt-drawer-toggle="#kt_aside_mobile_toggle">
    <div class="aside-logo flex-column-auto" id="kt_aside_logo">
      <router-link :to="{ name: 'dashboard' }">
        <h3>LMS</h3>
<!--        <img alt="Logo" :src='this.company.logo' class="h-20px logo"/>-->
      </router-link>
      <div id="kt_aside_toggle"
           class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
           data-kt-toggle="true"
           data-kt-toggle-state="active"
           data-kt-toggle-target="body"
           data-kt-toggle-name="aside-minimize"
           :class='{active : isToggle}'
      >
            <span class="svg-icon svg-icon-1 rotate-180" @click='toggleSidebar'>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path opacity="0.5"
                        d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                        fill="black"/>
									<path
                      d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                      fill="black"/>
								</svg>
							</span>
      </div>
    </div>
    <!--end::Brand-->
    <!--begin::Aside menu-->

    <div class="aside-menu flex-column-fluid">
      <div class="hover-scroll-overlay-y my-2 my-lg-2" id="kt_aside_menu_wrapper" data-kt-scroll="true"
           data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto"
           data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu"
           data-kt-scroll-offset="0">
        <div
            class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
            id="#kt_aside_menu" data-kt-menu="true">

          <div class="menu-item">
            <router-link :to="{ name: 'dashboard' }" class='menu-link active'>
												<span class='menu-icon'>
                          <span class='svg-icon svg-icon-2'>
                            <i class='fas fa-home'></i>
                          </span>
                    </span>
              <span class='menu-title'>Dashboard</span>
            </router-link>
          </div>

          <div class="menu-item">
            <router-link :to="{ name: 'lsm.course.list' }" class='menu-link active'>
												<span class='menu-icon'>
                          <span class='svg-icon svg-icon-2'>
                            <i class='fas fa-list'></i>
                          </span>
                    </span>
              <span class='menu-title'>Course</span>
            </router-link>
          </div>
          <div class="menu-item">
            <router-link :to="{ name: 'lsm.coupon.list' }" class='menu-link active'>
												<span class='menu-icon'>
                          <span class='svg-icon svg-icon-2'>
                            <i class='fas fa-list'></i>
                          </span>
                    </span>
              <span class='menu-title'>Coupons</span>
            </router-link>
          </div>
        </div>
        <!--end::Menu-->
      </div>
      <!--end::Aside Menu-->
    </div>
    <!--end::Aside menu-->
    <!--begin::Footer-->
    <div class="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
      <router-link :to="{ name: 'logout' }" class='btn btn-custom btn-primary w-100'>
        <span class='menu-icon'>
          <span class='svg-icon svg-icon-2'
          ><i class='fas fa-sign-out-alt'></i
          ></span>
        </span>
        <span class='btn-label'>Sign Out</span>
      </router-link>
    </div>
    <!--end::Footer-->
  </div>
</template>

<script>
import {sidebar}              from '@/app/extra/menu'
import {mapActions, mapState} from 'vuex'
import {TOGGLE_SIDEBAR}       from '@/app/constants/action-type'

export default {
  data() {
    return {
      sidebarItems: [],
      sidebar: [],
      isToggle: false,
    }
  },

  computed: {
    ...mapState(['user', 'menu', 'company', 'isSidebarOpen']),

    locationColor() {
      return this.user.current_location.color ?? '#1e1e2d'
    },

    sidebarStyle() {
      return this.locationColor
    },

  },
  methods: {
    ...mapActions([TOGGLE_SIDEBAR]),
    showChildren(sideBarIndex) {
      this.sidebar = this.sidebar.map((sidebar, index) => {
        if (index === sideBarIndex) {
          sidebar.showChildren = !sidebar.showChildren
        }
        // sidebar.showChildren = index === sideBarIndex;
        return sidebar
      })
    },


    toggleMobileMenu() {

    },
    toggleSidebar() {
      this.isToggle = !this.isToggle
      this[TOGGLE_SIDEBAR](this.isToggle)
      const sidebar = document.getElementById('kt_body')
      if (this.isToggle) {
        sidebar.setAttribute('data-kt-aside-minimize', 'on')
        //document.getElementById('kt_aside').classList.add('animating')
        /*  setTimeout((function() {
            document.getElementById('kt_aside').classList.remove('animating')
          }), 300)*/
      } else {
        sidebar.removeAttribute('data-kt-aside-minimize')
      }
    },
    /* hideDawer() {
       document.getElementById('kt_aside').classList.remove('drawer')
       document.getElementById('kt_aside').classList.remove('drawer-start')
       document.getElementById('kt_aside').classList.remove('drawer-on')
     }*/
  },

  mounted() {
    this.sidebarItems = sidebar()
    if (this.isToggle !== this.isSidebarOpen) {
      this.toggleSidebar();
    }
  },
}
</script>

<style scoped>
.dashboard_link{
  padding : 0px !important;
}
.dashboard_arrow{
  margin-left:-0.5rem !important;
}
</style>