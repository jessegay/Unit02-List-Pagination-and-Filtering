/*

Create your global variables
This project can be completed with just two global variables
Create a variable to store the student list item elements in the student list.
Pro Tip: Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements.
Create a variable to store the number of items to show on each “page”, which for this project, is 10.

// Global variables*/
let studentList = document.getElementsByClassName('student-item cf'); // I think this will return the items rather than the ul.
const itemsPerPage = 10

/*
Create a function to hide all the students except for the ten you want displayed on a given page.
This function should have two parameters:
The list parameter to represent the actual list of students that you’ll pass in as an argument later when you call this function.
The page parameter to represent the page number that you’ll pass in as an argument later when you call this function.

https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
*/
function hide (list, page) {
    if criteria are met 
        student <li> style.display = ''; //I think this will default to the style specified in the CSS
    else   
        otherStudents style.display = 'none';

    //Should this be if/else? Or do it in 2 steps? I.e. hide all, then show only <li> in pageList?
    //Or add class visible to items in list, then if class === list, display, else hide

    
}





















