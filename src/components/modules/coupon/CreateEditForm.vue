<template>
  <div v-loading='loading' class='custom-loading-svg'>
    <form class='form' v-on:submit.prevent='formSubmitHandler' autocomplete='off'>
      <div class='row mb-5'>
        <div class='col-6'>
          <base-input
              v-model='formModel.label'
              label='Label'
              type='text'
              :required='true'
          ></base-input>
          <error-message v-if="errors.hasOwnProperty('label')"
                         :message='errors.label'></error-message>
        </div>
        <div class='col-6'>
          <base-input
              v-model='formModel.code'
              label='Code'
              type='text'
              :required='true'
          ></base-input>
          <error-message v-if="errors.hasOwnProperty('code')"
                         :message='errors.code'></error-message>
        </div>
      </div>
      <div class='row mb-5'>
        <div class='col-6'>
          <label class='required'>Discount Type</label>
          <el-select v-model="formModel.discount_type" style='width: 100%;' size="small" placeholder="Select">
            <el-option
                v-for="item in discountTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
          <error-message v-if="errors.hasOwnProperty('discount_type')" :message='errors.discount_type'></error-message>
        </div>

        <div class='col-6'>
          <label class='required'>Discount Amount</label>
          <el-input-number
              v-model='formModel.discount_amount'
              style='width: 100%;'
              controls-position="right"
              size="small"
          />
          <error-message v-if="errors.hasOwnProperty('discount_amount')"
                         :message='errors.discount_amount'></error-message>
        </div>
      </div>
      <div class='row mb-5'>
        <div class='col-6'>
          <label class='required'>Coupon Applied</label>
          <el-radio-group v-model='formModel.coupon_applied_on'>
            <el-radio :label="1">Product</el-radio>
            <el-radio :label="2">Categories</el-radio>
          </el-radio-group>
        </div>

        <div class='col-6'>
          <div class="block">
            <label class='required'>Expire</label>
            <el-date-picker
                v-model='formModel.expire_date'
                type="datetime"
                placeholder="Select date and time"
            />
          </div>
          <error-message v-if="errors.hasOwnProperty('expire_date')"
                         :message='errors.expire_date'></error-message>
        </div>
      </div>
      <div class="row mb-5">
        <div class='col-6'>
          <label class='required'>Products</label>
          <el-select v-model="formModel.products"  multiple style='width: 100%;' size="small" placeholder="Select">
            <el-option
                v-for="category in courseSchema"
                :key="category.label"
                :label="category.label"
                :value="category.value"
            />
          </el-select>
          <error-message v-if="errors.hasOwnProperty('products')" :message='errors.products'></error-message>
        </div>
        <div class='col-6'>
          <label class='required'>Categories</label>
          <el-select v-model="formModel.course_category_id" style='width: 100%;' size="small" placeholder="Select">
            <el-option
                v-for="category in categorySchema"
                :key="category.label"
                :label="category.label"
                :value="category.value"
            />
          </el-select>
          <error-message v-if="errors.hasOwnProperty('course_category_id')" :message='errors.course_category_id'></error-message>
        </div>
      </div>
      <div class="text-center">
        <el-button type="primary" @click="formSubmitHandler" :loading="loadingBtn">Submit</el-button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getCategories,
  getAllCourses, getCouponEdit
} from "@/app/api/course.api";

export default {
  props: {
    operationType: String,
    errors: Object,
  },

  data: () => ({
    formModel: {
      label: '',
      code: '',
      discount_type: '',
      discount_amount: 0,
      coupon_applied_on: 1,
      expire_date: '',
      products : [],
      status: 1,
    },
    loading: true,
    loadingBtn: false,
    discountTypes: [
      {value: 1, label: 'Fixed'},
      {value: 2, label: 'Percentage'},
      {value: 3, label: 'Applied product'},
      {value: 4, label: 'Applied categories'},
    ],
    courseSchema: [],
    categorySchema: []
  }),

  mounted() {
    this.$emit('mounted')
  },
  methods: {

    async initCreate() {
      let qs = '';
      let {data: {data: courses}} = await getAllCourses(qs);
      let {data: {data: categories}} = await getCategories(qs);
      this.courseSchema = courses;
      this.categorySchema = categories;
      this.loading = false;
    },

    async initEdit() {
      let qs = '';
      let couponId = this.$route.params.id
      let {data: {data: courses}} = await getAllCourses(qs);
      let {data: {data: categories}} = await getCategories(qs);
      let {data:{data:editObj}} = await getCouponEdit(couponId)
      this.formModel = Object.assign({}, editObj)
      this.courseSchema = courses;
      this.categorySchema = categories;
      this.loading = false;
    },

    async formSubmitHandler() {
      this.$emit('form-submitted', this.formModel)
    },

  }
}
</script>