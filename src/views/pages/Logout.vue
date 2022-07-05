<template>
    <template>

    </template>
</template>

<script>
import {postLogout} from "@/app/api/auth.api";
import {mapActions} from 'vuex';
import {USER_LOGGED_OUT} from '@/app/constants/action-type';

export default {
    name: "Logout",
    methods: {
        ...mapActions([USER_LOGGED_OUT]),
        logoutUser() {
            postLogout()
                .then()
                .catch()
                .finally(() => {
                    this[USER_LOGGED_OUT]();
                    this.$notifySuccess('Logged out successfully.');
                    this.$router.push({'name': 'login'});
                });
        }
    },
    async mounted() {
        await this.logoutUser();
    }

}
</script>

<style scoped>

</style>