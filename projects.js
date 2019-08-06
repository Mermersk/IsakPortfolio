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
                let vv = document.createElement("video");
                vv.autoplay = true;
                vv.loop = true;
                vv.muted = true;
                return vv;

            case "canvas":
                return document.createElement("canvas");

            case "a":
                return document.createElement("a");

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
     * @description Links should be the urls to different websites.
     * 
     */
    set insertLinks(link) {
        this.linkURL = link;
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
        this.pic1Element = Project.createElement(type);
        this.pic1Element.src = this.pic1URL;
        //Making an ID for the element so that it gets animated everytime when it is recreated. Before the animation(in CSS) was targeting the parent div.
        this.pic1Element.id = "pic1Anim";
        this.divPic1 = Project.getParentDiv("pic1");

    }

    /**
     * @description Text should be simply a string that is the URL(local or not) to the pic/video/shader.
     * This function creates the element, inserts the content and sets a variable pointing to its parent.
     * @param String - what type of content is this(What element to create)? Allowed: img, video, canvas 
     */
    createPic2Element(type) {
        this.pic2Element = Project.createElement(type);
        this.pic2Element.id = "pic2Anim";
        this.pic2Element.src = this.pic2URL;
        this.divPic2 = Project.getParentDiv("pic2");
    }

    /**
     * @description Text should be simply a string that is the URL(local or not) to the pic/video/shader.
     * This function creates the element, inserts the content and sets a variable pointing to its parent.
     * @param String - what type of content is this(What element to create)? Allowed: img, video, canvas 
     */
    createPic3Element(type) {
        this.pic3Element = Project.createElement(type);
        this.pic3Element.src = this.pic3URL;
        this.pic3Element.id = "pic3Anim";
        this.divPic3 = Project.getParentDiv("pic3");
    }

    createLinkElement() {
        this.linkElement = Project.createElement("a");
        this.linkElement.href = this.linkURL;
        this.linkElement.target = "_blank";
        this.linkImageElement = Project.createElement("img");
    }

    /**
     * @description Appends(inserts) all elements to their parents in the html document.
     */

    appendAllElements() {

        this.divMainText.appendChild(this.mainTextElement);

        this.divPic1.appendChild(this.pic1Element);
        this.divPic2.appendChild(this.pic2Element);
        this.divPic3.appendChild(this.pic3Element);
    }

    /**
     * @description Removes all elements from their parents in the html document.
     */

    removeAllElements() {
        this.divMainText.removeChild(this.mainTextElement);

        this.divPic1.removeChild(this.pic1Element);
        this.divPic2.removeChild(this.pic2Element);
        this.divPic3.removeChild(this.pic3Element);

    }

    fadeInAllElements() {

        //while (this.mainTextElement.style.opacity < 1.0) {
            //this.mainTextElement.style.opacity += 0.1;
        //}
        
        //this.mainTextElement.style.opacity = 0.0;
    }
    

}

//let ss = new Project("Duckentry");
//This is how we call the set function. It might seem like we ar just accesing a field/variable but we are actually calling an function
//ss.insertMainText = "Hello I came from an class!";
//ss.createMaintextElement();
//ss.appendAllElements();
//ss.fadeInAllElements();