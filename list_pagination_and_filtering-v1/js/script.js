/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

let list = document.getElementsByClassName('student-item cf'); 
const itemsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   for (let i = 0; i < list.length; i ++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';   
      }
   }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   const pagesNeeded = list.length / itemsPerPage;
   // Create a d​iv,​ give it the “pagination” class, and append it to the .page div
   const paginationDiv = document.createElement("div");
   paginationDiv.className = "pagination";
   const pageDiv = document.querySelector(".page");
   pageDiv.appendChild(paginationDiv);
   // Add a u​l​ to the “pagination” div to store the pagination links
   const paginationLinks = document.createElement("ul");
   paginationDiv.appendChild(paginationLinks);
   //for​ every page, add l​i​ and ​a​ tags with the page number text
   for (let i = 1; i <= pagesNeeded +1; i ++) {
      const pageLi = document.createElement("li");
      const pageA = document.createElement("a");
      pageA.text = i;
      // pageA.href = i; // FIXME: This breaks the app. Why do it? TH instructions say to add it. Incorrect instructions?
      pageLi.appendChild(pageA); 
      //Add an event listener to each a​ ​ tag. When they are clicked call the showPage function to display the appropriate page
      pageA.addEventListener("click", () => {
         showPage(list, i);
      //6. Loop over pagination links to remove active class from all anchors
         for (let i = 0; i <= pagesNeeded; i++) {
            const anchors = paginationLinks.getElementsByTagName('a');
            anchors[i].classList.remove('active');
         }
      //7. Add the active class to the link that was just clicked. You can identify that clicked link using ​event.target   
         event.target.classList.add('active');
         }
      );
      // Append <li> to <ul>
      paginationLinks.appendChild(pageLi);  
   }
   
}

// Show first page
showPage(list, 1);
// Add page links
appendPageLinks(list);
// Add active class to first link upon inital load
const pageATags = document.getElementsByTagName('a');
pageATags[0].classList.add('active');



// Remember to delete the comments that came with this file, and replace them with your own code comments.