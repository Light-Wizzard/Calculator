#include "myQmlType.hpp"
/* ****************************************************************************
 * MyQMLType
 */
MyQMLType::MyQMLType() : myMessage("")
{

}
/* ****************************************************************************
 * increment
 */
int MyQMLType::increment(int value)
{
    return value + 1;
}
/* ****************************************************************************
 * startCppTask
 */
void MyQMLType::startCppTask()
{
    this->doCppTask();
}
/* ****************************************************************************
 * doCppTask
 */
void MyQMLType::doCppTask()
{
    // NOTE: you can do Task here in another thread, this may be used to perform
    // cpu-intense operations for e.g. AI (artificial itelligence), Machine Learning or similar purposes
    // When the work is done, we can trigger the cppTaskFinished signal and react anywhere in C++ or QML
    cppTaskFinished();
}
/* ****************************************************************************
 * getMessage
 */
QString MyQMLType::message() const
{
    return myMessage;
}
/* ****************************************************************************
 * setMessage
 */
void MyQMLType::setMessage(const QString& value)
{
    if(myMessage != value)
    {
        myMessage = value;
        messageChanged(); // trigger signal of property change
    }
}
/* ***************************** End of File ******************************* */
