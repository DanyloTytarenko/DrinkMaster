import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ValidMessage = (statusCode) => {
  Notify.init({
    position: 'center-top',
    useIcon: false
  })
        switch(statusCode) {
          case 400:
            return Notify.failure('Something went wrong. Please try again later.',)
          case 401:
            return Notify.failure('Enter the correct username and password.',);
          case 404:
            return Notify.failure('Something went wrong. Please try again later.',);
          case 409:
            return Notify.failure('Email already in use.',)
          default:
            return null
        }
}