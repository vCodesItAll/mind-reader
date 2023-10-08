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

    { header: "",
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

// local storage state
let state = parseInt(localStorage.getItem("mindReaderState")) || 0;


function generateNumberList() {
    // check if current state is page 5
    if (state === 4) {
        const numberList = document.getElementById("numberList");
       
        for (let i = 0; i < 100; i++) {
            const number = i.toString().padStart(2, "0"); // 2 digit format
            const iconNumber = i % 10; // end digit matches icon
            const iconClass = `bi bi-emoji-${iconNumber}`;

            const listItem = document.createElement("span");
            listItem.className = "container";
            listItem.innerHTML = `<span class="${iconClass}"></span> ${number}`;
            numberList.appendChild(listItem);
        }
    } 
}

// Function to update page by current state
function updatePageContent(){
    const page = arr[state];
    const header = document.getElementById("header");
    const blueButton = document.getElementById("blueButtonString");
    const caption1 = document.getElementById("caption1");
    const caption2 = document.getElementById("caption2");
    const roundButton = document.getElementById("roundButtonString");

    header.textContent = page.header;
    blueButton.textContent = page.blueButtonString;
    caption1.textContent = page.caption1 || "";
    caption2.textContent = page.caption2 || "";
    roundButton.textContent = page.roundButtonString;
}

// Render event listener for blue button
document.getElementById("blueButtonString").addEventListener("click", () => {
    state++;
    if (state >= 5 ) {
        state = 0;
    }
    localStorage.setItem("mindReaderState", state);
    generateNumberList();
    updatePageContent();
});

// Render event listener for round button
document.getElementById("roundButtonString").addEventListener("click", () => {
    if (state === 0 ) {
        state = 1;
    } else {
        state = 0;
    }
    localStorage.setItem("mindReaderState", state);
    generateNumberList();
    updatePageContent();
});

generateNumberList();
updatePageContent();

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

