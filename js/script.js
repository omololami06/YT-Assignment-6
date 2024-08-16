//! search bar activation

/* 
  > select required tags
  > add require event listener
  > get the typed input text in real time
  > get the employee text
  > convert input text and employee text to lower
  > compare the typed input with the employee text
  > if there is a match, show the tasks having the typed text else hide
   
*/

let searchInput = document.querySelector(".search input");

let allEmployee = document.querySelectorAll(".employee li");

searchInput.addEventListener("keyup", (e) => {
  let lowerInputText = String(searchInput.value).toLowerCase();

  allEmployee.forEach((li) => {
    let lowerEmployeeText = String(li.textContent).toLowerCase();
    if (lowerEmployeeText.includes(lowerInputText)) {
      li.style.display = "grid";
    } else {
      li.style.display = "none";
    }
  });
});
