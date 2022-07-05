import store from '@/app/store';
import {isEmpty, isNull} from 'lodash';
import {getCookie} from '@/app/extra/helper';

export default function auth({next}) {

    const token = store.state.token || getCookie('lms_token') || null;
    if (isEmpty(token) || isNull(token)) {
        //console.log('router to login', route, to);
       return  next({name: 'login'});
    }

   return  next();

}
