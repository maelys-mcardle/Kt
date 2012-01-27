#include "generictype.h"

// =====================================================================
// ==| CONSTRUCTOR
// =====================================================================

GenericType::GenericType(QObject *parent) :
	QObject(parent)
{
	// Initialize the value to an undefined state.
	this->valueType = VALUE_IS_UNDEFINED;
}

// =====================================================================
// ==| SET VALUE FUNCTIONS
// =====================================================================

void GenericType::setValue(qint32 value)
{
	this->valueAsInteger = value;
	this->valueType = VALUE_IS_INTEGER;
}

void GenericType::setValue(qreal value)
{
	this->valueAsFloat = value;
	this->valueType = VALUE_IS_FLOAT;
}

void GenericType::setValue(QString value)
{
	this->valueAsString = value;
	this->valueType = VALUE_IS_STRING;
}

// =====================================================================
// ==| GET VALUE FUNCTIONS
// =====================================================================

qint32 GenericType::getIntegerValue()
{
	// Output the requested value.
	if (this->valueType == VALUE_IS_INTEGER)
		return this->valueAsInteger;

	if (this->valueType == VALUE_IS_FLOAT)
		return this->valueAsFloat;

	if (this->valueType == VALUE_IS_STRING)
		return this->valueAsString.toInt(0, 10);

	// Value undefined.
	return 0;
}

qreal GenericType::getFloatValue()
{
	// Output the requested value.
	if (this->valueType == VALUE_IS_INTEGER)
		return this->valueAsInteger;

	if (this->valueType == VALUE_IS_FLOAT)
		return this->valueAsFloat;

	if (this->valueType == VALUE_IS_STRING)
		return this->valueAsString.toFloat(0);

	// Value undefined.
	return 0.;
}

QString GenericType::getStringValue()
{
	QString returnValue;

	// Output the requested value.
	if (this->valueType == VALUE_IS_INTEGER)
		return returnValue.setNum(this->valueAsInteger);

	if (this->valueType == VALUE_IS_FLOAT)
		return returnValue.setNum(this->valueAsFloat);

	if (this->valueType == VALUE_IS_STRING)
		return this->valueAsString;

	// Value undefined.
	return returnValue;
}
