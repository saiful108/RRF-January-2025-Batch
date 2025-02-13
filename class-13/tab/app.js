
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");


function Tab(event) {
    console.log(event.target.getAttribute("data-tab"));
    
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

   
    const targetTab = event.target.getAttribute("data-tab");

    
    event.target.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
}


tabButtons.forEach(button => {
    button.addEventListener("click", Tab);
});
