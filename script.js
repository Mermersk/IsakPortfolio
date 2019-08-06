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

    console.log(clickedProject.textContent);
    visiblePage.removeAllElements();
    changePage(clickedProject.textContent);

}

for (let i = 0; i < navigationItems.length; i++) {

    navigationItems[i].addEventListener("click", setBackgroundColor);
    navigationItems[i].addEventListener("click", newPage);
}


navigationItems[0].textContent
let visiblePage = new Project("");

let projects = {

    [navigationItems[0].textContent]: {
        Text: "This is the text for duckentry",
        picElementType: ["video", "img", "img"],
        pic1Resource: "https://zippy.gfycat.com/UntimelyCooperativeArcticfox.webm",
        pic2Resource: "https://lh3.googleusercontent.com/acny40JIQw4szD4QZQXscCURdD17ykaDGDWnaSlpWjEI6YjPwGUbpJ7gKoNp55Q5cOI=w720-h310-rw",
        pic3Resource: "https://lh3.googleusercontent.com/4840UYRFBObn5Bhmx7ZB1fV6MBHnWWPwKqoPVWnrPKess4X73I9WkbujpOTc3oDX=w720-h310-rw"

    },
    [navigationItems[1].textContent]: {
        Text: "This is the text for Shaders!",
        picElementType: ["img", "img", "img"],
        pic1Resource: "Media/circleShader.png",
        pic2Resource: "Media/sineShader.png",
        pic3Resource: "Media/HSBShader.png"

    },
    [navigationItems[2].textContent]: {
        Text: "This is the text for NoiseGen!",
        picElementType: ["img", "img", "img"],
        pic1Resource: "Media/NoiseGen-purple.png",
        pic2Resource: "Media/NoiseGen-green.png",
        pic3Resource: "Media/NoiseGen-blue.png"

    },
    [navigationItems[3].textContent]: {
        Text: "This is the text for about!",
        picElementType: ["video", "img", "img"],
        pic1Resource: "",
        pic2Resource: "",
        pic3Resource: ""

    },

    "linksResource": {

        github: "Media/GithubLogo.png",
        playStore: "Media/google-play-badge.png",
        love2dForum: "Media/love-app-icon.png"

    }

};

function changePage(newPageName) {
    //Getting info for new page and asinging it to newPage.
    let newPage = projects[newPageName];

    visiblePage.insertMainText = newPage.Text;
    visiblePage.insertPic1 = newPage.pic1Resource;
    visiblePage.insertPic2 = newPage.pic2Resource;
    visiblePage.insertPic3 = newPage.pic3Resource;

    visiblePage.createMaintextElement();
    visiblePage.createPic1Element(newPage.picElementType[0]);
    visiblePage.createPic2Element(newPage.picElementType[1]);
    visiblePage.createPic3Element(newPage.picElementType[2]);

    visiblePage.appendAllElements();


}

changePage("Duckentry")

console.log(projects["Shaders"].Text);
/*
visiblePage.insertMainText = "hjsbdhjabsdhjasdb";
visiblePage.insertPic1 = "https://zippy.gfycat.com/UntimelyCooperativeArcticfox.webm";
visiblePage.insertPic2 = "https://lh3.googleusercontent.com/acny40JIQw4szD4QZQXscCURdD17ykaDGDWnaSlpWjEI6YjPwGUbpJ7gKoNp55Q5cOI=w720-h310-rw";
visiblePage.insertPic3 = "https://lh3.googleusercontent.com/4840UYRFBObn5Bhmx7ZB1fV6MBHnWWPwKqoPVWnrPKess4X73I9WkbujpOTc3oDX=w720-h310-rw";
visiblePage.createMaintextElement();
visiblePage.createPic1Element("video");
visiblePage.createPic2Element("img");
visiblePage.createPic3Element("img");

visiblePage.appendAllElements();

visiblePage.removeAllElements();
*/

