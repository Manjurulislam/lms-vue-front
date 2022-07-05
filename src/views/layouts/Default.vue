<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <!--begin::Aside-->
      <Sidebar></Sidebar>
      <!--end::Aside-->
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <!--begin::Header-->
        <Header></Header>
        <!--end::Header-->
        <!--begin::Content-->
        <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
              <router-view></router-view>
        </div>

        <div class="footer bg-white py-2 d-flex flex-lg-column" id="kt_footer">
          <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div class="text-dark mx-auto">
              <span class="text-muted fw-bold me-1">LMS</span>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
  <el-backtop :bottom="100">
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
     <i class="fas fa-arrow-up" style="color: #1989fa;"></i>
    </div>
  </el-backtop>
</template>

<script>
import Sidebar from '@/components/common/Sidebar'
import Header from '@/components/common/Header'

export default {
  name: "Default",
  data: () => ({

  }),
  components: {
    Sidebar,
    Header
  },

  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '/assets/js/plugins.bundle.js')
    recaptchaScript.setAttribute('src', '/assets/js/scripts.bundle.js')
    document.body.appendChild(recaptchaScript)
  },
}
</script>

<style scoped>

</style>