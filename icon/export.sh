#! /bin/bash

# Function to export SVG at different resolutions.
generate_png () {
	inkscape --export-png=korgi_$1px.png \
	--export-width=$1 --export-height=$1 korgi.svg
}

# Call the function.
generate_png 35
generate_png 64
generate_png 128
generate_png 512
