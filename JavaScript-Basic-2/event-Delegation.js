"use strict";

// action in markup
class Menu{
    constructor(elem) // elem = <div id="menu">
    {
        this._elem=elem;
        elem.onclick=this.onClick.bind(this); // this.onClick(this) will call onClick function
    }
    save() // function name based on data-action
    {
        console.log("Saved");
    }
    load() // function name based on data-action
    {
        console.log("Loaded");
    }
    search() // function name based on data-action
    {
        console.log("searched");
    }
    onClick(event)
    {
        let action = event.target.dataset.action; // select targeted tag data-action
        console.log(event);
        if(action)
        {
            this[action](); // if i want particular value then use [] and it will that function is available or not
        }
    }
}
new Menu(menu); // menu = id

