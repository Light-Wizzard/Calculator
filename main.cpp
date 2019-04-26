#include <QApplication>
#include <FelgoApplication>

#include <QQmlApplicationEngine>
#include <QtDebug>

// this precompliler did not seem to work?
//#ifdef FELGO_CPP
    // include qml context, required to add a context property
    #include <QQmlContext>
    // include custom classes
    #include "cpp/myGlobalObject.hpp"
    #include "cpp/myQmlType.hpp"
//#endif

// FIME get this to work
// uncomment this line to add the Live Client Module and use live reloading with your custom C++ code
//#define FELGO_LIVE
//#ifdef FELGO_LIVE
    //#include <FelgoLiveClient>
//#endif
/* ****************************************************************************
 * main
 */
int main(int argc, char *argv[])
{
    QApplication app(argc, argv);
    FelgoApplication felgo;

    // Use platform-specific fonts instead of Felgo's default font
    felgo.setPreservePlatformFonts(true);

    QQmlApplicationEngine engine;
    felgo.initialize(&engine);

    // use this during development
    // for PUBLISHING, use the entry point below
    #ifndef FELGO_LIVE
        #ifndef FELGO_DEPLOY
            felgo.setMainQmlFileName(QStringLiteral("qml/Main.qml"));
        #endif
    #endif
    //
    //qDebug() << "engine.offlineStoragePath=" << engine.offlineStoragePath();
    // use this instead of the above call to avoid deployment of the qml files and compile them into the binary with qt's resource system qrc
    // this is the preferred deployment option for publishing games to the app stores, because then your qml files and js files are protected
    // to avoid deployment of your qml files and images, also comment the DEPLOYMENTFOLDERS command in the .pro file
    // also see the .pro file for more details
    #ifndef FELGO_LIVE
        #ifdef FELGO_DEPLOY
            felgo.setMainQmlFileName(QStringLiteral("qrc:/qml/Main.qml"));
        #endif
    #endif
    // add global c++ object to the QML context as a property
    //#define FELGO_CPP
    #ifdef FELGO_CPP
        // register a QML type made with C++
        MyGlobalObject* myGlobal = new MyGlobalObject();
        //qDebug() << "engine.offlineStoragePath=" << engine.offlineStoragePath();
        //
        myGlobal->doSomething("TEXT FROM C++");
        // /home/USERNAME/.local/share/FelgoCpp/QML/OfflineStorage
        myGlobal->setLocalStoragePath(engine.offlineStoragePath());
        engine.rootContext()->setContextProperty("myGlobalObject", myGlobal);
        // the object will be available in QML with name "myGlobal"

        qDebug() << QObject::tr("Debug Message: Register Type: myGlobal");
        // @uri QmlSql
        const char *uri = "myGlobal";
        qmlRegisterType<MyQMLType>(uri, 1, 0, "MyQMLType");
    #endif

    #ifndef FELGO_LIVE
        engine.load(QUrl(felgo.mainQmlFileName()));
    #endif
    // to start your project as Live Client,
    // comment (remove) the lines "felgo.setMainQmlFileName ..." & "engine.load ...",
    // and uncomment the line below
    #ifdef FELGO_LIVE
        FelgoLiveClient client (&engine);
    #endif
    return app.exec();
}
/* ***************************** End of File ******************************* */
