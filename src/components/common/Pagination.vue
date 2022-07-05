<template>
    <div class="d-flex justify-content-between align-items-center flex-wrap" style="margin-right: 10px;"
         v-if="pagination.last_page !==1">
        <div class="d-flex flex-wrap py-2 mr-3">
            <a href="javascript:void(0);" @click.prevent="changePage(1)" class="btn btn-icon btn-sm btn-light mr-2 my-1"
               style="margin-right: 10px;" v-if="!firstPage" @click="changePage(1)">
                <i class="fa fa-angle-double-left  icon-xs"></i>
            </a>

            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light mr-2 my-1" v-if="!firstPage" @click="previousPage"  style="margin-right: 10px;">
                <i class="fa fa-angle-left icon-xs"></i>

            </a>

            <a href="javascript:void(0);" class="btn btn-icon btn-sm border-0 btn-light mr-2 my-1" style="margin-right: 10px;"
               v-for="(page,index) in pagesNumber"
               :class="{'active': page === pagination.current_page}" :key="index" @click="changePage(page)"> {{ page }}</a>


            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light mr-2 my-1" v-if="!lastPage" @click="nexPage"  style="margin-right: 10px;">
                <i class="fa fa-angle-right icon-xs"></i>
            </a>

            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light mr-2 my-1" v-if="!lastPage" style="margin-right: 10px;" @click="changePage(pagination.last_page)">
                <i class="fa fa-angle-double-right icon-xs"></i>
            </a>
        </div>
        <div class="d-flex align-items-center py-3">
            <div class="d-flex align-items-center mr-5">
                <div class="mr-2 text-muted">Rows:</div>
            </div>
            <select class="form-control form-control-sm font-weight-bold mr-4 border-0 bg-light" style="width: 75px;"
                    v-model="rowsPerPage" @change="rowChanged">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    </div>

</template>

<script>
export default {
    name: "Pagination",
    props: ['rows', 'pagination'],
    computed: {
        lastPage() {
            return this.pagination.current_page === this.pagination.last_page;

        },
        firstPage() {
            return this.pagination.current_page === 1;
        },
        showLeftArrow() {
            return this.pagination.current_page > 1;
        },
        showRightArrow() {
            return this.pagination.current_page < this.pagination.last_page;
        },
        pagesNumber() {
            if (!this.pagination.to) {
                return [];
            }
            let from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            let to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            let pagesArray = [];
            for (let page = from; page <= to; page++) {
                pagesArray.push(page);
            }
            return pagesArray;
        }
    },
    data() {
        return {
            rowsPerPage: 10,
            offset: 3,
        }
    },
    methods: {
        rowChanged() {
            console.log(this.rowsPerPage);
            this.$emit('rowChanged', this.rowsPerPage);
        },
        changePage(page) {
            if (this.pagination.current_page !== page) {
                this.$emit('pageChanged', page);
            }
        },
        nexPage() {
            this.changePage(this.pagination.current_page+1);
        },
        previousPage() {
            this.changePage(this.pagination.current_page-1);
        }
    },
    mounted() {
        this.rowsPerPage = this.pagination.per_page;
    }

}
</script>

<style scoped>

</style>