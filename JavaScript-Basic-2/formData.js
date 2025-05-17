"use strict";

// sending form element
formElem.onsubmit = async (e) => {
    try 
    {
        e.preventDefault();
        let response = await fetch("./demo.json", {
            method: "POST",
            body: new FormData(formElem)
        });
        let result = await response.json();
        console.log(result.message);
    }
    catch(e) {
        console.log(e);
    }
};
