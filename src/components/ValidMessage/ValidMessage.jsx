import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ValidMessage = (statusCode) => {
  Notify.init({
    width: 'fit-content',
    fontFamily: 'Manrope',
    fontSize: '16px',
    textAlign: 'center',
    position: 'center-top',
    useIcon: false,
    borderRadius: "18px",
    failure: {
      background: '#161F37',
textColor: '#ff5549',
},
  })
  switch (statusCode) {
    case 400:
      return Notify.failure('Something went wrong. Please try again later.',)
    case 401:
      return Notify.failure('Enter the correct data.',);
    case 404:
      return Notify.failure('Email not registered.',);
    case 409:
      return Notify.failure('Email already in use.',);
    case 500:
      return Notify.failure('Something went wrong. Please try again later.')
    default:
      return null
  }
}