"use strict";

const countIncomeTax = (income) => {
  let considerIncome = 0;
  let mainTax = 0;
  let cess = 0;
  let totalTax = 0;
  switch (true) {
    // less then 2.5 lac income they dont have income tax
    case income <= 250000:
      return { totalTax: 0 };
    case income > 250000 && income <= 500000:
      //   if income between 2.5 lac and 5 lac they have to pay tax 5% tax on income 2.5 to till 5 lac
      considerIncome = income - 250000;
      mainTax = (considerIncome * 5) / 100;
      cess = (mainTax * 4) / 100;
      totalTax = mainTax + cess;
      return { mainTax, cess, totalTax };
    case income > 500000 && income <= 750000:
      //   if income between 5 lac and 7.5 lac they have to pay tax 12500 for first 5 lac income after that 10% tax on another income till 7.5 lac
      considerIncome = income - 500000;
      mainTax = (considerIncome * 10) / 100 + 12500;
      cess = (mainTax * 4) / 100;
      totalTax = mainTax + cess;
      return { mainTax, cess, totalTax };
    case income > 750000 && income <= 1000000:
      //   if income between 7.5 lac and 10 lac they have to pay tax 37500 for first 7.5 lac income after that 15% tax on another income till 10 lac
      considerIncome = income - 750000;
      mainTax = (considerIncome * 15) / 100 + 37500;
      cess = (mainTax * 4) / 100;
      totalTax = mainTax + cess;
    case income > 1000000 && income <= 1250000:
      //   if income between 10 lac and 12.5 lac they have to pay tax 75000 for first 10 lac income after that 20% tax on another income till 12.5 lac
      considerIncome = income - 1000000;
      mainTax = (considerIncome * 20) / 100 + 75000;
      cess = (mainTax * 4) / 100;
      totalTax = mainTax + cess;
      return { mainTax, cess, totalTax };
    case income > 1250000 && income <= 1500000:
      //   if income between 12.5 lac and 15 lac they have to pay tax 125000 for first 12.5 lac income after that 25% tax on another income till 15 lac
      considerIncome = income - 1250000;
      mainTax = (considerIncome * 25) / 100 + 125000;
      cess = (mainTax * 4) / 100;
      totalTax = mainTax + cess;
      return { mainTax, cess, totalTax };
    case income > 1500000:
      // if income more than 1500000 then they have to pay tax 187500 for first 15 lac income then after 30 % tax on another income
      considerIncome = income - 1500000;
      mainTax = (considerIncome * 30) / 100 + 187500;
      cess = (mainTax * 4) / 100;
      totalTax = mainTax + cess;
      return { mainTax, cess, totalTax };
  }
};
console.log(countIncomeTax(500000));
