


let projects = {

    "Duckentry": {
        Text: `<h2>Duckentry</h2>
        
        Duckentry is a short surreal adventure about a duck lost in space.
        Your mission is to guide the duck to a successful reentry to the planet earth.
        However there will be obstacles on the way and only an exceptional duck-astronaut can make the duck-entry successful.
        <br></br>
        This game was programmed in Lua with the help of the Love2d framework. It started as an Flappy Bird clone but soon became
        something bigger. I wrote it first with no clear structure/design and it became an spaghetti-code mess. 
        So I started from scratch again and rewrote the game following OOP principles and managed to finish it in the end. Play store and github links are below!
        `,
        picElementType: ["video", "img", "img"],
        pic1Resource: "Media/UntimelyCooperativeArcticfox.webm",
        pic2Resource: "https://lh3.googleusercontent.com/acny40JIQw4szD4QZQXscCURdD17ykaDGDWnaSlpWjEI6YjPwGUbpJ7gKoNp55Q5cOI=w720-h310-rw",
        pic3Resource: "https://lh3.googleusercontent.com/4840UYRFBObn5Bhmx7ZB1fV6MBHnWWPwKqoPVWnrPKess4X73I9WkbujpOTc3oDX=w720-h310-rw",
        linkURLS: ["https://github.com/Mermersk/Duckentry2.0", "https://play.google.com/store/apps/details?id=com.mermersk.duckentry"],
        linkImageURLS: ["Media/GitHub_Logo.png", "Media/google-play-badge.png"]

    },
    "NoiseGen": {
        Text: `<h2>NoiseGen</h2>
        NoiseGen is a tool for mapping Simplex noise onto an image. You can open it up, mess around with the settings until you find something useful, then you can save it as a png-image file.
        <ul style="list-style-type:square;">
            <li>Customizable dimensions - Choose your width and height of the image.</li>
            <li>Choose between 3 different noise types: Fractal, Billow or Ridged Multi.</li>
            <li>Customizable settings for your noise - Octaves, Lacunarity, Persistance, Seed and Frequency</li>
            <li>Customizable colors - Choose your value for the red, green, blue and alpha channels</li>
        </ul>
        `,
        picElementType: ["img", "img", "img"],
        pic1Resource: "Media/NoiseGen-purple.png",
        pic2Resource: "Media/NoiseGen-green.png",
        pic3Resource: "Media/NoiseGen-blue.png",
        linkURLS: ["https://github.com/Mermersk/NoiseGen", "https://love2d.org/forums/viewtopic.php?f=5&t=85349"],
        linkImageURLS: ["Media/GitHub_Logo.png", "Media/love-logo.png"]

    },
    "Plantarinn": {
        Text: `<h2>Plantarinn</h2>
        Plantarinn is a little app in Icelandic that enables one to set goals during planting.
        During planting its easy to loose track of how fast/slow one is actually planting, you sort of enter into a planting trance.
        <br></br>
        Plantarinn can be a helpfull tool to stay on course. You enter in how many trees you plan to plant and then you enter in
        the time you give yourself in the form hours:minutes. Plantarinn then keeps track of the progress. A spinning tree and an counter
        are visual cues to how far along you are. On the end of each cycle(1 cycle = 1 tree planted) plantarinn will beep and vibrate to
        let you know, this is essential since the phone will most likely be in your pocket while planting.
        <br></br>
        Get it on the Google Play store with the link below.
        <br></br>
        <strong>Technology used:</strong> Android native app written in Kotlin.
        
        `,
        picElementType: ["img", "img", "img"],
        pic1Resource: "Media/Plantarinn1.png",
        pic2Resource: "Media/Plantarinn2.png",
        pic3Resource: "Media/Plantarinn3.png",
        linkURLS: ["https://github.com/Mermersk/Plantarinn", "https://play.google.com/store/apps/details?id=com.isak.plantarinn"],
        linkImageURLS: ["Media/GitHub_Logo.png", "Media/google-play-badge.png"]

    },
    "DetFinder": {
        Text: `<h2>Determinant Finder</h2>
        Determinant finder is a website to find the determinant of a matrix. It uses an algorithm called 
        <a href = "https://en.wikipedia.org/wiki/Laplace_expansion">cofactor expansion</a>. After using it in my 
        linear algebra class I wanted to see if I could implement it in code. The algorithm is very slow, has a Big O of !n.
        <br></br>
        All of the website is actually programmed in Lua! I am using a libray called <a href = "https://fengari.io/">Fengari</a> which
        is a Lua VM written in Javascript. I set my self another goal of mainly using recursion instead of loops and this went well in the end.
        I learned alot of how to use recursion effectively but it turns out that debugging complex recursion can be a bit tricky.
        <a href = "https://mermersk.github.io/DeterminantFinder">Site is available here</a>
        <br></br>
        <strong>Technology used:</strong> Lua (Fengari), HTML5, CSS3 
        
        `,
        picElementType: ["img", "img", "img"],
        pic1Resource: "Media/d10.png",
        pic2Resource: "Media/d12.png",
        pic3Resource: "Media/d13.png",
        linkURLS: ["https://github.com/Mermersk/DeterminantFinder"],
        linkImageURLS: ["Media/GitHub_Logo.png"]
    },

    "Shaders": {
        Text: `<h2>Shaders</h2>
        In spring/summer of 2019 I decided to learn how to create shaders. I was fascinated by effects one can see in video games and websites that utilize WebGL. 
        I used an fantastic resource called <a href = "https://thebookofshaders.com/">The Book of Shaders</a>. These are programmed in the shading language GLSL(WebGL). 
        <br></br>
        After having completed some shaders I wanted to showcase them somehow. This entailed starting the other thing I wanted to learn this summer, namely web-development.
        So I started to learn HTML5, CSS3 and ES6 Javascript. The shader site started out as just a static site. However this became a problem when I wnated to put more shaders
        on it, performance started to tank. So I redesigned it be dynamic where only 1 shader is shown at once and the user can switch between. It went from being static to being
        mostly created with Javascript. Link to the site is below!
        `,
        picElementType: ["img", "img", "img"],
        pic1Resource: "Media/circleShader.png",
        pic2Resource: "Media/sineShader.png",
        pic3Resource: "Media/HSBShader.png",
        linkURLS: ["http://mermersk.no/shaders", "https://github.com/Mermersk/GLSL"],
        linkImageURLS: ["Media/shaderSiteLogo.png", "Media/GitHub_Logo.png"]

    },

    "SoccyPredict": {
        Text: `<h2>SoccyPredict</h2>
        
        SoccyPredict is an football match predictor. 
        It is a terminal application. It calculates probability of certain events occuring in a football match. It then converts these to 
        decimal betting odds, retrieves odds from the market(bookmakers) and compares its prediction with what the market thinks is going to
        happen. In theory if SoccyPredict makes better predictions than the market then it should in the end see a positive ROI.
        <br></br>
        It uses an API called "API-FOOTBALL" to retrieve all stats and market odds. The great thing about it is that you can get multiple predictions
        about upcoming games all around the world. Only thing you have to specify is: [CountryName, LeagueName, numberOfGames] where numberOfGames is an
        Integer specifying how many matches in the future you want predictions for. I had alot of fun creating this and using it!
        <br></br>
        <strong>Technology used:</strong> Python, REST API, Python-Tabulate 
        
        `,
        picElementType: ["img", "img", "img"],
        pic1Resource: "Media/SoccyTerm.jpg",
        pic2Resource: "",
        pic3Resource: "",
        linkURLS: ["https://github.com/Mermersk/SoccyPredict"],
        linkImageURLS: ["Media/GitHub_Logo.png"]
    },
    
    "About": {
        Text: `<h2>About this site</h2>
        This site is an responsive(try it out!) single-page application written in pure modern Javascript.
        I set out from the start to make it responsive since the last website I made(a shader showcase site) was not designed this way in the
        beginning, turns out its alot harder to retrofit responsiveness into a site after it is made. I used CSS3 Grid system for this instead of resorting to an CSS framework since I want to focus on learning core web technologies.
        Grid is an amazing addition to CSS. I will probably be utilizing it for most future websites I make(unless its a basic site).
        <br></br>
        <h2>About me</h2>
        Hei
        <br></br>
        I am developer currently residing in Iceland. I studied Computer science at the University of Bergen.
        <br></br>
        <strong>Interests:</strong>
        <ul> 
            <li>Creating stuff</li>
            <li>Running</li>
            <li>Football</li>
            <li>Mountain hikes</li>
        </ul>

        <strong>Programming experience:</strong> Lua, (HTML5, CSS3, Javascript), Java, Python, Kotlin, R, Haskell, SQL, GLSL, Regex, Git/version control.
    
        `,
        picElementType: ["img", "img", "img"],
        pic1Resource: "Media/DSC_2839.JPG",
        pic2Resource: "",
        pic3Resource: "",
        linkURLS: ["https://github.com/Mermersk", "https://www.linkedin.com/in/isak-steingrimsson-865a29167/"],
        linkImageURLS: ["Media/GitHub_Logo.png", "Media/LI-Logo.png"]

    },


};

export default projects