import httpClient from './client';

const DASHBOARD_END_POINT = 'dashboards';
const DEBTORS_END_POINT = 'debtors';


const getDebtorsData = () => httpClient.get(DASHBOARD_END_POINT + '/' + DEBTORS_END_POINT);


export {
    getDebtorsData,
}