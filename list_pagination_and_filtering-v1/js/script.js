/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
by Jesse Gay
******************************************/

// Global variables.

let list = document.getElementsByClassName('student-item cf'); 
const itemsPerPage = 10;

// showPage() hides all students except the 10 I want to show.

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

// appendPageLinks() dynamically adds pagination links based on the number of students.

const appendPageLinks = (list) => {
   const pagesNeeded = list.length / itemsPerPage;
   // Create and add DIV for pagination links.
   const paginationDiv = document.createElement("div");
   paginationDiv.className = "pagination";
   const pageDiv = document.querySelector(".page");
   pageDiv.appendChild(paginationDiv);
   // Created and add UL to store pagination links.
   const paginationLinks = document.createElement("ul");
   paginationDiv.appendChild(paginationLinks);
   // Create and add A and LI for each page of students
   for (let i = 1; i < pagesNeeded + 1; i ++) {
      const pageLi = document.createElement("li");
      const pageA = document.createElement("a");
      pageA.text = i;
      pageA.href = '#'; 
      pageLi.appendChild(pageA); 
      // Add event listener to each A tag to call showPage(). E.g. clicking on link 2 diplays students 11-20.
      pageA.addEventListener("click", () => {
         showPage(list, i);
      // Remove active class from all anchors. Next I'll add active class only to link that was clicked.
         for (let i = 0; i <= pagesNeeded; i++) {
            const anchors = paginationLinks.getElementsByTagName('a');
            anchors[i].classList.remove('active');
         }
      // Add active class to link that was just clicked. Use classList.add() rather than className = for more flexibility and to allow for multiple classes.
         event.target.classList.add('active');
         }
      );
      // Append LI to paginationLinks UL.
      paginationLinks.appendChild(pageLi);  
   }
   
}

// Show first page.
showPage(list, 1);
// Add page links.
appendPageLinks(list);
// Add active class to first link upon inital load.
const pageATags = document.getElementsByTagName('a');
pageATags[0].classList.add('active');