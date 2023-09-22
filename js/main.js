let arr = [
    { header:   "I can read your mind",  
    roundButtonString:  "GO" },
    //   roundButtonAction: "" },


    { header: "Pick a number from 01 - 99" ,
     blueButtonString: "NEXT",
    caption1:"when you have your number click next" , 
    roundButtonString: "Start over" },
//      roundButtonAction: "load array index page 0" },
    


    { header: "Add both digits together to get a new number",
     blueButtonString: "NEXT" , 
    caption1: "Ex: 14 is 1 + 4 = 5" ,
    caption2: "click next to proceed" ,
    roundButtonString: "Start over" },
    // roundButtonAction:" load array index page 0 "},



//     { header: "Subtract your new number from the original number" ,

//      blueButtonString: "NEXT" , 
//      caption1: "Ex: 14 is 1 + 4 = 5" ,
//      caption2: "click next to proceed" ,
//      roundButtonImage: reload.png ,
//      roundButtonAction: "load array index page 0" },

//  {
//     header: symbolArr,

//     blueButtonString: "REVEAL", 
//     caption1: "Find your new number.",
//     caption2: "Note the symbol beside the number",
//     roundButtonImage: reload.png,
//     roundButtonAction: "load array index page 0",

// },

//  {
//     header: chosenSymbol,

//     caption1: "Your symbol is:",
//     caption2: chosenSymbol,
//     roundButtonImage: reload.png,
//     roundButtonAction: "load array index page 0",

// }
 ];

// populates the elements 
let header = document.getElementById("header");
header.textContent = arr[3].header; 

let roundButtonString = document.getElementById("roundButtonString");
roundButtonString.textContent = arr[1].roundButtonString;

let blueButtonString = document.getElementById("blueButtonString");
blueButtonString.textContent = arr[1].blueButtonString;

let caption1 = document.getElementById("caption1");
caption1.textContent = arr[1].caption1;


// page 1 elements appear
// page 2 elements appear



// 1. generate a range of number 0-99
// check resource channel
// 2. assign random symbol to each number (qty-9)
// 3. return symbol divisible by 9

// roundButtonAction - on first page loads page 2, all other times loads page 1. so if else statement.
// if state is page 1 then set state to page 2 else load state for page 1


// setting state

// increase index and make sure everything renders hardcoded
// how to increment automatically

