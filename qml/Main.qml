import Felgo 3.0
import QtQuick 2.0

/* ****************************************************************************
 * GalaxyCalculator Main Page
 */
App {
    id: app

    // You get free licenseKeys from https://felgo.com/licenseKey
    // With a licenseKey you can:
    //  * Publish your games & apps for the app stores
    //  * Remove the Felgo Splash Screen or set a custom one (available with the Pro Licenses)
    //  * Add plugins to monetize, analyze & improve your apps (available with the Pro Licenses)
    //licenseKey: "<generate one from https://felgo.com/licenseKey>"
    /* ******************************************************
     * Naviagation view
     */
    Navigation {
        id: navigation
        anchors.top: parent.top
        anchors.topMargin: 0
        /* **************************************************
         * Webook tab
         */
//        NavigationItem {
//            title: qsTr("Webook")
//            icon: IconType.book

//            NavigationStack {
//                initialPage: Webook { }
//            }
//        }
        /* **************************************************
         * Calculator tab
         */
//        NavigationItem {
//            title: qsTr("Calc")
//            icon: IconType.calculator

//            NavigationStack {
//                initialPage: Calculator { }
//            }
//        }
        /* **************************************************
         * WebPageMakerTest tab
         */
        NavigationItem {
            title: qsTr("Test")
            icon: IconType.check

            NavigationStack {
                initialPage: WebPageMakerTest { }
            }
        }
        /* **************************************************
         * Help tab
         */
//        NavigationItem {
//            title: qsTr("H")
//            icon: IconType.question

//            NavigationStack {
//                initialPage: Help { }
//            }
//        }
    } // end Navigation
} // end App
/* ***************************** End of File ******************************* */

/*##^## Designer {
    D{i:1;anchors_y:0}
}
 ##^##*/
