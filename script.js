import projects from "/content.js"

//JS code for my portfolio page.
//querySelectorAll enables us to use CSS style selectors
let navigationItems = document.querySelectorAll("#Navigation a");

//Initial page selected when page is first loaded.
navigationItems[0].style.backgroundColor = "rgba(68, 55, 187, 0.781)";
navigationItems[0].style.color = "White";

let previousEventTarget;
let count = 0;
function setBackgroundColor() {
    //Since this is an <a> tag I need to prevent the default function for when its clicked!
    event.preventDefault();
    //This 2 statements here are just for resetting the inital settings, so that the highlight isnt stuck on this element
    navigationItems[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
    navigationItems[0].style.color = "black";

    //Very hacky way of doing his!
    if (count >= 1) {
        previousEventTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
        previousEventTarget.style.color = "Black";
    }
    
    event.target.style.backgroundColor = "rgba(68, 55, 187, 0.781)";
    event.target.style.color = "White";

    count++;
    previousEventTarget = event.target;
}

function newPage() {
    //Event.target will return the element that was clicked
    let clickedProject = event.target;

    //console.log(clickedProject.textContent);
    visiblePage.removeAllElements();
    changePage(clickedProject.textContent);

}

for (let i = 0; i < navigationItems.length; i++) {

    navigationItems[i].addEventListener("click", setBackgroundColor);
    navigationItems[i].addEventListener("click", newPage);
}


let visiblePage = new Project("");

function changePage(newPageName) {
    //Getting info for new page and asinging it to newPage.
    let newPage = projects[newPageName];

    visiblePage.insertMainText = newPage.Text;
    visiblePage.insertPic1 = newPage.pic1Resource;
    visiblePage.insertPic2 = newPage.pic2Resource;
    visiblePage.insertPic3 = newPage.pic3Resource;
    visiblePage.insertLinks = newPage.linkURLS;
    visiblePage.insertImagesForLinks = newPage.linkImageURLS;

    visiblePage.createMaintextElement();
    visiblePage.createPic1Element(newPage.picElementType[0]);
    visiblePage.createPic2Element(newPage.picElementType[1]);
    visiblePage.createPic3Element(newPage.picElementType[2]);
    visiblePage.createLinkElement();

    visiblePage.appendAllElements();


}

changePage("Duckentry")
