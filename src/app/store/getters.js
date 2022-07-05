export default {
    getUser(state) {
        return state.user
    },

    getUserAccess(state) {
        return state.access
    },

    getCompany(state) {
        return state.company
    },

    getLogo(state) {
        return state.company.logo
    },

    getState(state) {
        return state
    },
}
