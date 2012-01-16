import QtQuick 1.0

Rectangle {

    width: 360
    height: 360
	color: "#505050"

	Item {

		id: mainArea
		x: 10
		y: 10
		width: parent.width-x*2
		height: parent.height-y*2

		Rectangle {
			id: canvas
			radius: 10
			width: parent.width
			height: parent.height - menu.height - 10
		}

		Rectangle {
			id: sidebar
			radius: 10
		}

		Item {
			id: menu
			width: parent.width
			height: 100
		}
	}
}
