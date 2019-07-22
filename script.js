//JS code for my portfolio page.
//querySelectorAll enables us to use CSS style selectors
let navigationItems = document.querySelectorAll("#Navigation a");

let previousEventTarget;
let count = 0;
function setBackgroundColor() {
    //Since this is an <a> tag I need to prevent the default function for when its clicked!
    event.preventDefault();
    console.log("dfdfsdsdsdssdsd");

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

for (let i = 0; i < navigationItems.length; i++) {

    navigationItems[i].addEventListener("click", setBackgroundColor);
}




console.log(navigationItems[0]);