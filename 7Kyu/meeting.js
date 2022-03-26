function meeting(x) {
  let isFound = null;

  x.forEach((element) => {
    if (element == "O") {
      isFound = x.indexOf(element);
    }
  });

  return isFound != null ? isFound : "None available!";
}

console.log(meeting(["X", "O", "X"]));

/*
    ======= OTHER SOLUTIONS =========

    function meeting(x){
         var idx = x.indexOf("O");
         return idx === -1 ? "None available!": idx
    }

*/

/*

    meeting = x => (x = x.join('').indexOf('O')) > -1 ? x : 'None available!'

*/
