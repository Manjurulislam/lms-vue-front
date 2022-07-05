import httpClient from './client'

const USER_END_POINT = 'user'
const LOCATION_END_POINT = 'locations'
const INFO_END_POINT = 'info'
const CURRENT_LOCATION_END_POINT = 'current-location'
const UPDATE = 'update'

const getUserLocations = (qs) =>
    httpClient.get(USER_END_POINT + '/' + LOCATION_END_POINT + qs)
const updateUserLocation = (locationId) =>
    httpClient.post(
        USER_END_POINT +
            '/' +
            CURRENT_LOCATION_END_POINT +
            '/' +
            locationId +
            '/' +
            UPDATE
    )
const getUserInfo = () => httpClient.get(USER_END_POINT + '/' + INFO_END_POINT)

export { getUserLocations, updateUserLocation, getUserInfo }
