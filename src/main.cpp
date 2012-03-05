#include <QtGui/QApplication>
#include <QWebView>
#include <QWebFrame>

int main(int argc, char *argv[])
{
	QApplication a(argc, argv);

	// Create the surface to load the HTML5/JavaScript front-end.
	QWebView *view = new QWebView(0);
	view->load(QUrl("html/index.htm"));

	// Set window properties.
	view->setBaseSize(640, 480);
	view->setWindowTitle("kT Window");

	// Disable scrollbars.
	view->page()->mainFrame()->
		setScrollBarPolicy(Qt::Horizontal, Qt::ScrollBarAlwaysOff);
	view->page()->mainFrame()->
		setScrollBarPolicy(Qt::Vertical, Qt::ScrollBarAlwaysOff);

	// Execute and return status on close.
	view->show();
	return a.exec();
}
