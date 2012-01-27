#ifndef GENERICTYPE_H
#define GENERICTYPE_H

// =====================================================================
// ==| NOTES
// =====================================================================
/*
  The GenericType class is used to pass data between logical blocks,
  bringing limited dynamic typing to C++.
*/
// =====================================================================
// ==| INCLUDES
// =====================================================================

#include <QObject>
#include <QString>

// =====================================================================
// ==| DEFINES
// =====================================================================

#define VALUE_IS_UNDEFINED 0
#define VALUE_IS_INTEGER   1
#define VALUE_IS_FLOAT     2
#define VALUE_IS_STRING    3

// =====================================================================
// ==| CLASS DEFINITION
// =====================================================================

typedef class GenericType : public QObject
{
    Q_OBJECT

public:
	explicit GenericType(QObject *parent = 0);

	void setValue(qint32);
	void setValue(qreal);
	void setValue(QString);

	qint32 getIntegerValue();
	qreal getFloatValue();
	QString getStringValue();

private:
	qint32 valueAsInteger;
	qreal valueAsFloat;
	QString valueAsString;
	uchar valueType;

} var;

#endif // GENERICTYPE_H
