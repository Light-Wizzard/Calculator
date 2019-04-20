import Felgo 3.0
import QtQuick 2.0
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.3
import QtQuick.LocalStorage 2.0
import "Common.js" as Js
import "BigMath.js" as BigMath

/* ****************************************************************************
 * Page
 */
Page {
    id: pageId
    width: 640
    property alias appTextFieldAnswer: appTextFieldAnswer

    title: "Calculator"

    property int curPos:  0

    /* ************************************************************************
     * Grid
     */
    GridLayout {
        id: gridLayout
        x: 6
        y: 6
        width: 333
        height: 290
        rowSpacing: 1
        columnSpacing: 1
        rows: 5
        columns: 6
        /* ********************************************************************
         * answer field
         */
        AppTextField {
            id: appTextFieldAnswer
            x: 6
            y: 42
            width: 333
            height: 33
            Layout.fillHeight: true
            Layout.maximumHeight: 33
            Layout.minimumHeight: 33
            Layout.preferredHeight: 33
            Layout.maximumWidth: 333
            Layout.fillWidth: true
            backgroundColor: "#ffffff"
            inputMask: qsTr("")
            borderWidth: 3
            borderColor: "#00ff00"
            Layout.minimumWidth: 333
            Layout.preferredWidth: 333
            Layout.columnSpan: 6
            Layout.rowSpan: 1
        }
        /* ********************************************************************
         * Row Top
         */
        Row {
            id: rowTop
            width: 200
            height: 400
            Layout.maximumHeight: 42
            Layout.minimumHeight: 42
            Layout.preferredHeight: 42
            Layout.preferredWidth: 333
            Layout.minimumWidth: 333
            Layout.maximumWidth: 333
            Layout.columnSpan: 6

            AppText {
                id: appTextDecimals
                text: qsTr("Decimals: ")
                anchors.verticalCenter: parent.verticalCenter
            }

            AppTextField {
                id: appTextFieldDecimals
                text: "2"
                anchors.verticalCenter: parent.verticalCenter
                clip: true
                borderWidth: 3
                borderColor: "#00ff00"
            }

        }
        /* ********************************************************************
         * 7
         */
        AppButton {
            id: appButton7
            width: 36
            text: "7"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "7" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * 8
         */
        AppButton {
            id: appButton8
            width: 36
            text: "8"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "8" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * 9
         */
        AppButton {
            id: appButton9
            width: 36
            text: "9"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "9" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * Divide /
         */
        AppButton {
            id: appButtonDivide
            width: 36
            text: "/"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " / " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 3;
            }
        }
        /* ********************************************************************
         * Undo
         */
        AppButton {
            id: appButtonUndo
            text: "\u21a9"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 66
            Layout.minimumWidth: 66
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.preferredWidth: 66
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.length - 1);
                appTextFieldAnswer.cursorPosition = curPos;
            }
        }
        /* ********************************************************************
         * Clear
         */
        AppButton {
            id: appButtonClear
            text: "C"
            clip: true
            Layout.maximumHeight: 30
            Layout.minimumWidth: 66
            Layout.maximumWidth: 66
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.preferredWidth: 66
            onClicked: {
                appTextFieldAnswer.text = "";
            }
        }
        /* ********************************************************************
         * 4
         */
        AppButton {
            id: appButton4
            width: 36
            text: "4"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "4" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * 5
         */
        AppButton {
            id: appButton5
            width: 36
            text: "5"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "5" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * 6
         */
        AppButton {
            id: appButton6
            width: 36
            text: "6"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "6" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * Times x
         */
        AppButton {
            id: appButtonTimes
            width: 36
            height: 30
            text: "X"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " * " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 3;
            }
        }
        /* ********************************************************************
         * Brackets ()
         */
        AppButton {
            id: appButtonLeftBracket
            text: "("
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 66
            Layout.minimumWidth: 66
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.preferredWidth: 66
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " ( " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 3;
            }
        }

        AppButton {
            id: appButtonRightBracket
            text: ")"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 66
            Layout.minimumWidth: 66
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.preferredWidth: 66
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " ) " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 3;
            }
        }
        /* ********************************************************************
         * 1
         */
        AppButton {
            id: appButton1
            width: 36
            text: "1"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "1" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * 2
         */
        AppButton {
            id: appButton2
            width: 36
            text: "2"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "2" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * 3
         */
        AppButton {
            id: appButton3
            width: 36
            text: "3"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "3" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * Minus -
         */
        AppButton {
            id: appButtonMinus
            width: 36
            text: "-"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " - " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 3;
            }
        }
        /* ********************************************************************
         * Square
         */
        AppButton {
            id: appButtonSqr
            text: "x²"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 66
            Layout.minimumWidth: 66
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.preferredWidth: 66
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " ^2 " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 4;
            }
        }
        /* ********************************************************************
         *  Square Root
         */
        AppButton {
            id: appButtonSqRoot
            text: "\u221a"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 66
            Layout.minimumWidth: 66
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.preferredWidth: 66
            onClicked: {
                //                curPos = appTextFieldAnswer.cursorPosition;
                //                console.debug("curPos=" + curPos)
                //                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "9" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                //                appTextFieldAnswer.cursorPosition = curPos + 4;
            }
        }
        /* ********************************************************************
         * 0
         */
        AppButton {
            id: appButton0
            width: 36
            text: "0"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "0" + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 1;
            }
        }
        /* ********************************************************************
         * Dot .
         */
        AppButton {
            id: appButtonDot
            width: 36
            text: "."
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                if (appTextFieldAnswer.contains("."))
                {
                    appTextFieldAnswer.cursorPosition = appTextFieldAnswer.text.indexOf(".");

                } else {
                    curPos = appTextFieldAnswer.cursorPosition;
                    console.debug("curPos=" + curPos)
                    appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + "." + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                    appTextFieldAnswer.cursorPosition = curPos + 1;
                }
            }
        }
        /* ********************************************************************
         * Percent %
         */
        AppButton {
            id: appButtonPercent
            width: 36
            text: "%"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " % " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 3;
            }
        }
        /* ********************************************************************
         * Plus +
         */
        AppButton {
            id: appButtonPlus
            width: 36
            text: "+"
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 36
            Layout.preferredHeight: 30
            Layout.minimumHeight: 30
            Layout.minimumWidth: 36
            Layout.preferredWidth: 36
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " + " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 3;
            }
        }
        /* ********************************************************************
         * PI
         */
        AppButton {
            id: appButtonPi
            text: "\u03c0"
            clip: true
            Layout.maximumHeight: 30
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.maximumWidth: 66
            Layout.minimumWidth: 66
            Layout.preferredWidth: 66
            onClicked: {
                curPos = appTextFieldAnswer.cursorPosition;
                console.debug("curPos=" + curPos)
                var v = BigMath.parse(appTextFieldDecimals.text);
                appTextFieldAnswer.text = appTextFieldAnswer.text.substring(0, appTextFieldAnswer.cursorPosition) + " " + v + " " + appTextFieldAnswer.text.substring(appTextFieldAnswer.cursorPosition, appTextFieldAnswer.length);
                appTextFieldAnswer.cursorPosition = curPos + 3;
            }
        }
        /* ********************************************************************
         * Equals =
         */
        AppButton {
            id: appButtonEqual
            text: "="
            clip: true
            Layout.maximumHeight: 30
            Layout.maximumWidth: 66
            Layout.minimumWidth: 66
            Layout.minimumHeight: 30
            Layout.preferredHeight: 30
            Layout.preferredWidth: 66
            Layout.columnSpan: 1
            onClicked: {
                // FIXME decimal places
                appTextFieldAnswer.text = BigMath.parse(appTextFieldAnswer.text, appTextFieldDecimals.text);
            }
        }
    } // end GridLayout
} // end Page

/*##^## Designer {
    D{i:21;anchors_height:100;anchors_width:100}
}
 ##^##*/
