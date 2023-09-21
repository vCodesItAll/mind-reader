Vanessa language:

need to populate each page with an object index from an array
objects need keys and values
so lets write out the objects with keys and values for each page

p0, p1, p2, p3, p4, p5

break down pages into 

- array for 
- having buttons (1 rectangular and 1 round)
- an array/grid for symbols/emotes 1-99
- paragraphs
- header

so we will declare those things

recButton is the rectangular button
arrPage is an array that stores each page
arrSym is the array with 0-99 emotes
pageOneHeader is template for header names
pageOnePara is template for paragraph names


for each page load 
“setState” or “buildUserInterface” or “getData”


let's write sample keys and values for page 1.

# object for page 1:

header: "I can read your mind"

roundButtonString: "GO"

blueButtonString: null

caption1: null

caption2: null

roundButtonImage: null

roundButtonAction: load array index page 1

# object for page 2:

header: "Pick a number from 01 - 99"

roundButtonString: null

blueButtonString: "NEXT"

caption1: "when you have your number click next"

caption2: null

roundButtonImage: reload.png

roundButtonAction: load array index page 0

# object for page 3:

header: "Add both digits together to get a new number"

roundButtonString: null

blueButtonString: "NEXT"

caption1: "Ex: 14 is 1 + 4 = 5"

caption2: "click next to proceed"

roundButtonImage: reload.png

roundButtonAction: load array index page 0


# object for page 4:

header: "Subtract your new number from the original number"

roundButtonString: null

blueButtonString: "NEXT"

caption1: "Ex: 14 is 1 + 4 = 5"

caption2: "click next to proceed"

roundButtonImage: reload.png

roundButtonAction: load array index page 0

# object for page 5:

header: the array with symbols

roundButtonString: null

blueButtonString: "REVEAL"

caption1: "Find your new number."

caption2: "Note the symbol beside the number"

roundButtonImage: reload.png

roundButtonAction: load array index page 0


# object for page 6:

header: "the chosen symbol"

roundButtonString: null

blueButtonString: null

caption1: "Your symbol is:"

caption2: "the chosen symbol"

roundButtonImage: reload.png

roundButtonAction: load array index page 0







