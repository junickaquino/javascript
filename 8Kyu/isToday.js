function isToday(date) {
  //   const today = new Date();
  //   console.log(date.valueOf());
  //   console.log(today.valueOf());
  //   console.log(Date.now());
  //   if (+today === +date) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // ====================
  //   return Date.now() === date.valueOf() ? true : false;
  // ====================
  //   const today = new Date();
  //   if (today.getMonth() === date.getMonth()) {
  //     if (today.getDate() === date.getDate()) {
  //       if (today.getFullYear() === date.getFullYear()) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //   }
  // =======================
  return new Date().toDateString() === date.toDateString();
}

const today = new Date();
console.log(isToday(today));
