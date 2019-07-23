/*

Making a class called "projects". This class should contain elements for each project page
on my portfoliosite. More specifically elements that go into our CSS Grid.
This is perhaps a bit overkill, but I want to try out/learn a bit of ES6 OOP in javascript.

elements to be created and appended:
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
    @param {string} type - What kind of tag/element to create.
    @returns {Element}
    */
    static createElement(type) {
        return document.createElement(type);
    }

    static getParentDiv(parent) {
        return document.getElementById(parent);
    }
    
    //Setters and getters have special syntax here, this one specifies a set function.
    set insertMainText(text) {
        /*Text should be simply a string or string literal to put into an <p> element */
        this.text = text;
        this.mainTextElement = Project.createElement("p");
        this.mainTextElement.innerText = this.text;
        //this.mainTextElement.style.opacity = 0.0;
        this.divmainText = Project.getParentDiv("mainText");
        
    }

    

    appendAllElements() {

        this.divmainText.appendChild(this.mainTextElement);
    }

    fadeInAllElements() {

        //while (this.mainTextElement.style.opacity < 1.0) {
            //this.mainTextElement.style.opacity += 0.1;
        //}
        
    }
    

}

let ss = new Project("Duckentry");
//This is how we call the set function. It might seem like we ar just accesing a field/variable but we are actually calling an function
ss.insertMainText = "Hello I came from an class!";
ss.appendAllElements();
//ss.fadeInAllElements();