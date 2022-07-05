<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ pageTitle }}</h3>
        <div class="card-toolbar">
          <router-link
              :to="{ name: `lsm.coupon.create` }"
              type="button"
              class="btn btn-sm btn-light-primary"
          >
            <i class="fas fa-plus-circle fs-4 me-2"></i> Add New
          </router-link>
        </div>
      </div>
      <div class="card p-3 border-bottom">
        <div class="row"> 
          <div class="col-md-12">
            <el-input placeholder="Search..." v-model="searchParam.keyword" v-on:input="debounceInput"></el-input>
          </div>
        </div>
      </div>

      <div class="card-body">
        <el-table
            :data="schemaList"
            style="width: 100%"
            class="custom-color"
            v-loading="loading"
            element-loading-background="rgb(0 0 0 / 0%)"
        >


          <el-table-column width="40">
            <template #default="scope">
              <el-popover effect="light" trigger="click" placement="bottom">
                <template #default>
                  <div>
                    <el-tooltip content="'Edit'">
                      <el-button
                          type="primary"
                          size="mini"
                          icon="el-icon-edit"
                          @click="handleEdit(scope.row)"
                      ></el-button>
                    </el-tooltip>
                  </div>
                </template>
                <template #reference>
                  <div class="name-wrapper">
                    <i class="el-icon-s-grid el-icon--right"></i>
                  </div>
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="Label" prop="label"></el-table-column>
          <el-table-column label="Code" prop="code"></el-table-column>
          <el-table-column label="Applied" prop="coupon_applied_on_label"></el-table-column>
          <el-table-column label="Discount Type" prop="discount_type_label"></el-table-column>
          <el-table-column label="Expire" prop="expire_date"></el-table-column>
        </el-table>
      </div>

      <div class="card-footer" v-if="pagination.total > 20">
        <div class="text-center">
          <el-pagination
              v-model:currentPage="pagination.itemPerPage"
              @current-change="handleCurrentChange"
              background
              layout="prev, pager, next"
              :page-size="parseInt(pagination.per_page)"
              :total="pagination.total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {
  getCoupons
} from "@/app/api/course.api";
import {debounce, isEmpty} from "lodash";

export default {
  data() {
    return {
      schemaList: [],
      pagination: {
        itemPerPage: 30,
        total: 0,
      },
      searchParam: {
        keyword: "",
        dateRange: ''
      },
      search: "",
      rows: 30,
      page: 1,
      keyword: "",
      dateSchema: "",
      debounce: null,
      loading: true,
    };
  },

  computed: {
    pageTitle() {
      return "Coupons";
    },
  },

  methods: {

    handleCurrentChange(val) {
      this.page = val;
      this.getDataFromApi();
    },

    debounceInput: debounce(function (e) {
      this.searchParam.keyword = e;
      this.getDataFromApi();
    }, 500),


    dateFilter() {
      let date = this.searchParam.dateRange;
      this.dateSchema = !isEmpty(date) ? JSON.stringify(date) : '';
      this.getDataFromApi()
    },

    getDataFromApi() {
      let dateFilter = this.dateSchema;
      let keyword = this.searchParam.keyword;
      let qs = `?page=${this.page}&rows=${this.rows}&keyword=${keyword}&dateRange=${dateFilter}`;
      getCoupons(qs).then(({data:{data}}) => {

        this.schemaList = data.data;
        this.pagination = data;
        this.loading = false;
      }).catch(function (error) {
        this.$message({type: 'error', message: error});
      });
    },

    handleEdit(row){
      this.$router.push({
        name: "lsm.coupon.edit",
        params: {id: row.id},
      });
    }


  },

  mounted() {
    this.getDataFromApi();
  },
}
</script>

<style>
.el-date-editor .el-range-separator {
  width: 8% !important;
}
</style>
