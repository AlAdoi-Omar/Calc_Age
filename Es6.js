// "use strict";
// //// declaration Varibles :
// let userInput = document.getElementById("date");
// userInput.max = new Date().toISOString().split("T")[0];
// let result = document.getElementById("textResult");

// ////  Activate button Enter :
// userInput.addEventListener("keydown", function (Enter) {
//   if (Enter.key == "Enter") {
//     age();
//   }
// });

// //// Function main :
// function age() {
//   //// Current birthdate
//   let birthday = new Date(userInput.value);
//   let d1 = birthday.getDate();
//   let m1 = birthday.getMonth() + 1;
//   let y1 = birthday.getFullYear();

//   //// Current date
//   let Today = new Date();
//   let d2 = Today.getDate();
//   let m2 = Today.getMonth() + 1;
//   let y2 = Today.getFullYear();

//   //////  Check Conditions ==>  Calc Age
//   let d, m, y;
//   y = y2 - y1;
//   if (m2 >= m1) {
//     m = m2 - m1;
//   } else {
//     y--;
//     m = 12 + m2 - m1;
//   }
//   if (d2 >= d1) {
//     d = d2 - d1;
//   } else {
//     m--;
//     d = getDaysInMonth(y1, m1) + d2 - d1;
//   }

//   // Number of days in the month
//   function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
//   }

//   /// OutPut
//   result.innerHTML = `Your Age is <span>${y} </span> Years, <span> ${m} </span> Months, <span> ${d}</span> Days`;
// }

/// ChatGPT  : : can you refactor this code and make it better and shorter

"use strict";

// تعريف المتغيرات
const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.getElementById("textResult");

// إضافة استماع لحدث الضغط على Enter
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculateAge();
  }
});

// دالة حساب العمر
function calculateAge() {
  const birthday = new Date(userInput.value);
  const today = new Date();
  const ageInMilliseconds = today - birthday;
  const ageDate = new Date(ageInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1; // تصحيح للأيام

  result.innerHTML = `Your Age is <span>${years} </span> Years, <span>${months} </span> Months, <span>${days}</span> Days`;
}
