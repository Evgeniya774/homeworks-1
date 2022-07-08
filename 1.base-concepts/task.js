"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  switch (true) {
    case d < 0:
      return [];
    case d === 0:
      return [-b / (2 * a)];
    case d > 0:
      return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   }

  const S = Number(amount) - Number(contribution);
  const n = monthDiff(new Date(), date);
  const P = +percent / 12;
  const monthyPay =  S * (P + (P / (((1 + P) ** n) - 1)));
  const totalPay = +((monthyPay * n).toFixed(2));
  console.log(totalPay);

  return totalPay;
}
