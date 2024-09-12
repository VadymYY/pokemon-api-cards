export const POKEMON_404 = 'Pokemon not found!';
export const POKEMON_404_DESC = 'Pokemon does not exist with this name. Please try again!';

export const ERROR_TITLE = 'Error!';
export const ERROR_DESC = 'Something went wrong. Please try again!';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const NOTIFICATION_TYPES: { [key in NotificationType]: NotificationType } = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
};
