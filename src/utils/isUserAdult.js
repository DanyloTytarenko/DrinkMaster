export const isUserAdult = (birthday) => {
  // 31556926 - секунд у році;
  // user.birthday - наразі не відображається, тому значення '01/11/2006'
  // підставлено у new Date('01/11/2006') вручну замість birthday;
  return Date.now() - new Date('01/11/2000').getTime() > 1000 * 31556926 * 18
    ? true
    : false;
};
