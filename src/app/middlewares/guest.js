import store from '@/app/store';
import {isEmpty, isNull} from 'lodash';
import {getCookie} from '@/app/extra/helper';

export default function guest({next}) {

    const token = store.state.token || getCookie('lms_token') || null;
    if (!isEmpty(token) && !isNull(token)) {
        return  next({name: 'dashboard'});
    }

    return  next();

}
