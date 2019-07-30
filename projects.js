/*

Making a class called "projects". This class should contain elements for each project page
on my portfoliosite. More specifically elements that go into our CSS Grid.
This is perhaps a bit overkill, but I want to try out/learn a bit of ES6 OOP in javascript.

Elements to be created and appended:
Element ID : types
mainText : <p> tag
pic1 : <img>, <video> and <canvas>(glslCanvas)
pic2 : <img>, <video> and <canvas>(glslCanvas)
pic3 : <img>, <video> and <canvas>(glslCanvas)
links : <a>img</a> either direct text link or preferably img-link

*/

class Project {

    constructor(name) {
        //Name will act as our ID
        this.name = name;
        
    }
    /**
     * @description Utility function for this class. It is static and therefore part of the class and
    not part of any instance. Static functions are often utility functions in OOP.
    It must be called like this: Project.createElement();
    @param {string} type - What kind of tag/element to create. Allowed strings: p, img, video, canvas
    @
    @returns {Element}
    */
    static createElement(type) {

        switch(type) {
            case "p":
                return document.createElement("p");

            case "img":
                return document.createElement("img");

            case "video":
                return document.createElement("video");

            case "canvas":
                return document.createElement("canvas");

            default:
                //Throwing an user defined error. I want the script to stop if there is an typo.
                throw "You have entered an invalid element type!";
        }
    }

    static getParentDiv(parent) {
        return document.getElementById(parent);
    }

    /**
     * Setters and getters have special syntax here, this one specifies a set function.
     * @description Text should be simply a string or string literal to put into an <p> element.
     * @param String
     */
    
    set insertMainText(text) {
        this.text = text;
    }


    /**
     * @description Text should be simply a string that is the URL(local or not) to the pic/video/shader.
     * @param String
     */
    set insertPic1(text) {
        this.pic1URL = text;
    }

    /**
     * @description Text should be simply a string that is the URL(local or not) to the pic/video/shader.
     * @param String
     */
    set insertPic2(text) {
        this.pic2URL = text;
    }

    /**
     * @description Text should be simply a string that is the URL(local or not) to the pic/video/shader.
     * @param String
     */
    set insertPic3(text) {
        this.pic3URL = text;
    }

    
    /**
     * @description Creates the element for our MainText, inserts content into it and
     * defines/finds the parent element to our MainText element. Since all parents are divs
     * it is called divMainText.
     */

    createMaintextElement() {
        this.mainTextElement = Project.createElement("p");
        this.mainTextElement.innerText = this.text;
        this.divMainText = Project.getParentDiv("mainText");
    }

    /**
     * @description Text should be simply a string that is the URL(local or not) to the pic/video/shader.
     * This function creates the element, inserts the content and sets a variable pointing to its parent.
     * @param String - what type of content is this(What element to create)? Allowed: img, video, canvas 
     */
    createPic1Element(type) {

    }

    /**
     * @description Text should be simply a string that is the URL(local or not) to the pic/video/shader.
     * This function creates the element, inserts the content and sets a variable pointing to its parent.
     * @param String - what type of content is this(What element to create)? Allowed: img, video, canvas 
     */
    createPic2Element(type) {

    }

    /**
     * @description Text should be simply a string that is the URL(local or not) to the pic/video/shader.
     * This function creates the element, inserts the content and sets a variable pointing to its parent.
     * @param String - what type of content is this(What element to create)? Allowed: img, video, canvas 
     */
    createPic3Element(type) {

    }


    /**
     * @description Appends(inserts) all elements to their parents in the html document.
     */

    appendAllElements() {

        this.divMainText.appendChild(this.mainTextElement);
    }

    fadeInAllElements() {

        //while (this.mainTextElement.style.opacity < 1.0) {
            //this.mainTextElement.style.opacity += 0.1;
        //}
        
        //this.mainTextElement.style.opacity = 0.0;
    }
    

}

let ss = new Project("Duckentry");
//This is how we call the set function. It might seem like we ar just accesing a field/variable but we are actually calling an function
ss.insertMainText = "Hello I came from an class!";
ss.createMaintextElement();
ss.appendAllElements();
//ss.fadeInAllElements();