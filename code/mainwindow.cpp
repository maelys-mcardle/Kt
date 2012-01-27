#include "mainwindow.h"
#include "ui_mainwindow.h"


 #include <QPushButton>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

	// Add widgets to the list.
	QPushButton *test = new QPushButton("Test!");
	ui->layoutWidgetList->addWidget(test, 0,
		Qt::AlignTop | Qt::AlignHCenter);


	// Resize the widget list to have all of the items fit.
	ui->scrollWidgetList->setMinimumWidth(
		ui->layoutWidgetList->sizeHint().width() +
		ui->layoutWidgetList->margin() * 2);

}

MainWindow::~MainWindow()
{
    delete ui;
}
