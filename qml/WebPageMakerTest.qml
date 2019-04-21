import Felgo 3.0
import QtQuick 2.0
import "WebPageMaker.js" 3.0 as WebPageMaker

Page {
    id: page

    title: "WebPageMaker Test"

    Column {
        id: column
        spacing: 4
        anchors.fill: parent
    }

    AppButton {
        id: appButtonMake
        text: "Make"
        anchors.left: parent.left
        anchors.leftMargin: 6
        anchors.top: parent.top
        anchors.topMargin: 6
        onClicked: {
            test();
        }
    }
    /* ****************************************************************************
     * test
     */
    function test() {
        // Create a local string to store the WebPageMaker data in
        let webPage = "";
        // We will iterate thruogh the DocTypes so get its Length
        let docTypeLength = WebPageMaker.getSupportedDocTypesLength();
        // We will iterate thruogh the Languages so get its Length
        let lanuagesLength = WebPageMaker.getSupportedLanguagesLength();
        // We will iterate thruogh the Browsers so get its Length
        let browsersLength = WebPageMaker.getSupportedBrowsersLength();
        // iterators
        let langIndex = 0;
        let docTypeIndex = 0;
        let browserIndex = 0;
        console.debug("docTypeLength=" + docTypeLength)
        console.debug("lanuagesLength=" + lanuagesLength)
        for (langIndex = 0; langIndex < lanuagesLength; langIndex++) {
            console.debug("getSupportedLanguages(langIndex)=" + WebPageMaker.getSupportedLanguages(langIndex))
            for (docTypeIndex = 0; docTypeIndex < docTypeLength; docTypeIndex++) {
                for (browserIndex = 0; browserIndex < browsersLength; browserIndex++) {
                    // If you want to test Lulu
                    // WebPageMaker.setLulu(true);
                    // Set the Language
                    WebPageMaker.setLanguage(WebPageMaker.getSupportedLanguages(langIndex));
                    console.debug("getSupportedDocTypes(docTypeIndex)=" + WebPageMaker.getSupportedDocTypes(docTypeIndex));
                    // Set the DocType
                    WebPageMaker.setDocType(WebPageMaker.getSupportedDocTypes(docTypeIndex));
                    // Set the Browser Type
                    WebPageMaker.setBrowser(WebPageMaker.getSupportedBrowsers(browserIndex));
                    // Create the DocType
                    webPage = WebPageMaker.docType(WebPageMaker.getSupportedDocTypes(docTypeIndex));
                    // Create the HTML tag
                    webPage = webPage + "\n" + WebPageMaker.htmlStart();
                    // Create the HEAD tag
                    webPage = webPage + "\n" + WebPageMaker.headStart("");
                    // Create the META tag for character set
                    webPage = webPage + "\n" + WebPageMaker.meta("", "", "", "charset", "", "");
                    // Create the META tag for  for date created
                    webPage = webPage + "\n" + WebPageMaker.meta("", "created", WebPageMaker.getTimeStamp(), "", "", "");
                    // End HEAD tag
                    webPage = webPage + "\n" + WebPageMaker.headEnd();
                    // Create BODY tag
                    webPage = webPage + "\n" + WebPageMaker.bodyStart("", "", "");
                    //Do something
                    webPage = webPage + "\n" + WebPageMaker.p("test", "testclass", "", "", "", "en", "", "Testing 123...");
                    // End BODY tag
                    webPage = webPage + "\n" + WebPageMaker.bodyEnd();
                    // End HTML tag
                    webPage = webPage + "\n" + WebPageMaker.htmlEnd();
                    // Write it to a file with a structure like below under LocalStorage:
                    // Linux and MAC=~/.local/share/Calulator/Test
                    // Windows=C:/Users/<USER>/AppData/Roaming/Calulator/Test
                    // Test->DocType->Browser->Language/test.html
                    if (! writeFile("Test/" + WebPageMaker.getSupportedDocTypes(docTypeIndex) + "/" + WebPageMaker.getSupportedBrowsers(browserIndex) + "/" + WebPageMaker.getLanguage() + "/test.html", webPage)) {
                        console.debug("Error writeFile: ")
                    }
                } // end for (browserIndex
            } // end for (docTypeIndex
        } // end for (langIndex
    } // end test
    /* ****************************************************************************
     * Did not work inside of JavaScript
     *
     * https://felgo.com/doc/felgo-fileutils/
     * AppLocalDataLocation="~/.local/share/<APPNAME>"
     * Using Felgo file utililities, for read and write,
     * it uses the OS in all cases to write the files,
     * most JavaScript Engines will not allow you to write files on the Client side,
     * but will allow you to read and write to the local stroage file system,
     * that is the root of all the files I write,
     * the Folder name will be in your Local Share under the App Name,
     * for example, on Linux or Unix as in MAC that is ~/.local/share/<APPNAME>,
     * in Windows: C:/Users/<USER>/AppData/Roaming/<APPNAME>
     * on other devices: ~/Library/Application Support/<APPNAME>
     * or <APPROOT>/files, so you can always find them under your local user name account,
     * under shared data, which by default is read and write,
     * and since your folder is jailed, meaning if you clear local storage on your device,
     * you will delete all the data created by this application,
     * if you delete the APPNAME folder, it will also delete all files,
     * I only write files in this one location, making it easy to update,
     * so keep in mind that if you create something you want to keep,
     * back it up, this app will also provide that tool,
     * as well as a tool to upload the code to your website in real time,
     * so do not get confused with that, this only writes and reads,
     * from local storage, so do not clear this from your browswer,
     * it uses its own Browser Engine to run under, but has the same rules,
     * I will have configuration files to help define this better,
     * so this location FileUtils.AppLocalDataLocation may change in this code,
     * and will use LocalStorage to save that value,
     * again, it will be controlled by config file on the local device,
     * so keep in mind tht this App runs on all Devices, and some have no external storage,
     * most are just sandboxs, so understand what LocalStroage is before using it,
     * using the backup feature also relyies on you being able to manually access it,
     * in Linux, like Windows or even Mac, which is Unix based, any File browswer,
     * or File Manager, can access these files,
     * even on my Smart Phone I can access my Storage Device,
     * both internal and external on my S7, so I know it can be done,
     * but I think the easies way is a Google Drive, which can not be publically accessed,
     * or if you make it a Public Website, you can just make it a Folder off of public,
     * or make it the root, and have it be your web site,
     * when this App is complete that would make sense,
     * right now this is only a goal,
     * think about what you want to do with this app,
     * if you want it as a Content Managment Systme,
     * that is written in JavaScript that compiles to C++,
     * so it is supper fast,
     * so my plan is simple, I have a test site on my Web Server,
     * it is just a VPS account, but I want it to be Web Pages,
     * and not a Dynamic site like PHP, or CMS like Wordpress,
     * I have one as well, they work for what they are, but I wanted more,
     * so this function will get a lot of work at some point,
     * but this write file functin is limited to whole file once writes,
     * and not increamental updates, nor append modes, not that I found anyway,
     * so I really need to find out more about what I can do with this control,
     * as well as all the limitations it has, which come down to device,
     * so my goal would be once this works, and it works in a sub folder,
     * then I can test it on the root of a localhost,
     * once I trust it, then I move it to the root of my website.
     * The concept of writing a Database driven Website from LocalStorage,
     * means I need an easy way to back it up, one way is to get a Web Server,
     * does not matter what type, but a cheap VPS without a Panel, is what I run,
     * and not because of Cost, becasue I wanted to keep the Web Server clean,
     * No CMS, only HTML code, and not JavaScript Libraries for dependancies,
     * since my goal is ePub, PDF, and printed Books, I need CSS, and JavaScript,
     * that actually works on just that Platforms, so I can focus on Output,
     * file formates, and things like what docType(),
     * I need to understand what I want this website to look like on all Browswers,
     * and writing code with the browsers signature and langage in its path or file name,
     * is strange, and why most developers use cross browser Libraries,
     * that do not work in ePub, or PDF files, and this solution does,
     * so it does not support them, but will still allow you to use them knowing this,
     * since it does not validae what you add to the script injector,
     * which ends up here being written to a file on the users device.
     */
    function writeFile(myFileName, fileContentAsString) {
        if (WebPageMaker.getDebugMessageType() === 1) {
            console.debug("writeFile(" + myFileName + "," + fileContentAsString + ")");
        }
        let fileName = fileUtils.storageLocation(FileUtils.AppLocalDataLocation, myFileName)
        return fileUtils.writeFile(fileName, fileContentAsString);
    }
    /* ****************************************************************************
     * https://felgo.com/doc/felgo-fileutils/
     */
    function readFile(myFileName) {
        if (WebPageMaker.getDebugMessageType() === 1) {
            console.debug("readFile(" + myFileName + ")");
        }
        let fileName = fileUtils.storageLocation(FileUtils.AppLocalDataLocation, myFileName)
        return fileUtils.readFile(fileName);
    }
} // end Page

/*##^## Designer {
    D{i:0;autoSize:true;height:480;width:640}D{i:2;anchors_height:400;anchors_width:200}
}
 ##^##*/
