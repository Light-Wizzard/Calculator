#ifndef MYQMLTYPE_H
#define MYQMLTYPE_H

#include <QObject>

/* ****************************************************************************
 * MyQMLType
 */
class MyQMLType : public QObject
{
    Q_OBJECT
    // this makes message available as a QML property
    Q_PROPERTY(QString message READ message WRITE setMessage NOTIFY messageChanged)

public:
    MyQMLType();

    // slots are public methods available in QML
public slots:
    int increment(int value);
    // starts internal calculations of doCppTask()
    void startCppTask();

signals:
    void messageChanged();
    void cppTaskFinished(); // triggered after calculations in doCppTask()

public:
    QString message() const;
    void setMessage(const QString& value);

private:
    void doCppTask(); // method for internal calculations
    QString myMessage;

};

#endif // MYQMLTYPE_H
/* ***************************** End of File ******************************* */
