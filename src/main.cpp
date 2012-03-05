#include <QtGui/QApplication>
#include <QWebView>
#include <QWebFrame>
#include "main.h"

int main(int argc, char *argv[])
{
	QApplication a(argc, argv);

	// Create the surface to load the HTML5/JavaScript front-end.
	QWebView *view = new QWebView(0);
	view->load(QUrl("html/index.htm"));

	// Set window properties.
	view->setBaseSize(WINDOW_WIDTH, WINDOW_HEIGHT);
	view->setWindowTitle(WINDOW_TITLE);

	// Disable scrollbars.
	view->page()->mainFrame()->
		setScrollBarPolicy(Qt::Horizontal, Qt::ScrollBarAlwaysOff);
	view->page()->mainFrame()->
		setScrollBarPolicy(Qt::Vertical, Qt::ScrollBarAlwaysOff);

	// Execute and return status on close.
	view->show();
	return a.exec();
}
