/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let Sections=Array.from(document.querySelectorAll("section"));
let navList=document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavBar(){

    for (const section of Sections) {
        let li=document.createElement("li");
        li.innerHTML=`
        <a class="menu__link" href="#${section.id}" data-nav="${section.id}">${section.dataset.nav}</a>
        `;
        navList.appendChild(li);
    }
}

// this is the function that add and remove the active class
function addActiveSection(){
    Sections.forEach(section=>{
       let sectionTop=section.getBoundingClientRect().top;
        if(sectionTop>=0&&sectionTop<=250)
        {
            // if I'm exist in a section , I'd remove all the active class 
            // from the other sections and then I'll add the active one into it
            Sections.forEach(sec=>{
                sec.classList.remove("your-active-class");
            })
            section.classList.add("your-active-class");
        }
    })
}

// this is the function that goes to the section 
function scrollAnchor(e){
    e.preventDefault();// this prevents the default behavior
    if(e.target.dataset.nav){
        document.querySelector(`#${e.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});// this code targets the section and goes to it smoothly
    }

    
}
function hideNav(){
    
}
/**
 * End Helper Functions
 * 
*/

    // Start calling functions 

    createNavBar();

    document.addEventListener("scroll",addActiveSection);


    navList.addEventListener("click",scrollAnchor);

    hideNav();

    // End calling functions 




