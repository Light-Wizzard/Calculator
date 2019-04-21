/* ****************************************************************************
 * WebPageMaker.js
 * Written by Jeffrey Scott Flesher
 * Last Update: 20 April 2019
 * Version: 1.0
 *
 * import "WebPageMaker.js" 3.0 as WebPageMaker
 *
 * Used to create static Web Page files for browsers: chrome firefox safari ms opera
 * I used w3schools.com for all my information,
 * reason is tht they have the most up to date information out there.
 *
 * I included a logic matrix to ensure that the doc type allows this tag,
 * plus each file format is written for a specific browser, and more can be added.
 *
 * The general concept is this file is a WebPage Framework, for making Web Pages,
 * it is designed to be used in a generic way, thus standalone,
 * but is what Webook, which is another file,
 *
 * I did not put a lot of effort into the parametter order, or camelCasing.
 *
 * I use Qt Creator to write this, and must remember to spell check it,
 * I am dislexic and a bad speller.
 */
/* ****************************************************************************
 * DocType
 * I keep this list short for a Reason, it took me a week in my estamate,
 * to write this library, and for every entry I support here, takes a test,
 * but I did include the list of all I knew and may have used at one time,
 * but these are more then I need, for ePub I use IDPF_2007, for other...
 * I do have one issue in making this ePub or eBook App,
 * people that only want to use this for Web Apps, do not care,
 * till they actually make a ePub, or a PDF to print a Book,
 * then the XHTML_1_1 formate looks good, for PDF's it is a safe bet,
 * XML_1_0 is for XML files, but keep in mind, I wrote this with the concept,
 * it will always fall back to the doc type first, and web browser second,
 * I wrote a matrix test, as well as built it into every function,
 * so the code should always validate using a validator, so testing will be done.
 *
 * HTML5
 * HTML4_01_Strict
 * HTML4_01_Transitional
 * HTML4_01_Frameset
 * XHTML_1_0_Strict
 * XHTML_1_0_Transitional
 * XHTML_1_0_Frameset
 * XHTML_1_1
 * IDPF_2007
 * XML_1_0
 */
var myDocType = "HTML5";
function getDocType() {
    return myDocType;
}
function setDocType(theDocType) {
    myDocType = theDocType;
}
/* ****************************************************************************
 * mySupportedDocTypes: list of all supported docType()
 */
var mySupportedDocTypes = ["HTML5", "HTML4_01_Strict", "HTML4_01_Transitional", "HTML4_01_Frameset", "XHTML_1_0_Strict", "XHTML_1_0_Transitional", "XHTML_1_0_Frameset", "XHTML_1_1", "IDPF_2007"];
function getSupportedDocTypes(theIndex) {
    return mySupportedDocTypes[theIndex];
}
function setSupportedDocTypes(theDocType) {
    if (mySupportedDocTypes.indexOf(theDocType) === -1) {
        mySupportedDocTypes.push(theDocType);
    }
}
function getSupportedDocTypesLength() {
    return mySupportedDocTypes.length;
}
/* ****************************************************************************
 * Browser
 * This Application does not do Browser Sniffing
 * This App is built with the Concept of Web App in mind,
 * as such, If you want to ensure this runs on all web browsers,
 * you have to have a Browser Sniffer built in,
 * therefore, it has to create elements on the fly,
 * this app does not attempt to do this,
 * instead it will create web pages as the file name,
 * with a trailing identifier like: fileName_BrowserName_Language.html,
 * where Browswer Name is: chrome, firefox, safari, ms, or opera,
 * and Language is from code for supported Languages,
 * so you can localize all the files.
 * I could have a TOC page that detects the browser and redirects you,
 * or just make some links and allow the user to use the right links,
 * for the browswer they are using,
 * I like this approach better then relying on Browswer Sniffing,
 * so to make this easier, I created a Browser feature,
 * that is only used to create pages for that browser,
 * check the test function, it will create a page for every language,
 * and every browswer, as such, the code is designed to run without any quarks mode,
 * and fanasy JavaScript Libraries that try to fix cross Browswer Issues,
 * this App makes pages that just work for that Browser, for example,
 * I created the following Browswer Names:
 * chrome, firefox, safari, ms, and opera,
 * mainly because I used information from w3schools,
 * also because these are the browswers I have access to in Linux,
 * note I used their Names: and Microsoft or MS, instead of IE or Edge,
 * but these names are just for this app,
 * so it can make the correct elements for that browsewr.
 *
 * The var is not Global, so it is lower case,
 * in Qml JavaScript, which was once called QScript,
 * but is not the same JavaScript Engine most Web Browswers use,
 * it is unique to Qt, and is great once you get to know it,
 * the concept here is that this is a file called WebPageMaker.js,
 * it will be imported into a Qml App like this:
 * import "WebPageMaker.js" as WebPageMaker
 * then you can access any function with:
 * WebPageMaker.setBrowswer("chrome");
 * var myBrowser = WebPageMaker.getBrowswer(); // "chrome"
 * now the var in this file with the same name,
 * has a different scope then this file does,
 * so you can not access anything but functions,
 * and not var's defined in that file, unlike a Web Browswer Engine,
 * the scope of the var below is private outside this function,
 * yet global for this file, get I never want to use it directly,
 * so I make getters and setters for all var's.
 */
var myBrowser = "";
function getBrowser() {
    return myBrowser;
}
function setBrowser(theBrowerName) {
    myBrowser = theBrowerName;
}
/* ****************************************************************************
 * SupportedBrowsers
 * Most browswer Engines work like one of these,
 * if you want to add a browser to this list,
 * you must create a Logic Matrix for it,
 * and edit every function to make sure it creates it correctly.
 */
var mySupportedBrowsers = ["chrome", "firefox", "opera", "safari", "ms"];
function getSupportedBrowsers(theIndex) {
    return mySupportedBrowsers[theIndex];
}
function setSupportedBrowsers(theBrowerName) {
    if (mySupportedBrowsers.indexOf(theBrowerName) === -1) {
        mySupportedBrowsers.push(theBrowerName);
    }
}
function getSupportedBrowsersLength() {
    return mySupportedDocTypes.length;
}
/* ****************************************************************************
 * DebugMessageType: 0=None, 1=Basic, 2=Detailed
 */
var myDebugMessageType = 1;
function getDebugMessageType() {
    return myDebugMessageType;
}
function setDebugMessageType(debugMessageType) {
    myDebugMessageType = debugMessageType;
}
/* ****************************************************************************
 * doc2tag
 * This is a logic matrix for all the HTML Elements and Tags,
 * and Elment is in form of <element> whereas tag is <tag></tag>,
 * if (! doc2tag("") )
 */
function doc2tag(tag) {

    if (getDocType() === "HTML5") {
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "address") { return true; }
        if (tag === "area") { return true; }
        if (tag === "article") { return true; }
        if (tag === "aside") { return true; }
        if (tag === "audio") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "bdi") {
            // chrome firefox safari ms opera
            if (getBrowser() === "chrome") { return true; }
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
            if (getBrowser() === "opera") { return true; }
        }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "canvas") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "cite") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "data") {
            // chrome firefox safari ms opera
            if (getBrowser() === "chrome") { return true; }
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "opera") { return true; }
            if (getBrowser() === "ms") { return true; }
        }
        if (tag === "datalist") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "del") {
            // chrome firefox safari ms opera
            if (getBrowser() === "chrome") { return true; }
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
            if (getBrowser() === "opera") { return true; }
        }
        if (tag === "dfn") { return true; }
        if (tag === "dialog") {
            // chrome firefox safari ms opera
            if (getBrowser() === "chrome") { return true; }
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
            if (getBrowser() === "opera") { return true; }
        }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "embed") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "figcaption") { return true; }
        if (tag === "figure") { return true; }
        if (tag === "footer") { return true; }
        if (tag === "form") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "header") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "ins") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "main") { return true; }
        if (tag === "map") { return true; }
        if (tag === "mark") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "meter") { return true; }
        if (tag === "nav") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "output") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "picture") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "progress") { return true; }
        if (tag === "q") { return true; }
        if (tag === "rp") { return true; }
        if (tag === "rt") { return true; }
        if (tag === "ruby") { return true; }
        if (tag === "s") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "section") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "source") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "summary") {
            // chrome firefox safari ms opera
            if (getBrowser() === "chrome") { return true; }
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
            if (getBrowser() === "opera") { return true; }
        }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "template") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "time") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "track") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
        if (tag === "video") { return true; }
        if (tag === "wbr") { return true; }
    } else if (getDocType() === "HTML4_01_Strict") { // HTML 4 **********************
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "acronym") { return true; }
        if (tag === "address") { return true; }
        if (tag === "applet") {
            // chrome firefox safari ms opera
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
        }
        if (tag === "area") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "basefont") { return true; }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "center") { return true; }
        if (tag === "cite") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "dfn") { return true; }
        if (tag === "dir") { return true; }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "font") { return true; }
        if (tag === "form") { return true; }
        if (tag === "frame") { return true; }
        if (tag === "frameset") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "ins") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "map") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "noframes") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "q") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strike") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
    } else if (getDocType() === "HTML4_01_Transitional") { // HTML 4 *****************
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "acronym") { return true; }
        if (tag === "address") { return true; }
        if (tag === "applet") {
            // chrome firefox safari ms opera
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
        }
        if (tag === "area") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "basefont") { return true; }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "center") { return true; }
        if (tag === "cite") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "dfn") { return true; }
        if (tag === "dir") { return true; }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "font") { return true; }
        if (tag === "form") { return true; }
        if (tag === "frame") { return true; }
        if (tag === "frameset") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "ins") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "map") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "noframes") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "q") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strike") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
    } else if (getDocType() === "HTML4_01_Frameset") { // HTML 4 ************************
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "acronym") { return true; }
        if (tag === "address") { return true; }
        if (tag === "applet") {
            // chrome firefox safari ms opera
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
        }
        if (tag === "area") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "basefont") { return true; }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "center") { return true; }
        if (tag === "cite") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "dfn") { return true; }
        if (tag === "dir") { return true; }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "font") { return true; }
        if (tag === "form") { return true; }
        if (tag === "frame") { return true; }
        if (tag === "frameset") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "ins") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "map") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "noframes") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "q") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strike") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
    } else if (getDocType() === "XHTML_1_0_Strict") { // XHTML *************************
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "acronym") { return true; }
        if (tag === "address") { return true; }
        if (tag === "applet") {
            // chrome firefox safari ms opera
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
        }
        if (tag === "area") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "basefont") { return true; }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "center") { return true; }
        if (tag === "cite") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "dfn") { return true; }
        if (tag === "dir") { return true; }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "font") { return true; }
        if (tag === "form") { return true; }
        if (tag === "frame") { return true; }
        if (tag === "frameset") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "ins") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "map") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "noframes") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "q") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strike") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
    } else if (getDocType() === "XHTML_1_0_Transitional") { // XHTML *********************
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "acronym") { return true; }
        if (tag === "address") { return true; }
        if (tag === "applet") {
            // chrome firefox safari ms opera
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
        }
        if (tag === "area") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "basefont") { return true; }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "center") { return true; }
        if (tag === "cite") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "dfn") { return true; }
        if (tag === "dir") { return true; }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "font") { return true; }
        if (tag === "form") { return true; }
        if (tag === "frame") { return true; }
        if (tag === "frameset") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "map") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "noframes") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "q") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strike") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
    } else if (getDocType() === "XHTML_1_0_Frameset") { // XHTML ************************
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "acronym") { return true; }
        if (tag === "address") { return true; }
        if (tag === "applet") {
            // chrome firefox safari ms opera
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
        }
        if (tag === "area") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "basefont") { return true; }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "center") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "dfn") { return true; }
        if (tag === "dir") { return true; }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "font") { return true; }
        if (tag === "form") { return true; }
        if (tag === "frame") { return true; }
        if (tag === "frameset") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "map") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "noframes") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "q") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strike") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
    } else if (getDocType() === "XHTML_1_1") { // XHTML ******************************
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "acronym") { return true; }
        if (tag === "address") { return true; }
        if (tag === "applet") {
            // chrome firefox safari ms opera
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
        }
        if (tag === "area") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "basefont") { return true; }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "center") { return true; }
        if (tag === "cite") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "dfn") { return true; }
        if (tag === "dir") { return true; }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "font") { return true; }
        if (tag === "form") { return true; }
        if (tag === "frame") { return true; }
        if (tag === "frameset") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "ins") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "map") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "noframes") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "q") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strike") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
    } else if (getDocType() === "IDPF_2007") { // IDPF ePub *******************************
        if (tag === "a") { return true; }
        if (tag === "abbr") { return true; }
        if (tag === "acronym") { return true; }
        if (tag === "address") { return true; }
        if (tag === "applet") {
            // chrome firefox safari ms opera
            if (getBrowser() === "firefox") { return true; }
            if (getBrowser() === "safari") { return true; }
        }
        if (tag === "area") { return true; }
        if (tag === "b") { return true; }
        if (tag === "base") { return true; }
        if (tag === "basefont") { return true; }
        if (tag === "bdo") { return true; }
        if (tag === "blockquote") { return true; }
        if (tag === "body") { return true; }
        if (tag === "br") { return true; }
        if (tag === "button") { return true; }
        if (tag === "caption") { return true; }
        if (tag === "center") { return true; }
        if (tag === "cite") { return true; }
        if (tag === "code") { return true; }
        if (tag === "col") { return true; }
        if (tag === "colgroup") { return true; }
        if (tag === "dd") { return true; }
        if (tag === "del") { return true; }
        if (tag === "dfn") { return true; }
        if (tag === "dir") { return true; }
        if (tag === "div") { return true; }
        if (tag === "dl") { return true; }
        if (tag === "dt") { return true; }
        if (tag === "em") { return true; }
        if (tag === "fieldset") { return true; }
        if (tag === "font") { return true; }
        if (tag === "form") { return true; }
        if (tag === "frame") { return true; }
        if (tag === "frameset") { return true; }
        if (tag === "h1") { return true; }
        if (tag === "h2") { return true; }
        if (tag === "h3") { return true; }
        if (tag === "h4") { return true; }
        if (tag === "h5") { return true; }
        if (tag === "h6") { return true; }
        if (tag === "head") { return true; }
        if (tag === "hr") { return true; }
        if (tag === "html") { return true; }
        if (tag === "i") { return true; }
        if (tag === "iframe") { return true; }
        if (tag === "img") { return true; }
        if (tag === "ins") { return true; }
        if (tag === "kbd") { return true; }
        if (tag === "label") { return true; }
        if (tag === "legend") { return true; }
        if (tag === "li") { return true; }
        if (tag === "link") { return true; }
        if (tag === "map") { return true; }
        if (tag === "meta") { return true; }
        if (tag === "noframes") { return true; }
        if (tag === "noscript") { return true; }
        if (tag === "object") { return true; }
        if (tag === "ol") { return true; }
        if (tag === "optgroup") { return true; }
        if (tag === "option") { return true; }
        if (tag === "p") { return true; }
        if (tag === "param") { return true; }
        if (tag === "pre") { return true; }
        if (tag === "q") { return true; }
        if (tag === "samp") { return true; }
        if (tag === "script") { return true; }
        if (tag === "select") { return true; }
        if (tag === "small") { return true; }
        if (tag === "span") { return true; }
        if (tag === "strike") { return true; }
        if (tag === "strong") { return true; }
        if (tag === "style") { return true; }
        if (tag === "sub") { return true; }
        if (tag === "sup") { return true; }
        if (tag === "svg") { return true; }
        if (tag === "table") { return true; }
        if (tag === "tbody") { return true; }
        if (tag === "td") { return true; }
        if (tag === "textarea") { return true; }
        if (tag === "tfoot") { return true; }
        if (tag === "th") { return true; }
        if (tag === "thead") { return true; }
        if (tag === "title") { return true; }
        if (tag === "tr") { return true; }
        if (tag === "u") { return true; }
        if (tag === "ul") { return true; }
        if (tag === "let") { return true; }
    }
    return false;
}
/* ****************************************************************************
 * Yahoo Audio Player seems broken
 */
var isYahooAudioPlayer = true;
function getYahooAudioPlayer() {
    return isYahooAudioPlayer;
}
function setYahooAudioPlayer(myYahooAudioPlayer) {
    isYahooAudioPlayer = myYahooAudioPlayer;
}
function includeYahooAudioPlayer() {
    // <a href="LINK.mp3">Song 1</a>
    // FIXME make local copy, check version, do download, and upgrade
    return '<script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>';
}
/* ****************************************************************************
 * Generic Embed Audio Player
 */
var embedAudioPlayer = null;
function soundPlay(audioFilePathNameExt) {
    if (!embedAudioPlayer)
    {
        embedAudioPlayer = document.createElement("embed");
        embedAudioPlayer.setAttribute("src", audioFilePathNameExt);
        embedAudioPlayer.setAttribute("hidden", true);
        embedAudioPlayer.setAttribute("autostart", true);
    }
    else
    {
        document.body.removeChild(embedAudioPlayer);
        embedAudioPlayer.removed = true;
        embedAudioPlayer = null;
        embedAudioPlayer = document.createElement("embed");
        embedAudioPlayer.setAttribute("src", audioFilePathNameExt);
        embedAudioPlayer.setAttribute("hidden", true);
        embedAudioPlayer.setAttribute("autostart", true);
    }
    embedAudioPlayer.removed = false;
    document.body.appendChild(embedAudioPlayer);
}
/* ****************************************************************************
 * OverRideDocType
 * This allows you to create the type you specify regardless of DocType
 * setOverRideDocType(true);
 * doSomething();
 * setOverRideDocType(false);
 */
var overRideDocType = false;
function getOverRideDocType() {
    return overRideDocType;
}
function setOverRideDocType(myOverRideDocType) {
     overRideDocType = myOverRideDocType;
}
/* ****************************************************************************
 * Language
 * I include the complete set of codes for easy of access,
 * this App is designed to be Multilingual, so this is a big feature of it.
 * Make sure to use getLanguage() when ever you have code like this:
 * <html xml:lang="en" lang="en">
 * so you can do a setLanguage("ISO Code"), from list below,
 * also you can set an Array of supported Languages that get created.
 *
 * Language     ISO Code
 * Abkhazian	ab
 * Afar         aa
 * Afrikaans	af
 * Akan         ak
 * Albanian     sq
 * Amharic      am
 * Arabic       ar
 * Aragonese	an
 * Armenian     hy
 * Assamese     as
 * Avaric       av
 * Avestan      ae
 * Aymara       ay
 * Azerbaijani	az
 * Bambara      bm
 * Bashkir      ba
 * Basque       eu
 * Belarusian	be
 * Bengali(a)	bn
 * Bihari       bh
 * Bislama      bi
 * Bosnian      bs
 * Breton       br
 * Bulgarian	bg
 * Burmese      my
 * Catalan      ca
 * Chamorro     ch
 * Chechen      ce
 * Chichewa, Chewa, Nyanja	ny
 * Chinese      zh
 * Chinese (Simplified)	zh-Hans
 * Chinese (Traditional)	zh-Hant
 * Chuvash      cv
 * Cornish      kw
 * Corsican     co
 * Cree         cr
 * Croatian     hr
 * Czech        cs
 * Danish       da
 * Divehi, Dhivehi, Maldivian	dv
 * Dutch        nl
 * Dzongkha     dz
 * English      en
 * Esperanto	eo
 * Estonian     et
 * Ewe          ee
 * Faroese      fo
 * Fijian       fj
 * Finnish      fi
 * French       fr
 * Fula, Fulah, Pulaar, Pular	ff
 * Galician     gl
 * Gaelic (Scottish)	gd
 * Gaelic (Manx)	gv
 * Georgian     ka
 * German       de
 * Greek        el
 * Greenlandic	kl
 * Guarani      gn
 * Gujarati     gu
 * Haitian Creole	ht
 * Hausa        ha
 * Hebrew       he
 * Herero       hz
 * Hindi        hi
 * Hiri Motu	ho
 * Hungarian	hu
 * Icelandic	is
 * Ido          io
 * Igbo         ig
 * Indonesian	id, in
 * Interlingua	ia
 * Interlingue	ie
 * Inuktitut	iu
 * Inupiak      ik
 * Irish        ga
 * Italian      it
 * Japanese     ja
 * Javanese     jv
 * Kalaallisut, Greenlandic	kl
 * Kannada      kn
 * Kanuri       kr
 * Kashmiri     ks
 * Kazakh       kk
 * Khmer        km
 * Kikuyu       ki
 * Kinyarwanda (Rwanda)	rw
 * Kirundi      rn
 * Kyrgyz       ky
 * Komi         kv
 * Kongo        kg
 * Korean       ko
 * Kurdish      ku
 * Kwanyama     kj
 * Lao          lo
 * Latin        la
 * Latvian (Lettish)	lv
 * Limburgish ( Limburger)	li
 * Lingala      ln
 * Lithuanian	lt
 * Luga-Katanga	lu
 * Luganda, Ganda	lg
 * Luxembourgish	lb
 * Manx         gv
 * Macedonian	mk
 * Malagasy     mg
 * Malay        ms
 * Malayalam	ml
 * Maltese      mt
 * Maori        mi
 * Marathi      mr
 * Marshallese	mh
 * Moldavian	mo
 * Mongolian	mn
 * Nauru        na
 * Navajo       nv
 * Ndonga       ng
 * Northern Ndebele	nd
 * Nepali       ne
 * Norwegian	no
 * Norwegian bokmål	nb
 * Norwegian nynorsk	nn
 * Nuosu        ii
 * Occitan      oc
 * Ojibwe       oj
 * Old Church Slavonic, Old Bulgarian	cu
 * Oriya        or
 * Oromo (Afaan Oromo)	om
 * Ossetian     os
 * Pāli         pi
 * Pashto, Pushto	ps
 * Persian (Farsi)	fa
 * Polish       pl
 * Portuguese	pt
 * Punjabi (Eastern)	pa
 * Quechua      qu
 * Romansh      rm
 * Romanian     ro
 * Russian      ru
 * Sami         se
 * Samoan       sm
 * Sango        sg
 * Sanskrit     sa
 * Serbian      sr
 * Serbo-Croatian	sh
 * Sesotho      st
 * Setswana     tn
 * Shona        sn
 * Sichuan Yi	ii
 * Sindhi       sd
 * Sinhalese	si
 * Siswati      ss
 * Slovak       sk
 * Slovenian	sl
 * Somali       so
 * Southern Ndebele	nr
 * Spanish      es
 * Sundanese	su
 * Swahili (Kiswahili)	sw
 * Swati        ss
 * Swedish      sv
 * Tagalog      tl
 * Tahitian     ty
 * Tajik        tg
 * Tamil        ta
 * Tatar        tt
 * Telugu       te
 * Thai         th
 * Tibetan      bo
 * Tigrinya     ti
 * Tonga        to
 * Tsonga       ts
 * Turkish      tr
 * Turkmen      tk
 * Twi          tw
 * Uyghur       ug
 * Ukrainian	uk
 * Urdu         ur
 * Uzbek        uz
 * Venda        ve
 * Vietnamese	vi
 * Volapük      vo
 * Wallon       wa
 * Welsh        cy
 * Wolof        wo
 * Western Frisian	fy
 * Xhosa        xh
 * Yiddish      yi, ji
 * Yoruba       yo
 * Zhuang, Chuang	za
 * Zulu         zu
 *
 * mySupportedLanuages makes it easy to create all the Language files.
 * I plan to write an Online API for the Comerical version of Google Translate,
 * you have to make a link to Google Translate, inside the App,
 * so the user can authenicate via the built in web browswer,
 * if this App is run from a Cell or Smart Phone, Android or IoS,
 * I can share that Authentication for that browswer session,
 * keep in mind I do this in bash, and do not need a browswer,
 * it can use bash script to access google translate directly,
 * so I can not make any promises about how well this concept will port to JavaScript,
 * running on Qt Webkit, but I should have no issues getting it to run on a Desktop,
 * so it is possible to just maintain all the Language files using github,
 * while at the same time, writing the code so you can use it for custom translations,
 * the concept is simple, I chose 3 examples: en, because that is the language I speak,
 * and it does not require to be en_US, so any en will do,
 * I use de and ga, because that is what languages my Great Grand Parents spoke,
 * but mainly because if I am maintaining all the Language files,
 * I want to Limit them as well, and only add them on request,
 * the reason is simple, you can add them to your project,
 * and update them as well, so there is no need for them in the project,
 * since all my comments are in English.
 */
var myLanguage = "en";
function getLanguage() {
    return myLanguage;
}
function setLanguage(theLanguage) {
    myLanguage = theLanguage;
}
/* ****************************************************************************
 * SupportedLanguages
 */
var mySupportedLanuages = ["en", "de", "ga"];
function getSupportedLanguages(theIndex) {
    return mySupportedLanuages[theIndex];
}
function setSupportedLanguages(theLanguage) {
    if (! mySupportedLanuages.indexOf(theLanguage)) {
        mySupportedLanuages.push(theLanguage);
    }
}
function getSupportedLanguagesLength() {
    return mySupportedLanuages.length;
}
/* ****************************************************************************
 * getFileExt
 * used to get file extension from a file with the format of: FileName.ext
 * it uses a bitwise operator so it works in the case the . is missing,
 * and returns an empty string, or the file extension.
 */
