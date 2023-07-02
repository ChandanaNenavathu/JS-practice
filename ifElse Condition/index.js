const hour = new Date().getHours(); 

if (hour > 18) {
  document.getElementsByClassName("date")[0].innerHTML =`${"Good day"}`;
  } else {
    document.getElementsByClassName("dates")[0].innerHTML =`${"Good evening"}`;
  }

let age = 18;
if(age > 18) {
  document.getElementsByClassName("age")[0].innerHTML =`${"Qualifies for driving"}`;
}
  else {
  document.getElementsByClassName("ages")[0].innerHTML =`${"Does not qualify for driving"}`;
}

