import Felgo 3.0
import QtQuick 2.0
import QtQuick.Controls 1.4

Page {

    title: "Webook: Web Book"

    Grid {
        id: grid
        columns: 2
        anchors.fill: parent

        Row {
            id: rowList
            width: 200
            height: 400

            AppButton {
                id: appButtonDecend
                text: "Decend"
                anchors.left: parent.left
                anchors.leftMargin: 6
                anchors.top: parent.top
                anchors.topMargin: 6
            }

            AppButton {
                id: appButtonAscend
                text: "Ascend"
                anchors.left: parent.left
                anchors.leftMargin: 93
                anchors.top: parent.top
                anchors.topMargin: 6
            }
        }


        AppListView {
            id: appListViewTop
            anchors.rightMargin: 433
            anchors.bottomMargin: 6
            anchors.topMargin: 54
            anchors.leftMargin: 6
            model: ListModel {
                ListElement { name: "Title" }
                ListElement { name: "Abstract" }
                ListElement { name: "Acknowledgments" }
                ListElement { name: "Table of Content" }
                ListElement { name: "Chapter 1" }
                ListElement { name: "Chapter 2" }
                ListElement { name: "Chapter 3" }
                ListElement { name: "References" }
            }
            delegate: SimpleRow { text: name }
            onCurrentIndexChanged: {

            }

        }


        Row {
            id: row
            height: 42
            anchors.left: parent.left
            anchors.leftMargin: 240
            anchors.right: parent.right
            anchors.rightMargin: 6
            anchors.top: parent.top
            anchors.topMargin: 6
            /* ******************************************************
             * CustomComboBox
             */
            CustomComboBox {
                id: comboBoxAction
                width: 166
                height: 42
                anchors.top: parent.top
                anchors.topMargin: 0
                implicitHeight: 42
                leftPadding: 6
                implicitWidth: dp(242) + 30
                model: ["Book", "TOC", "Chapter", "Subchapter", "Paragraph", "", "", ""]
                onCurrentIndexChanged: {
                    //
                }
            } // end CustomComboBox

            AppButton {
                id: appButtonAction
                text: "Add"
                anchors.top: parent.top
                anchors.topMargin: 6
                anchors.left: parent.left
                anchors.leftMargin: 173
                onClicked: {
                    treeViewBook.addColumn({"Name":comboBoxAction.currentText});
                }
            } // end AppButton
        }

        Column {
            id: column
            anchors.bottom: parent.bottom
            anchors.bottomMargin: 6
            anchors.right: parent.right
            anchors.rightMargin: 6
            anchors.left: parent.left
            anchors.leftMargin: 231
            anchors.top: row.bottom
            anchors.topMargin: 6

            AppText {
                id: appTextName
                text: qsTr("Name")
            }

            AppTextField {
                id: appTextFieldName
                text: "Name"
                borderWidth: 3
                borderColor: "#00ff00"
            }
        }






        // end Row
    }

    // end Grid

} // end Page

/*##^## Designer {
    D{i:0;autoSize:true;height:480;width:640}D{i:16;anchors_y:366}D{i:15;anchors_width:200}
D{i:40;anchors_height:400;anchors_width:200}D{i:13;anchors_height:400;anchors_width:400}
}
 ##^##*/
