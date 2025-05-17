"use strict";

// create callback function in that check given value is multiply by the 3 and 5 both 
// if multiply then show "Success" or else show custom error "Worng value select"

const value = 5;

function numberDetermine(value) {
  try {
    if (value % 3 === 0 || value % 5 === 0) {
      console.log("Success");
    } else {
      throw error();
    }
  } catch {
    console.log("Wrong value detected");
  }
}
numberDetermine(value);
