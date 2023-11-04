export const isUserAdult = (birthday) => {
  // 31556926 - секунд у році;
  return Date.now() - new Date(birthday).getTime() > 1000 * 31556926 * 18
    ? true
    : false;
};
