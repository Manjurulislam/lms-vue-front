<template>
  <div class="post d-flex flex-column-fluid">
    <div id="kt_content_container" class="container">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ pageTitle }}</h3>
          <div class="card-toolbar">
            <router-link
                :to="{ name: `lsm.coupon.list` }"
                type="button"
                class="btn btn-sm btn-light-primary"
            >
              <i class="fas fa-arrow-left fs-4 me-2"></i> Back
            </router-link>
          </div>
        </div>
        <div class="card-body">
          <create-edit-form
              v-if="isEditMode"
              v-on:mounted="initCreate"
              v-on:form-submitted="store"
              operation="create"
              :errors="errors"
              ref="createForm"
          ></create-edit-form>
          <create-edit-form
              v-else
              v-on:mounted="initEdit"
              v-on:form-submitted="update"
              operation="edit"
              :errors="errors"
              ref="editForm"
          ></create-edit-form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CreateEditForm from "@/components/modules/coupon/CreateEditForm";
import {
  postCouponCreate, postCouponUpdate
} from "@/app/api/course.api";
import {
  emptyErrorMessages,
  serializeValidationMessage
} from "@/app/extra/helper";


export default {
  components: {
    CreateEditForm
  },

  data:()=>({
    errorMessages: {
      label: '',
      code: '',
      coupon_applied_on: '',
      discount_type: '',
      discount_amount: '',
      expire_date: '',
    },
  }),

  computed: {
    pageTitle() {
      return this.isEditMode ? "Add New" : 'Edit';
    },
    isEditMode() {
      return this.$route.name === "lsm.coupon.create";
    },
    errors() {
      return this.errorMessages;
    },
  },

  methods: {
    initCreate() {
      this.$refs.createForm.initCreate();
    },

    initEdit() {
      this.$refs.editForm.initEdit();
    },

    store(formData) {
      this.errorMessages = emptyErrorMessages(this.errors);
      postCouponCreate(formData).then(({data}) => {
        console.log(data)
        this.$notifySuccess('Success','Successfully create coupon');
        this.$router.push({name: "lsm.coupon.list"});
      }).catch((error) => {
        if (error.response.status === 422) {
          this.errorMessages = serializeValidationMessage(error.response.data.message);
          this.$notifyError('Error', 'Required field missing')
        } else {
          this.$notifyError('Error', 'Something went wrong')
        }
      });
    },

    update(coupon) {
      this.errorMessages = emptyErrorMessages(this.errors);
      postCouponUpdate(coupon, coupon.id).then(({data: {message}}) => {
        console.log(message)
        this.$notifySuccess('Success','Successfully update coupon');
        this.$router.push({name: "lsm.coupon.list"});
      }).catch((error) => {
        if (error.response.status === 422) {
          this.errorMessages = serializeValidationMessage(error.response.data.message);
          this.$notifyError('Error', 'Required field missing')
        } else {
          this.$notifyError('Error', 'Something went wrong')
        }
      });
    }
  },
};
</script>

<style scoped></style>
