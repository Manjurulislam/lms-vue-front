import httpClient from './client';


const COURSE_END_POINT = 'courses';

const COUPON_END_POINT = 'coupons';
const COUPON_SAVE_END_POINT = 'create';
const COUPON_EDIT_END_POINT = 'details';
const COUPON_UPDATE_END_POINT = 'update';
const PRODUCT_END_POINT = 'get';
const PRODUCT_CATEGORY_END_POINT = 'categories';


//Course
const getCourses = (qs) => httpClient.get(COURSE_END_POINT + qs);
const getCategories = (qs) => httpClient.get(COURSE_END_POINT + '/' + PRODUCT_CATEGORY_END_POINT + qs);
const getAllCourses = (qs) => httpClient.get(COURSE_END_POINT + '/' + PRODUCT_END_POINT + qs);

const getCoupons = (qs) => httpClient.get(COUPON_END_POINT + qs);
const postCouponCreate = (payload) => httpClient.post(COUPON_END_POINT + '/' + COUPON_SAVE_END_POINT, payload);
const getCouponEdit = (id) => httpClient.get(COUPON_END_POINT + '/' + id + '/' + COUPON_EDIT_END_POINT);
const postCouponUpdate = (payload, quotationId) => httpClient.post(COUPON_END_POINT + '/' + quotationId + '/' + COUPON_UPDATE_END_POINT, payload);


export {
    getCourses,
    getCategories,
    getCoupons,
    postCouponCreate,
    getCouponEdit,
    postCouponUpdate,
    getAllCourses
}