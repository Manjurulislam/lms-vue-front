let defaultDuration=4000;
import { ElNotification } from 'element-plus'
const NotificationMixins = {
        methods: {
            $notifySuccess(title = "Success", message, duration = defaultDuration) {
                ElNotification({
                    type: 'success',
                    duration,
                    title,
                    message
                });
            },
            $notifyWarn(title = 'Warning', message, duration = defaultDuration) {
                ElNotification({
                    type: 'Warning',
                    duration,
                    title,
                    message
                });
            },
            $notifyError(title = 'Error', message, duration = defaultDuration) {
                ElNotification({
                    type: 'Error',
                    duration,
                    title,
                    message
                });
            },
        }
}




export default NotificationMixins;
