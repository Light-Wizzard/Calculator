#ifndef MYGLOBALOBJECT_H
#define MYGLOBALOBJECT_H

#include <QObject>
#include <QStandardPaths>

class MyGlobalObject : public QObject
{
    Q_OBJECT
    // this makes counter available as a QML property
    Q_PROPERTY(QString localStoragePath READ localStoragePath WRITE setLocalStoragePath NOTIFY localStoragePathChanged)
    Q_PROPERTY(bool overwrite READ overwrite WRITE setOverwrite NOTIFY overwriteChanged)
    Q_PROPERTY(int debugMessageLevel READ debugMessageLevel WRITE setDebugMessageLevel NOTIFY debugMessageLevelChanged)
    Q_PROPERTY(int counter READ counter WRITE setCounter NOTIFY counterChanged)
public:
    MyGlobalObject();
    // https://doc.qt.io/qt-5/qstandardpaths.html
    /* ****************************************************************************
     * RO=Read Only, NS=Not Supported, RG=Randomly Generated
     * Location                         Linux   macOS  Windows  Android  IoS
     * FileUtils.DesktopLocation        ""      ""     ""       ""       ""
     * FileUtils.DocumentsLocation      ""      ""     ""       ""       ""
     * FileUtils.FontsLocation          ""      "RO"   "RO"     "RO"     ""
     * FileUtils.ApplicationsLocation	""      "RO"   ""       "NS"     "NS"
     * FileUtils.MusicLocation          ""      ""     ""       ""       ""
     * FileUtils.MoviesLocation         ""      ""     ""       ""       ""
     * FileUtils.PicturesLocation       ""      ""     ""       ""       ""
     * FileUtils.TempLocation           ""      "RG"   ""       ""       ""
     * FileUtils.HomeLocation           ""      ""     ""       ""       ""
     * FileUtils.DataLocation           ""      ""	   ""       ""       ""
     * FileUtils.CacheLocation          ""      ""     ""       ""       ""
     * FileUtils.GenericDataLocation	""      ""     ""       "NS"     ""
     * FileUtils.RuntimeLocation        ""      ""     ""       ""       "NS"
     * FileUtils.ConfigLocation         ""      ""     ""       ""       ""
     * FileUtils.GenericConfigLocation	""      ""     ""       ""       ""
     * FileUtils.DownloadLocation       ""      ""     ""       ""       ""
     * FileUtils.GenericCacheLocation	""      ""     ""       "NS"     ""
     * FileUtils.AppDataLocation        ""      ""     ""       ""       ""
     * FileUtils.AppLocalDataLocation	""      ""	   ""       ""       ""
     * FileUtils.AppConfigLocation      ""      ""     ""       ""       ""
     */
    Q_INVOKABLE QString desktopLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::DesktopLocation);
    }
    Q_INVOKABLE QString documentsLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::DocumentsLocation);
    }
    Q_INVOKABLE QString musicLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::MusicLocation);
    }
    Q_INVOKABLE QString moviesLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::MoviesLocation);
    }
    Q_INVOKABLE QString picturesLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::PicturesLocation);
    }
    Q_INVOKABLE QString homeLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::HomeLocation);
    }
    Q_INVOKABLE QString dataLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::DataLocation);
    }
    Q_INVOKABLE QString configLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::ConfigLocation);
    }
    Q_INVOKABLE QString downloadLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::DownloadLocation);
    }
    Q_INVOKABLE QString appDataLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::AppDataLocation);
    }
    Q_INVOKABLE QString appConfigLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::AppConfigLocation);
    }
    Q_INVOKABLE QString cacheLocation()
    {
        return QStandardPaths::writableLocation(QStandardPaths::CacheLocation);
    }

public slots: // slots are public methods available in QML
    void doSomething(const QString &text);
    bool copyFile(const QString &source, const QString &destination);
    QString readTextFile(const QString &fullFilePathName);
    bool writeTextFile(const QString &fullFilePathName, const QString &content);
    bool deleteFile(const QString &fullPathFileName);
    bool renameFile(const QString &fullPathFileName, const QString &newFullPathFileName);
    bool isFile(const QString &fullPathFileName);

signals:
    void localStoragePathChanged();
    void overwriteChanged();
    void debugMessageLevelChanged();
    void counterChanged();

public:
    QString localStoragePath();
    void setLocalStoragePath(const QString value);
    //
    bool overwrite();
    void setOverwrite(bool value);
    //
    int debugMessageLevel();
    void setDebugMessageLevel(int value);
    //
    long counter() const;
    void setCounter(int value);

private:
    QString myLocalStoragePath;
    bool myOverwrite;
    int myDebugMessageLevel;
    int myCounter;

};

#endif // MYGLOBALOBJECT_H
