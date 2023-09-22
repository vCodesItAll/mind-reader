let arr = [

    // page one
    { header:   "I can read your mind",  
    roundButtonString:  "GO" },
    //   roundButtonAction: "" },

    // page two
    { header: "Pick a number from 01 - 99" ,
     blueButtonString: "NEXT",
    caption1:"when you have your number click next" , 
    roundButtonString: "Start over" },
//      roundButtonAction: "load array index page 0" },
    

    // page three
    { header: "Add both digits together to get a new number",
     blueButtonString: "NEXT" , 
    caption1: "Ex: 14 is 1 + 4 = 5" ,
    caption2: "click next to proceed" ,
    roundButtonString: "Start over" },
    // roundButtonAction:" load array index page 0 "},


    // page four
    { header: "Subtract your new number from the original number" ,
     blueButtonString: "NEXT" , 
     caption1: "Ex: 14 is 1 + 4 = 5" ,
     caption2: "click next to proceed" ,
     roundButtonString: "Start over" },
//      roundButtonAction: "load array index page 0" },


    // page five

    { header: "Yo do me a favor and picture a sick buc-ee picture right here: picture your number right here",
    blueButtonString: "REVEAL", 
    caption1: "Find your new number.",
    caption2: "Note the symbol beside the number",
    roundButtonString: "Start over" },
//     roundButtonAction: "load array index page 0",

    // page six
    { header: "pls clap and cheer",
    caption1: "Your symbol is:",
    caption2: "BUC-EE!!!!!! LET'S GOOOOOOOOOOOOO *airhorns blare*",
    roundButtonString: "Start over"}
//     roundButtonAction: "load array index page 0",

// }
 ];
// state represents each page
let state = 0;

document.getElementById("roundButtonString").addEventListener("click", state++);
document.getElementById("blueButtonString").addEventListener("click", state++);

// populates the elements 
function init() {
    
    let header = document.getElementById("header");
    header.textContent = arr[state].header; 

    let roundButtonString = document.getElementById("roundButtonString");
    roundButtonString.textContent = arr[state].roundButtonString;

    let blueButtonString = document.getElementById("blueButtonString");
    blueButtonString.textContent = arr[state].blueButtonString;

    let caption1 = document.getElementById("caption1");
    caption1.textContent = arr[state].caption1;

    let caption2 = document.getElementById("caption2");
    caption2.textContent = arr[state].caption2;
};


/* to load pages
comment out all the lines immediately after each let statement above
if else statement


make the initial round button and the following blue buttons fetch all the objects arr[i+1]
are you starting on page one?
    true - roundbutton fetches all objects from arr[1]
    false - are you on page 2?
        bluebutton fetches all objects from arr[2]
            false - are you on page 3?
                bluebutton fetches all objects from arr[3]
                    false - are you on page 4?
                        bluebutton fetches all objects from arr[4]
                            false - fetch all objects from arr[5]



*/



// page 1 elements appear
// page 2 elements appear
// page 3 elements appear
// page 4 elements appear
// page 5 elements


// for symbol generation
// 1. generate a range of number 0-99
// check resource channel
// 2. assign random symbol to each number (qty-9)
// 3. return symbol divisible by 9

// roundButtonAction - on first page loads page 2, all other times loads page 1. so if else statement.
// if state is page 1 then set state to page 2 else load state for page 1


// setting state
// increase index and make sure everything renders hardcoded
// how to increment automatically

