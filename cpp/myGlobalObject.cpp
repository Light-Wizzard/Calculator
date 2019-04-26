#include "myGlobalObject.hpp"
#include <QFile>
#include <QDir>
#include <QString>
#include <QDebug>
#include <QTextStream>
#include <QFileInfo>
#include <QStandardPaths>
#include <QStringList>

/* ****************************************************************************
 * MyGlobalObject
 * , myLocalStoragePaths(QStandardPaths::DesktopLocation)
 */
MyGlobalObject::MyGlobalObject() : myLocalStoragePath(""), myOverwrite(false), myDebugMessageLevel(0), myCounter(0)
{
    // perform custom initialization steps here
}
/* ****************************************************************************
 * copyFile
 * This Function is designed for LocalStorage Use only,
 * file systems change for every OS that this function is used on,
 * but basically I do not want to touch files outside of LocalStorage for this App,
 * so I do not allow any Full Paths to be used, this is enforce by using setLocalStoragePath
 * so if you set it "" or empty, you can over-ride this behavior,
 * otherwise, you must use it to set the folder location manually,
 * it will create the folder if it does not exist.
 *
 * The Source is a relative path, if it is an asset, just use "asset/fileName.ext"
 * The function will first check if the file exist, if not it will add ":/" to it,
 * this will tell Qt to look in the resource folder, so is not needed in Dev,
 * but required in Production.
 *
 * If Destination is a Relative Path only, make sure myDestination ends in /
 * A slash works on every OS as a Seperator, on Windows Qt will correct it.
 * copyFile uses Source File Name for output in this case.
 * If Destination is Relative Path and Full Name, it will rename the file.
 *
 * This Function works with Text and Binary files.
 *
 * Copy
 * copyFile("/fullPath/FileName.ext", "FullPath/")
 * Rename
 * copyFile("/fullPath/FileName.ext", "FullPath/FileName.ext")
 */
bool MyGlobalObject::copyFile(const QString &mySource, const QString &myDestination)
{
    if (debugMessageLevel() == 1 || debugMessageLevel() == 2 || debugMessageLevel() == 3)
    {
        qDebug() << "copyFile(" << mySource << ", " << myDestination << ")";
    }
    QString theSource = mySource;
    if (!isFile(theSource))
    {
        theSource = ":/" + mySource;
        if (!isFile(theSource))
        {
            if (debugMessageLevel() == 1 || debugMessageLevel() == 2)
            {
                qDebug() << "copyFile: source not found: " << theSource;
            }
            return false;
        }
        else
        {
            if (debugMessageLevel() == 3)
            {
                qDebug() << "copyFile: source found: " << theSource;
            }
        }
    }
    else
    {
        if (debugMessageLevel() == 3)
        {
            qDebug() << "copyFile: source found: " << theSource;
        }
    }

    QString theDestination = myDestination;
    QString theFileName (QFileInfo(theDestination).fileName());
    bool isRename = false;
    if (!theFileName.isEmpty())
    {
        if (debugMessageLevel() == 2)
            qDebug() << "copyFile: Destination found: " << theDestination;
        isRename = true;
    }
    // if Renameing, we refine it
    if (isRename)
    {
        theFileName = QFileInfo(myDestination).fileName();
        theDestination = myDestination.mid(0, theDestination.indexOf(theFileName));
        if (debugMessageLevel() == 2 || debugMessageLevel() == 3)
            qDebug() << "copyFile: isRename: " << theDestination;
    }
    if (!QDir(myLocalStoragePath + "/" +  theDestination).exists())
    {
        if (debugMessageLevel() == 1 || debugMessageLevel() == 2)
            qDebug() << "copyFile: mkdir: " << myLocalStoragePath + "/" +  theDestination;
        QDir().mkdir(myLocalStoragePath + "/" +  theDestination);
    }
    // Make sure theDestination ends in a separator
    if (theDestination.mid(theDestination.length() - 1, 1) != QDir::separator())
    {
        theDestination.append(QDir::separator());
        if (debugMessageLevel() == 2 || debugMessageLevel() == 3)
            qDebug() << "copyFile: theDestination ending: " << theDestination;
    }
    if (theFileName.isEmpty())
    {
        theFileName = QFileInfo(theSource).fileName();
    }
    if (isFile(myLocalStoragePath + "/" + theDestination + theFileName))
    {
        if (myOverwrite)
        {
            if (! deleteFile(myLocalStoragePath + "/" + theDestination + theFileName))
            {
                if (debugMessageLevel() == 2 || debugMessageLevel() == 3)
                    qDebug() << "copyFile: failed could not delete Destination file: " << myLocalStoragePath + "/" +  theDestination;
                return false;
            }
            else
            {
                if (debugMessageLevel() == 2 || debugMessageLevel() == 3)
                    qDebug() << "copyFile: deleteFile: " << myLocalStoragePath + "/" + theDestination + theFileName;
            }
        }
    }
    if(QFile::copy(theSource , myLocalStoragePath + "/" + theDestination + theFileName))
    {
        if (debugMessageLevel() == 1 || debugMessageLevel() == 2 || debugMessageLevel() == 3)
            qDebug() << "copyFile: Success";
        return true;
    }
    else
    {
        if (debugMessageLevel() == 1 || debugMessageLevel() == 2 || debugMessageLevel() == 3)
            qDebug() << "copyFile: Failed: source=" << theSource << " destination=" << myLocalStoragePath + "/" +  theDestination + theFileName;
        return false;
    }
}
/* ****************************************************************************
 * readFile
 * return as QString
 */
