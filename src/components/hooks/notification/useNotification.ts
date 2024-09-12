import { notification } from 'antd';

import {
    ERROR_DESC,
    ERROR_TITLE,
    NOTIFICATION_TYPES,
    NotificationType,
} from '../../../constants/notificationMessages';

const useNotification = () => {
    const showNotification = (
        message: string = ERROR_TITLE,
        description: string = ERROR_DESC,
        type: NotificationType = NOTIFICATION_TYPES.error
    ): void => {
        notification.open({
            message,
            description,
            type,
        });
    };

    return [showNotification];
};

export default useNotification;
