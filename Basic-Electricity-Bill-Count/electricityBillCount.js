"use strict";

// electricity bill calculation
const billCounting = (unitUse) => {
  switch (true) {
    // if unit use less then 100 then per unit cost 10
    case unitUse <= 100:
      return unitUse * 10;
    // if unit use less then 200 and more then 100 then first 100 unit per unit cost 10 and after that per unit cost 15
    case unitUse > 100 && unitUse <= 200:
      return (unitUse - 100) * 15 + 1000;
    // if unit use more then 200 then first 100 unit per unit cost 10 after that till 200 unit per unit cost 15 then after per unit cost 20
    case unitUse > 200:
      return (unitUse - 200) * 20 + 2500;
  }
};

console.log(billCounting(90));