QString MyGlobalObject::readTextFile(const QString &fullFilePathName)
{
    QFile file(fullFilePathName);
     if(!file.open(QFile::ReadOnly | QFile::Text))
     {
         qDebug() << " Could not open the file for reading";
         return "";
     }
     QTextStream in(&file);
     QString myText = in.readAll();
     if (debugMessageLevel() == 1 || debugMessageLevel() == 2 || debugMessageLevel() == 3)
         qDebug() << myText;
     file.close();
    return myText;
}
/* ****************************************************************************
 * writeFile
 */
bool MyGlobalObject::writeTextFile(const QString &fullFilePathName, const QString &content)
{
    QFile file(fullFilePathName);
    // Trying to open in WriteOnly and Text mode
    if(!file.open(QFile::WriteOnly | QFile::Text))
    {
        if (debugMessageLevel() == 1 || debugMessageLevel() == 2 || debugMessageLevel() == 3)
            qDebug() << " Could not open file for writing";
        return false;
    }
    // To write text, we use operator<<(),
    // which is overloaded to take
    // a QTextStream on the left
    // and data types (including QString) on the right
    QTextStream out(&file);
    out << content;
    file.flush();
    file.close();
    return true;
}
/* ****************************************************************************
 * isFile
 */
bool MyGlobalObject::isFile(const QString &fullPathFileName)
{
    if (debugMessageLevel() == 1 || debugMessageLevel() == 2 || debugMessageLevel() == 3)
        qDebug() << "isFile=" << fullPathFileName;
    // check if path exists and if it a file and not a directory
    return (QFileInfo::exists(fullPathFileName) && QFileInfo(fullPathFileName).isFile());
}
/* ****************************************************************************
 * deleteFile
 */
bool MyGlobalObject::deleteFile(const QString &fullPathFileName)
{
    if (debugMessageLevel() == 1 || debugMessageLevel() == 2 || debugMessageLevel() == 3)
        qDebug() << "deleteFile=" << fullPathFileName;
    if (isFile(fullPathFileName))
    {
        QFile file (fullPathFileName);
        return file.remove();
    }
    return false;
}
/* ****************************************************************************
 * renameFile
 */
bool MyGlobalObject::renameFile(const QString &fullPathFileName, const QString &newFullPathFileName)
{
    if (debugMessageLevel() == 1 || debugMessageLevel() == 2 || debugMessageLevel() == 3)
        qDebug() << "renameFile=" << fullPathFileName;
    if (isFile(fullPathFileName))
    {
        QFile file (fullPathFileName);
        return file.rename(newFullPathFileName);
    }
    return false;
}
/* ****************************************************************************
 * doSomething
 */
void MyGlobalObject::doSomething(const QString &text)
{
    qDebug() << "MyGlobalObject doSomething called with" << text;
    setCounter(myCounter + 1);
}
/* ****************************************************************************
 * getCounter
 */
long MyGlobalObject::counter() const
{
    return myCounter;
}
/* ****************************************************************************
 * setCounter
 */
void MyGlobalObject::setCounter(int value)
{
    if(myCounter != value)
    {
        myCounter = value;
        counterChanged(); // trigger signal of counter change (e.g. updates QML text that uses counter property)
    }
}
/* ****************************************************************************
 * getOverwrite
 */
bool MyGlobalObject::overwrite()
{
    return myOverwrite;
}
/* ****************************************************************************
 * setOverwrite
 */
void MyGlobalObject::setOverwrite(bool value)
{
    qDebug() << "setOverwrite(" << value << ")";
    if(myOverwrite != value)
    {
        myOverwrite = value;
        overwriteChanged(); // trigger signal of counter change (e.g. updates QML text that uses counter property)
        qDebug() << "setOverwrite=|" << value << "|";
    }
}
/* ****************************************************************************
 * getDebugMessageLevel
 */
int MyGlobalObject::debugMessageLevel()
{
    return myDebugMessageLevel;
}
/* ****************************************************************************
 * setDebugMessageLevel
 */
void MyGlobalObject::setDebugMessageLevel(int value)
{
    qDebug() << "setDebugMessageLevel(" << value << ")";
    if(myDebugMessageLevel != value)
    {
        myDebugMessageLevel = value;
        debugMessageLevelChanged(); // trigger signal of counter change (e.g. updates QML text that uses counter property)
        qDebug() << "setDebugMessageLevel=|" << myDebugMessageLevel << "|";
    }
}
/* ****************************************************************************
 * localStoragePath
 */
QString MyGlobalObject::localStoragePath()
{
    return myLocalStoragePath;
}
/* ****************************************************************************
 * setLocalStoragePath
 */
void MyGlobalObject::setLocalStoragePath(const QString value)
{
    qDebug() << "********* setLocalStoragePath(" << value << ")";
    if(myLocalStoragePath != value)
    {
        myLocalStoragePath = value;
        localStoragePathChanged(); // trigger signal of counter change (e.g. updates QML text that uses counter property)
        qDebug() << "setLocalStoragePath=" << myLocalStoragePath;
    }
}
/* **************************** End of File ******************************** */
