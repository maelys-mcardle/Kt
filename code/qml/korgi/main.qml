import QtQuick 1.0

Rectangle {

	width: 800
	height: 600
	color: "#505050"

	FontLoader {
		id: vegurFont;
		source: "../../../font/Vegur-L 0602.otf"
	}

	Item {

		id: mainArea
		x: 10
		y: x
		width: parent.width-x*2
		height: parent.height-y*2

		Rectangle {
			id: canvas
			radius: 10
			color: "#303030"
			width: parent.width - sidebar.width - 10
			height: parent.height - menu.height - 10
		}

		Item {
			id: sidebar
			width: 200
			height: parent.height - menu.height - 10
			x: parent.width - width
			y: 0

			Rectangle {
				id: sidebarInterface
				x: 0
				y: 0
				width: parent.width
				height: parent.height * 0.3
				radius: 10
				color: "#303030"
			}

			Rectangle {
				id: sidebarList;
				width: parent.width
				height: parent.height - sidebarInterface.height - 10
				anchors.top: sidebarInterface.bottom
				anchors.topMargin: 10
				radius: 10
				color: "#303030"
			}

		}

		Item {
			id: menu
			width: parent.width
			y: parent.height-100
			x: 0
			height: 100


			Text {
				id: textInterface
				anchors.right: textLogic.left
				anchors.rightMargin: 30
				text: "interface"
				color: "white"
				font.family: vegurFont.name
				font.pointSize: 24
				font.capitalization: Font.AllUppercase
			 }

			Text {
				id: textLogic
				anchors.horizontalCenter: parent.horizontalCenter
				text: "logic"
				color: "white"
				font.family: vegurFont.name
				font.pointSize: 24
				font.capitalization: Font.AllUppercase
			 }

			Text {
				anchors.left: textLogic.right
				anchors.leftMargin: 30
				id: textRun
				text: "run"
				color: "white"
				font.family: vegurFont.name
				font.pointSize: 24
				font.capitalization: Font.AllUppercase
			 }

		}
	}
}
