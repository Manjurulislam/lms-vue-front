window._ = require('lodash');
window._helper = require('./app/extra/helper').default;
import {createApp}          from 'vue'
import router               from './router';
import store                from "@/app/store";
import VueProgressBar       from "@aacassandra/vue3-progressbar";
import BaseInput           from "@/components/common/form/BaseInput";
import BaseTextArea         from "@/components/common/form/BaseTextArea";
import SubmitButton         from "@/components/common/buttons/SubmitButton";
import ErrorMessage         from "@/components/common/ErrorMessage";
import {progressBarOptions} from "@/app/extra/options";
import NotificationMixins   from "@/app/mixins/notifications";
// import {OnClickOutside}     from '@vueuse/components';
import Default              from '@/views/layouts/Default'
import VueSweetalert2       from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App                  from './App'
import ElementPlus          from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(VueProgressBar, progressBarOptions)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueSweetalert2)
app.component('default', Default)
app.component('error-message', ErrorMessage)
// app.component('on-click-outside', OnClickOutside)
app.component('base-input', BaseInput)
app.component('base-text-area', BaseTextArea)
app.component('submit-button', SubmitButton)

app.mixin(NotificationMixins)
app.mount('#app')

export default app
