# PSEUDOCODE SESSION
 SMAC (SPECIFIC, METHODICAL, AND CONSISTENT) LIST

1. UNDERSTOOD THE PROBLEMS
2. BREAK THE ISSUE INTO SMALLER PARTS
3. WIREFRAMES/ATOMIC
4. STATE ?
    DATA STRUCTURES
    ALGORITHMS
5. P-F-O

# Understanding the problem
- navigation 

    - forward and back

    - needs to be part of state instead of hyperlinks

    - think of as one page but the elements change conditionally

    - state holds the information and makes it so anytime we change state it re-renders the view

    - user clicks the buttons

    - go button must reset the emotes and go next

    - last page push information into state so when you get there you have that information to use

# State (data structures and algorithms)

- initialize event listeners
- 6 elements in an array to initialize the pages
- each page is a state

## procedural

- initialize array
- initialize index
- instantiate whole new object for each page?

