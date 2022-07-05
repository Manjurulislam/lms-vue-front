<template>

  <guest>
    <!--begin::Wrapper-->
    <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
      <!--begin::Form-->
      <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="#" @submit.prevent="">
        <div class="text-center mb-10">
          <h1 class="text-dark mb-3">Sign In to LMS</h1>
        </div>
        <div class="fv-row mb-10">
          <label class="form-label fs-6 fw-bolder text-dark">Email</label>
          <input class="form-control form-control-lg form-control-solid" type="text" name="username"
                 v-model="form.email"
                 autocomplete="off"/>
          <!--end::Input-->
          <error-message v-if="errors.hasOwnProperty('email')" :message="errors.email"></error-message>
        </div>
        <div class="fv-row mb-10">
          <div class="d-flex flex-stack mb-2">
            <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
          </div>
          <input class="form-control form-control-lg form-control-solid" type="password" name="password"
                 v-model="form.password"
                 autocomplete="off"/>
          <error-message v-if="errors.hasOwnProperty('password')" :message="errors.password"></error-message>
        </div>
        <div class="text-center">
          <submit-button
              :loading="loading"
              loading-text="signing in"
              :block="true"
              :click="signIn"
              icon="fa fa-sign-in-alt"
              :class="`btn btn-lg btn-primary w-100 mb-5`"
          >Sign In
          </submit-button>
        </div>
        <!--end::Actions-->
      </form>
      <!--end::Form-->
    </div>
    <!--end::Wrapper-->

  </guest>
</template>

<script>
import Guest from "@/views/layouts/Guest";
import {emptyErrorMessages, serializeValidationMessage} from "@/app/extra/helper";
import {postUserLogin} from "@/app/api/auth.api";
import {USER_LOGGED_IN} from "@/app/constants/action-type";
import {mapActions} from "vuex";

export default {
  name: "Login",
  components: {
    Guest,
  },
  computed: {
    errors() {
      return this.errorMessages;
    },

  },
  data() {
    return {
      errorMessages: {
        email: '',
        password: ''
      },
      form: {
        email: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {

    ...mapActions([USER_LOGGED_IN]),

    signIn() {
      this.loading = true;
      this.errorMessages = emptyErrorMessages(this.errors);
      postUserLogin(this.form)
          .then((response) => {
            this.$notifySuccess(response.data.message);
            this[USER_LOGGED_IN](response.data.data);
            this.$router.push({name: 'dashboard'});
          })
          .catch((error) => {
            if (error.response.status === 422) {
              this.errorMessages = serializeValidationMessage(error.response.data.message);
              this.$notifyError('You have errors in your input');
            } else {
              this.$notifyError(error.response.data.message);
            }

          }).finally(() => {
        this.loading = false;
      });
       // console.log('hello');
    }
  },

}
</script>

<style scoped>

</style>