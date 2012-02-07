#include <QtGui/QApplication>
#include <QWebView>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

	// Create the surface to load the HTML5/JavaScript front-end.
	QWebView *view = new QWebView(0);
	view->load(QUrl("frontend/index.htm"));

	// Set window properties.
	view->setBaseSize(640, 480);
	view->setWindowTitle("Korgi");

	// Execute and return status on close.
	view->show();
    return a.exec();
}