function getFileExt(fileName) {
    return fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);
}
/* ****************************************************************************
 * DocType
 * Included:
 * HTML5, HTML4_01_Strict, HTML4_01_Transitional, HTML4_01_Frameset, XHTML_1_0_Strict, XHTML_1_0_Transitional, XHTML_1_0_Frameset, XHTML_1_1, IDPF_2007, XML_1_0
 * If you need more look at these, I will try to stage them as comments in the code,
 * for now they are here, I want to add the MathML to this project, so when I add it,
 * I will update all of them here, and just comment out the others,
 * not that it hurts to have them, but I do not have time to debug them,
 * and I would have to install HTML 2 or 3 to test them, and XHTML Basic 1.1 has limited use.
 * MathML also have many options, which ones to support is unclear to me, but one thing is,
 * I can not use it in ePub, eBook, PDF, or for printed Books,
 * but I do use it to make images that can be used in all these formats,
 * the reason is simple, ePub, eBook, PDF, or for printed Books, do not support JavaScipt,
 * ePub might, but Amazon or Lulu do not suport it, nor Media like Audio or Video,
 * they only support their verion of those specs in a limited way,
 * so it is based on XHTML, but desinged for IDPF_2007 spec, so it is best to use this,
 * as a base, if you want your website to work as an ePub, or Printed Book,
 * if you are willing to do both, that is what this App is designed to do.
 *
 * Others you could include:
 * XHTML Basic 1.1
 * <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
 * MathML 2.0 - DTD:
 * <!DOCTYPE math PUBLIC "-//W3C//DTD MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/mathml2.dtd">
 * MathML 1.01 - DTD:
 * <!DOCTYPE math SYSTEM "http://www.w3.org/Math/DTD/mathml1/mathml.dtd">
 * XHTML + MathML + SVG - DTD:
 * <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0 plus SVG 1.1//EN" "http://www.w3.org/2002/04/xhtml-math-svg/xhtml-math-svg.dtd">
 * XHTML + MathML + SVG Profile (XHTML as the host language) - DTD:
 * <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0 plus SVG 1.1//EN" "http://www.w3.org/2002/04/xhtml-math-svg/xhtml-math-svg.dtd">
 * XHTML + MathML + SVG Profile (Using SVG as the host) - DTD:
 * <!DOCTYPE svg:svg PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0 plus SVG 1.1//EN" "http://www.w3.org/2002/04/xhtml-math-svg/xhtml-math-svg.dtd">
 * SVG 1.1 Full - DTD:
 * <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
 * SVG 1.0 - DTD:
 * <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
 * SVG 1.1 Basic - DTD:
 * <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Basic//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-basic.dtd">
 * SVG 1.1 Tiny - DTD:
 * <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">
 * HTML 2.0 - DTD:
 * <!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN">
 * HTML 3.2 - DTD:
 * <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
 * XHTML Basic 1.0 - DTD:
 * <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.0//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd">
 */
function docType() {
    if (getDebugMessageType() === 1) {
        console.debug("docType()");
    }
    if (getDocType() === "HTML5") {
        return '<!DOCTYPE html>';
    } else if (getDocType() === "HTML4_01_Strict") {
        return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">';
    } else if (getDocType() === "HTML4_01_Transitional") {
        return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';
    } else if (getDocType() === "HTML4_01_Frameset") {
        return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">';
    } else if (getDocType() === "XHTML_1_0_Strict") {
        return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
    } else if (getDocType() === "XHTML_1_0_Transitional") {
        return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
    } else if (getDocType() === "XHTML_1_0_Frameset") {
        return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">';
    } else if (getDocType() === "XHTML_1_1") {
        return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">';
    } else if (getDocType() === "IDPF_2007") {
        return '<?xml version="1.0" encoding="UTF-8" ?>';
    } else if (getDocType() === "XML_1_0") {
        return '<?xml version="1.0" encoding="UTF-8" ?>';
    } else {
        return '<!DOCTYPE html>';
    }
}
/* ****************************************************************************
 * audioCapibility
 * This is a Matrix test for file types based on file extenstions,
 * I did not support wav, in paramater names, so make sure they work if you use them,
 * I will try to write test that will check every browser.
 * For the most part, mp3 file format won the battle, and works on all of them.
 * While wav was an MS concept, they do not support it, so you must include mp3 support,
 * if you want this work, in fact wav is losing more support as time goes on, as is ogg,
 * but I am still hoping that it improves, but I can make the quality better then wav,
 * yet mp3 has more support, so you have to decide to use it, and add the others as support.
 * Note that I do not do browswer sniffing, the below is a hard coded logic matrix.
 *
 * MP3	audio/mpeg
 * OGG	audio/ogg
 * WAV	audio/wav
 */
function audioCapibility(audioType) {
    if (getDebugMessageType() === 1) {
        console.debug("audioCapibility(" + audioType + ")");
    }
    if (getBrowser() === "chrome") {
        if (audioType === "mp3") {
            return true;
        } else if (audioType === "wav") {
            return true;
        } else if (audioType === "ogg") {
            return true;
        }
    } else if (getBrowser() === "firefox") {
        if (audioType === "mp3") {
            return true;
        } else if (audioType === "wav") {
            return true;
        } else if (audioType === "ogg") {
            return true;
        }
    } else if (getBrowser() === "safari") {
        if (audioType === "mp3") {
            return true;
        } else if (audioType === "wav") {
            return true;
        } else if (audioType === "ogg") {
            return true;
        }
    } else if (getBrowser() === "ms") {
        if (audioType === "mp3") {
            return true;
        }
    } else if (getBrowser() === "opera") {
        if (audioType === "mp3") {
            return true;
        } else if (audioType === "wav") {
            return true;
        }
    } else {
        return false;
    }
}
/* ****************************************************************************
 * test
 * 2019-01-14T18:32:57.366666666
 */
function getTimeStamp() {
    if (getDebugMessageType() === 1) {
        console.debug("getTimeStamp()");
    }
    let mydate = new Date();
    return mydate.toISOString();
}
/* ****************************************************************************
 * isXml
 */
function isXml() {
    if (getDocType() === "XHTML_1_0_Strict" || getDocType() === "XHTML_1_0_Transitional" || getDocType() === "XHTML_1_0_Frameset" || getDocType() === "XHTML_1_1" || getDocType() === "IDPF_2007") {
        return true;
    } else {
        return false;
    }
}
/* ****************************************************************************
 * elEnd: Element End
 */
function elEnd() {
    if (getDocType() === "XHTML_1_0_Strict" || getDocType() === "XHTML_1_0_Transitional" || getDocType() === "XHTML_1_0_Frameset" || getDocType() === "XHTML_1_1" || getDocType() === "IDPF_2007") {
        return " />";
    } else {
        return ">";
    }
}
/* ****************************************************************************
 * isHtml5
 */
function isHtml5() {
    if (getDocType() === "HTML5") {
        return true;
    } else {
        return false;
    }
}
/* ****************************************************************************
 * isLulu
 * I am working on publishing my book on Lulu, so I want this to work on it,
 * and Lulu has their program that checks for errors, and one it reports,
 * is that link must end with a </link>, while I can not find any reason for this,
 * other then who ever wrote the orginal program, wanted it done that way,
 * but it is not part of the standard, and will fail validators, but if this is for Lulu,
 * this this must handle all Lulu formating demands.
 */
var myLulu = false;
function getLulu() {
    return myLulu;
}
function setLulu(lulu) {
    myLulu = lulu;
}
function isLuluLink() {
    if (getLulu()) {
        return '</link>';
    } else {
        return elEnd();
    }
}
/* ****************************************************************************
 * a: anchor tag
 * The <a> tag defines a hyperlink, which is used to link from one page to another.
 * target: _blank, _parent, _self, _top, framename
 * css a:link, a:visited, a:link:active, a:visited:active
 * In HTML 4.01, the <a> tag could be either a hyperlink or an anchor.
 * In HTML5, the <a> tag is always a hyperlink, but if it has no href attribute,
 *      it is only a placeholder for a hyperlink.
 * HTML5 has some new attributes, and some HTML 4.01 attributes are no longer supported.
 * Attribute	Value	        Description
 * charset	    char_encoding	Not supported in HTML5.
 *                              Specifies the character-set of a linked document
 * coords       coordinates     Not supported in HTML5.
 *                              Specifies the coordinates of a link
 * download     filename        Specifies that the target will be downloaded when a user clicks on the hyperlink
 *
 * href         URL             Specifies the URL of the page the link goes to
 *
 * hreflang     language_code	Specifies the language of the linked document
 *
 * media        media_query     Specifies what media/device the linked document is optimized for
 *
 * name         section_name	Not supported in HTML5. Use the global id attribute instead.
 *                              Specifies the name of an anchor
 *
 * ping         list_of_URLs	Specifies a space-separated list of URLs to which,
 *                              when the link is followed,
 *                              post requests with the body ping will be sent by the browser (in the background).
 *                              Typically used for tracking.
 *
 * rel          alternate       Specifies the relationship between the current document and the linked document
 *              author
 *              bookmark
 *              external
 *              help
 *              license
 *              next
 *              nofollow
 *              noreferrer
 *              noopener
 *              prev
 *              search
 *              tag
 *
 * rev          text            Not supported in HTML5.
 *                              Specifies the relationship between the linked document and the current document
 *
 * shape	default             Not supported in HTML5.
 *          rect                Specifies the shape of a link
 *          circle
 *          poly
 *
 *
 * target	_blank              Specifies where to open the linked document
 *          _parent
 *          _self
 *          _top
 *          framename
 *
 * type     media_type          Specifies the media type of the linked document
 *
 */
