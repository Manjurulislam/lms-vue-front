<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ pageTitle }}</h3>
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
          <el-table-column label="Title" prop="title"></el-table-column>
          <el-table-column label="Price" prop="price" width="100"></el-table-column>
          <el-table-column label="Category" prop="category.name"></el-table-column>
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
  getCourses
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
      return "Courses";
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
      getCourses(qs).then(({data}) => {
        this.schemaList = data.data;
        this.pagination = data.meta;
        this.loading = false;
      }).catch(function (error) {
        this.$message({type: 'error', message: error});
      });
    },



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