function a(myId, myClass, myStyle, myHref, myTarget, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("a(" + myId + "," + myClass + "," + myStyle + "," + myHref + "," + myTarget + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theHref = "";
    if (myHref !== "") {
        theHref = ' href="' + myHref + '"';
    }
    let theTarget = "";
    if (myTarget !== "") {
        theTarget = ' target="' + myTarget + '"';
    }
    return '<a' + theId + theClassName + theStyle + theHref + '>' + myContent + '</a>';
}
/* ****************************************************************************
 * abbr
 * The <abbr> tag defines an abbreviation or an acronym, like "Mr.", "Dec.", "ASAP", "ATM".
 */
function abbr(myId, myClass, myStyle, myTitle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("abbr(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theTitle = "";
    if (myTitle !== "") {
        theTitle = ' title="' + myTitle + '"';
    }
    return '<abbr' + theId + theClassName + theStyle + theTitle + '>' + myContent + '</abbr>';
}
/* ****************************************************************************
 * acronym
 * The <acronym> tag defines an acronym.
 * Not Supported in HTML5.
 * <acronym title="as soon as possible">ASAP</acronym>
 */
function acronym(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("acronym(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() === "HTML5") {
        return abbr(myId, myClass, myStyle, myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<acronym' + theId + theClassName + theStyle + '>' + myContent + '</acronym>';
}
/* ****************************************************************************
 * address
 * The <address> tag defines the contact information for the author/owner of a document or an article.
 * If the <address> element is inside the <body> element, it represents contact information for the document.
 * If the <address> element is inside an <article> element, it represents contact information for that article.
 * The text in the <address> element usually renders in italic. Most browsers will add a line break before and after the address element.
 */
function address(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("address(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<address' + theId + theClassName + theStyle + '>' + myContent + '</address>';
}
/* ****************************************************************************
 * applet
 * Not Supported in HTML5: Use <embed> or <object> instead.
 * The <applet> tag defines an embedded applet.
 * firefox and safri only
 */
function applet(myId, myClass, myStyle, myCode, myWidth, myHeight, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("applet(" + myId + "," + myClass + "," + myStyle + "," + myCode + "," + myWidth + "," + myHeight + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return object(myId, myClass, myStyle, myCode, myWidth, myHeight, myContent);
    }
    if (getBrowser() === "chrome" || getBrowser() === "ms" || getBrowser() === "opera") {
        // chrome firefox safari ms opera
        return object(myId, myClass, myStyle, myCode, myWidth, myHeight, myContent);
    }

    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theCode = "";
    if (myCode !== "") {
        theCode = ' code="' + myCode + '"';
    }
    let theWidth = "";
    if (myWidth !== "") {
        theWidth = ' width="' + myWidth + '"';
    }
    let theHeight = "";
    if (myHeight !== "") {
        theHeight = ' height="' + myHeight + '"';
    }
    return '<applet' + theId + theClassName + theStyle + theCode + myWidth + myHeight + '></applet>';
}
/* ****************************************************************************
 * area
 * The <area> tag defines an area inside an image-map
 * (an image-map is an image with clickable areas).
 * The <area> element is always nested inside a <map> tag.
 * <area shape="rect" coords="0,0,66,166" alt="Sun" href="sun.html">
 * Attribute	Value	  Description
 * alt          text      Specifies an alternate text for the area. Required if the href attribute is present
 * coords	coordinates	  Specifies the coordinates of the area
 * download	filename	  Specifies that the target will be downloaded when a user clicks on the hyperlink
 * href	URL	Specifies the hyperlink target for the area
 * hreflang	language_code Specifies the language of the target URL
 * media	media query	  Specifies what media/device the target URL is optimized for
 * nohref	value         Not supported in HTML5.
                          Specifies that an area has no associated link
 * rel	alternate, author, bookmark, help, license, next, nofollow, noreferrer, prefetch, prev, search, tag
 *                        Specifies the relationship between the current document and the target URL
 * shape	default, rect, circle,poly
                          Specifies the shape of the area
 * target	_blank, _parent, _self, _top, framename
                          Specifies where to open the target URL
 * type     media_type	  Specifies the media type of the target URL
 */
function area(myId, myShape, myCoords, myAlt, myHref, myTarget) {
    if (getDebugMessageType() === 1) {
        console.debug("area(" + myId + "," + myShape + "," + myCoords + "," + myAlt + "," + myHref + "," + myTarget + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theShape = "";
    if (myShape !== "") {
        theShape = ' shape="' + myShape + '"';
    }
    let theCoords = "";
    if (myCoords !== "") {
        theCoords = ' coords="' + myCoords + '"';
    }
    let theAlt = "";
    if (myAlt !== "") {
        theAlt = ' alt="' + myAlt + '"';
    }
    let theHref = "";
    if (myHref !== "") {
        theHref = ' href="' + myHref + '"';
    }
    let theTarget= "";
    if (myTarget !== "") {
        theTarget = ' target="' + myTarget + '"';
    }
    return '<area' + theId + theShape + theCoords + theAlt + theHref + theTarget + elEnd();
}
/* ****************************************************************************
 * article
 * The <article> tag specifies independent, self-contained content.
 */
function article(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("article(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return p(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<article' + theId + theClassName + theStyle + '>' + myContent + '</article>';
}
/* ****************************************************************************
 * aside
 * The <aside> tag defines some content aside from the content it is placed in.
 */
function aside(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("aside(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return p(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<aside' + theId + theClassName + theStyle + '>' + myContent + '</aside>';
}
/* ****************************************************************************
 * audio
 * FIXME: Make more flexable and rich
 * The <audio> tag defines sound, such as music or other audio streams.
 * <audio controls>
 *   <source src="horse.ogg" type="audio/ogg">
 *   <source src="horse.mp3" type="audio/mpeg">
 *   Your browser does not support the audio tag.
 * </audio>
 *
 * <script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>
 * <a href="LINK.mp3">Song 1</a>
 *
 * Attribute	Value       Description
 * autoplay     autoplay	Specifies that the audio will start playing as soon as it is ready
 * controls     controls	Specifies that audio controls should be displayed (such as a play/pause button etc)
 * loop         loop        Specifies that the audio will start over again, every time it is finished
 * muted        muted       Specifies that the audio output should be muted
 * preload      auto, metadata, none
                            Specifies if and how the author thinks the audio should be loaded when the page loads
 * src          URL         Specifies the URL of the audio file
 */
function audio(myId, mySourceOgg, mySourceMp3, myControls, myAutoplay, myLoop, myMuted, myLable) {
    if (getDebugMessageType() === 1) {
        console.debug("audio(" + myId + "," + mySourceOgg + "," + mySourceMp3 + "," + myControls + "," + myAutoplay + "," + myLoop + "," + myMuted + "," + myLable + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theSourceOgg = "";
    let theSourceMp3 = "";
    if (getDocType() !== "HTML5") {
        if (getYahooAudioPlayer()) {
            return a(myId, "", "", theSourceMp3, "", myLable);
        }
        let myJavaScript = "";
        // FIXME Make a function to create this
        if (audioCapibility("ogg")) {
            if (mySourceOgg !== "") {
                theSourceOgg = ' data="' + mySourceOgg + '"';
            }
        }
        if (mySourceMp3 !== "") {
            theSourceMp3 = ' data="' + theSourceMp3 + '"';
        }
        if (getDocType() !== "IDPF_2007") {
            return a(myId, "", "", theSourceMp3, "", myLable);
        }
        myJavaScript = '<object width="100" height="33" id="' + myId + '_obj"' + theSourceOgg + theSourceMp3 + elEnd();
        return '<button' + theId + ' class="audio" type="button" onclick="' + myJavaScript + '">' + myLable + '</button><button onclick="' + myId + '_obj">!</button>';
    }
    if (audioCapibility("ogg")) {
        theSourceOgg = source(myId, mySourceOgg);
    }
    theSourceMp3 = source(myId, mySourceMp3);
    let theAutoplay = "";
    if (myAutoplay !== "") {
        theAutoplay = ' autoplay="' + myAutoplay + '"';
    }
    let theLoop = "";
    if (myLoop !== "") {
        theLoop = ' loop="' + myLoop + '"';
    }
    let theMuted = "";
    if (myMuted !== "") {
        theMuted = ' muted="' + myMuted + '"';
    }
    let theControls = "";
    if (myControls !== "") {
        theControls = ' controls="' + myControls + '"';
    }

    return '<audio' + theControls + theId + theSourceOgg + theSourceMp3 + theAutoplay + theLoop + theMuted + '>' + theSourceOgg + theSourceMp3 + '</audio>';
}
/* ****************************************************************************
 * b: bold
 * The <b> tag specifies bold text.
 * css: font-weight: bold;
 * Tips and Notes
 * Note: According to the HTML 5 specification,
 * the <b> tag should be used as a LAST resort when no other tag is more appropriate.
 * The HTML 5 specification states that headings should be denoted with the <h1> to <h6> tags,
 * emphasized text should be denoted with the <em> tag,
 * important text should be denoted with the <strong> tag,
 * and marked/highlighted text should use the <mark> tag.
 * Tip: You can also use the CSS "font-weight" property to set bold text.
 */
function b(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("b(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<b' + theId + theClassName + theStyle + '>' + myContent + '</b>';
}
/* ****************************************************************************
 * base
 * The <base> tag specifies the base URL/target for all relative URLs in a document.
 * There can be at maximum one <base> element in a document,
 * and it must be inside the <head> element.
 * <base href="http://domain.com/images/" target="_blank" />
 * Attribute	Value	Description
 * href         URL     Specifies the base URL for all relative URLs in the page
 * target	_blank, _parent, _self, _top, framename
 */
function base(myId, myHref, myTarget) {
    if (getDebugMessageType() === 1) {
        console.debug("base(" + myId + "," + myHref + "," + myTarget + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theHref = "";
    if (myHref !== "") {
        theHref = ' href="' + myHref + '"';
    }
    let theTarget = "";
    if (myTarget !== "") {
        theTarget = ' target="' + myTarget + '"';
    }
    return '<base' + theId + theHref + theTarget + elEnd();
}
/* ****************************************************************************
 * basefont
 * The <basefont> tag specifies a default text-color,
 * font-size, or font-family for all the text in a document.
 * Not Supported in HTML5.
 * <basefont color="red" face="verdana" size="5">
 * face: font family
 */
function basefont(myId, myColor, myFace, mySize) {
    if (getDebugMessageType() === 1) {
        console.debug("basefont(" + myId + "," + myColor + "," + myFace + "," + mySize + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theColor = "";
    if (myColor !== "") {
        theColor = ' color="' + myColor + '"';
    }
    let theFace = "";
    if (myFace !== "") {
        theFace = ' face="' + myFace + '"';
    }
    let theSize = "";
    if (mySize !== "") {
        theSize = ' size="' + mySize + '"';
    }
    return '<basefont' + theId + theColor + theFace + theSize + elEnd();
}
/* ****************************************************************************
 * bdi
 * BDI stands for Bi-Directional Isolation.
 * The <bdi> tag isolates a part of text that might be formatted in a different direction from other text outside it.
 * This element is useful when embedding user-generated content with an unknown directionality.
 * ms does not support this tag
 */
function bdi(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("bdi(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return bdo(myId, myClass, myStyle, myContent);
    }
    if (getBrowser() === "ms") {
        // chrome firefox safari ms opera
        return bdo(myId, myClass, myStyle, myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<bdi' + theId + theClassName + theStyle + '>' + myContent + '</bdi>';
}
/* ****************************************************************************
 * bdo
 * bdo stands for Bi-Directional Override.
 * The <bdo> tag is used to override the current text direction.
 * dir: ltr, rtl
 * <bdo dir="rtl">This text will go right-to-left.</bdo>
 */
function bdo(myId, myClass, myDir, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("bdo(" + myId + "," + myClass + "," + myDir + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theDir = "";
    if (myDir !== "") {
        theDir = ' dir="' + myDir + '"';
    }
    return '<bdo' + theId + theClassName + theDir + '>' + myContent + '</bdo>';
}
/* ****************************************************************************
 * big
 * Not Supported in HTML5.
 * The <big> tag defines bigger text.
 * <p><big>Bigger text</big></p>
 */
function big(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("big(" + myId + "," + myClass + "," + myStyle + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return span(myId, myClass, "font-size: larger;", "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<big' + theId + theClassName + theStyle + '>' + myContent + '</big>';
}
/* ****************************************************************************
 * blockquote
 * cite	URL	Specifies the source of the quotation
 * The <blockquote> tag specifies a section that is quoted from another source.
 * Browsers usually indent <blockquote> elements.
 * Tip: Use <q> for inline (short) quotations.
 * In HTML 4.01, the <blockquote> tag defines a long quotation.
 * In HTML5, the <blockquote> tag specifies a section that is quoted from another source.
 * Note: To validate a <blockquote> element as XHTML, it must contain only other block-level elements, like this:
 * <blockquote>
 *      <p>Here is a long quotation here is a long quotation.</p>
 * </blockquote>
 */
function blockquote(myId, myClass, myCite, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("blockquote(" + myId + "," + myClass + "," + myCite + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theCite = "";
    if (myCite !== "") {
        theCite = ' cite="' + myCite + '"';
    }
    return '<blockquote' + theId + theClassName + theCite + '>' + myContent + '</blockquote>';
}
/* ****************************************************************************
 * body
 * The <body> tag defines the document's body.
 * The <body> element contains all the contents of an HTML document,
 * such as text, hyperlinks, images, tables, lists, etc.
 * All layout attributes are removed in HTML5.
 * Attribute	Value	Description
 * alink        color	Not supported in HTML5.
 *                      Specifies the color of an active link in a document
 * background	URL     Not supported in HTML5.
 *                      Specifies a background image for a document
 * bgcolor      color	Not supported in HTML5.
 *                      Specifies the background color of a document
 * link         color	Not supported in HTML5.
 *                      Specifies the color of unvisited links in a document
 * text         color	Not supported in HTML5.
 *                      Specifies the color of the text in a document
 * vlink        color	Not supported in HTML5.
 *                      Specifies the color of visited links in a document
 */
function bodyStart(myId, myClass, myStyle) {
    if (getDebugMessageType() === 1) {
        console.debug("bodyStart(" + myId + "," + myClass + "," + myStyle + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<body' + theId + theClassName + theStyle + '>';
}
/* ****************************************************************************
 * bodyEnd
 */
function bodyEnd() {
    if (getDebugMessageType() === 1) {
        console.debug("bodyEnd()");
    }
    return '</body>';
}
/* ****************************************************************************
 * br
 * The <br> tag inserts a single line break.
 * The <br> tag is an empty tag which means that it has no end tag.
 * In HTML, the <br> tag has no end tag.
 * In XHTML, the <br> tag must be properly closed, like this: <br />.
 */
function br() {
    if (getDebugMessageType() === 1) {
        console.debug("br()");
    }
    return '<br' + elEnd();
}
/* ****************************************************************************
 * button
 * <button type="button" onclick="alert('Hello world!')">Click Me!</button>
 * HTML5 has the following new attributes:
 * autofocus, form, formaction, formenctype, formmethod, formnovalidate, and formtarget
 * Note space is required in myAttribute: ' autofocus'
 * Attribute        Value           Description
 * autofocus        autofocus       Specifies that a button should automatically get focus when the page loads
 * disabled         disabled        Specifies that a button should be disabled
 * form             form_id         Specifies one or more forms the button belongs to
 * formaction       URL             Specifies where to send the form-data when a form is submitted. Only for type="submit"
 * formenctype      application/x-www-form-urlencoded
 *                  multipart/form-data
 *                  text/plain
 *                                  Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
 * formmethod       get, post       Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
 * formnovalidate	formnovalidate	Specifies that the form-data should not be validated on submission. Only for type="submit"
 * formtarget	_blank, _self, _parent, _top, framename
 *                                  Specifies where to display the response after submitting the form. Only for type="submit"
 * name     name                    Specifies a name for the button
 * type     button, reset, submit   Specifies the type of button
 * value	text                    Specifies an initial value for the button
 */
function button(myId, myClass, myType, myAttribute, myOnclick, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("button(" + myId + "," + myClass + "," + myType + "," + myAttribute + "," + myOnclick + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theType = "";
    if (myType !== "") {
        theType = ' type="' + myType + '"';
    }
    let theOnclick = "";
    if (myOnclick !== "") {
        theOnclick = ' onclick="' + myOnclick + '"';
    }
    let theAttribute = "";
    if (myAttribute !== "") {
        if (myAttribute.indexOf(' ') !== 0) theAttribute = ' ' + myAttribute;
    }
    return '<button' + theId + theClassName + theType + theAttribute + theOnclick + '>' + myContent + '</button>';
}
/* ****************************************************************************
 * canvas
 * The <canvas> tag is used to draw graphics, on the fly,
 * via scripting (usually JavaScript).
 * The <canvas> tag is only a container for graphics,
 * you must use a script to actually draw the graphics.
 * <canvas id="myCanvas">Your browser does not support the HTML5 canvas tag.</canvas>
 * The <canvas> tag is new in HTML5.
 * Attribute	Value	Description
 * height       pixels	Specifies the height of the canvas
 * width        pixels	Specifies the width of the canvas
 */
function canvas(myId, myClass, myStyle, myWidth, myHeight, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("canvas(" + myId + "," + myClass + "," + myStyle + "," + myWidth + "," + myHeight + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME: can this be done with an object and JavaScript?
        return object(myId, myClass, myStyle, "", myWidth, myHeight, myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theWidth = "";
    if (myWidth !== "") {
        theWidth = ' width="' + myWidth + '"';
    }
    let theHeight = "";
    if (myHeight !== "") {
        theHeight = ' height="' + myHeight + '"';
    }
    return '<canvas' + theId + theClassName + theStyle + theWidth + theHeight + '>' + myContent + '</canvas>';
}
/* ****************************************************************************
 * caption
 * <table>
 *   <caption>Monthly savings</caption>
 *   <tr>
 *     <th>Month</th>
 *     <th>Savings</th>
 *   </tr>
 *   <tr>
 *     <td>January</td>
 *     <td>$100</td>
 *   </tr>
 * </table>
 * The <caption> tag defines a table caption.
 * The <caption> tag must be inserted immediately after the <table> tag.
 * Note: You can specify only one caption per table.
 * The align attribute is removed from HTML5
 * Tip: By default, a table caption will be center-aligned above a table.
 *      However, the CSS properties text-align and caption-side can be used to align and place the caption.
 * The align attribute is removed from HTML5.
 * align: left, right, top, bottom
 */
function caption(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("caption(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<caption' + theId + theClassName + theStyle + '>' + myContent + '</caption>';
}
/* ****************************************************************************
 * center
 * The <center> tag is used to center-align text.
 * The <center> tag is not supported in HTML5. Use CSS instead.
 */
function center(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("center(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return span(myId, myClass, "text-align: center;", "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<center' + theId + theClassName + theStyle + '>' + myContent + '</center>';
}
/* ****************************************************************************
 * cite
 * The <cite> tag defines the title of a work (e.g. a book, a song, a movie, a TV show, a painting, a sculpture, etc.).
 * Note: A person's name is not the title of a work.
 * In HTML5, the <cite> tag defines the title of a work.
 * In HTML 4.01, the <cite> tag defines a citation.
 */
function cite(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("cite(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<cite' + theId + theClassName + theStyle + '>' + myContent + '</cite>';
}
/* ****************************************************************************
 * code
 * The <code> tag is a phrase tag. It defines a piece of computer code.
 * Tip: This tag is not deprecated, but it is possible to achieve richer effect with CSS.
 */
function code(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("code(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<code' + theId + theClassName + theStyle + '>' + myContent + '</code>';
}
/* ****************************************************************************
 * col
 * Most of the attributes in HTML 4.01 are not supported in HTML5.
 * The <col> tag specifies column properties for each column within a <colgroup> element.
 * The <col> tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.
 * In HTML the <col> tag has no end tag.
 * In XHTML, the <col> tag must be properly closed.
 * Attribute	Value	Description
 * align: left, right, center, justify, char
 *                      Not supported in HTML5.
 *                      Specifies the alignment of the content related to a <col> element
 * char     character	Not supported in HTML5.
 *                      Specifies the alignment of the content related to a <col> element to a character
 * charoff	number      Not supported in HTML5.
 *                      Specifies the number of characters the content will be aligned from the character specified by the char attribute
 * span     number      Specifies the number of columns a <col> element should span
 * valign: top, middle, bottom, baseline
 *                      Not supported in HTML5.
 *                      Specifies the vertical alignment of the content related to a <col> element
 * width: %, pixels, relative_length
 *                      Not supported in HTML5.
 *                      Specifies the width of a <col> element
 */
function col(myId, myClass, myStyle, mySpan) {
    if (getDebugMessageType() === 1) {
        console.debug("col(" + myId + "," + myClass + "," + myStyle + "," + mySpan + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theSpan = "";
    if (mySpan !== "") {
        theSpan = ' span="' + mySpan + '"';
    }
    return '<col' + theId + theClassName + theStyle + theSpan + elEnd();
}
/* ****************************************************************************
 * colgroup
 * The <colgroup> tag specifies a group of one or more columns in a table for formatting.
 * The <colgroup> tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.
 * Note: The <colgroup> tag must be a child of a <table> element, after any <caption> elements and before any <thead>, <tbody>, <tfoot>, and <tr> elements.
 * Tip: To define different properties to a column within a <colgroup>, use the <col> tag within the <colgroup> tag.
 * Most of the attributes in HTML 4.01 are not supported in HTML5.
 * Attribute	Value	Description
 * align: left, right, center, justify, char
 *                      Not supported in HTML5.
 *                      Specifies the alignment of the content related to a <col> element
 * char     character	Not supported in HTML5.
 *                      Specifies the alignment of the content related to a <col> element to a character
 * charoff	number      Not supported in HTML5.
 *                      Specifies the number of characters the content will be aligned from the character specified by the char attribute
 * span     number      Specifies the number of columns a <col> element should span
 * valign: top, middle, bottom, baseline
 *                      Not supported in HTML5.
 *                      Specifies the vertical alignment of the content related to a <col> element
 * width: %, pixels, relative_length
 *                      Not supported in HTML5.
 *                      Specifies the width of a <col> element
 */
function colgroup(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("colgroup(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<colgroup' + theId + theClassName + theStyle + '>' + myContent + '</colgroup>';
}
/* ****************************************************************************
 * data
 * The <data> tag links the given content with a machine-readable translation.
 * This element provides both a machine-readable value for data processors, and a human-readable value for rendering in a browser.
 * Tip: If the content is time- or date-related, the <time> element must be used instead.
 * not supported in safri
 * The <data> tag is new in HTML5.
 * value machine-readable format Specifies the machine-readable translation of the content of the element
 */
function data(myId, myClass, myValue, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("data(" + myId + "," + myClass + "," + myValue + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME a better way to do this?
        return span(myId, myClass, 'value: ' + myValue, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theValue = "";
    if (myValue !== "") {
        theValue = ' value="' + myValue + '"';
    }
    return '<data' + theId + theClassName + theValue + '>' + myContent + '</data>';
}
/* ****************************************************************************
 * datalist
 * The <datalist> tag is new in HTML5.
 * The <datalist> tag specifies a list of pre-defined options for an <input> element.
 * The <datalist> tag is used to provide an "autocomplete" feature on <input> elements. Users will see a drop-down list of pre-defined options as they input data.
 * Use the <input> element's list attribute to bind it together with a <datalist> element.
 *
 * <input list="browsers">
 *
 * <datalist id="browsers">
 *   <option value="Internet Explorer">
 *   <option value="Firefox">
 *   <option value="Chrome">
 *   <option value="Opera">
 *   <option value="Safari">
 * </datalist>
 *
 */
function datalist(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("datalist(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME how to simulate this?
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<datalist' + theId + theClassName + theStyle + '>' + myContent + '</datalist>';
}
/* ****************************************************************************
 * dd
 * The <dd> tag is used to describe a term/name in a description list.
 * The <dd> tag is used in conjunction with <dl> (defines a description list) and <dt> (defines terms/names).
 * Inside a <dd> tag you can put paragraphs, line breaks, images, links, lists, etc.
 */
function dd(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("dd(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<dd' + theId + theClassName + theStyle + '>' + myContent + '</dd>';
}
/* ****************************************************************************
 * del
 * The <del> tag defines text that has been deleted from a document.
 * Tip: Also look at the <ins> tag to markup inserted text.
 * Tip: Use <del> and <ins> to markup updates and modifications in a document. Browsers will normally strike a line through deleted text and underline inserted text.
 * Attribute	Value                   Description
 * cite         URL                     Specifies a URL to a document that explains the reason why the text was deleted
 * datetime     YYYY-MM-DDThh:mm:ssTZD	Specifies the date and time of when the text was deleted
 * <p>My favorite color is <del>blue</del> <ins>red</ins>!</p>
 */
function del(myId, myClass, myStyle, myCite, myDatetime, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("del(" + myId + "," + myClass + "," + myStyle + "," + myCite + "," + myDatetime + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theCite = "";
    if (myCite !== "") {
        theCite = ' cite="' + myCite + '"';
    }
    let theDatetime = "";
    if (myDatetime !== "") {
        theDatetime = ' datetime="' + myDatetime + '"';
    }
    return '<del' + theId + theClassName + theStyle + theCite + myDatetime + '>' + myContent + '</del>';
}
/* ****************************************************************************
 * details
 * The <details> tag is new in HTML5.
 * The <details> tag specifies additional details that the user can view or hide on demand.
 * The <details> tag can be used to create an interactive widget that the user can open and close. Any sort of content can be put inside the <details> tag.
 * The content of a <details> element should not be visible unless the open attribute is set.
 * <details>
 *   <summary>Copyright 1999-2018.</summary>
 *   <p> - by Refsnes Data. All Rights Reserved.</p>
 *   <p>All content and graphics on this web site are the property of x.</p>
 * </details>
 * open:	open	Specifies that the details should be visible (open) to the user
 * ms does not support this element
 * Tip: The <summary> tag is used to specify a visible heading for the details.
 * The heading can be clicked to view/hide the details.
 */
function details(myId, myClass, myStyle, myOpen, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("details(" + myId + "," + myClass + "," + myStyle + "," + myOpen + "," + myContent + ")");
    }
    // FIXME how to simpulate this
    if (getDocType() !== "HTML5") {
        return p(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    if (getBrowser() === "ms") {
        // chrome firefox safari ms opera
        return p(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theOpen = "";
    if (myOpen !== "") {
        theOpen = ' style="' + myOpen + '"';
    }
    return '<details' + theId + theClassName + theStyle + theOpen + '>' + myContent + '</details>';
}
/* ****************************************************************************
 * dfn
 * The term inside the <dfn> tag can be any of the following:
 * 1. The content of the <dfn> element (without a title attribute):
 * <p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>
 * 2. The title attribute of the <dfn> tag:
 * <p><dfn title="HyperText Markup Language">HTML</dfn> is a markup language.</p>
 * 3. The title attribute of an <abbr> tag inside the <dfn> element:
 * <p><dfn><abbr title="HyperText Markup Language">HTML</abbr></dfn> is the standard markup language for creating web pages.</p>
 * The <dfn> tag represents the defining instance of a term in HTML.
 * The defining instance is often the first use of a term in a document.
 * The nearest parent of the <dfn> tag must also contain the definition/explanation for the term inside <dfn>.
 */
function dfn(myId, myClass, myStyle, myContent, myTitle) {
    if (getDebugMessageType() === 1) {
        console.debug("dfn(" + myId + "," + myClass + "," + myStyle + "," + myContent + "," + myTitle + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theTitle = "";
    if (myTitle !== "") {
        theTitle = ' title="' + myTitle + '"';
    }
    return '<dfn' + theId + theClassName + theStyle + theTitle + '>' + myContent + '</dfn>';
}
/* ****************************************************************************
 * dialog
 * The <dialog> tag is new in HTML5.
 * The dialog tag is not supported in ms Edge/Internet Explorer.
 * open: open	Specifies that the dialog element is active and that the user can interact with it
 */
function dialog(myId, myClass, myOpen, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("dialog(" + myId + "," + myClass + "," + myOpen + "," + myContent + ")");
    }
    // FIXME Simpulation
    if (getDocType() !== "HTML5") {
        return span(myId, myClass, "border: 3px solid black;padding: 3px;", "", "", "", "", myContent);
    }
    if (getBrowser() === "ms") {
        // chrome firefox safari ms opera
        return span(myId, myClass, "border: 3px solid black;padding: 3px;", "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theOpen = "";
    if (myOpen !== "") {
        theOpen = ' open="' + myOpen + '"';
    }
    return '<dialog' + theId + theClassName + theOpen + '>' + myContent + '</dialog>';
}
/* ****************************************************************************
 * dir
 * Not Supported in HTML5.
 * <dir>
 *   <li>html</li>
 *   <li>xhtml</li>
 *   <li>css</li>
 * </dir>
 * The <dir> tag is not supported in HTML5. Use <ul> or CSS instead.
 * The <dir> tag is used to list directory titles.
 * compact	compact	Not supported in HTML5.
 * Specifies that the list should render smaller than normal
 */
function dir(myId, myClass, myStyle, myContent, myCompact) {
    if (getDebugMessageType() === 1) {
        console.debug("dir(" + myId + "," + myClass + "," + myStyle + "," + myContent + "," + myCompact + ")");
    }
    if (getDocType() !== "HTML5") {
        return ul(myId, myClass, myStyle, myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theCompact = "";
    if (myCompact !== "") {
        theCompact = ' compact="' + myCompact + '"';
    }
    return '<dir' + theId + theClassName + theStyle + theCompact + '>' + myContent + '</dir>';
}
/* ****************************************************************************
 * div
 * The <div> tag defines a division or a section in an HTML document.
 * The <div> element is often used as a container for other HTML elements to style them with CSS or to perform certain tasks with JavaScript.
 * <div style="background-color:lightblue">
 *   <h3>This is a heading</h3>
 *   <p>This is a paragraph.</p>
 * </div>
 * Tip: The <div> element is very often used together with CSS, to layout a web page.
 * Note: By default, browsers always place a line break before and after the <div> element. However, this can be changed with CSS.
 * align: left, right, center, justify Not supported in HTML5.
 * Globals: id, class, style, dir, lang, title
 */
function div(myId, myClass, myStyle, myAlign, myDir, myLang, myTitle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("div(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myDir + "," + myLang + "," + myTitle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theTitle = "";
    if (myTitle !== "") {
        theTitle = ' style="' + myTitle + '"';
    }
    let theDir = "";
    if (myDir !== "") {
        theDir = ' dir="' + myDir + '"';
    }
    let theLang = "";
    if (myLang !== "") {
        theLang = ' lang="' + myLang + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style=" text-align: ' + myAlign + ';' + myStyle + '"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        theStyle = ' style=" text-align: ' + myAlign + ';"';
    }
    return '<div' + theId + theClassName + theStyle + theDir + theLang + theTitle + '>' + myContent + '</div>';
}
/* ****************************************************************************
 * dl
 * The <dl> tag defines a description list.
 * The <dl> tag is used in conjunction with <dt> (defines terms/names) and <dd> (describes each term/name).
 * <dl>
 *   <dt>Coffee</dt>
 *   <dd>Black hot drink</dd>
 *   <dt>Milk</dt>
 *   <dd>White cold drink</dd>
 * </dl>
 * In HTML 4.01, the <dl> tag defines a definition list.
 * In HTML 5, the <dl> tag defines a description list.
 */
function dl(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("dl(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<dl' + theId + theClassName + theStyle + '>' + myContent + '</dl>';
}
/* ****************************************************************************
 * dt
 * The <dt> tag defines a term/name in a description list.
 * The <dt> tag is used in conjunction with <dl> (defines a description list) and <dd> (describes each term/name).
 * In HTML 4.01, the <dt> tag defines an item in a definition list.
 * In HTML5, the <dt> tag defines a term/name in a description list.
 * <dl>
 *   <dt>Coffee</dt>
 *   <dd>Black hot drink</dd>
 *   <dt>Milk</dt>
 *   <dd>White cold drink</dd>
 * </dl>
 */
function dt(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("dt(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<dt' + theId + theClassName + theStyle + '>' + myContent + '</dt>';
}
/* ****************************************************************************
 * em
 * <em>Emphasized text</em>
 * The <em> tag is a phrase tag. It renders as emphasized text.
 * Tip: This tag is not deprecated, but it is possible to achieve richer effect with CSS.
 */
function em(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("em(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<em' + theId + theClassName + theStyle + '>' + myContent + '</em>';
}
/* ****************************************************************************
 * embed
 * <embed type="video/webm" src="/media/examples/flower.mp4" width="250" height="200" />
 * <embed src="helloworld.swf">
 * The <embed> tag defines a container for an external application or interactive content (a plug-in).
 * The <embed> tag is new in HTML5.
 * Note: Many web browsers have supported the <embed> tag for a long time.
 * However, the <embed> tag has not been a part of the HTML 4 specification.
 * The <embed> tag is new in HTML5, and will validate in an HTML5 page.
 * However, if you use it in an HTML 4 page, the page will not validate.
 * Attribute	Value	Description
 * height       pixels	Specifies the height of the embedded content
 * src          URL     Specifies the address of the external file to embed
 * type     media_type	Specifies the media type of the embedded content
 * width        pixels	Specifies the width of the embedded content
 */
function embed(myId, myClass, myStyle, myType, mySrc, myWidth, myHeight) {
    if (getDebugMessageType() === 1) {
        console.debug("embed(" + myId + "," + myClass + "," + myStyle + "," + myType + "," + mySrc + "," + myWidth + "," + myHeight + ")");
    }
    if (getDocType() !== "HTML5" && ! getOverRideDocType()) {
        // this needs an override
        return object(myId, myClass, myStyle, mySrc, myWidth, myHeight, "");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theType = "";
    if (myType !== "") {
        theType = ' type="' + myType + '"';
    }
    let theSrc = "";
    if (mySrc !== "") {
        theSrc = ' src="' + mySrc + '"';
    }
    let theWidth = "";
    if (myWidth !== "") {
        theWidth = ' width="' + myWidth + '"';
    }
    let theHeight = "";
    if (myHeight !== "") {
        theHeight = ' height="' + myHeight + '"';
    }
    return '<embed' + theId + theClassName + theStyle + theType + theSrc + theWidth + theHeight + '/ >';
}
/* ****************************************************************************
 * fieldset
 * <form>
 *   <fieldset>
 *     <legend>Personalia:</legend>
 *     Name: <input type="text"><br>
 *     Email: <input type="text"><br>
 *     Date of birth: <input type="text">
 *   </fieldset>
 * </form>
 * The <fieldset> tag is used to group related elements in a form.
 *
 * The <fieldset> tag draws a box around the related elements.
 * Tip: The <legend> tag defines a caption for the <fieldset> element.
 * HTML5 has added new attributes for <fieldset>.
 * Attribute	Value	Description
 * disabled	   disabled	Specifies that a group of related form elements should be disabled
 * form         form_id	Specifies one or more forms the fieldset belongs to
 * name         text	Specifies a name for the fieldset
 */
function fieldset(myId, myName, myClass, myStyle, myDisabled, myForm, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("fieldset(" + myId + "," + myName + "," + myClass + "," + myStyle + "," + myDisabled + "," + myForm + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"'; // Name and ID do not need to be the same
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theDisabled = "";
    let theForm = "";
    let theName = "";
    if (getDocType() === "HTML5") {
        if (myDisabled !== "") {
            theDisabled = ' disabled="' + myDisabled + '"';
        }
        if (myForm !== "") {
            theForm = ' form="' + myForm + '"';
        }
        if (myName !== "") {
            theName = ' name="' + myName + '"';
        }
    }
    return '<fieldset' + theId + theClassName + theStyle + theDisabled + theForm + theName + '>' + myContent + '</fieldset>';
}
/* ****************************************************************************
 * figcaption
 * <figure>
 *   <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
 *   <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
 * </figure>
 * The <figcaption> tag defines a caption for a <figure> element.
 *
 * The <figcaption> element can be placed as the first or last child of the <figure> element.
 * The <figcaption> tag is new in HTML5.
 */
function figcaption(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("figcaption(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return span(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<figcaption' + theId + theClassName + theStyle + '>' + myContent + '</figcaption>';
}
/* ****************************************************************************
 * figure
 * <figure>
 *   <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
 * </figure>
 * The <figure> tag specifies self-contained content,
 * like illustrations, diagrams, photos, code listings, etc.
 *
 * While the content of the <figure> element is related to the main flow,
 * its position is independent of the main flow,
 * and if removed it should not affect the flow of the document.
 * The <figure> tag is new in HTML5.
 * Tip: The <figcaption> element is used to add a caption for the <figure> element.
 */
function figure(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("figure(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return span(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<figure' + theId + theClassName + theStyle + '>' + myContent + '</figure>';
}
/* ****************************************************************************
 * font
 * <font face="verdana" color="green" size="100px">This is some text!</font>
 * The <font> tag is not supported in HTML5. Use CSS instead.
 * The <font> tag specifies the font face, font size, and color of text.
 *
 * Attribute	Value       Description
 * color        rgb(x,x,x)  Not supported in HTML5.
 *              #xxxxxx     Specifies the color of text
 *              colorname
 * face     font_family     Not supported in HTML5.
 *                          Specifies the font of text
 * size     number          Not supported in HTML5.
 *                          Specifies the size of text
 */
function font(myId, myClass, myStyle, myColor, myFace, mySize, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("font(" + myId + "," + myClass + "," + myStyle + "," + myColor + "," + myFace + "," + mySize + "," + myContent + ")");
    }
    if (getDocType() === "HTML5") {
        return span(myId, myClass, "font-size: " + mySize + ";color: " + myColor + ";font-family: " + myFace + ";", "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theColor = "";
    if (myColor !== "") {
        theColor = ' color="' + myColor + '"';
    }
    let theFace = "";
    if (myFace !== "") {
        theFace = ' face="' + myFace + '"';
    }
    let theSize = "";
    if (mySize !== "") {
        theSize = ' size="' + mySize + '"';
    }
    return '<font' + theId + theClassName + theStyle + theSize + theFace + theColor + '>' + myContent + '</font>';
}
/* ****************************************************************************
 * footer
 * <footer>
 *   <p>Posted by: Hege Refsnes</p>
 *   <p>Contact information: <a href="mailto:someone@example.com">
 *   someone@example.com</a>.</p>
 * </footer>
 *
 * The <footer> tag defines a footer for a document or section.
 * A <footer> element should contain information about its containing element.
 * A <footer> element typically contains:
 *      authorship information
 *      copyright information
 *      contact information
 *      sitemap
 *      back to top links
 *      related documents
 * You can have several <footer> elements in one document.
 * The <footer> tag is new in HTML5.
 * Tip: Contact information inside a <footer> element should go inside an <address> tag.
 */
function footer(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("footer(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return p(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<footer' + theId + theClassName + theStyle + '>' + myContent + '</footer>';
}
/* ****************************************************************************
 * form
 * <form action="/action_page.php" method="get">
 *   First name: <input type="text" name="fname"><br>
 *   Last name: <input type="text" name="lname"><br>
 *   <input type="submit" value="Submit">
 * </form>
 * the <form> tag is used to create an HTML form for user input.
 * The <form> element can contain one or more of the following form elements:
 *   <input>
 *   <textarea>
 *   <button>
 *   <select>
 *   <option>
 *   <optgroup>
 *   <fieldset>
 *   <label>
 *   <output>
 * HTML5 has added two new attributes:
 *      autocomplete and novalidate, and removed the accept attribute.
 * Attribute	  Value         Description
 * accept	      file_type     Not supported in HTML5.
 *                              Specifies a comma-separated list of file types  that the server accepts (that can be submitted through the file upload)
 * accept-charset character_set	Specifies the character encodings that are to be used for the form submission
 * action         URL           Specifies where to send the form-data when a form is submitted
 * autocomplete	  on, off       Specifies whether a form should have autocomplete on or off
 * enctype        application/x-www-form-urlencoded
 *                multipart/form-data
 *                text/plain
 *                              Specifies how the form-data should be encoded when submitting it to the server (only for method="post")
 * method         get, post     Specifies the HTTP method to use when sending form-data
 * name           text          Specifies the name of a form
 * novalidate	  novalidate	Specifies that the form should not be validated when submitted
 * target: _blank, _self, _parent, _top
 *                              Specifies where to display the response that is received after submitting the form
 */
function form(myName, myClass, myStyle, myAction, myMethod, myEnctype, myCharset, myAutoComplete, myAccept, isNovalidate, myTarget, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("form(" + myName + "," + myClass + "," + myStyle + "," + myAction + "," + myMethod  + "," + myEnctype + "," + myCharset  + "," + myAutoComplete + "," + myAccept + "," + isNovalidate + "," + myTarget  + "," + myContent + ")");
    }
    let theId = "";
    if (myName !== "") {
        theId = ' id="' + myName + '" name="' + myName + '"' ;
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theAction = "";
    if (myAction !== "") {
        theAction = ' action="' + myAction + '"';
    }
    let theMethod = "";
    if (myMethod !== "") {
        theMethod = ' method="' + myMethod + '"';
    }
    let theEnctype = "";
    if (myEnctype !== "") {
        theEnctype = ' enctype="' + myEnctype + '"';
    }
    let theCharset = "";
    if (myCharset !== "") {
        theCharset = ' accept-charset="' + myCharset + '"';
    }
    let theAutocomplete = "";
    if (getDocType() === "HTML5") {
        if (myAutoComplete !== "") {
            theAutocomplete = ' autocomplete="' + myAutoComplete + '"';
        }
    }
    let theNovalidate = "";
    if (getDocType() === "HTML5") {
        if (isNovalidate !== "") {
            theNovalidate = ' novalidate="' + isNovalidate + '"';
        }
    }
    let theTarget = "";
    if (myTarget !== "") {
        theTarget = ' target="' + myTarget + '"';
    }
    let theAccept = "";
    if (getDocType() !== "HTML5") {
        if (myAccept !== "") {
            theAccept = ' accept="' + myAccept + '"';
        }
    }
    return '<form' + theId + theClassName + theStyle + theAction + theMethod + theEnctype + theAutocomplete + theCharset + theNovalidate + theAccept + theTarget + '>' + myContent + '</form>';
}
/* ****************************************************************************
 * frame
 * Not Supported in HTML5.
 * <frameset cols="25%,50%,25%">
 *   <frame src="frame_a.htm">
 *   <frame src="frame_b.htm">
 *   <frame src="frame_c.htm">
 * </frameset>
 * The <frame> tag defines one particular window (frame) within a <frameset>.
 * Each <frame> in a <frameset> can have different attributes,
 * such as border, scrolling, the ability to resize, etc.
 * Note: If you want to validate a page containing frames,
 * be sure the <!DOCTYPE> is set to either "HTML Frameset DTD" or "XHTML Frameset DTD".
 * In HTML, the <frame> tag has no end tag.
 * In XHTML, the <frame> tag must be properly closed.
 *
 * Attribute	Value	Description
 * frameborder	0,1         Not supported in HTML5.
 *                          Specifies whether or not to display a border around a frame
 * longdesc     URL         Not supported in HTML5.
 *                          Specifies a page that contains a long description of the content of a frame
 * marginheight	pixels      Not supported in HTML5.
 *                          Specifies the top and bottom margins of a frame
 * marginwidth	pixels      Not supported in HTML5.
 *                          Specifies the left and right margins of a frame
 * name         text        Not supported in HTML5.
 *                          Specifies the name of a frame
 * noresize     noresize	Not supported in HTML5.
 *                          Specifies that a frame is not resizable
 * scrolling: yes, no, auto	Not supported in HTML5.
 *                          Specifies whether or not to display scrollbars in a frame
 * src          URL         Not supported in HTML5.
 *                          Specifies the URL of the document to show in a frame
 */
function frame(myName, myClass, myStyle, mySrc, myFrameborder, myMarginheight, myMarginwidth, myLongDesc, myNoresize, myScrolling, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("form(" + myName + "," + myClass + "," + myStyle + "," + mySrc + "," + myFrameborder + "," + myMarginheight + "," + myMarginwidth + "," + myLongDesc + "," + myNoresize + "," + myScrolling + "," + myContent + ")");
    }
    let theId = "";
    if (myName !== "") {
        theId = ' id="' + myName + '" name="' + myName + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theFrameborder = "";
    let theLongdesc = "";
    let theMarginheight = "";
    let theMarginwidth = "";
    let theNoresize = "";
    let theScrolling = "";
    let theSrc = "";
    if (getDocType() !== "HTML5") {
        if (myFrameborder !== "") {
            theFrameborder = ' frameborder="' + myFrameborder + '"';
        }
        if (myLongDesc !== "") {
            theLongdesc = ' longdesc="' + myLongDesc + '"';
        }
        if (myMarginwidth !== "") {
            theMarginwidth = ' marginwidth="' + myMarginwidth + '"';
        }
        if (myMarginheight !== "") {
            theMarginheight = ' marginheight="' + myMarginheight + '"';
        }
        if (myNoresize !== "") {
            theNoresize = ' noresize="' + myNoresize + '"';
        }
        if (myScrolling !== "") {
            theScrolling = ' scrolling="' + myScrolling + '"';
        }
        if (mySrc !== "") {
            theSrc = ' src="' + mySrc + '"';
        }
        return '<frame' + theId + theClassName + theStyle + theSrc + theFrameborder + theLongdesc + theMarginwidth + theMarginheight + myNoresize + theScrolling + '>' + myContent + '</frame>';
    } else {
        // FIXME check iframe call
        return '<iframe' + theId + theClassName + theStyle + theSrc + theFrameborder + theLongdesc + theMarginwidth + theMarginheight + myNoresize + theScrolling + '>' + myContent + '</iframe>';
    }
}
/* ****************************************************************************
 * h1
 * <h1>This is heading 1</h1>
 * The <h1> to <h6> tags are used to define HTML headings.
 * The "align" attribute is not supported in HTML5. Use CSS to align elements.
 * align: left, center, right, justify	Not supported in HTML5. Specifies the alignment of a heading
 */
function h1(myId, myClass, myStyle, myAlign, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("h1(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style="' + myStyle + ';text-align: ' + myAlign + ';"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (myAlign !== "") {
            theStyle = ' style="text-align: ' + myAlign + ';"';
        }
    }
    return '<h1' + theId + theClassName + theStyle + '>' + myContent + '</h1>';
}
/* ****************************************************************************
 * h2
 * <h2>This is heading 2</h2>
 * The <h1> to <h6> tags are used to define HTML headings.
 * The "align" attribute is not supported in HTML5. Use CSS to align elements.
 * align: left, center, right, justify	Not supported in HTML5. Specifies the alignment of a heading
 */
function h2(myId, myClass, myStyle, myAlign, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("h2(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style="' + myStyle + ';text-align: ' + myAlign + ';"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (myAlign !== "") {
            theStyle = ' style="text-align: ' + myAlign + ';"';
        }
    }
    return '<h2' + theId + theClassName + theStyle + '>' + myContent + '</h2>';
}
/* ****************************************************************************
 * h3
 * <h3>This is heading 3</h3>
 * The <h1> to <h6> tags are used to define HTML headings.
 * The "align" attribute is not supported in HTML5. Use CSS to align elements.
 * align: left, center, right, justify	Not supported in HTML5. Specifies the alignment of a heading
 */
function h3(myId, myClass, myStyle, myAlign, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("h3(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style="' + myStyle + ';text-align: ' + myAlign + ';"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (myAlign !== "") {
            theStyle = ' style="text-align: ' + myAlign + ';"';
        }
    }
    return '<h3' + theId + theClassName + theStyle + '>' + myContent + '</h3>';
}
/* ****************************************************************************
 * h4
 * <h4>This is heading 4</h4>
 * The <h1> to <h6> tags are used to define HTML headings.
 * The "align" attribute is not supported in HTML5. Use CSS to align elements.
 * align: left, center, right, justify	Not supported in HTML5. Specifies the alignment of a heading
 */
function h4(myId, myClass, myStyle, myAlign, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("h4(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style="' + myStyle + ';text-align: ' + myAlign + ';"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (myAlign !== "") {
            theStyle = ' style="text-align: ' + myAlign + ';"';
        }
    }
    return '<h4' + theId + theClassName + theStyle + '>' + myContent + '</h4>';
}
/* ****************************************************************************
 * h5
 * <h5>This is heading 5</h5>
 * The <h1> to <h6> tags are used to define HTML headings.
 * The "align" attribute is not supported in HTML5. Use CSS to align elements.
 * align: left, center, right, justify	Not supported in HTML5. Specifies the alignment of a heading
 */
function h5(myId, myClass, myStyle, myAlign, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("h5(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style="' + myStyle + ';text-align: ' + myAlign + ';"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (myAlign !== "") {
            theStyle = ' style="text-align: ' + myAlign + ';"';
        }
    }
    return '<h5' + theId + theClassName + theStyle + '>' + myContent + '</h5>';
}
/* ****************************************************************************
 * h6
 * <h6>This is heading 6</h6>
 * The <h1> to <h6> tags are used to define HTML headings.
 * The "align" attribute is not supported in HTML5. Use CSS to align elements.
 * align: left, center, right, justify	Not supported in HTML5. Specifies the alignment of a heading
 */
function h6(myId, myClass, myStyle, myAlign, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("h6(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style="' + myStyle + ';text-align: ' + myAlign + ';"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (myAlign !== "") {
            theStyle = ' style="text-align: ' + myAlign + ';"';
        }
    }
    return '<h6' + theId + theClassName + theStyle + '>' + myContent + '</h6>';
}
/* ****************************************************************************
 * head
 * <!DOCTYPE html>
 * <html>
 *   <head>
 *     <title>Title of the document</title>
 *   </head>
 *   <body>
 *     The content of the document......
 *   </body>
 * </html>
 *
 * The <head> element is a container for all the head elements.
 * The <head> element can include a title for the document, scripts, styles, meta information, and more.
 *
 * The following elements can go inside the <head> element:
 * <title> (this element is required in an HTML document)
 * <style>
 * <base>
 * <link>
 * <meta>
 * <script>
 * <noscript>
 *
 * In HTML 4.01 the <head> element is required.
 * In HTML5, the <head> element can be omitted.
 * profile	URL	Not supported in HTML5.
 * Specifies a URL to a document that contains a set of rules. The rules can be read by browsers to clearly understand the information in the <meta> tag's content attribute
 *
 */
function headStart(myProfile) {
    if (getDebugMessageType() === 1) {
        console.debug("headStart(" + myProfile + ")");
    }
    let theProfile = "";
    if (getDocType() !== "HTML5") {
        if (theProfile !== "") {
            theProfile = myProfile;
        }
    }
    return '<head' + theProfile + '>';
}
/* ****************************************************************************
 * head End
 */
function headEnd() {
    if (getDebugMessageType() === 1) {
        console.debug("headEnd()");
    }
    return "</head>";
}
/* ****************************************************************************
 * header
 * The <header> tag is new in HTML5.
 * <article>
 *   <header>
 *     <h1>Most important heading here</h1>
 *     <h3>Less important heading here</h3>
 *     <p>Some additional information here</p>
 *   </header>
 *   <p>Lorem Ipsum dolor set amet....</p>
 * </article>
 * The <header> element represents a container for introductory content or a set of navigational links.
 * A <header> element typically contains:
 * one or more heading elements (<h1> - <h6>)
 * logo or icon
 * authorship information
 * You can have several <header> elements in one document.
 * Note: A <header> tag cannot be placed within a <footer>, <address> or another <header> element.
 *
 *
 */
function header(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("header(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<header' + theId + theClassName + theStyle + '>' + myContent + '</header>';
}
/* ****************************************************************************
 * hr
 * <hr> or <hr />
 * The <hr> tag defines a thematic break in an HTML page (e.g. a shift of topic).
 * The <hr> element is used to separate content (or define a change) in an HTML page.
 *
 * In HTML5, the <hr> tag defines a thematic break.
 * In HTML 4.01, the <hr> tag represents a horizontal rule.
 *
 * However, the <hr> tag may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.
 * All the layout attributes are removed in HTML5. Use CSS instead.
 * In HTML, the <hr> tag has no end tag.
 * In XHTML, the <hr> tag must be properly closed, like this: <hr />.
 * Attribute	Value	Description
 * align: left,         Not supported in HTML5.
 *       center, right  Specifies the alignment of a <hr> element
 * noshade      noshade Not supported in HTML5.
 *                      Specifies that a <hr> element should render in one solid color (noshaded), instead of a shaded color
 * size         pixels	Not supported in HTML5.
 *                      Specifies the height of a <hr> element
 * width	pixels,%	Not supported in HTML5.
 *                      Specifies the width of a <hr> element
 * hr('Id', 'myClass', 'border: 1px;', 'left', 'noshade', '100px', '33px', true)
 */
function hr(myId, myClass, myStyle, myAlign, myNoshade, myWidth, mySize) {
    if (getDebugMessageType() === 1) {
        console.debug("hr(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myNoshade + "," + myWidth + "," + mySize + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theNoshade = "";
    let theAlign = "";
    let theWidth = "";
    let theSize = "";
    let theStyle = "";
    if (getDocType() !== "HTML5") {
        if (myNoshade !== "") {
            theNoshade = ' noshade="' + myNoshade + '"';
        }
        if (myAlign !== "") {
            theAlign = ' text-align: ' + myAlign + ";";
        }
        if (myWidth !== "") {
            theWidth = ' width: ' + myWidth + ";";
        }
        if (mySize !== "") {
            theSize = ' height: ' + mySize + ";";
        }
        if (myStyle !== "") {
            theStyle = myStyle;
        }
        theStyle = theStyle + theAlign + theWidth + theSize;
    }
    return '<hr' + theId + theClassName + theStyle + theNoshade + elEnd();
}
/* ****************************************************************************
 * html
 * The <html> tag tells the browser that this is an HTML document.
 * The <html> tag represents the root of an HTML document.
 * The <html> tag is the container for all other HTML elements (except for the <!DOCTYPE> tag).
 *
 * <!DOCTYPE HTML>
 * <html>
 *   <head>
 *     <title>Title of the document</title>
 *   </head>
 *   <body>
 *     The content of the document......
 *   </body>
 * </html>
 *
 * The xmlns attribute is required in XHTML, but is invalid in HTML.
 * However:
 * the HTML validator at http://w3.org does not complain when the xmlns attribute is missing in an XHTML document.
 * This is because the namespace "xmlns=http://www.w3.org/1999/xhtml" is default,
 * and will be added to the <html> tag even if you do not include it.
 *
 * <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en" lang="en">
 *
 */
function htmlStart() {
    if (getDebugMessageType() === 1) {
        console.debug("htmlStart()");
    }
    if (getDocType() === "HTML5") {
        return '<html' + ' lang="' + getLanguage() +'">';
    } else if (getDocType() === "HTML4_01_Strict") { // HTML 4 **********************
        return '<html' + ' lang="' + getLanguage() +'">';
    } else if (getDocType() === "HTML4_01_Transitional") { // HTML 4 *****************
        return '<html' + ' lang="' + getLanguage() +'">';
    } else if (getDocType() === "HTML4_01_Frameset") { // HTML 4 ************************
        return '<html' + ' lang="' + getLanguage() +'">';
    } else if (getDocType() === "XHTML_1_0_Strict") { // XHTML *************************
        return '<html' + ' lang="' + getLanguage() +'">';
    } else if (getDocType() === "XHTML_1_0_Transitional") { // XHTML *********************
        return '<html' + ' lang="' + getLanguage() +'">';
    } else if (getDocType() === "XHTML_1_0_Frameset") { // XHTML ************************
        return '<html' + ' lang="' + getLanguage() +'">';
    } else if (getDocType() === "XHTML_1_1") { // XHTML ******************************
        return '<html' + ' lang="' + getLanguage() +'">';
    } else if (getDocType() === "IDPF_2007") { // IDPF ePub *******************************
        return '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="' + getLanguage() + '" lang="' + getLanguage() +'">';
    } else {
        return '<html>';
    }
}
/* ****************************************************************************
 * htmlEnd
 */
function htmlEnd() {
    if (getDebugMessageType() === 1) {
        console.debug("htmlEnd()");
    }
    return '</html>';
}
/* ****************************************************************************
 * i
 * <p>He named his car <i>The lightning</i>, because it was very fast.</p>
 * The <i> tag defines a part of text in an alternate voice or mood. The content of the <i> tag is usually displayed in italic.
 * The <i> tag can be used to indicate a technical term, a phrase from another language, a thought, or a ship name, etc.
 * Use the <i> element only when there is not a more appropriate semantic element, such as:
 * <em> (emphasized text)
 * <strong> (important text)
 * <mark> (marked/highlighted text)
 * <cite> (the title of a work)
 * <dfn> (a definition term)
 * In HTML 4.01, the <i> tag was used to render text in italics.
 * However, this is not necessarily the case with HTML5.
 * Style sheets can be used to format the text inside the <i> element.
 */
function i(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("i(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<i' + theId + theClassName + theStyle + '>' + myContent + '</i>';
}
/* ****************************************************************************
 * iframe
 * <iframe src="https://domain.com"></iframe>
 * The <iframe> tag specifies an inline frame.
 * An inline frame is used to embed another document within the current HTML document.
 * Tip: To deal with browsers that do not support <iframe>, add a text between the opening <iframe> tag and the closing </iframe> tag.
 * Tip: Use CSS to style the <iframe> (even to include scrollbars).
 * HTML5 has added some new attributes, and several HTML 4.01 attributes are removed from HTML5.
 *
 * I did not implement longdesc
 *
 * Attribute	Value	Description
 * align        left
 *              right
 *              top
 *              middle
 *              bottom	Not supported in HTML5.
 *                      Specifies the alignment of an <iframe> according to surrounding elements
 * frameborder	1,0     Not supported in HTML5.
 *                      Specifies whether or not to display a border around an <iframe>
 * height       pixels	Specifies the height of an <iframe>
 * longdesc     URL     Not supported in HTML5.
 *                      Specifies a page that contains a long description of the content of an <iframe>
 * marginheight	pixels	Not supported in HTML5.
 *                      Specifies the top and bottom margins of the content of an <iframe>
 * marginwidth	pixels	Not supported in HTML5.
 *                      Specifies the left and right margins of the content of an <iframe>
 * name         text	Specifies the name of an <iframe>
 * sandbox      Enables an extra set of restrictions for the content in an <iframe>
 *              allow-forms
 *              allow-pointer-lock
 *              allow-popups
 *              allow-same-origin
 *              allow-scripts
 *              allow-top-navigation
 * scrolling	yes,no, auto	Not supported in HTML5.
 *                              Specifies whether or not to display scrollbars in an <iframe>
 * src          URL             Specifies the address of the document to embed in the <iframe>
 * srcdoc       HTML_code       Specifies the HTML content of the page to show in the <iframe>
 * width        pixels          Specifies the width of an <iframe>
 */
function iframe(myId, myClass, myStyle, mySrc, mySrcdoc, myAlign, myFrameborder, mySandbox, myScrolling, myMarginwidth, myMarginheight, myWidth, myHeight, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("a(" + myId + "," + myClass + "," + myStyle + "," + mySrc + "," + mySrcdoc + "," + myAlign + "," + myFrameborder + "," + mySandbox + "," + myScrolling + "," + myMarginwidth + "," + myMarginheight + "," + myWidth + "," + myHeight + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '" name="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theSrc = "";
    if (mySrc !== "") {
        theSrc = ' src="' + mySrc + '"';
    }
    let theSrcdoc = "";
    if (mySrcdoc !== "") {
        theSrcdoc = ' srcdoc="' + mySrcdoc + '"';
    }
    let theWidth = "";
    if (myWidth !== "") {
        theWidth = ' width="' + myWidth + '"';
    }
    let theHeight = "";
    if (myHeight !== "") {
        theHeight = ' height="' + myHeight + '"';
    }
    let theSandbox = "";
    if (mySandbox !== "") {
        theSandbox = ' sandbox="' + mySandbox + '";';
    }
    let theAlign = "";
    let theFrameborder = "";
    let theExtraStyles = "";
    let theMarginwidth = "";
    let theMarginheight = "";
    let theScrolling = "";
    if (getDocType() !== "HTML5") {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myFrameborder !== "") {
            theFrameborder = ' frameborder="' + myFrameborder + '"';
        }
        if (myMarginwidth !== "") {
            theMarginwidth = ' marginwidth="' + myMarginwidth + '";';
        }
        if (myMarginheight !== "") {
            theMarginheight = ' marginheight="' + myMarginheight + '";';
        }
        if (myScrolling !== "") {
            theScrolling = ' scrolling="' + myScrolling + '";';
        }
    } else {
        if (myAlign !== "") {
            theExtraStyles = ' text-align: ' + myAlign + ';';
        }
        if (myFrameborder !== "") {
            if (myFrameborder === "1") {
                theExtraStyles = theExtraStyles + ' border: 3px solid black;';
            }
        }
        if (myMarginwidth !== "") {
            theExtraStyles = ' margin-left: ' + myMarginwidth + '; margin-right: ' + myMarginwidth + ';';
        }
        if (myMarginheight !== "") {
            theExtraStyles = ' margin-top: ' + myMarginheight + '; margin-bottom: ' + myMarginheight + ';';
        }
        if (myScrolling !== "") {
            if (myScrolling === "no") {
                theExtraStyles = "overflow:hidden;";
            } else if (myScrolling === "yes") {
                theExtraStyles = "overflow: scroll !important;";
            } else if (myScrolling === "auto") {
                theExtraStyles = "overflow-y: scroll;";
            }
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            theStyle = ' style="' + myStyle + theExtraStyles + '"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            theStyle = ' style="' + theExtraStyles + '"';
        }
    }
    return '<iframe' + theId + theClassName + theStyle + theSrc + theSrcdoc + myWidth + myHeight + theAlign + theFrameborder + theMarginwidth + theMarginheight + theScrolling + theSandbox + '>' + myContent + '</iframe>';
}
/* ****************************************************************************
 * img
 * <img src="smiley.gif" alt="Smiley face" height="42" width="42">
 * The <img> tag defines an image in an HTML page.
 *
 * The <img> tag has two required attributes: src and alt.
 * Note: Images are not technically inserted into an HTML page, images are linked to HTML pages. The <img> tag creates a holding space for the referenced image.
 * Tip: To link an image to another document, simply nest the <img> tag inside <a> tags.
 * The following attributes: align, border, hspace, and vspace are not supported in HTML5.
 * In HTML the <img> tag has no end tag.
 * In XHTML the <img> tag must be properly closed.
 * Attribute	Value	Description
 * align                Not supported in HTML5.
 *              top
 *              bottom
 *              middle
 *              left
 *              right
 *                      Specifies the alignment of an image according to surrounding elements
 * alt          text	Specifies an alternate text for an image
 * border       pixels	Not supported in HTML5.
 *                      Specifies the width of the border around an image
 * crossorigin	anonymous
 *              use-credentials
                        Allow images from third-party sites that allow cross-origin access to be used with canvas
 * height       pixels	Specifies the height of an image
 * hspace       pixels	Not supported in HTML5.
 *                      Specifies the whitespace on left and right side of an image
 * ismap        ismap	Specifies an image as a server-side image-map
 * longdesc     URL     Specifies a URL to a detailed description of an image
 * sizes                Specifies image sizes for different page layouts
 * src          URL     Specifies the URL of an image
 * srcset       URL     Specifies the URL of the image to use in different situations
 * usemap	   #mapname	Specifies an image as a client-side image-map
 * vspace       pixels	Not supported in HTML5.
 *                      Specifies the whitespace on top and bottom of an image
 * width        pixels	Specifies the width of an image
 */
function img(myId, myClass, myStyle, mySrc, mySrcSet, myAlign, myAlt, myBorder, myCrossOrigin, myUseMap, myIsMap, myLongDesc, mySizes, myHspace, myVspace, myWidth, myHeight, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("img(" + myId + "," + myClass + "," + myStyle + "," + mySrc + "," + mySrcSet + "," + myAlign + "," + myAlt + "," + myBorder + "," + myCrossOrigin + "," + myUseMap + "," + myIsMap + "," + myLongDesc + "," + mySizes + "," + myHspace + "," + myVspace + "," + myWidth + "," + myHeight + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theSrc = "";
    if (mySrc !== "") {
        theSrc = ' src="' + mySrc + '"';
    }
    let theSrcset = "";
    if (mySrcSet !== "") {
        theSrcset = ' src="' + mySrcSet + '"';
    }
    let theWidth = "";
    if (myWidth !== "") {
        theWidth = ' width="' + myWidth + '"';
    }
    let theHeight = "";
    if (myHeight !== "") {
        theHeight = ' height="' + myHeight + '"';
    }
    let theAlt = "";
    if (myAlt !== "") {
        theAlt = ' alt="' + myAlt + '"';
    }
    let theCrossorigin = "";
    if (myCrossOrigin !== "") {
        theCrossorigin = ' crossorigin="' + myCrossOrigin + '";';
    }
    let theUsemap = "";
    if (myUseMap !== "") {
        theUsemap = ' usemap="' + myUseMap + '";';
    }
    let theIsmap = "";
    if (myIsMap !== "") {
        theIsmap = ' ismap="' + myIsMap + '";';
    }
    let theLongdesc = "";
    if (myLongDesc !== "") {
        theLongdesc = ' longdesc="' + myLongDesc + '";';
    }
    let theAlign = "";
    let theExtraStyles = "";
    let theBorder = "";
    let theHspace = "";
    let theVspace = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theExtraStyles = ' text-align: ' + myAlign + ';';
        }
        if (myBorder !== "") {
            theExtraStyles = theExtraStyles + ' border: ' + myBorder + ' solid black;';
        }
        if (myHspace !== "") {
            theExtraStyles = ' margin-left: ' + myHspace + '; margin-right: ' + myHspace + ';';
        }
        if (myVspace !== "") {
            theExtraStyles = ' margin-top: ' + myVspace + '; margin-bottom: ' + myVspace + ';';
        }
    } else {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myBorder !== "") {
            theBorder = ' border="' + myBorder + '";';
        }
        if (myHspace !== "") {
            theHspace = ' hspace="' + myHspace + '";';
        }
        if (myVspace !== "") {
            theVspace = ' vspace="' + myVspace + '";';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            theStyle = ' style="' + myStyle + theExtraStyles + '"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            theStyle = ' style="' + theExtraStyles + '"';
        }
    }
    return '<img' + theId + theClassName + theStyle + theSrc + theSrcset + myWidth + myHeight + theUsemap + theIsmap + theLongdesc + theCrossorigin + theAlt + theAlign + theBorder + theHspace + theVspace + elEnd();
}
/* ****************************************************************************
 * input
 * <form action="/action_page.php">
 *   First name: <input type="text" name="fname"><br>
 *   Last name: <input type="text" name="lname"><br>
 *   <input type="submit" value="Submit">
 * </form>
 * The <input> tag specifies an input field where the user can enter data.
 * <input> elements are used within a <form> element to declare input controls that allow users to input data.
 * An input field can vary in many ways, depending on the type attribute.
 * Note: The <input> element is empty, it contains attributes only.
 * Tip: Use the <label> element to define labels for <input> elements.
 * The "align" attribute is not supported in HTML5.
 * In HTML5, the <input> tag has several new attributes, and the type attribute has several new values.
 * In HTML, the <input> tag has no end tag.
 * In XHTML, the <input> tag must be properly closed, like this <input />.
 * Attribute	Value	Description
 * accept	file_extension
 *          audio/*
 *          video/*
 *          image/*
 *          media_type	Specifies the types of files that the server accepts (only for type="file")
 * align                Not supported in HTML5.
 *      	left
 *          right
 *          top
 *          middle
 *          bottom
 *                  Specifies the alignment of an image input (only for type="image")
 * alt      text	Specifies an alternate text for images (only for type="image")
 * autocomplete	on, off     Specifies whether an <input> element should have autocomplete enabled
 * autofocus	autofocus	Specifies that an <input> element should automatically get focus when the page loads
 * checked      checked     Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")
 * dirname    inputname.dir	Specifies that the text direction will be submitted
 * disabled     disabled	Specifies that an <input> element should be disabled
 * form         form_id     Specifies one or more forms the <input> element belongs to
 * formaction	URL         Specifies the URL of the file that will process the input control when the form is submitted (for type="submit" and type="image")
 * formenctype	application/x-www-form-urlencoded
 *              multipart/form-data
 *              text/plain	Specifies how the form-data should be encoded when submitting it to the server (for type="submit" and type="image")
 * formmethod	get
 *              post	Defines the HTTP method for sending data to the action URL (for type="submit" and type="image")
 *              formnovalidate	formnovalidate	Defines that form elements should not be validated when submitted
 * formtarget	_blank
 *              _self
 *              _parent
 *              _top
 *              framename	Specifies where to display the response that is received after submitting the form (for type="submit" and type="image")
 * height       pixels      Specifies the height of an <input> element (only for type="image")
 * list        datalist_id  Refers to a <datalist> element that contains pre-defined options for an <input> element
 * max         number,date	Specifies the maximum value for an <input> element
 * maxlength	number      Specifies the maximum number of characters allowed in an <input> element
 * min         number, date	Specifies a minimum value for an <input> element
 * multiple     multiple	Specifies that a user can enter more than one value in an <input> element
 * name         text        Specifies the name of an <input> element
 * pattern      regexp      Specifies a regular expression that an <input> element's value is checked against
 * placeholder	text        Specifies a short hint that describes the expected value of an <input> element
 * readonly     readonly	Specifies that an input field is read-only
 * required     required	Specifies that an input field must be filled out before submitting the form
 * size         number      Specifies the width, in characters, of an <input> element
 * src          URL         Specifies the URL of the image to use as a submit button (only for type="image")
 * step         number      Specifies the legal number intervals for an input field
 * type         button
 *              checkbox
 *              color
 *              date
 *              datetime-local
 *              email
 *              file
 *              hidden
 *              image
 *              month
 *              number
 *              password
 *              radio
 *              range
 *              reset
 *              search
 *              submit
 *              tel
 *              text
 *              time
 *              url
 *              week	Specifies the type <input> element to display
 * value        text	Specifies the value of an <input> element
 * width        pixels	Specifies the width of an <input> element (only for type="image")
 *
 */
function input(myId, myClass, myStyle, myType, myAccept, myAlign, myAlt, myAutoComplete, myAutoFocus, myChecked, myDirname, myDisabled, myFormId, myFormAction, myFormEncType, myFormMethod, myFormTarget, myList, myMaxLength, myMax, myMin, myMultiple, myPattern, myPlaceholder, myReadOnly, myRequired, mySize, mySrc, myStep, myWidth, myHeight, myValue) {
    if (getDebugMessageType() === 1) {
        console.debug("input(" + myId + "," + myClass + "," + myStyle + "," + myType + "," + myAccept + "," + myAlign + "," + myAlt + "," + myAutoComplete + "," + myAutoFocus + "," + myChecked + "," + myDirname + "," + myDisabled + "," + myFormId + "," + myFormAction + "," + myFormEncType + "," + myFormMethod + "," + myFormTarget + "," + myList + "," + myMaxLength + "," + myMax + "," + myMin + "," + myMultiple + "," + myPattern + "," + myPlaceholder + "," + myReadOnly + "," + myRequired + "," + mySize + "," + mySrc + "," + myStep + "," + myWidth + "," + myHeight + "," + myValue + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '" name="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theType = "";
    if (myType !== "") {
        theType = ' type="' + myType + '"';
    }
    let theValue = "";
    if (myValue !== "") {
        theValue = ' value="' + myValue + '"';
    }
    let theAccept = "";
    if (myAccept !== "") {
        theAccept = ' accept="' + myAccept + '"';
    }
    let theAlt = "";
    if (myAccept !== "") {
        theAlt = ' alt="' + myAlt + '"';
    }
    let theChecked = "";
    if (myChecked !== "") {
        theChecked = ' checked="' + myChecked + '"';
    }
    let theDisabled = "";
    if (myDisabled !== "") {
        theDisabled = ' disabled="' + myDisabled + '"';
    }
    let theMaxlength = "";
    if (myMaxLength !== "") {
        theMaxlength = ' maxlength="' + myMaxLength + '"';
    }
    let theReadonly = "";
    if (myReadOnly !== "") {
        theReadonly = ' readonly="' + myReadOnly + '"';
    }
    let theSize = "";
    if (mySize !== "") {
        theSize = ' size="' + mySize + '"';
    }
    let theSrc = "";
    if (mySrc !== "") {
        theSrc = ' src="' + mySrc + '"';
    }
    let theDirname = "";
    let theAlign = "";
    let theExtraStyles = "";
    let theBorder = "";
    let theHspace = "";
    let theVspace = "";
    let theAutocomplete = "";
    let theAutofocus = "";
    let theFormId = "";
    let theFormaction = "";
    let theFormenctype = "";
    let theFormmethod = "";
    let theFormtarget = "";
    let theList = "";
    let theMax = "";
    let theMin = "";
    let theMultiple = "";
    let thePattern = "";
    let thePlaceholder = "";
    let theRequired = "";
    let theWidth = "";
    let theHeight = "";
    if (getDocType() !== "HTML5") {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myWidth !== "") {
            theExtraStyles = ' width: ' + myWidth + ';';
        }
        if (myHeight !== "") {
            theExtraStyles = theExtraStyles + ' height: ' + myHeight + ';';
        }
    } else {
        if (myDirname !== "") {
            theDirname = ' dirname="' + myDirname + '"';
        }
        if (myAutoComplete !== "") {
            theAutocomplete = ' autocomplete="' + myAutoComplete + '"';
        }
        if (myAutoFocus !== "") {
            theAutofocus = ' autofocus="' + myAutoFocus + '"';
        }
        if (myFormId !== "") {
            theFormId = ' form="' + myFormId + '"';
        }
        if (myFormAction !== "") {
            theFormaction = ' formaction="' + myFormAction + '"';
        }
        if (myFormEncType !== "") {
            theFormenctype = ' formenctype="' + myFormEncType + '"';
        }
        if (myFormMethod !== "") {
            theFormmethod = ' formmethod="' + myFormMethod + '"';
        }
        if (myFormTarget !== "") {
            theFormtarget = ' formtarget="' + myFormTarget + '"';
        }
        if (myList !== "") {
            theList = ' list="' + myList + '"';
        }
        if (myMax !== "") {
            theMax = ' max="' + myMax + '"';
        }
        if (myMin !== "") {
            theMin = ' min="' + myMin + '"';
        }
        if (myMultiple !== "") {
            theMultiple = ' multiple="' + myMultiple + '"';
        }
        if (myPattern !== "") {
            thePattern = ' pattern="' + myPattern + '"';
        }
        if (myPlaceholder !== "") {
            thePlaceholder = ' placeholder="' + myPlaceholder + '"';
        }
        if (myRequired !== "") {
            theRequired = ' required="' + myRequired + '"';
        }
        if (myWidth !== "") {
            theWidth = ' width="' + myWidth + '"';
        }
        if (myHeight !== "") {
            theHeight = ' height="' + myHeight + '"';
        }
        if (myAlign !== "") {
            theExtraStyles = ' text-align: ' + myAlign + ';';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + theExtraStyles + '"';
    } else {
        theStyle = ' style="' + theExtraStyles + '"';
    }
    return '<input' + theId + theClassName + theAccept + theAlt + theAutocomplete + theAutofocus + theChecked + theDirname + theDisabled + theFormId + theFormaction + theFormenctype + theFormmethod + theFormtarget + theList + theMax + theMaxlength + theMin + theMultiple + thePattern + thePlaceholder + theReadonly + theRequired + theSize + theSrc + theType + theValue + elEnd();
}
/* ****************************************************************************
 * ins
 * <p>My favorite color is <del>blue</del> <ins>red</ins>!</p>
 * The <ins> tag defines a text that has been inserted into a document.
 * Tip: Also look at the <del> tag to markup deleted text.
 * Browsers will normally strike a line through deleted text and underline inserted text.
 * Tip: Use <ins> together with <del> to markup updates and modifications in a document.
 * Attribute	Value               Description
 * cite         URL                 Specifies a URL to a document that explains the reason why the text was inserted/changed
 * datetime	YYYY-MM-DDThh:mm:ssTZD	Specifies the date and time when the text was inserted/changed
 */
function ins(myId, myClass, myStyle, myCite, myDatetime, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("ins(" + myId + "," + myClass + "," + myStyle + "," + myCite + "," + myDatetime + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theCite = "";
    if (myCite !== "") {
        theCite = ' cite="' + myCite + '"';
    }
    let theDatetime = "";
    if (myDatetime !== "") {
        theDatetime = ' datetime="' + myDatetime + '"';
    }
    return '<ins' + theId + theClassName + theStyle + theCite + theDatetime + '>' + myContent + '</ins>';
}
/* ****************************************************************************
 * kbd
 * <kbd>Keyboard input</kbd>
 * The <kbd> tag is a phrase tag. It defines keyboard input.
 * Tip: This tag is not deprecated, but it is possible to achieve richer effect with CSS.
 */
function kbd(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("kbd(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<kbd' + theId + theClassName + theStyle + '>' + myContent + '</kbd>';
}
/* ****************************************************************************
 * label
 * <form action="/action_page.php">
 *   <label for="male">Male</label>
 *   <input type="radio" name="gender" id="male" value="male"><br>
 *   <label for="female">Female</label>
 *   <input type="radio" name="gender" id="female" value="female"><br>
 *   <label for="other">Other</label>
 *   <input type="radio" name="gender" id="other" value="other"><br><br>
 *   <input type="submit" value="Submit">
 * </form>
 * The <label> tag defines a label for a <button>, <input>, <meter>, <output>, <progress>, <select>, or <textarea> element.
 * The <label> element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the <label> element, it toggles the control.
 *
 * The for attribute of the <label> tag should be equal to the id attribute of the related element to bind them together.
 * Tip: A label can be bound to an element either by using the "for" attribute, or by placing the element inside the <label> element.
 * The "form" attribute is new in HTML5.
 * Attribute	Value       Description
 * for          element_id	Specifies which form element a label is bound to
 * form         form_id     Specifies one or more forms the label belongs to
 */
function label(myId, myClass, myStyle, myFor, myForm, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("label(" + myId + "," + myClass + "," + myStyle + "," + myFor + "," + myForm + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theFor = "";
    let theForm = "";
    if (myFor !== "") {
        theFor = ' for="' + myFor + '"';
    }
    if (getDocType() === "HTML5") {
        if (myForm !== "") {
            theForm = ' form="' + myForm + '"';
        }
    }
    return '<label' + theId + theClassName + theStyle + theFor + theForm + '>' + myContent + '</label>';
}
/* ****************************************************************************
 * legend
* <form>
*   <fieldset>
*     <legend>Personalia:</legend>
*     Name: <input type="text" size="30"><br>
*     Email: <input type="text" size="30"><br>
*     Date of birth: <input type="text" size="10">
*   </fieldset>
* </form>
* The <legend> tag defines a caption for the <fieldset> element.
* The "align" attribute is not supported in HTML5.
* align	top,bottom,left,right	Not supported in HTML5.
 */
function legend(myId, myClass, myStyle, myAlign, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("legend(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theAlign = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
    }
    return '<legend' + theId + theClassName + theStyle + theAlign + '>' + myContent + '</legend>';
}
/* ****************************************************************************
 * li
 * <ol>
 *   <li>Coffee</li>
 *   <li>Tea</li>
 *   <li>Milk</li>
 * </ol>
 * The <li> tag defines a list item.
 * The <li> tag is used in ordered lists(<ol>), unordered lists (<ul>), and in menu lists (<menu>).
 * The "type" attribute is NOT supported in HTML5.
 * The "value" attribute was deprecated in HTML 4.01, but IS supported in HTML5.
 * type	1,A,a,I,i,disc,square,circle
 */
function li(myId, myClass, myStyle, myType, myValue, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("li(" + myId + "," + myClass + "," + myStyle + "," + myType + "," + myValue + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theType = "";
    let theValue = "";
    if (getDocType() === "HTML5") {
        if (myValue !== "") {
            theValue = ' value="' + myValue + '"';
        }
    } else {
        if (myType !== "") {
            theType = ' type="' + myType + '"';
        }
    }
    return '<li' + theId + theClassName + theStyle + theType + theValue + '>' + myContent + '</li>';
}
/* ****************************************************************************
 * link
 * <head>
 *   <link rel="stylesheet" type="text/css" href="theme.css">
 * </head>
 * The <link> tag defines a link between a document and an external resource.
 * The <link> tag is used to link to external style sheets.
 * When used for style sheets, the <link> tag is supported in all major browsers.
 * No real support for anything else.
 * Note: The <link> element is an empty element, it contains attributes only.
 * Note: This element goes only in the head section, but it can appear any number of times.
 * Some HTML 4.01 attributes are not supported in HTML5.
 * The "sizes" attribute is new in HTML5.
 * In HTML the <link> tag has no end tag.
 * In XHTML the <link> tag must be properly closed.
 * Attribute	Value           Description
 * charset      char_encoding	Not supported in HTML5.
 *                              Specifies the character encoding of the linked document
 * crossorigin	anonymous
 *              use-credentials	Specifies how the element handles cross-origin requests
 * href         URL             Specifies the location of the linked document
 * hreflang     language_code	Specifies the language of the text in the linked document
 * media        media_query     Specifies on what device the linked document will be displayed
 * rel	alternate
 *      author
 *      dns-prefetch
 *      help
 *      icon
 *      license
 *      next
 *      pingback
 *      preconnect
 *      prefetch
 *      preload
 *      prerender
 *      prev
 *      search
 *      stylesheet              Required. Specifies the relationship between the current document and the linked document
 * rev	reversed relationship	Not supported in HTML5.
 *                              Specifies the relationship between the linked document and the current document
 * sizes	HeightxWidth,any	Specifies the size of the linked resource. Only for rel="icon"
 * target	_blank
 *          _self
 *          _top
 *          _parent
 *          frame_name          Not supported in HTML5.
 *                              Specifies where the linked document is to be loaded
 * type     media_type          Specifies the media type of the linked document
 */
function link(myId, myRel, myRev, myType, myCharset, myCrossOrigin, myMedia, mySizes, myTarget, myHreflang, myHref) {
    if (getDebugMessageType() === 1) {
        console.debug("link(" + myId + "," + myRel + "," + myRev + "," + myType + "," + myCharset + "," + myCrossOrigin + "," + myMedia + "," + mySizes + "," + myTarget + "," + myHreflang + "," + myHref + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theRel = "";
    if (myRel !== "") {
        theRel = ' rel="' + myRel + '"';
    }
    let theType = "";
    if (myType !== "") {
        theType = ' type="' + myType + '"';
    }
    let theHref = "";
    if (myHref !== "") {
        theHref = ' href="' + myHref + '"';
    }
    let theHreflang = "";
    if (myHreflang !== "") {
        theHreflang = ' hreflang="' + myHreflang + '"';
    }
    let theMedia = "";
    if (myMedia !== "") {
        theMedia = ' media="' + myMedia + '"';
    }
    let theCrossorigin = "";
    let theCharset = "";
    let theRev = "";
    let theSizes = "";
    let theTarget = "";
    if (getDocType() === "HTML5") {
        if (myCrossOrigin !== "") {
            theCrossorigin = ' crossorigin="' + myCrossOrigin + '"';
        }
        if (mySizes !== "") {
            theSizes = ' sizes="' + mySizes + '"';
        }
    } else {
        if (myCharset !== "") {
            theCharset = ' charset="' + myCharset + '"';
        }
        if (myRev !== "") {
            theRev = ' rev="' + myRev + '"';
        }
        if (myTarget !== "") {
            theTarget = ' target="' + myTarget + '"';
        }
    }
    return '<link' + theId + theRel + theRev + theType + theHref + theHreflang + theMedia + theCrossorigin + theSizes + theTarget + isLuluLink();
}
/* ****************************************************************************
 * main
 * <main>
 *   <h1>Web Browsers</h1>
 *   <p>browsers today.</p>
 *   <article>
 *     <h1>Google Chrome</h1>
 *     <p>released in 2008.</p>
 *   </article>
 *   <article>
 *     <h1>Internet Explorer</h1>
 *     <p>Internet Explorer 1995.</p>
 *   </article>
 *   <article>
 *     <h1>Mozilla Firefox</h1>
 *     <p>Firefox 2004.</p>
 *   </article>
 * </main>
 * The <main> tag specifies the main content of a document.
 * The content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.
 * Note: There must not be more than one <main> element in a document. The <main> element must NOT be a descendant of an <article>, <aside>, <footer>, <header>, or <nav> element.
 * The numbers in the table specify the first browser version that fully supports the element.
 * The <main> tag is new in HTML5.
 */
function main(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("main(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<main' + theId + theClassName + theStyle + '>' + myContent + '</main>';
}
/* ****************************************************************************
 * map
 * <img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
 * <map name="planetmap">
 *   <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
 *   <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
 *   <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
 * </map>
 * The <map> tag is used to define a client-side image-map. An image-map is an image with clickable areas.
 * The required name attribute of the <map> element is associated with the <img>'s usemap attribute and creates a relationship between the image and the map.
 * The <map> element contains a number of <area> elements, that defines the clickable areas in the image map.
 * Note: In HTML5, if the id attribute of the <map> tag is also specified, it must have the same value as the name attribute.
 * In XHTML, the name attribute is deprecated, and will be removed. Use the global id attribute instead.
 * name	mapname	Required. Specifies the name of an image-map
 */
function map(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("map(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"' + ' name="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<map' + theId + theClassName + theStyle + '>' + myContent + '</map>';
}
/* ****************************************************************************
 * mark
 *  <p>Do not forget to buy <mark>milk</mark> today.</p>
 * The <mark> tag defines marked text.
 * Use the <mark> tag if you want to highlight parts of your text.
 * The <mark> tag is new in HTML5.
 */
function mark(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("mark(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return span(myId, myClass, myStyle + 'background-color: #FFFF00;', "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<mark' + theId + theClassName + theStyle + '>' + myContent + '</mark>';
}
/* ****************************************************************************
 * meta
 * <head>
 *   <meta charset="UTF-8">
 *   <meta name="description" content="Free Web tutorials">
 *   <meta name="keywords" content="HTML,CSS,XML,JavaScript">
 *   <meta name="author" content="John Doe">
 *   <meta name="viewport" content="width=device-width, initial-scale=1.0">
 * </head>
 * Metadata is data (information) about data.
 * The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.
 * Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata.
 * The metadata can be used by browsers (how to display content or reload page), search engines (keywords), or other web services.
 * HTML5 introduced a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).
 * Note: <meta> tags always go inside the <head> element.
 * Note: Metadata is always passed as name/value pairs.
 * Note: The content attribute MUST be defined if the name or the http-equiv attribute is defined. If none of these are defined, the content attribute CANNOT be defined.
 * Setting The Viewport
 * HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.
 * The viewport is the user's visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen.
 * You should include the following <meta> viewport element in all your web pages:
 * <meta name="viewport" content="width=device-width, initial-scale=1.0">
 * A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.
 * The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
 * The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.
 * Here is an example of a web page without the viewport meta tag, and the same web page with the viewport meta tag:
 * Tip: If you are browsing this page with a phone or a tablet, you can click on the two links below to see the difference.
 * The scheme attribute is not supported in HTML5.
 * HTML5 has a new attribute, charset, which makes it easier to define charset:
 * HTML 4.01: <meta http-equiv="content-type" content="text/html; charset=UTF-8">
 * HTML5: <meta charset="UTF-8">
 * In HTML the <meta> tag has no end tag.
 * In XHTML the <meta> tag must be properly closed.
 * Attribute	Value           Description
 * charset      character_set	Specifies the character encoding for the HTML document
 * content      text            Gives the value associated with the http-equiv or name attribute
 * http-equiv	content-type
 *              default-style
 *              refresh         Provides an HTTP header for the information/value of the content attribute
 * name         application-name
 *              author
 *              description
 *              generator
 *              keywords
 *              viewport        Specifies a name for the metadata
 * scheme       format/URI      Not supported in HTML5.
 *                              Specifies a scheme to be used to interpret the value of the content attribute
 *
 * HTML 4.01: <meta http-equiv="content-type" content="text/html; charset=UTF-8">
 * HTML5:     <meta charset="UTF-8" />
 * <meta name="description" content="Free Web tutorials">
 * <meta name="author" content="John Doe">
 * <meta name="viewport" content="width=device-width, initial-scale=1.0">
 * meta("", "", "", "charset", "", "")
 * meta("", myName, myContent, myCharset, myInitialScale)
 */
function meta(myId, myName, myContent, myCharset, myInitialScale, myScheme) {
    if (getDebugMessageType() === 1) {
        console.debug("meta(" + myId + "," + myName + "," + myContent + "," + myCharset + "," + myInitialScale + "," + myScheme + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theName = "";
    if (myName !== "") {
        theName = ' name="' + myName + '"';
    }
    let theContent = "";
    if (myContent !== "") {
        theContent = ' content="' + myContent + '"';
    }
    let theCharset = "";
    // Ignore Content of myCharset as long as it is not empty
    if (myCharset !== "") {
        if (isHtml5()) {
            return '<meta charset="UTF-8" />';
        } else {
            return '<meta http-equiv="content-type" content="text/html; charset=UTF-8">';
        }
    }
    let theInitialScale = "";
    if (myInitialScale !== "") {
        theInitialScale = ' initial-scale="' + myInitialScale + '"';
    }
    let theScheme = "";
    if (getDocType() !== "HTML5") {
        if (myScheme !== "") {
            theScheme = ' scheme="' + myScheme + '"';
        }
    }
    return '<meta' + theId + theName + theContent + theCharset + theInitialScale + theScheme + elEnd();
}
/* ****************************************************************************
 * meter
 * <meter value="2" min="0" max="10">2 out of 10</meter>
 * <meter value="0.6">60%</meter>
 * The <meter> tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.
 * Examples: Disk usage, the relevance of a query result, etc.
 * Note: The <meter> tag should not be used to indicate progress (as in a progress bar). For progress bars, use the <progress> tag.
 * The <meter> tag is new in HTML5.
 * Attribute	Value	Description
 * form         form_id	Specifies one or more forms the <meter> element belongs to
 * high         number	Specifies the range that is considered to be a high value
 * low          number	Specifies the range that is considered to be a low value
 * max          number	Specifies the maximum value of the range
 * min          number	Specifies the minimum value of the range
 * optimum      number	Specifies what value is the optimal value for the gauge
 * value        number	Required. Specifies the current value of the gauge
 */
function meter(myId, myClass, myStyle, myFormId, myLow, myHigh, myMin, myMax, myOptimum, myValue, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("meta(" + myId + "," + myClass + "," + myStyle + "," + myFormId + "," + myLow + "," + myHigh  + "," + myMin  + "," + myMax  + "," + myOptimum  + "," + myValue  + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theFormId = "";
    if (myFormId !== "") {
        theFormId = ' form="' + myFormId + '"';
    }
    let theLow = "";
    if (myLow !== "") {
        theLow = ' low="' + myLow + '"';
    }
    let theHigh = "";
    if (myHigh !== "") {
        theHigh = ' high="' + myHigh + '"';
    }
    let theOptimum = "";
    if (myOptimum !== "") {
        theOptimum = ' optimum="' + myOptimum + '"';
    }
    let theValue = "";
    if (myValue !== "") {
        theValue = ' value="' + myValue + '"';
    }
    let theMin = "";
    if (myMin !== "") {
        theMin = ' min="' + myMin + '"';
    }
    let theMax = "";
    if (myMax !== "") {
        theMax = ' max="' + myMax + '"';
    }
    return '<meter' + theId + theClassName + theStyle + theFormId + theLow + theHigh + theOptimum + theMin + theMax + theValue + '>' + myContent + '</meter>';
}
/* ****************************************************************************
 * nav
 *
 * <nav>
 *   <a href="/html/">HTML</a> |
 *   <a href="/css/">CSS</a> |
 *   <a href="/js/">JavaScript</a> |
 *   <a href="/jquery/">jQuery</a>
 * </nav>
 *
 * The <nav> tag defines a set of navigation links.
 * Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major block of navigation links.
 * Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.
 * The <nav> tag is new in HTML5.
 */
function nav(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("nav(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<nav' + theId + theClassName + theStyle + '>' + myContent + '</nav>';
}
/* ****************************************************************************
 * noframes
 * Not Supported in HTML5.
 * <html>
 *   <frameset cols="25%,50%,25%">
 *     <frame src="frame_a.htm">
 *     <frame src="frame_b.htm">
 *     <frame src="frame_c.htm">
 *     <noframes>Sorry, your browser does not handle frames!</noframes>
 *   </frameset>
 * </html>
 * The <noframes> tag is a fallback tag for browsers that do not support frames.
 * It can contain all the HTML elements that you can find inside the <body> element of a normal HTML page.
 * The <noframes> element can be used to link to a non-frameset version of the web site,
 * or to display a message to users that frames are required.
 * The <noframes> element goes inside the <frameset> element.
 * Note: If you want to validate a page containing frames,
 * be sure the <!DOCTYPE> is set to either "HTML Frameset DTD" or "XHTML Frameset DTD".
 * The <noframes> tag is not supported in HTML5.
 * Important: In XHTML Frameset DTD,
 * the text in the <noframes> element must be enclosed in a <body> element.
 */
function noframes(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("noframes(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() === "HTML5") {
        return "";
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<noframes' + theId + theClassName + theStyle + '>' + myContent + '</noframes>';
}
/* ****************************************************************************
 * noscript
 * <script>
 *   document.write("Hello World!")
 * </script>
 * <noscript>Your browser does not support JavaScript!</noscript>
 * The <noscript> tag defines an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support script.
 * The <noscript> element can be used in both <head> and <body>.
 * When used inside the <head> element: <noscript> must contain only <link>, <style>, and <meta> elements.
 * The content inside the <noscript> element will be displayed if scripts are not supported, or are disabled in the user's browser.
 * Tip: It is also a good practice to use the comment tag to "hide" scripts from browsers without support for client-side scripts (so they don't show them as plain text):
 * <script>
 *   <!--
 *   function displayMsg() {
 *       alert("Hello World!")
 *   }
 *   //-->
 * </script>
 * In HTML 4.01, the <noscript> tag can only be used inside the <body> element.
 * In HTML5, the <noscript> tag can be used both inside <head> and <body>.
 */
function noscript(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("noscript(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<noscript' + theId + theClassName + theStyle + '>' + myContent + '</noscript>';
}
/* ****************************************************************************
 * object
 * <object width="400" height="400" data="helloworld.swf"></object>
 * The <object> tag defines an embedded object within an HTML document. Use this element to embed multimedia (like audio, video, Java applets, ActiveX, PDF, and Flash) in your web pages.
 * You can also use the <object> tag to embed another webpage into your HTML document.
 * You can use the <param> tag to pass parameters to plugins that have been embedded with the <object> tag.
 * Note: An <object> element must appear inside the <body> element. The text between the <object> and </object> is an alternate text, for browsers that do not support this tag.
 * Tip: For images use the <img> tag instead of the <object> tag.
 * Tip: At least one of the "data" or "type" attribute MUST be defined.
 * Some HTML 4.01 attributes are not supported in HTML5.
 * The "form" attribute is new in HTML5.
 * In HTML5, objects can be used and submitted in forms.
 * In HTML5, objects can no longer appear inside the <head> element of a document.
 * Attribute	Value	Description
 * align                Not supported in HTML5.
 *                      Specifies the alignment of the <object> element according to surrounding elements
 *              top
 *              bottom
 *              middle
 *              left
 *              right
 * archive      URL     Not supported in HTML5.
 *                      A space separated list of URL's to archives.
 *                      The archives contains resources relevant to the object
 * border       pixels	Not supported in HTML5.
 *                      Specifies the width of the border around an <object>
 * classid	class_ID	Not supported in HTML5.
 *                      Defines a class ID value as set in the Windows Registry or a URL
 * codebase     URL     Not supported in HTML5.
 *                      Defines where to find the code for the object
 * codetype	media_type	Not supported in HTML5.
 *                      The media type of the code referred to by the classid attribute
 * data         URL     Specifies the URL of the resource to be used by the object
 * declare      declare	Not supported in HTML5.
 *                      Defines that the object should only be declared,
 *                      not created or instantiated until needed
 * form     form_id     Specifies one or more forms the object belongs to
 * height	pixels      Specifies the height of the object
 * hspace	pixels      Not supported in HTML5.
 *                      Specifies the whitespace on left and right side of an object
 * name     name        Specifies a name for the object
 * standby	text        Not supported in HTML5.
 *                      Defines a text to display while the object is loading
 * type     media_type	Specifies the media type of data specified in the data attribute
 * usemap	#mapname	Specifies the name of a client-side image map to be used with the object
 * vspace	pixels      Not supported in HTML5.
 *                      Specifies the whitespace on top and bottom of an object
 * width	pixels      Specifies the width of the object
 */
function object(myId, myClass, myStyle, myClassid, myFormId, myType, myUseMap, myArchive, myAlign, myBorder, myCodebase, myCodetype, myDeclare, myStandby, myHspace, myVspace, myWidth, myHeight, myData, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("object(" + myId + "," + myClass + "," + myStyle + "," + myClassid + "," + myFormId + "," + myType + "," + myUseMap + "," + myArchive + "," + myAlign + "," + myBorder + "," + myCodebase + "," + myCodetype + "," + myDeclare + "," + myStandby + "," + myHspace + "," + myVspace + "," + myWidth + "," + myHeight + "," + myData + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '" name="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theData = "";
    if (myData !== "") {
        theData = ' data="' + myData + '"';
    }
    let theUseMap = "";
    if (myUseMap !== "") {
        theUseMap = ' usemap="' + myUseMap + '"';
    }
    let theType = "";
    if (myType !== "") {
        theType = ' type="' + myType + '"';
    }
    let theWidth = "";
    if (myWidth !== "") {
        theWidth = ' width="' + myWidth + '"';
    }
    let theHeight = "";
    if (myHeight !== "") {
        theHeight = ' height="' + myHeight + '"';
    }
    let theAlign = "";
    let theArchive = "";
    let theBorder = "";
    let theClassid = "";
    let theCodebase = "";
    let theCodetype = "";
    let theDeclare = "";
    let theVspace = "";
    let theHspace = "";
    let theStandby = "";
    let theFormId = "";
    if (getDocType() !== "HTML5") {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myArchive !== "") {
            theArchive = ' archive="' + myArchive + '"';
        }
        if (myBorder !== "") {
            theBorder = ' border="' + myBorder + '"';
        }
        if (myClassid !== "") {
            theClassid = ' classid="' + myClassid + '"';
        }
        if (myCodebase !== "") {
            theCodebase = ' codebase="' + myCodebase + '"';
        }
        if (myCodetype !== "") {
            theCodetype = ' codetype="' + myCodetype + '"';
        }
        if (myDeclare !== "") {
            theDeclare = ' declare="' + myDeclare + '"';
        }
        if (myHspace !== "") {
            theHspace = ' hspace="' + myHspace + '"';
        }
        if (myStandby !== "") {
            theStandby = ' standby="' + myStandby + '"';
        }
        if (myVspace !== "") {
            theVspace = ' vspace="' + myVspace + '"';
        }
    } else { // HTML5
        if (myFormId !== "") {
            theFormId = ' form="' + myFormId + '"';
        }
    }
    return '<object' + theId + theClassName + theStyle + theFormId + theType + theUseMap + theAlign + theArchive + theBorder + theClassid + theCodebase + theCodetype + theDeclare + theVspace + theHspace + theStandby + myData + myWidth + myHeight + '>' + myContent + '</object>';
}
/* ****************************************************************************
 * ol
 * <ol>
 *   <li>Coffee</li>
 *   <li>Tea</li>
 *   <li>Milk</li>
 * </ol>
 *
 * <ol start="50">
 *   <li>Coffee</li>
 *   <li>Tea</li>
 *   <li>Milk</li>
 * </ol>
 * The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical.
 * Use the <li> tag to define list items.
 * Tip: For unordered list, use the <ul> tag.
 * Tip: Use CSS to style lists.
 * The "start" and "type" attributes were deprecated in HTML 4.01, but are supported in HTML5.
 * The "reversed" attribute is new in HTML5.
 * The "compact" attribute is not supported in HTML5.
 * Attribute	Value       Description
 * compact      compact     Not supported in HTML5.
 *                          Specifies that the list should render smaller than normal
 * reversed     reversed	Specifies that the list order should be descending (9,8,7...)
 * start        number      Specifies the start value of an ordered list
 * type         1
 *              A
 *              a
 *              I
 *              i           Specifies the kind of marker to use in the list
 * CSS
 * ol {
 *   display: block;
 *   list-style-type: decimal;
 *   margin-top: 1em;
 *   margin-bottom: 1em;
 *   margin-left: 0;
 *   margin-right: 0;
 *   padding-left: 40px;
 * }
 */
function ol(myId, myClass, myStyle, myCompact, myStart, myType, myReversed, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("ol(" + myId + "," + myClass + "," + myStyle + "," + myCompact + "," + myStart + "," + myType + "," + myReversed + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theStart = "";
    if (myStart !== "") {
        theStart = ' start="' + myStart + '"';
    }
    let theType = "";
    if (myType !== "") {
        theType = ' type="' + myType + '"';
    }
    let theReversed = "";
    let theCompact = "";
    if (getDocType() === "HTML5") {
        if (myReversed !== "") {
            theReversed = ' reversed="' + myReversed + '"';
        }
    } else {
        if (myCompact !== "") {
            theCompact = ' compact="' + myCompact + '"';
        }
    }
    return '<ol' + theId + theClassName + theStyle + theReversed + theCompact + theStart + theType + '>' + myContent + '</ol>';
}
/* ****************************************************************************
 * optgroup
 * <select>
 *   <optgroup label="Swedish Cars">
 *     <option value="volvo">Volvo</option>
 *     <option value="saab">Saab</option>
 *   </optgroup>
 *   <optgroup label="German Cars">
 *     <option value="mercedes">Mercedes</option>
 *     <option value="audi">Audi</option>
 *   </optgroup>
 * </select>
 * The <optgroup> is used to group related options in a drop-down list.
 * If you have a long list of options, groups of related options are easier to handle for a user.
 * Attribute	Value       Description
 * disabled     disabled	Specifies that an option-group should be disabled
 * label        text        Specifies a label for an option-group
 */
function optgroup(myId, myClass, myDisabled, myLabel, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("optgroup(" + myId + "," + myClass + "," + myDisabled + "," + myLabel + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theLabel = "";
    if (myLabel !== "") {
        theLabel = ' label="' + myLabel + '"';
    }
    let theDisabled  = "";
    if (myDisabled !== "") {
        theDisabled = ' disabled="' + myDisabled + '"';
    }
    return '<optgroup' + theId + theClassName + theDisabled + theLabel + '>' + myContent + '</optgroup>';
}
/* ****************************************************************************
 * option
 * <select>
 *   <option value="volvo">Volvo</option>
 *   <option value="saab">Saab</option>
 *   <option value="opel">Opel</option>
 *   <option value="audi">Audi</option>
 * </select>
 * The <option> tag defines an option in a select list.
 * <option> elements go inside a <select> or <datalist> element.
 * Note: The <option> tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server.
 * Tip: If you have a long list of options, you can group related options with the <optgroup> tag.
 * Attribute	Value       Description
 * disabled     disabled	Specifies that an option should be disabled
 * label        text        Specifies a shorter label for an option
 * selected     selected	Specifies that an option should be pre-selected when the page loads
 * value        text        Specifies the value to be sent to a server
 */
function option(myId, myClass, myDisabled, mySelected, myValue, myLabel, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("option(" + myId + "," + myClass + "," + myDisabled + "," + mySelected + "," + myValue + "," + myLabel + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theValue = "";
    if (myValue !== "") {
        theValue = ' value="' + myValue + '"';
    }
    let theLabel = "";
    if (myLabel !== "") {
        theLabel = ' label="' + myLabel + '"';
    }
    let theDisabled  = "";
    if (myDisabled !== "") {
        theDisabled = ' disabled="' + myDisabled + '"';
    }
    let theSelected  = "";
    if (mySelected !== "") {
        theSelected = ' selected="' + mySelected + '"';
    }
    return '<option' + theId + theClassName + theDisabled + theLabel + theSelected + theValue + '>' + myContent + '</option>';
}
/* ****************************************************************************
 * output
 * <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
 *   <input type="range" id="a" value="50">100
 *   +<input type="number" id="b" value="50">
 *   =<output name="x" for="a b"></output>
 * </form>
 * The <output> tag represents the result of a calculation (like one performed by a script).
 * The <output> tag is new in HTML5.
 * Attribute	Value       Description
 * for          element_id	Specifies the relationship between the result of the calculation, and the elements used in the calculation
 * form         form_id     Specifies one or more forms the output element belongs to
 * name         name        Specifies a name for the output element
 */
function output(myId, myClass, myStyle, myName, myFor, myForm, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("output(" + myId + "," + myClass + "," + myStyle + "," + myName + "," + myFor + "," + myForm + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"' + ' name="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theFor = "";
    if (myFor !== "") {
        theFor = ' for="' + myFor + '"';
    }
    let theForm = "";
    if (myForm !== "") {
        theForm = ' form="' + myForm + '"';
    }
    let theName = "";
    if (myName !== "") {
        theName = ' name="' + myName + '"';
    }
    return '<output' + theId + theClassName + theStyle + theFor + theName + theForm + '>' + myContent + '</output>';
}
/* ****************************************************************************
 * p: paragraph
 * <p>This is some text in a paragraph.</p>
 * The <p> tag defines a paragraph.
 * Browsers automatically add some space (margin) before and after each <p> element. The margins can be modified with CSS (with the margin properties).
 * The align attribute is not supported in HTML5.
 * Attribute	Value	Description
 * align	    left
 *              right
 *              center
 *              justify	Not supported in HTML5.
 *                      Specifies the alignment of the text within a paragraph
 */
function p(myId, myClass, myStyle, myAlign, myDir, myLang, myTitle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("p(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myDir + "," + myLang + "," + myTitle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theTitle = "";
    if (myTitle !== "") {
        theTitle = ' style="' + myTitle + '"';
    }
    let theDir = "";
    if (myDir !== "") {
        theDir = ' dir="' + myDir + '"';
    }
    let theLang = "";
    if (myLang !== "") {
        theLang = ' lang="' + myLang + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style=" text-align: ' + myAlign + ';' + myStyle + '"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (myAlign !== "") {
            theStyle = ' style=" text-align: ' + myAlign + ';"';
        }
    }
    return '<p' + theId + theClassName + theStyle + theDir + theLang + theTitle + '>' + myContent + '</p>';
}
/* ****************************************************************************
 * param
 * <object data="horse.wav">
 *   <param name="autoplay" value="true">
 * </object>
 * The <param> tag is used to define parameters for plugins embedded with an <object> element.
 * Tip: HTML 5 also includes two new elements for playing audio or video: The <audio> and <video> tags.
 * The "type" and "valuetype" attributes are not supported in HTML5.
 * In HTML the <param> tag has no end tag.
 * In XHTML the <param> tag must be properly closed, like this <param />.
 * Attribute	Value	Description
 * name         name	Specifies the name of a parameter
 * type     media_type	Not supported in HTML5.
 *                      Specifies the media type of the parameter
 * value        value	Specifies the value of the parameter
 * valuetype	data    Not supported in HTML5.
 *              ref     Specifies the type of the value
 *              object
 */
function param(myId, myClass, myName, myType, myValue, myValueType) {
    if (getDebugMessageType() === 1) {
        console.debug("param(" + myId + "," + myClass + "," + myName + "," + myType + "," + myValue + "," + myValueType + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"' + ' name="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theValue = "";
    if (myValue !== "") {
        theValue = ' value="' + myValue + '"';
    }
    let theName = "";
    if (myName !== "") {
        theName = ' name="' + myName + '"';
    }
    let theType = "";
    let theValueType = "";
    if (getDocType() !== "HTML5") {
        if (myType !== "") {
            theType = ' type="' + myType + '"';
        }
        if (myValueType !== "") {
            theValueType = ' valuetype="' + myValueType + '"';
        }
    }
    return '<param' + theId + theClassName + theName + theType + theValue + theValueType + elEnd();
}
/* ****************************************************************************
 * picture
 * <picture>
 *   <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg" />
 *   <source media="(min-width: 465px)" srcset="img_white_flower.jpg" />
 *   <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;" />
 * </picture>
 * The <picture> tag gives web developers more flexibility in specifying image resources.
 * The most common use of the <picture> element will be for art direction in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.
 * The <picture> element holds two different tags: one or more <source> tags and one <img> tag.
 * The <source> element has the following attributes:
 * srcset (required) - defines the URL of the image to show
 * media - accepts any valid media query that would normally be defined in a CSS
 * sizes - defines a single width descriptor, a single media query with width descriptor, or a comma-delimited list of media queries with a width descriptor
 * type - defines the MIME type
 * The browser will use the attribute values to load the most appropriate image. The browser will use the first <source> element with a matching hint and ignore any following <source> tags.
 * The <img> element is required as the last child tag of the <picture> declaration block. The <img> element is used to provide backward compatibility for browsers that do not support the <picture> element, or if none of the <source> tags matched.
 * The <picture> element works similar to the <video> and <audio> elements. You set up different sources, and the first source that fits the preferences is the one being used.
 * The <picture> tag is new in HTML5.
 */
function picture(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("picture(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<picture' + theId + theClassName + theStyle + '>' + myContent + '</picture>';
}
/* ****************************************************************************
 * pre
 * <pre>
 *  Text in a pre element
 *  is displayed in a fixed-width
 *  font, and it preserves
 *  both      spaces and
 *  line breaks
 * </pre>
 * The <pre> tag defines preformatted text.
 * Text in a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.
 * Tip: Use the <pre> element when displaying text with unusual formatting, or some sort of computer code.
 * The "width" attribute is not supported in HTML5.
 * Attribute	Value	Description
 * width        number	Not supported in HTML5.
 *                      Specifies the maximum number of characters per line
 */
function pre(myId, myClass, myStyle, myWidth, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("pre(" + myId + "," + myClass + "," + myStyle + "," + myWidth + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theWidth = "";
    if (getDocType() === "HTML5") {
        if (myWidth !== "") {
            theWidth = ' width: ' + myWidth + ';';
        }
    } else {
        if (myWidth !== "") {
            theWidth = ' width="' + myWidth + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (theWidth === "") {
            theStyle = ' style="' + myStyle + '"';
        } else {
            if (getDocType() === "HTML5") {
                theStyle = ' style="' + myStyle + theWidth + '"';
            } else {
                theStyle = ' style="' + myStyle + '"';
            }
        }
    } else {
        if (theWidth !== "" && getDocType() === "HTML5") {
            theStyle = ' style="' + theWidth + ';"';
        }
    }
    return '<pre' + theId + theClassName + theStyle + theWidth + '>' + myContent + '</pre>';
}
/* ****************************************************************************
 * progress
 * <progress value="22" max="100"></progress>
 * The <progress> tag represents the progress of a task.
 * The <progress> tag is new in HTML5.
 * Tip: Use the <progress> tag in conjunction with JavaScript to display the progress of a task.
 * Note: The <progress> tag is not suitable for representing a gauge (e.g. disk space usage or relevance of a query result). To represent a gauge, use the <meter> tag instead.
 * Attribute	Value	Description
 * max          number	Specifies how much work the task requires in total
 * value        number	Specifies how much of the task has been completed
 */
function progress(myId, myClass, myValue, myMax) {
    if (getDebugMessageType() === 1) {
        console.debug("progress(" + myId + "," + myClass + "," + myValue + "," + myMax + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theValue = "";
    if (myValue !== "") {
        theValue = ' value="' + myValue + '"';
    }
    let theMax = "";
    if (myMax !== "") {
        theMax = ' max="' + myMax + '"';
    }
    return '<progress' + theId + theClassName + theValue + theMax + '>' + myContent + '</progress>';
}
/* ****************************************************************************
 * q
 * <p><q>In the Bible: there is only one Jesus</q> Sir Isaac Newton</p>
 * The <q> tag defines a short quotation.
 * Browsers normally insert quotation marks around the quotation.
 * Tip: Use <blockquote> to mark up a section that is quoted from another source.
 * cite	URL	Specifies the source URL of the quote
 */
function q(myId, myClass, myStyle, myCite, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("q(" + myId + "," + myClass + "," + myStyle + "," + myCite + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theCite = "";
    if (myCite !== "") {
        theCite = ' cite="' + myCite + '"';
    }
    return '<q' + theId + theClassName + theStyle + theCite + '>' + myContent + '</q>';
}
/* ****************************************************************************
 * rp
 * <ruby>
 *   漢 <rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt>
 * </ruby>
 * The <rp> tag can be used to provide parentheses around a ruby text,
 * to be shown by browsers that do not support ruby annotations.
 * Use the <rp> tag together with the <ruby> and the <rt> tags:
 * The <ruby> element consists of one or more characters that needs an explanation/pronunciation,
 * and an <rt> element that gives that information,
 * and an optional <rp> element that defines what to show for browsers that not support ruby annotations.
 * The <rp> tag is new in HTML5.
 */
function rp(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("rp(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME
        return span(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<rp' + theId + theClassName + theStyle + '>' + myContent + '</rp>';
}
/* ****************************************************************************
 * rt
 * <ruby>
 *   漢 <rt> ㄏㄢˋ </rt>
 * </ruby>
 * The <rt> tag defines an explanation or pronunciation of characters (for East Asian typography) in a ruby annotation.
 * Use the <rt> tag together with the <ruby> and the <rp> tags: The <ruby> element consists of one or more characters that needs an explanation/pronunciation, and an <rt> element that gives that information, and an optional <rp> element that defines what to show for browsers that not support ruby annotations.
 * The <rt> tag is new in HTML5.
 */
function rt(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("rt(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME
        return span(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<rt' + theId + theClassName + theStyle + '>' + myContent + '</rt>';
}
/* ****************************************************************************
 * ruby
 * <ruby>
 *   漢 <rt> ㄏㄢˋ </rt>
 * </ruby>
 * The <ruby> tag specifies a ruby annotation.
 * A ruby annotation is a small extra text, attached to the main text to indicate the pronunciation or meaning of the corresponding characters. This kind of annotation is often used in Japanese publications.
 * Use the <ruby> tag together with the <rt> and/or the <rp> tags: The <ruby> element consists of one or more characters that needs an explanation/pronunciation, and an <rt> element that gives that information, and an optional <rp> element that defines what to show for browsers that do not support ruby annotations.
 * The <ruby> tag is new in HTML5.
 */
function ruby(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("ruby(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<ruby' + theId + theClassName + theStyle + '>' + myContent + '</ruby>';
}
/* ****************************************************************************
 * s
 * <p><s>My car is blue.</s></p>
 * The <s> tag specifies text that is no longer correct, accurate or relevant.
 * The <s> tag should not be used to define replaced or deleted text,
 *         use the <del> tag to define replaced or deleted text.
 * The <s> element was deprecated in HTML 4.01,
 *         and was used to define strikethrough text.
 * The <s> element is redefined in HTML5,
 *         and is now used to define text that is no longer correct.
 * CSS
 * s
 * {
 *      text-decoration: line-through;
 * }
 */
function s(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("s(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return strike(myId, myClass, myStyle, myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<s' + theId + theClassName + theStyle + '>' + myContent + '</s>';
}
/* ****************************************************************************
 * samp
 * <samp>Sample output from a computer program</samp>
 * The <samp> tag is a phrase tag. It defines sample output from a computer program.
 * Tip: This tag is not deprecated, but it is possible to achieve richer effect with CSS.
 */
function samp(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("samp(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<samp' + theId + theClassName + theStyle + '>' + myContent + '</samp>';
}
/* ****************************************************************************
 * script
 * <script>
 *      document.getElementById("demo").innerHTML = "Hello JavaScript!";
 * </script>
 * The <script> tag is used to define a client-side script (JavaScript).
 * The <script> element either contains scripting statements, or it points to an external script file through the src attribute.
 * Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.
 * Note: If the "src" attribute is present, the <script> element must be empty.
 * Tip: Also look at the <noscript> element for users that have disabled scripts in their browser, or have a browser that doesn't support client-side scripting.
 * Note: There are several ways an external script can be executed:
 *      If async="async": The script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing)
 *      If async is not present and defer="defer": The script is executed when the page has finished parsing
 *      If neither async or defer is present: The script is fetched and executed immediately, before the browser continues parsing the page
 * The "type" attribute is required in HTML 4, but optional in HTML5.
 * The "async" attribute is new in HTML5.
 * The HTML 4.01 attribute: "xml:space", is not supported in HTML5.
 * In XHTML, the content inside scripts is declared as #PCDATA (instead of CDATA), which means that entities will be parsed.
 * This means that in XHTML, all special characters should be encoded, or all content should be wrapped inside a CDATA section:
 * <script type="text/javascript">
 *   //<![CDATA[
 *      var i = 10;
 *      if (i < 5) {
 *          // some code
 *      }
 *   //]]>
 * </script>
 * Attribute	Value	Description
 * async        async	Specifies that the script is executed asynchronously (only for external scripts)
 * charset      charset	Specifies the character encoding used in an external script file
 * defer        defer	Specifies that the script is executed when the page has finished parsing (only for external scripts)
 * src          URL     Specifies the URL of an external script file
 * type     media_type	Specifies the media type of the script
 * xml:space  preserve	Not supported in HTML5.
 *                      Specifies whether whitespace in code should be preserved
 */
function script(myId, myClass, myStyle, myAsync, myCharset, myDefer, myType, myXmlSpace, mySrc, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("script(" + myId + "," + myClass + "," + myStyle + "," + myAsync + "," + myCharset + "," + myDefer + "," + myType + "," + myXmlSpace + "," + mySrc + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theCharset = "";
    if (myCharset !== "") {
        theCharset = ' charset="' + myCharset + '"';
    }
    let theDefer = "";
    if (myDefer !== "") {
        theDefer = ' defer="' + myDefer + '"';
    }
    let theSrc = "";
    if (mySrc !== "") {
        theSrc = ' src="' + mySrc + '"';
    }
    let theType = "";
    if (myType !== "") {
        theType = ' type="' + myType + '"';
    }
    let theAsync = "";
    let theXmlSpace = "";
    if (getDocType() === "HTML5") {
        if (myAsync !== "") {
            theAsync = ' async="' + myAsync + '"';
        }
    } else {
        if (myXmlSpace !== "") {
            theXmlSpace = ' xml:space="' + myXmlSpace + '"';
        }
    }
    return '<script' + theId + theClassName + theStyle + theCharset + theDefer + theSrc + theType + theAsync + theXmlSpace + '>' + myContent + '</script>';
}
/* ****************************************************************************
 * section
 * <section>
 *   <h1>WWF</h1>
 *   <p>The World Wide Fund for Nature (WWF) is....</p>
 * </section>
 * The <section> tag defines sections in a document, such as chapters, headers, footers, or any other sections of the document.
 * The <section> tag is new in HTML5.
 */
function section(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("section(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<section' + theId + theClassName + theStyle + '>' + myContent + '</section>';
}
/* ****************************************************************************
 * select
 * <select>
 *   <option value="volvo">Volvo</option>
 *   <option value="saab">Saab</option>
 *   <option value="mercedes">Mercedes</option>
 *   <option value="audi">Audi</option>
 * </select>
 * The <select> element is used to create a drop-down list.
 * The <option> tags inside the <select> element define the available options in the list.
 * Tip: The <select> element is a form control and can be used in a form to collect user input.
 * HTML5 has added some new attributes.
 * Attribute	Value       Description
 * autofocus	autofocus	Specifies that the drop-down list should automatically get focus when the page loads
 * disabled     disabled	Specifies that a drop-down list should be disabled
 * form         form_id     Defines one or more forms the select field belongs to
 * multiple     multiple	Specifies that multiple options can be selected at once
 * name         name        Defines a name for the drop-down list
 * required     required	Specifies that the user is required to select a value before submitting the form
 * size         number      Defines the number of visible options in a drop-down list
 */
function select(myId, myClass, myStyle, myName, myFormId, myAutoFocus, myRequired, myDisabled, myMultiple, mySize, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("select(" + myId + "," + myClass + "," + myStyle + "," + myName + "," + myFormId + "," + myAutoFocus + "," + myRequired  + "," + myDisabled  + "," + myMultiple  + "," + mySize + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theDisabled = "";
    if (myDisabled !== "") {
        theDisabled = ' disabled="' + myDisabled + '"';
    }
    let theMultiple = "";
    if (myMultiple !== "") {
        theMultiple = ' multiple="' + myMultiple + '"';
    }
    let theName = "";
    if (myName !== "") {
        theName = ' name="' + myName + '"';
    }
    let theSize = "";
    if (mySize !== "") {
        theSize = ' size="' + mySize + '"';
    }
    let theAutofocus = "";
    let theFormId = "";
    let theRequired = "";
    if (getDocType() === "HTML5") {
        if (myAutoFocus !== "") {
            theAutofocus = ' autofocus="' + myAutoFocus + '"';
        }
        if (myFormId !== "") {
            theFormId = ' form="' + myFormId + '"';
        }
        if (myRequired !== "") {
            theRequired = ' required="' + myRequired + '"';
        }
    }
    return '<select' + theId + theClassName + theStyle + theDisabled + theMultiple + theName + theSize + theAutofocus + theFormId + theRequired + '>' + myContent + '</select>';
}
/* ****************************************************************************
 * small
 * <p><small>Small Minded</small></p>
 * The <small> tag defines smaller text (and other side comments).
 * CSS
 * small { font-size: smaller; }
 */
function small(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("small(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<small' + theId + theClassName + theStyle + '>' + myContent + '</small>';
}
/* ****************************************************************************
 * source
 * <audio controls>
 *   <source src="horse.ogg" type="audio/ogg" />
 *   <source src="horse.mp3" type="audio/mpeg" />
 *   Your browser does not support the audio element.
 * </audio>
 * <picture>
 *   <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
 *   <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
 *   <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
 * </picture>
 * The <source> tag is used to specify multiple media resources for media elements, such as <video>, <audio>, and <picture>.
 * The <source> tag allows you to specify alternative video/audio/image files which the browser may choose from, based on its media type, codec support or media query.
 * The <source> tag is new in HTML5.
 * Attribute	Value       Description
 * src          URL         Required when <source> is used in <audio> and <video>. Specifies the URL of the media file
 * srcset       URL         Required when <source> is used in <picture>. Specifies the URL of the image to use in different situations
 * media        media_query	Accepts any valid media query that would normally be defined in a CSS
 * sizes                    Specifies image sizes for different page layouts
 * type         MIME-type	Specifies the MIME-type of the resource
 */
function source(myId, mySource, mySourceSet, mySizes) {
    if (getDebugMessageType() === 1) {
        console.debug("source(" + myId + "," + mySource + "," + mySourceSet + "," + mySizes + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theSourceSet = "";
    if (mySourceSet !== "") {
        theSourceSet = ' id="' + mySourceSet + '"';
    }
    let theSizes = "";
    if (mySizes !== "") {
        theSizes = ' id="' + mySizes + '"';
    }
    let theSource = "";
    let theType = "";
    if (mySource !== "") {
        let theExt = getFileExt(mySource);
        // .ogg, oga, .ogx, .spx, .opus
        // .ogg, .ogv, .ogm, .opus
        if (theExt === "mp3") {
            theType = ' type="audio/mpeg';
        } else if (theExt === "mp4" || theExt === "m4v") {
            theType = ' type="video/mp4';
        } else if (theExt === "oga") {
            theType = ' type="audio/ogg';
        } else if (theExt === "ogv") {
            theType = ' type="video/ogg';
        } else if (theExt === "webm") {
            theType = ' type="video/webm';
        }
        theSource = ' src="' + mySource + '"';
    }
    return '<source' + theId + theSource + theSourceSet + theType + theSizes + elEnd();
}
/* ****************************************************************************
 * span
 * <p>My mother has <span style="color:blue">blue</span> eyes.</p>
 * The <span> tag is used to group inline-elements in a document.
 * The <span> tag provides no visual change by itself.
 * The <span> tag provides a way to add a hook to a part of a text or a part of a document.
 * Tip: When a text is hooked in a <span> element, you can style it with CSS, or manipulate it with JavaScript.
 * I added align as css, and globals: dir,lang and title
 */
function span(myId, myClass, myStyle, myAlign, myDir, myLang, myTitle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("span(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myDir + "," + myLang + "," + myTitle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theTitle = "";
    if (myTitle !== "") {
        theTitle = ' style="' + myTitle + '"';
    }
    let theDir = "";
    if (myDir !== "") {
        theDir = ' dir="' + myDir + '"';
    }
    let theLang = "";
    if (myLang !== "") {
        theLang = ' lang="' + myLang + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (myAlign !== "") {
            theStyle = ' style=" text-align: ' + myAlign + ';' + myStyle + '"';
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        theStyle = ' style=" text-align: ' + myAlign + ';"';
    }
    return '<span' + theId + theClassName + theStyle + theDir + theLang + theTitle + '>' + myContent + '</span>';
}
/* ****************************************************************************
 * strike
 * The <strike> tag defines strikethrough text.
 * <p>Version 2.0 is <strike>not yet available!</strike> now available!</p>
 * Not Supported in HTML5
 * The <strike> tag is not supported in HTML5. Use <del> or <s> instead.
 * s
 * The <s> element was deprecated in HTML 4.01,
 *         and was used to define strikethrough text.
 * The <s> element is redefined in HTML5,
           and is now used to define text that is no longer correct.
 */
function strike(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("strike(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return s(myId, myClass, myStyle, myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<strike' + theId + theClassName + theStyle + '>' + myContent + '</strike>';
}
/* ****************************************************************************
 * strong
 * <strong>Strong text</strong>
 * The <strong> tag is a phrase tag. It defines important text.
 * Tip: This tag is not deprecated, but it is possible to achieve richer effect with CSS.
 * In HTML 4.01, the <strong> tag defines strong emphasized text, but in HTML5 it defines important text.
 * CSS: strong { font-weight: bold; }
 */
function strong(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("strong(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<strong' + theId + theClassName + theStyle + '>' + myContent + '</strong>';
}
/* ****************************************************************************
 * style
 * <html>
 *  <head>
 *      <style>
 *          h1 {color:red;}
 *          p {color:blue;}
 *      </style>
 *  </head>
 *  <body>
 *      <h1>A heading</h1>
 *      <p>A paragraph.</p>
 *  </body>
 * </html>
 * The <style> tag is used to define style information for an HTML document.
 * Inside the <style> element you specify how HTML elements should render in a browser.
 * Each HTML document can contain multiple <style> tags.
 * Tip: To link to an external style sheet, use the <link> tag.
 * Attribute	Value       Description
 * media        media_query	Specifies what media/device the media resource is optimized for
 * type         text/css	Specifies the media type of the <style> tag
 */
function style(myId, myMedia, myType, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("style(" + myId + "," + myMedia + "," + myType + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theMedia = "";
    if (myMedia !== "") {
        theMedia = ' media="' + myMedia + '"';
    }
    let theType = "";
    if (myType !== "") {
        theType = ' type="' + myType + '"';
    }
    return '<style' + theId + theMedia + theType + '>' + myContent + '</style>';
}
/* ****************************************************************************
 * sub
 * <p>This text contains <sub>subscript</sub> text.</p>
 * The <sub> tag defines subscript text. Subscript text appears half a character below the normal line,
 * and is sometimes rendered in a smaller font.
 * Subscript text can be used for chemical formulas, like H2O.
 * Tip: Use the <sup> tag to define superscripted text.
 * CSS: sub { vertical-align: sub; font-size: smaller; }
 */
function sub(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("sub(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<sub' + theId + theClassName + theStyle + '>' + myContent + '</sub>';
}
/* ****************************************************************************
 * summary
 * <details>
 *   <summary>Copyright 1999-2014.</summary>
 *   <p> - by Refsnes Data. All Rights Reserved.</p>
 *   <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
 * </details>
 * The <summary> tag defines a visible heading for the <details> element.
 * The heading can be clicked to view/hide the details.
 * The <summary> tag is new in HTML5.
 * ms does not support it
 * Note: The <summary> element should be the first child element of the <details> element.
 */
function summary(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("summary(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5" || getBrowser() === "ms") {
        // FIXME make a class or style
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<summary' + theId + theClassName + theStyle + '>' + myContent + '</summary>';
}
/* ****************************************************************************
 * sup
 * <p>This text contains <sup>superscript</sup> text.</p>
 * The <sup> tag defines superscript text.
 * Superscript text appears half a character above the normal line,
 * and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1].
 * Tip: Use the <sub> tag to define subscript text.
 * CSS: sup { vertical-align: super; font-size: smaller; }
 */
function sup(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("sup(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<sup' + theId + theClassName + theStyle + '>' + myContent + '</sup>';
}
/* ****************************************************************************
 * svg
 * <svg width="100" height="100">
 *     <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
 * </svg>
 * The <svg> tag defines a container for SVG graphics.
 * SVG has several methods for drawing paths, boxes, circles, text, and graphic images.
 * See bix: you can use this to size and image to full screen
 */
function svg(myId, myClass, myStyle, myWidth, myHeight, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("svg(" + myId + "," + myClass + "," + myStyle + "," + myWidth + "," + myHeight + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theWidth = "";
    if (myWidth !== "") {
        theWidth = ' width="' + myWidth + '"';
    }
    let theHeight = "";
    if (myHeight !== "") {
        theHeight = ' height="' + myHeight + '"';
    }
    return '<svg' + theId + theClassName + theStyle + myWidth + myHeight + '>' + myContent + '</svg>';
}
/* ****************************************************************************
 * table
 * <table>
 *   <tr>
 *     <th>Month</th>
 *     <th>Savings</th>
 *   </tr>
 *   <tr>
 *     <td>January</td>
 *     <td>$100</td>
 *   </tr>
 * </table>
 * The <table> tag defines an HTML table.
 * An HTML table consists of the <table> element and one or more <tr>, <th>, and <td> elements.
 * The <tr> element defines a table row, the <th> element defines a table header, and the <td> element defines a table cell.
 * A more complex HTML table may also include <caption>, <col>, <colgroup>, <thead>, <tfoot>, and <tbody> elements.
 * Note: Tables should not be used for page layout! Historically, some Web authors have misused tables in HTML as a way to control their page layout. However, there are a variety of alternatives to using HTML tables for layout, primarily using CSS.
 * The "align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", and "width" attributes are not supported in HTML5.
 * Attribute	Value       Description
 * align        left        Not supported in HTML5.
 *              center      Specifies the alignment of a table according to surrounding text
 *              right
 * bgcolor      rgb(x,x,x)  Not supported in HTML5.
 *              #xxxxxx     Specifies the background color for a table
 *              colorname
 * border       1, 0        Not supported in HTML5.
 *                          Specifies whether or not the table is being used for layout purposes
 * cellpadding	pixels      Not supported in HTML5.
 *                          Specifies the space between the cell wall and the cell content
 * cellspacing	pixels      Not supported in HTML5.
 *                          Specifies the space between cells
 * frame	void            Not supported in HTML5.
 *          above           Specifies which parts of the outside borders that should be visible
 *          below
 *          hsides
 *          lhs
 *          rhs
 *          vsides
 *          box
 *          border
 * rules	none            Not supported in HTML5.
 *          groups          Specifies which parts of the inside borders that should be visible
 *          rows
 *          cols
 *          all
 * summary	text            Not supported in HTML5.
 *                          Specifies a summary of the content of a table
 * width	pixels, %       Not supported in HTML5.
 *                          Specifies the width of a table
 * CSS: table { display: table; border-collapse: separate; border-spacing: 2px; border-color: gray; }
 */
function table(myId, myClass, myStyle, myAlign, myBgColor, myBorder, myCellPadding, myCellSpacing, myFrame, myRules, mySummary, myWidth, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("table(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myBgColor + "," + myCellPadding + "," + myCellSpacing + "," + myFrame + "," + myRules + "," + mySummary + "," + myWidth + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theAlign = "";
    let theBgColor = "";
    let theBorder = "";
    let theCellPadding = "";
    let theCellSpacing = "";
    let theFrame = "";
    let theRules = "";
    let theSummary = "";
    let theWidth = "";
    let theExtras = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theExtras = ' text-align: ' + myAlign + ';';
        }
        if (myBgColor !== "") {
            theExtras = theExtras + ' background-color: ' + myBgColor + ';';
        }
        if (myBorder !== "") {
            theExtras = theExtras + ' border: ' + myBorder + ';';
        }
        if (myCellPadding !== "") {
            theExtras = theExtras + ' padding-right: ' + myCellPadding + '; padding-left: ' + myCellPadding + ';';
        }
        if (myCellSpacing !== "") {
            theExtras = theExtras + ' padding-top: ' + myCellSpacing + '; padding-bottom: ' + myCellSpacing + ';';
        }
        if (myWidth !== "") {
            theExtras = theExtras + ' width: ' + myWidth + ';';
        }
    } else {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myBgColor !== "") {
            theBgColor = ' bgcolor="' + myBgColor + '"';
        }
        if (myBorder !== "") {
            theBorder = ' border="' + myBorder + '"';
        }
        if (myCellPadding !== "") {
            theCellPadding = ' cellpadding="' + myCellPadding + '"';
        }
        if (myCellSpacing !== "") {
            theCellSpacing = ' cellspacing="' + myCellSpacing + '"';
        }
        if (myFrame !== "") {
            theFrame = ' frame="' + myFrame + '"';
        }
        if (myRules !== "") {
            theRules = ' rules="' + myRules + '"';
        }
        if (mySummary !== "") {
            theSummary = ' summary="' + mySummary + '"';
        }
        if (myWidth !== "") {
            theWidth = ' width="' + myWidth + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + myStyle + theExtras + '"';
           } else {
                theStyle = ' style="' + myStyle + '"';
            }
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + theExtras + '"';
            }
        }
    }
    return '<table' + theId + theClassName + theStyle + theAlign + theBgColor + theBorder + theCellPadding + theCellSpacing + theFrame + theRules + theSummary + theWidth + '>' + myContent + '</table>';
}
/* ****************************************************************************
 * tbody
 * <table>
 *   <thead>
 *     <tr>
 *       <th>Month</th>
 *       <th>Savings</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>January</td>
 *       <td>$100</td>
 *     </tr>
 *     <tr>
 *       <td>February</td>
 *       <td>$80</td>
 *     </tr>
 *   </tbody>
 *   <tfoot>
 *     <tr>
 *       <td>Sum</td>
 *       <td>$180</td>
 *     </tr>
 *   </tfoot>
 * </table>
 * The <tbody> tag is used to group the body content in an HTML table.
 * The <tbody> element is used in conjunction with the <thead>,
 * and <tfoot> elements to specify each part of a table (body, header, footer).
 * Browsers can use these elements to enable scrolling of the table body independently of the header and footer.
 * Also, when printing a large table that spans multiple pages,
 * these elements can enable the table header and footer to be printed at the top and bottom of each page.
 * The <tbody> tag must be used in the following context: As a child of a <table> element,
 * after any <caption>, <colgroup>, and <thead> elements.
 * Note: The <tbody> element must have one or more <tr> tags inside.
 * Tip: The <thead>, <tbody>, and <tfoot> elements will not affect the layout of the table by default.
 * However, you can use CSS to style these elements.
 * None of the HTML 4.01 attributes are supported in HTML5.
 * Attribute	Value       Description
 * align        right       Not supported in HTML5.
 *              left        Aligns the content inside the <tbody> element
 *              center
 *              justify
 *              char
 * char         character	Not supported in HTML5.
 *                          Aligns the content inside the <tbody> element to a character
 * charoff      number      Not supported in HTML5.
 *                          Sets the number of characters the content inside the <tbody>
 *                          element will be aligned from the character specified by the char attribute
 * valign       top         Not supported in HTML5.
 *              middle      Vertical aligns the content inside the <tbody> element
 *              bottom
 *              baseline
 * CSS: tbody { display: table-row-group; vertical-align: middle; border-color: inherit; }
 */
function tbody(myId, myClass, myStyle, myAlign, myValign, myChar, myCharOff, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("tbody(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myValign + "," + myChar + "," + myCharOff + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theAlign = "";
    let theChar = "";
    let theCharOff = "";
    let theValign = "";
    let theExtras = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theExtras = ' text-align:: ' + myAlign + ';';
        }
        if (myValign !== "") {
            if (myValign === "top") {
                theExtras = ' vertical-align: text-top;';
            } else if (myValign === "middle") {
                theExtras = ' vertical-align: middle;';
            } else if (myValign === "bottom") {
                theExtras = ' vertical-align: text-bottom;';
            } else if (myValign === "baseline") {
                theExtras = ' vertical-align: baseline;';
            }
        }
    } else {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myChar !== "") {
            theChar = ' char="' + myChar + '"';
        }
        if (myCharOff !== "") {
            theCharOff = ' charoff="' + myCharOff + '"';
        }
        if (myValign !== "") {
            theValign = ' valign="' + myValign + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + myStyle + theExtras + '"';
           } else {
                theStyle = ' style="' + myStyle + '"';
            }
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + theExtras + '"';
            }
        }
    }
    return '<tbody' + theId + theClassName + theStyle + theAlign + theChar + theCharOff + theValign + '>' + myContent + '</tbody>';
}
/* ****************************************************************************
 * td
 * <table>
 *   <tr>
 *     <td>Cell A</td>
 *     <td>Cell B</td>
 *   </tr>
 * </table>
 * The <td> tag defines a standard cell in an HTML table.
 * An HTML table has two kinds of cells:
 * Header cells - contains header information (created with the <th> element)
 * Standard cells - contains data (created with the <td> element)
 * The text in <th> elements are bold and centered by default.
 * The text in <td> elements are regular and left-aligned by default.
 * Tip: Use the colspan and rowspan attribute to let the content span over multiple columns or rows!
 * All layout attributes are removed in HTML5.
 * Attribute	Value           Description
 * abbr         text            Not supported in HTML5.
 *                              Specifies an abbreviated version of the content in a cell
 * align        left            Not supported in HTML5.
 *              right           Aligns the content in a cell
 *              center
 *              justify
 *              char
 * axis         category_name   Not supported in HTML5.
 *                              Categorizes  cells
 * bgcolor      rgb(x,x,x)      Not supported in HTML5.
 *              #xxxxxx         Specifies the background color of a cell
 *              colorname
 * char         character       Not supported in HTML5.
 *                              Aligns the content in a cell to a character
 * charoff      number          Not supported in HTML5.
 *                              Sets the number of characters the content will be aligned from the character specified by the char attribute
 * colspan      number          Specifies the number of columns a cell should span
 * headers      header_id       Specifies one or more header cells a cell is related to
 * height       pixels, %       Not supported in HTML5.
 *                              Sets the height of a cell
 * nowrap       nowrap          Not supported in HTML5.
 *                              Specifies that the content inside a cell should not wrap
 * rowspan      number          Sets the number of rows a cell should span
 * scope        col             Not supported in HTML5.
 *              colgroup        Defines a way to associate header cells and data cells in a table
 *              row
 *              rowgroup
 * valign       top             Not supported in HTML5.
 *              middle          Vertical aligns the content in a cell
 *              bottom
 *              baseline
 * width        pixels,  %      Not supported in HTML5.
 *                              Specifies the width of a cell
 */
function td(myId, myClass, myStyle, myAbbr, myAlign, myAxis, myBgColor, myChar, myCharOff, myHeaders, myNoWrap, myScope, myColSpan, myRowSpan, myValign, myWidth, myHeight, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("td(" + myId + "," + myClass + "," + myStyle + "," + myAbbr  + "," + myAlign + "," + myAxis + "," + myBgColor + "," + myChar + "," + myCharOff + "," + myHeaders + "," + myNoWrap + "," + myScope + "," + myColSpan + "," + myRowSpan + "," + myValign + "," + myWidth + "," + myHeight + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theColSpan = "";
    if (myColSpan !== "") {
        theColSpan = ' colspan="' + myColSpan + '"';
    }
    let theHeaders = "";
    if (myHeaders !== "") {
        theHeaders = ' headers="' + myHeaders + '"';
    }
    let theRowSpan = "";
    if (myRowSpan !== "") {
        theRowSpan = ' rowspan="' + myRowSpan + '"';
    }
    let theAbbr = "";
    let theAlign = "";
    let theAxis = "";
    let theBgColor = "";
    let theChar = "";
    let theCharOff = "";
    let theHeight = "";
    let theNoWrap = "";
    let theScope = "";
    let theValign = "";
    let theWidth = "";
    let theExtras = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theExtras = ' text-align:: ' + myAlign + ';';
        }
        if (myBgColor !== "") {
            theExtras = theExtras + ' background-color: ' + myBgColor + ';';
        }
        if (myHeight !== "") {
            theExtras = theExtras + ' height: ' + myHeight + ';';
        }
        if (myValign !== "") {
            if (myValign === "top") {
                theExtras = theExtras + ' vertical-align: text-top;';
            } else if (myValign === "middle") {
                theExtras = theExtras + ' vertical-align: middle;';
            } else if (myValign === "bottom") {
                theExtras = theExtras + ' vertical-align: text-bottom;';
            } else if (myValign === "baseline") {
                theExtras = theExtras + ' vertical-align: baseline;';
            }
        }
        if (myWidth !== "") {
            theExtras = theExtras + ' width: ' + myWidth + ';';
        }
    } else {
        if (myAbbr !== "") {
            theAbbr = ' abbr="' + myAbbr + '"';
        }
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myAxis !== "") {
            theAxis = ' axis="' + myAxis + '"';
        }
        if (myBgColor !== "") {
            theBgColor = ' bgcolor="' + myBgColor + '"';
        }
        if (myChar !== "") {
            theChar = ' char="' + myChar + '"';
        }
        if (myCharOff !== "") {
            theCharOff = ' charoff="' + myCharOff + '"';
        }
        if (myHeight !== "") {
            theHeight = ' height="' + myHeight + '"';
        }
        if (myNoWrap !== "") {
            theNoWrap = ' nowrap="' + myNoWrap + '"';
        }
        if (myScope !== "") {
            theScope = ' scope="' + myScope + '"';
        }
        if (myValign !== "") {
            theValign = ' valign="' + myValign + '"';
        }
        if (myWidth !== "") {
            theWidth = ' width="' + myWidth + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + myStyle + theExtras + '"';
           } else {
                theStyle = ' style="' + myStyle + '"';
            }
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + theExtras + '"';
            }
        }
    }
    return '<td' + theId + theClassName + theStyle + theAbbr + theAlign + theAxis + theBgColor + theChar + theCharOff + theHeight + theNoWrap + theScope + theValign + theWidth + '>' + myContent + '</td>';
}
/* ****************************************************************************
 * template
 * <template>
 *   <h2>Flower</h2>
 *   <img src="img_white_flower.jpg">
 * </template>
 * The <template> tag holds its content hidden from the client.
 * Content inside a <template> tag will not be rendered.
 * The content can be visible and rendered later by using JavaScript.
 * Use the <template> tag when you have HTML code you want to use over and over again, but not until you ask for it. To do this without the <template> tag, you have to create the HTML code with JavaScript to prevent the browser from rendering the code.
 * The <template> tag is new in HTML5.
 */
function template(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("template(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<template' + theId + theClassName + theStyle + '>' + myContent + '</template>';
}
/* ****************************************************************************
 * textarea
 * <textarea rows="4" cols="50">Test</textarea>
 * The <textarea> tag defines a multi-line text input control.
 * A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).
 * The size of a text area can be specified by the cols and rows attributes, or even better; through CSS' height and width properties.
 * HTML5 has added several new attributes.
 * Attribute	Value               Description
 * autofocus	autofocus           Specifies that a text area should automatically get focus when the page loads
 * cols         number              Specifies the visible width of a text area
 * dirname      textareaname.dir	Specifies that the text direction of the textarea will be submitted
 * disabled     disabled            Specifies that a text area should be disabled
 * form         form_id             Specifies one or more forms the text area belongs to
 * maxlength	number              Specifies the maximum number of characters allowed in the text area
 * name         text                Specifies a name for a text area
 * placeholder	text                Specifies a short hint that describes the expected value of a text area
 * readonly     readonly            Specifies that a text area should be read-only
 * required     required            Specifies that a text area is required/must be filled out
 * rows         number              Specifies the visible number of lines in a text area
 * wrap         hard
 * soft                             Specifies how the text in a text area is to be wrapped when submitted in a form
 */
function textarea(myId, myFormId, myClass, myStyle, myCols, myRows, myMaxLength, myDisabled, myPlaceHolder, myReadOnly, myAutoFocus, myDirName, myRequired, myWrap, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("textarea(" + myId + "," + myClass + "," + myStyle + "," + myCols + "," + myRows + "," + myMaxLength + "," + myDisabled + "," + myPlaceHolder + "," + myReadOnly + "," + myAutoFocus + "," + myDirName + "," + myRequired + "," + myWrap + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '" name="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theRows = "";
    if (myRows !== "") {
        theRows = ' rows="' + myRows + '"';
    }
    let theCols = "";
    if (myCols !== "") {
        theCols = ' cols="' + myCols + '"';
    }
    let theDisabled = "";
    if (myDisabled !== "") {
        theDisabled = ' disabled="' + myDisabled + '"';
    }
    let theReadOnly = "";
    if (myReadOnly !== "") {
        theReadOnly = ' readonly="' + myReadOnly + '"';
    }
    let theAutoFocus = "";
    let theDirName = "";
    let theFormId = "";
    let theMaxLength = "";
    let thePlaceHolder = "";
    let theRequired = "";
    let theWrap = "";
    if (getDocType() === "HTML5") {
        if (myAutoFocus !== "") {
            theAutoFocus = ' autofocus="' + myAutoFocus + '"';
        }
        if (myDirName !== "") {
            theDirName = ' dirname="' + myDirName + '"';
        }
        if (myFormId !== "") {
            theFormId = ' form="' + myFormId + '"';
        }
        if (myMaxLength !== "") {
            theMaxLength = ' maxlength="' + myMaxLength + '"';
        }
        if (myPlaceHolder !== "") {
            thePlaceHolder = ' placeholder="' + myPlaceHolder + '"';
        }
        if (myRequired !== "") {
            theRequired = ' required="' + myRequired + '"';
        }
        if (myWrap !== "") {
            theWrap = ' wrap="' + myWrap + '"';
        }
    }
    return '<textarea' + theId + theClassName + theStyle + theRows + theCols + theDisabled + theReadOnly + theAutoFocus + theDirName + theFormId + theMaxLength + thePlaceHolder + theRequired + theWrap + '>' + myContent + '</textarea>';
}
/* ****************************************************************************
 * tfoot
 * <table>
 *   <thead>
 *     <tr>
 *       <th>Month</th>
 *       <th>Savings</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>January</td>
 *       <td>$100</td>
 *     </tr>
 *     <tr>
 *       <td>February</td>
 *       <td>$80</td>
 *     </tr>
 *   </tbody>
 *   <tfoot>
 *     <tr>
 *       <td>Sum</td>
 *       <td>$180</td>
 *     </tr>
 *   </tfoot>
 * </table>
 * The <tfoot> tag is used to group footer content in an HTML table.
 * The <tfoot> element is used in conjunction with the <thead> and <tbody> elements to specify each part of a table (footer, header, body).
 * Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.
 * The <tfoot> tag must be used in the following context: As a child of a <table> element, after any <caption>, <colgroup>, <thead>, and <tbody> elements.
 * Note: The <tfoot> element must have one or more <tr> tags inside.
 * Tip: The <thead>, <tbody>, and <tfoot> elements will not affect the layout of the table by default. However, you can use CSS to style these elements.
 * None of the HTML 4.01 attributes are supported in HTML5.
 * Attribute	Value       Description
 * align        right       Not supported in HTML5.
 *              left        Aligns the content inside the <tfoot> element
 *              center
 *              justify
 *              char
 * char         character	Not supported in HTML5.
 *                          Aligns the content inside the <tfoot> element to a character
 * charoff      number      Not supported in HTML5.
 *                          Sets the number of characters the content inside the <tfoot> element will be aligned from the character specified by the char attribute
 * valign       top         Not supported in HTML5.
 *              middle      Vertical aligns the content inside the <tfoot> element
 *              bottom
 *              baseline
 * CSS: tfoot { display: table-footer-group; vertical-align: middle; border-color: inherit; }
 */
function tfoot(myId, myClass, myStyle, myAlign, myValign, myChar, myCharOff, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("tfoot(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myValign + "," + myChar + "," + myCharOff + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theAlign = "";
    let theChar = "";
    let theCharOff = "";
    let theValign = "";
    let theExtras = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theExtras = ' text-align:: ' + myAlign + ';';
        }
        if (myValign !== "") {
            if (myValign === "top") {
                theExtras = theExtras + ' vertical-align: text-top;';
            } else if (myValign === "middle") {
                theExtras = theExtras + ' vertical-align: middle;';
            } else if (myValign === "bottom") {
                theExtras = theExtras + ' vertical-align: text-bottom;';
            } else if (myValign === "baseline") {
                theExtras = theExtras + ' vertical-align: baseline;';
            }
        }
    } else {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myChar !== "") {
            theChar = ' char="' + myChar + '"';
        }
        if (myCharOff !== "") {
            theCharOff = ' charoff="' + myCharOff + '"';
        }
        if (myValign !== "") {
            theValign = ' valign="' + myValign + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + myStyle + theExtras + '"';
           } else {
                theStyle = ' style="' + myStyle + '"';
            }
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + theExtras + '"';
            }
        }
    }
    return '<tfoot' + theId + theClassName + theStyle + theAlign + theChar + theCharOff + theValign + '>' + myContent + '</tfoot>';
}
/* ****************************************************************************
 * th
 * <table>
 *  <tr>
 *    <th>Month</th>
 *    <th>Savings</th>
 *  </tr>
 *  <tr>
 *    <td>January</td>
 *    <td>$100</td>
 *  </tr>
 * </table>
 * The <th> tag defines a header cell in an HTML table.
 * An HTML table has two kinds of cells:
 * Header cells - contains header information (created with the <th> element)
 * Standard cells - contains data (created with the <td> element)
 * The text in <th> elements are bold and centered by default.
 * The text in <td> elements are regular and left-aligned by default.
 * Tip: Use the colspan and rowspan attribute to let the content span over multiple columns or rows!
 * All layout attributes are removed in HTML5.
 * Attribute	Value           Description
 * abbr         text            Specifies an abbreviated version of the content in a header cell
 * align        left            Not supported in HTML5.
 *              right           Aligns the content in a header cell
 *              center
 *              justify
 *              char
 * axis         category_name	Not supported in HTML5.
 *                              Categorizes  header cells
 * bgcolor      rgb(x,x,x)      Not supported in HTML5.
 *              #xxxxxx         Specifies the background color of a header cell
 *              colorname
 * char         character       Not supported in HTML5.
 *                              Aligns the content in a header cell to a character
 * charoff      number          Not supported in HTML5.
 *                              Sets the number of characters the content will be aligned from the character specified by the char attribute
 * colspan      number          Specifies the number of columns a header cell should span
 * headers      header_id       Specifies one or more header cells a cell is related to
 * height       pixels, %       Not supported in HTML5.
 *                              Sets the height of a header cell
 * nowrap       nowrap          Not supported in HTML5.
 *                              Specifies that the content inside a header cell should not wrap
 * rowspan      number          Specifies the number of rows a header cell should span
 * scope        col             Specifies whether a header cell is a header for a column, row, or group of columns or rows
 *              colgroup
 *              row
 *              rowgroup
 * sorted       reversed        Defines the sort direction of a column
 *              number
 *              reversed number
 *              number reversed
 * valign       top             Not supported in HTML5.
 *              middle          Vertical aligns the content in a header cell
 *              bottom
 *              baseline
 * width        pixels, %       Not supported in HTML5.
 *                              Specifies the width of a header cell
 */
function th(myId, myClass, myStyle, myAbbr, myAlign, myValign, myAxis, myBgColor, myChar, myCharOff, myColSpan, myRowSpan, myHeaders, myNoWrap, myScope, mySorted, myWidth, myHeight, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("th(" + myId + "," + myClass + "," + myStyle + "," + myAbbr + "," + myAlign + "," + myValign + "," + myAxis + "," + myBgColor + "," + myChar + "," + myCharOff + "," + myColSpan + "," + myRowSpan + "," + myHeaders + "," + myNoWrap + "," + myScope + "," + mySorted + "," + myWidth + "," + myHeight + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theColSpan = "";
    if (myColSpan !== "") {
        theColSpan = ' colspan="' + myColSpan + '"';
    }
    let theRowSpan = "";
    if (myRowSpan !== "") {
        theRowSpan = ' rowspan="' + myRowSpan + '"';
    }
    let theHeaders = "";
    if (myHeaders !== "") {
        theHeaders = ' headers="' + myHeaders + '"';
    }
    let theAbbr = "";
    let theAlign = "";
    let theAxis = "";
    let theBgColor = "";
    let theChar = "";
    let theCharOff = "";
    let theHeight = "";
    let theNoWrap = "";
    let theScope = "";
    let theSorted = "";
    let theValign = "";
    let theWidth = "";
    let theExtras = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theExtras = ' text-align:: ' + myAlign + ';';
        }
        if (myBgColor !== "") {
            theExtras = theExtras + ' background-color: ' + myBgColor + ';';
        }
        if (myHeight !== "") {
            theExtras = theExtras + ' height: ' + myHeight + ';';
        }
        if (myValign !== "") {
            if (myValign === "top") {
                theExtras = theExtras + ' vertical-align: text-top;';
            } else if (myValign === "middle") {
                theExtras = theExtras + ' vertical-align: middle;';
            } else if (myValign === "bottom") {
                theExtras = theExtras + ' vertical-align: text-bottom;';
            } else if (myValign === "baseline") {
                theExtras = theExtras + ' vertical-align: baseline;';
            }
        }
        if (myWidth !== "") {
            theExtras = theExtras + ' width: ' + myWidth + ';';
        }
    } else {
        if (myAbbr !== "") {
            theAbbr = ' abbr="' + myAbbr + '"';
        }
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myAxis !== "") {
            theAxis = ' axis="' + myAxis + '"';
        }
        if (myBgColor !== "") {
            theBgColor = ' bgcolor="' + myBgColor + '"';
        }
        if (myChar !== "") {
            theChar = ' char="' + myChar + '"';
        }
        if (myCharOff !== "") {
            theCharOff = ' charoff="' + myCharOff + '"';
        }
        if (myHeight !== "") {
            theHeight = ' height="' + myHeight + '"';
        }
        if (myNoWrap !== "") {
            theNoWrap = ' nowrap="' + myNoWrap + '"';
        }
        if (myScope !== "") {
            theScope = ' scope="' + myScope + '"';
        }
        if (mySorted !== "") {
            theSorted = ' sorted="' + mySorted + '"';
        }
        if (myValign !== "") {
            theValign = ' valign="' + myValign + '"';
        }
        if (myWidth !== "") {
            theWidth = ' width="' + myWidth + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + myStyle + theExtras + '"';
           } else {
                theStyle = ' style="' + myStyle + '"';
            }
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + theExtras + '"';
            }
        }
    }
    return '<th' + theId + theClassName + theStyle + theAbbr + theAlign + theAxis + theBgColor + theChar + theCharOff + theColSpan + theHeaders + theHeight + theNoWrap + theRowSpan + theScope + theSorted + theValign + theWidth + '>' + myContent + '</th>';
}
/* ****************************************************************************
 * thead
 * <table>
 *   <thead>
 *     <tr>
 *       <th>Month</th>
 *       <th>Savings</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>January</td>
 *       <td>$100</td>
 *     </tr>
 *     <tr>
 *       <td>February</td>
 *       <td>$80</td>
 *     </tr>
 *   </tbody>
 *   <tfoot>
 *     <tr>
 *       <td>Sum</td>
 *       <td>$180</td>
 *     </tr>
 *   </tfoot>
 * </table>
 * The <thead> tag is used to group header content in an HTML table.
 * The <thead> element is used in conjunction with the <tbody> and <tfoot> elements to specify each part of a table (header, body, footer).
 * Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.
 * The <thead> tag must be used in the following context: As a child of a <table> element, after any <caption>, and <colgroup> elements, and before any <tbody>, <tfoot>, and <tr> elements.
 * Note: The <thead> element must have one or more <tr> tags inside.
 * Tip: The <thead>, <tbody>, and <tfoot> elements will not affect the layout of the table by default. However, you can use CSS to style these elements.
 * None of the HTML 4.01 attributes are supported in HTML5.
 * Attribute	Value       Description
 * align        right       Not supported in HTML5.
 *              left        Aligns the content inside the <thead> element
 *              center
 *              justify
 *              char
 * char         character	Not supported in HTML5.
 *                          Aligns the content inside the <thead> element to a character
 * charoff      number      Not supported in HTML5.
 *                          Sets the number of characters the content inside the <thead> element will be aligned from the character specified by the char attribute
 * valign       top         Not supported in HTML5.
 *              middle      Vertical aligns the content inside the <thead> element
 *              bottom
 *              baseline
 * CSS: thead { display: table-header-group; vertical-align: middle; border-color: inherit; }
 */
function thead(myId, myClass, myStyle, myAlign, myValign, myChar, myCharOff, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("a(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myValign + "," + myChar + "," + myCharOff + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theAlign = "";
    let theChar = "";
    let theCharOff = "";
    let theValign = "";
    let theExtras = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theExtras = ' text-align:: ' + myAlign + ';';
        }
        if (myValign !== "") {
            if (myValign === "top") {
                theExtras = theExtras + ' vertical-align: text-top;';
            } else if (myValign === "middle") {
                theExtras = theExtras + ' vertical-align: middle;';
            } else if (myValign === "bottom") {
                theExtras = theExtras + ' vertical-align: text-bottom;';
            } else if (myValign === "baseline") {
                theExtras = theExtras + ' vertical-align: baseline;';
            }
        }
    } else {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myChar !== "") {
            theChar = ' char="' + myChar + '"';
        }
        if (myCharOff !== "") {
            theCharOff = ' charoff="' + myCharOff + '"';
        }
        if (myValign !== "") {
            theValign = ' valign="' + myValign + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + myStyle + theExtras + '"';
           } else {
                theStyle = ' style="' + myStyle + '"';
            }
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + theExtras + '"';
            }
        }
    }
    return '<thead' + theId + theClassName + theStyle + theAlign + theChar + theCharOff + theValign +  '>' + myContent + '</thead>';
}
/* ****************************************************************************
 * time
 * <p>We open at <time>10:00</time> every morning.</p>
 * <time datetime="2000-02-14 20:00">Valentines day</time>
 * The <time> tag defines a human-readable date/time.
 * This element can also be used to encode dates and times in a machine-readable way so that user agents can offer to add birthday reminders or scheduled events to the user's calendar, and search engines can produce smarter search results.
 * The <time> tag is new in HTML5
 * datetime	 datetime	Represent a machine-readable date/time of the <time> element
 */
function time(myId, myClass, myStyle, myDatetime, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("time(" + myId + "," + myClass + "," + myStyle + "," + myDatetime + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        if (myDatetime !== "") {
            if (myStyle === "") {
                // FIXME, Title, test this and see
                return div(myId, myClass, "", "", "", myDatetime, myContent);
            } else {
                return div(myId, myClass, myStyle, "", "", "", "", myContent);
            }
        } else {
            return div(myId, myClass, myStyle, "", "", "", "", myContent);
        }
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theDatetime = "";
    if (myDatetime !== "") {
        theDatetime = ' datetime="' + myDatetime + '"';
    }
    return '<time' + theId + theClassName + theStyle + theDatetime + '>' + myContent + '</time>';
}
/* ****************************************************************************
 * title
 * <!DOCTYPE html>
 * <html>
 * <head>
 *   <title>HTML Reference</title>
 * </head>
 * <body>
 * The content of the document......
 * </body>
 * </html>
 * The <title> tag is required in all HTML documents and it defines the title of the document.
 * The <title> element:
 * defines a title in the browser toolbar
 * provides a title for the page when it is added to favorites
 * displays a title for the page in search-engine results
 * Note: You can NOT have more than one <title> element in an HTML document.
 * Tip: If you omit the <title> tag, the document will not validate as HTML.
 */
function title(myTitle) {
    if (getDebugMessageType() === 1) {
        console.debug("title(" + myTitle + ")");
    }
    return '<title>' + myTitle + '</title>';
}
/* ****************************************************************************
 * tr
 * <table>
 *   <tr>
 *     <th>Month</th>
 *     <th>Savings</th>
 *   </tr>
 *   <tr>
 *     <td>January</td>
 *     <td>$100</td>
 *   </tr>
 * </table>
 * The <tr> tag defines a row in an HTML table.
 * A <tr> element contains one or more <th> or <td> elements.
 * All the layout attributes are removed in HTML5.
 * Attribute	Value       Description
 * align        right       Not supported in HTML5.
 *              left        Aligns the content in a table row
 *              center
 *              justify
 *              char
 * bgcolor      rgb(x,x,x)	Not supported in HTML5.
 *              #xxxxxx     Specifies a background color for a table row
 *              colorname
 * char         character	Not supported in HTML5.
 *                          Aligns the content in a table row to a character
 * charoff      number      Not supported in HTML5.
 *                          Sets the number of characters the content will be aligned from the character specified by the char attribute
 * valign       top         Not supported in HTML5.
 *              middle      Vertical aligns the content in a table row
 *              bottom
 *              baseline
 * CSS: tr { display: table-row; vertical-align: inherit; border-color: inherit; }
 */
function tr(myId, myClass, myStyle, myAlign, myValign, myBgColor, myChar, myCharOff, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("tr(" + myId + "," + myClass + "," + myStyle + "," + myAlign + "," + myValign + "," + myBgColor + "," + myChar + "," + myCharOff + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theAlign = "";
    let theBgColor = "";
    let theChar = "";
    let theCharOff = "";
    let theValign = "";
    let theExtras = "";
    if (getDocType() === "HTML5") {
        if (myAlign !== "") {
            theExtras = ' text-align:: ' + myAlign + ';';
        }
        if (myBgColor !== "") {
            theExtras = theExtras + ' background-color: ' + myBgColor + ';';
        }
        if (myValign !== "") {
            if (myValign === "top") {
                theExtras = theExtras + ' vertical-align: text-top;';
            } else if (myValign === "middle") {
                theExtras = theExtras + ' vertical-align: middle;';
            } else if (myValign === "bottom") {
                theExtras = theExtras + ' vertical-align: text-bottom;';
            } else if (myValign === "baseline") {
                theExtras = theExtras + ' vertical-align: baseline;';
            }
        }
    } else {
        if (myAlign !== "") {
            theAlign = ' align="' + myAlign + '"';
        }
        if (myBgColor !== "") {
            theBgColor = ' bgcolor="' + myBgColor + '"';
        }
        if (myChar !== "") {
            theChar = ' char="' + myChar + '"';
        }
        if (myCharOff !== "") {
            theCharOff = ' charoff="' + myCharOff + '"';
        }
        if (myValign !== "") {
            theValign = ' valign="' + myValign + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + myStyle + theExtras + '"';
           } else {
                theStyle = ' style="' + myStyle + '"';
            }
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + theExtras + '"';
            }
        }
    }
    return '<tr' + theId + theClassName + theStyle + theAlign + theBgColor + theChar + theCharOff + theValign + '>' + myContent + '</tr>';
}
/* ****************************************************************************
 * track
 * The <track> tag specifies text tracks for media elements (<audio> and <video>).
 * This element is used to specify subtitles, caption files or other files containing text, that should be visible when the media is playing.
 * The <track> tag is new in HTML5.
 * <video width="320" height="240" controls>
 *   <source src="forrest_gump.mp4" type="video/mp4">
 *   <source src="forrest_gump.ogg" type="video/ogg">
 *   <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
 *   <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
 * </video>
 * kind: captions, chapters, descriptions, metadata, subtitles
 * <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
 * Attribute	Value       Description
 * default      default     Specifies that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate
 * kind         captions	Specifies the kind of text track
 *              chapters
 *              descriptions
 *              metadata
 *              subtitles
 * label        text        Specifies the title of the text track
 * src          URL         Required. Specifies the URL of the track file
 * srclang	language_code	Specifies the language of the track text data (required if kind="subtitles")
 */
function track(myId, myClass, myStyle, myKind, mySrc, mySrclang, myLabel) {
    if (getDebugMessageType() === 1) {
        console.debug("track(" + myId + "," + myClass + "," + myStyle + "," + myKind + "," + mySrc + "," + mySrclang + "," + myLabel + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theSrc = "";
    if (mySrc !== "") {
        theSrc = ' src="' + mySrc + '"';
    }
    let theKind = "";
    if (myKind !== "") {
        theKind = ' kind="' + myKind + '"';
    }
    let theSrclang = "";
    if (mySrclang !== "") {
        theSrclang = ' srclang="' + mySrclang + '"';
    }
    let theLabel = "";
    if (myLabel !== "") {
        theLabel = ' label="' + myLabel + '"';
    }
    return '<track' + theId + theClassName + theStyle + mySrc + myKind  + theSrclang + theLabel + elEnd();
}
/* ****************************************************************************
 * tt
 * The <tt> tag is not supported in HTML5.
 * <p><tt>Teletype text</tt></p>
 * If <tt> was used for marking up keyboard input, consider the <kbd> element; for variables, consider the <var> element; for computer code, consider the <code> element; and for computer output, consider the <samp> element, or use CSS instead.
 * The <tt> tag defines teletype text.
 * CSS syntax: <p style="font-family:'Lucida Console', monospace">
 */
function tt(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("tt(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() === "HTML5") {
        if (myStyle !== "") {
            return div(myId, myClass, myStyle + "font-family:'Lucida Console', monospace;", "", "", "", "", myContent);
        } else {
            return div(myId, myClass, "font-family:'Lucida Console', monospace;", "", "", "", "", myContent);
        }
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<tt' + theId + theClassName + theStyle + '>' + myContent + '</tt>';
}
/* ****************************************************************************
 * u
 * <p>This is a <u>parragraph</u>.</p>
 * The <u> tag represents some text that should be stylistically different from normal text,
 * such as misspelled words or proper nouns in Chinese.
 * Tip: Avoid using the <u> element where it could be confused for a hyperlink.
 * Note: The HTML 5 specification reminds developers that other elements are almost always more appropriate than <u>.
 * The <u> element was deprecated in HTML 4.01. (the <u> element was used to define underlined text).
 * The <u> element is redefined in HTML5,
 * to represent text that should be stylistically different from normal text,
 * such as misspelled words or proper nouns in Chinese.
 * CSS: u { text-decoration: underline; }
 */
function u(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("u(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<u' + theId + theClassName + theStyle + '>' + myContent + '</u>';
}
/* ****************************************************************************
 * ul
 * u {
 *   text-decoration: underline;
 * }
 * The <ul> tag defines an unordered (bulleted) list.
 * Use the <ul> tag together with the <li> tag to create unordered lists.
 * Tip: Use CSS to style lists.
 * Tip: To create ordered lists, use the <ol> tag.
 * The "compact" and "type" attributes are not supported in HTML5.
 * Attribute	Value	Description
 * compact      compact	Not supported in HTML5.
 *                      Specifies that the list should render smaller than normal
 * type         disc	Not supported in HTML5.
 *              square  Specifies the kind of marker to use in the list
 *              circle
 * CSS: ul { display: block; list-style-type: disc; margin-top: 1em; margin-bottom: 1 em; margin-left: 0; margin-right: 0; padding-left: 40px; }
 */
function ul(myId, myClass, myStyle, myType, myCompact, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("ul(" + myId + "," + myClass + "," + myStyle + "," + myType + "," + myCompact + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theType = "";
    let theCompact = "";
    let theExtras = "";
    if (getDocType() === "HTML5") {
        if (myType !== "") {
            if (myType !== "disc") {
                theExtras = "list-style-type: disc;";
            } else if (myType !== "square") {
                theExtras = "list-style-type: square;";
            } else if (myType !== "circle") {
                theExtras = "list-style-type: circle;";
            }
        }
    } else {
        if (myCompact !== "") {
            theCompact = ' compact="' + myCompact + '"';
        }
        if (myType !== "") {
            theType = ' type="' + myType + '"';
        }
    }
    let theStyle = "";
    if (myStyle !== "") {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + myStyle + theExtras + '"';
           } else {
                theStyle = ' style="' + myStyle + '"';
            }
        } else {
            theStyle = ' style="' + myStyle + '"';
        }
    } else {
        if (getDocType() === "HTML5") {
            if (theExtras !== "") {
                theStyle = ' style="' + theExtras + '"';
            }
        }
    }
    return '<ul' + theId + theClassName + theStyle + theType + theCompact + '>' + myContent + '</ul>';
}
/* ****************************************************************************
 * var Element, var is a JavaScript keyword vaR is not
 * <var>Variable</var>
 * The <var> tag is a phrase tag. It defines a variable.
 * Tip: This tag is not deprecated, but it is possible to achieve richer effect with CSS.
 * CSS: var { font-style: italic; }
 */
function vaR(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("vaR(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<var' + theId + theClassName + theStyle + '>' + myContent + '</var>';
}
/* ****************************************************************************
 * video
 * <video width="320" height="240" controls>
 *   <source src="movie.mp4" type="video/mp4">
 *   <source src="movie.ogg" type="video/ogg">
 *   Your browser does not support the video tag.
 * </video>
 * The <video> tag specifies video, such as a movie clip or other video streams.
 * Currently, there are 3 supported video formats for the <video> element: MP4, WebM, and Ogg:
 *
 * Browser              MP4	WebM	Ogg
 * Internet Explorer	YES	NO      NO
 * Chrome               YES	YES     YES
 * Firefox 21 or 30 Linux	YES     YES
 * Safari               YES	NO      NO
 * Opera                YES
 *                      25	YES     YES
 *
 * MP4 = MPEG 4 files with H264 video codec and AAC audio codec
 * WebM = WebM files with VP8 video codec and Vorbis audio codec
 * Ogg = Ogg files with Theora video codec and Vorbis audio codec
 *
 * MIME Types for Video Formats
 *
 * Format	MIME-type
 * MP4      video/mp4
 * WebM     video/webm
 * Ogg      video/ogg
 *
 * The <video> tag is new in HTML5.
 * Tip: Any text between the <video> and </video> tags will be displayed in browsers that do not support the <video> element.
 *
 * Attribute	Value       Description
 * autoplay     autoplay	Specifies that the video will start playing as soon as it is ready
 * controls     controls	Specifies that video controls should be displayed (such as a play/pause button etc).
 * height       pixels      Sets the height of the video player
 * loop         loop        Specifies that the video will start over again, every time it is finished
 * muted        muted       Specifies that the audio output of the video should be muted
 * poster       URL         Specifies an image to be shown while the video is downloading, or until the user hits the play button
 * preload      auto
 *              metadata
 *              none        Specifies if and how the author thinks the video should be loaded when the page loads
 * src          URL         Specifies the URL of the video file
 * width        pixels      Sets the width of the video player
 *
 */
function video(myId, myClass, myStyle, myControls, myAutoplay, myLoop, myMuted, myPreload, myWidth, myHeight, myPoster, mySource, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("video(" + myId + "," + myClass + "," + myStyle + "," + myControls + "," + myAutoplay + "," + myMuted + "," + myPreload + "," + myWidth + "," + myHeight + "," + myPoster + "," + mySource + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        // FIXME, how to do this?
        return div(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    let theAutoplay = "";
    if (myAutoplay !== "") {
        theAutoplay = ' autoplay="' + myAutoplay + '"';
    }
    let theControls = "";
    if (myControls !== "") {
        theControls = ' controls="' + myControls + '"';
    }
    let theLoop = "";
    if (myLoop !== "") {
        theLoop = ' loop="' + myLoop + '"';
    }
    let theMuted = "";
    if (myMuted !== "") {
        theMuted = ' muted="' + myMuted + '"';
    }
    let thePoster = "";
    if (myPoster !== "") {
        thePoster = ' poster="' + myPoster + '"';
    }
    let thePreload = "";
    if (myPreload !== "") {
        thePreload = ' preload="' + myPreload + '"';
    }
    let theWidth = "";
    if (myWidth !== "") {
        theWidth = ' width="' + myWidth + '"';
    }
    let theHeight = "";
    if (myHeight !== "") {
        theHeight = ' height="' + myHeight + '"';
    }
    let theSource = "";
    let theType = "";
    // on the off chance someone uses this to play an Audio file
    if (mySource !== "") {
        let theExt = getFileExt(mySource);
        // .ogg, oga, .ogx, .spx, .opus
        // .ogg, .ogv, .ogm, .opus
        if (theExt === "mp3") {
            theType = ' type="audio/mpeg';
        } else if (theExt === "mp4" || theExt === "m4v") {
            theType = ' type="video/mp4';
        } else if (theExt === "oga") {
            theType = ' type="audio/ogg';
        } else if (theExt === "ogv") {
            theType = ' type="video/ogg';
        } else if (theExt === "webm") {
            theType = ' type="video/webm';
        }
        theSource = ' src="' + mySource + '"';
    }
    return '<video controls' + theId + theClassName + theStyle + theAutoplay + theControls + theLoop + theMuted + thePoster + thePreload + theSource + theWidth + theHeight + '>' + myContent + '</video>';
}
/* ****************************************************************************
 * wbr
 * <p>To use AJAX, use XML<wbr>Http<wbr>Request Object.</p>
 * The <wbr> (Word Break Opportunity) tag specifies where in a text it would be ok to add a line-break.
 * Tip: When a word is too long, or you are afraid that the browser will break your lines at the wrong place, you can use the <wbr> element to add word break opportunities.
 * The <wbr> tag is new in HTML5.
 *
 */
function wbr(myId, myClass, myStyle, myContent) {
    if (getDebugMessageType() === 1) {
        console.debug("wbr(" + myId + "," + myClass + "," + myStyle + "," + myContent + ")");
    }
    if (getDocType() !== "HTML5") {
        return span(myId, myClass, myStyle, "", "", "", "", myContent);
    }
    let theId = "";
    if (myId !== "") {
        theId = ' id="' + myId + '"';
    }
    let theClassName = "";
    if (myClass !== "") {
        theClassName = ' class="' + myClass + '"';
    }
    let theStyle = "";
    if (myStyle !== "") {
        theStyle = ' style="' + myStyle + '"';
    }
    return '<wbr' + theId + theClassName + theStyle + '>' + myContent + '</wbr>';
}
/* ***************************** End of File ******************************* */
