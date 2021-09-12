import React, { useState } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import ChildCreate from './ChildCreate';


const PinguiniGenerator = () => {
    const colorsEyes = ['#008080', '#B94E48', '#3AA655', '#7BA05B', '#805533']
    const colorsNombril = ['#50BFE6', '#FF6EFF', '#FF355E', '#66FF66', '#FFCC33']
    const colorsContour = ['#1A1110', '#353839', '#331a00', '#1B1B1B']
    const colorsJoue = ['#50BFE6', '#FF6EFF', '#FF355E', '#66FF66', '#FFCC33']
    const colorsBec = ['#FF8833', '#FA5B3D', "#FFAE42"]
    const colorsPied = ['#FF8833', '#B33B24', '#AF6E4D']
    const white = ' #f2f2f2'

    const pixelSize = [10, 10]
    const [pinguini, setPinguini] = useState([
        //l1
        { x: 14, y: 0, fill: colorsContour[0], report: "contour" },
        { x: 15, y: 0, fill: colorsContour[0], report: "contour" },
        { x: 16, y: 0, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 0, fill: colorsContour[0], report: "contour" },
        { x: 18, y: 0, fill: colorsContour[0], report: "contour" },
        //l2
        { x: 12, y: 1, fill: colorsContour[0], report: "contour" },
        { x: 13, y: 1, fill: colorsContour[0], report: "contour" },
        { x: 14, y: 1, fill: colorsContour[0], report: "contour" },
        { x: 15, y: 1, fill: colorsContour[0], report: "contour" },
        { x: 16, y: 1, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 1, fill: colorsContour[0], report: "contour" },
        { x: 18, y: 1, fill: colorsContour[0], report: "contour" },
        { x: 19, y: 1, fill: colorsContour[0], report: "contour" },
        { x: 20, y: 1, fill: colorsContour[0], report: "contour" },
        //l3
        { x: 11, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 13, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 14, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 15, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 16, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 18, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 19, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 20, y: 2, fill: colorsContour[0], report: "contour" },
        { x: 21, y: 2, fill: colorsContour[0], report: "contour" },
        //l4
        { x: 10, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 13, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 14, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 15, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 16, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 18, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 19, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 20, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 21, y: 3, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 3, fill: colorsContour[0], report: "contour" },
        //l5
        { x: 9, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 4, fill: white },
        { x: 13, y: 4, fill: white },
        { x: 14, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 15, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 16, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 18, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 19, y: 4, fill: white },
        { x: 20, y: 4, fill: white },
        { x: 21, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 4, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 4, fill: colorsContour[0], report: "contour" },
        //l6
        { x: 8, y: 5, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 5, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 5, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 5, fill: white },
        { x: 12, y: 5, fill: white },
        { x: 13, y: 5, fill: white },
        { x: 14, y: 5, fill: white, report: "contour" },
        { x: 15, y: 5, fill: colorsContour[0], report: "contour" },
        { x: 16, y: 5, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 5, fill: colorsContour[0], report: "contour" },
        { x: 18, y: 5, fill: white, report: "contour" },
        { x: 19, y: 5, fill: white },
        { x: 20, y: 5, fill: white },
        { x: 21, y: 5, fill: white },
        { x: 22, y: 5, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 5, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 5, fill: colorsContour[0], report: "contour" },
        //l7
        { x: 8, y: 6, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 6, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 6, fill: white },
        { x: 11, y: 6, fill: white },
        { x: 12, y: 6, fill: white },
        { x: 13, y: 6, fill: white },
        { x: 14, y: 6, fill: white },
        { x: 15, y: 6, fill: white },
        { x: 16, y: 6, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 6, fill: white },
        { x: 18, y: 6, fill: white },
        { x: 19, y: 6, fill: white },
        { x: 20, y: 6, fill: white },
        { x: 21, y: 6, fill: white },
        { x: 22, y: 6, fill: white },
        { x: 23, y: 6, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 6, fill: colorsContour[0], report: "contour" },
        //l8
        { x: 7, y: 7, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 7, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 7, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 7, fill: white },
        { x: 11, y: 7, fill: white },
        { x: 12, y: 7, fill: white },
        { x: 13, y: 7, fill: 'black' },
        { x: 14, y: 7, fill: white },
        { x: 15, y: 7, fill: white },
        { x: 16, y: 7, fill: white },
        { x: 17, y: 7, fill: white },
        { x: 18, y: 7, fill: white },
        { x: 19, y: 7, fill: 'black' },
        { x: 20, y: 7, fill: white },
        { x: 21, y: 7, fill: white },
        { x: 22, y: 7, fill: white },
        { x: 23, y: 7, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 7, fill: colorsContour[0], report: "contour" },
        { x: 25, y: 7, fill: colorsContour[0], report: "contour" },
        //l9
        { x: 7, y: 8, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 8, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 8, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 8, fill: white },
        { x: 11, y: 8, fill: white },
        { x: 12, y: 8, fill: white },
        { x: 13, y: 8, fill: colorsContour[0], report: "contour" },
        { x: 14, y: 8, fill: white },
        { x: 15, y: 8, fill: white },
        { x: 16, y: 8, fill: white },
        { x: 17, y: 8, fill: white },
        { x: 18, y: 8, fill: white },
        { x: 19, y: 8, fill: colorsContour[0], report: "contour" },
        { x: 20, y: 8, fill: white },
        { x: 21, y: 8, fill: white },
        { x: 22, y: 8, fill: white },
        { x: 23, y: 8, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 8, fill: colorsContour[0], report: "contour" },
        { x: 25, y: 8, fill: colorsContour[0], report: "contour" },
        //l10
        { x: 7, y: 9, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 9, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 9, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 9, fill: white },
        { x: 11, y: 9, fill: white },
        { x: 12, y: 9, fill: white },
        { x: 13, y: 9, fill: white },
        { x: 14, y: 9, fill: white },
        { x: 15, y: 9, fill: white },
        { x: 16, y: 9, fill: white },
        { x: 17, y: 9, fill: white },
        { x: 18, y: 9, fill: white },
        { x: 19, y: 9, fill: white },
        { x: 20, y: 9, fill: white },
        { x: 21, y: 9, fill: white },
        { x: 22, y: 9, fill: white },
        { x: 23, y: 9, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 9, fill: colorsContour[0], report: "contour" },
        { x: 25, y: 9, fill: colorsContour[0], report: "contour" },
        //l11
        { x: 8, y: 10, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 10, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 10, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 10, fill: white },
        { x: 12, y: 10, fill: white },
        { x: 13, y: 10, fill: white },
        { x: 14, y: 10, fill: colorsPied[0], report: 'bec' },
        { x: 15, y: 10, fill: colorsPied[0], report: 'bec' },
        { x: 16, y: 10, fill: colorsPied[0], report: 'bec' },
        { x: 17, y: 10, fill: colorsPied[0], report: 'bec' },
        { x: 18, y: 10, fill: colorsPied[0], report: 'bec' },
        { x: 19, y: 10, fill: white },
        { x: 20, y: 10, fill: white },
        { x: 21, y: 10, fill: white },
        { x: 22, y: 10, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 10, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 10, fill: colorsContour[0], report: "contour" },
        //l12
        { x: 8, y: 11, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 11, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 11, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 11, fill: white },
        { x: 12, y: 11, fill: white },
        { x: 13, y: 11, fill: white },
        { x: 14, y: 11, fill: white },
        { x: 15, y: 11, fill: 'orange' },
        { x: 16, y: 11, fill: 'orange' },
        { x: 17, y: 11, fill: 'orange' },
        { x: 18, y: 11, fill: white },
        { x: 19, y: 11, fill: white },
        { x: 20, y: 11, fill: white },
        { x: 21, y: 11, fill: white },
        { x: 22, y: 11, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 11, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 11, fill: colorsContour[0], report: "contour" },
        //l13
        { x: 9, y: 12, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 12, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 12, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 12, fill: 'cyan' },
        { x: 13, y: 12, fill: white },
        { x: 14, y: 12, fill: white },
        { x: 15, y: 12, fill: white },
        { x: 16, y: 12, fill: white },
        { x: 17, y: 12, fill: white },
        { x: 18, y: 12, fill: white },
        { x: 19, y: 12, fill: white },
        { x: 20, y: 12, fill: 'cyan' },
        { x: 21, y: 12, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 12, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 12, fill: colorsContour[0], report: "contour" },
        //l14
        { x: 10, y: 13, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 13, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 13, fill: colorsContour[0], report: "contour" },
        { x: 13, y: 13, fill: white },
        { x: 14, y: 13, fill: white },
        { x: 15, y: 13, fill: white },
        { x: 16, y: 13, fill: white },
        { x: 17, y: 13, fill: white },
        { x: 18, y: 13, fill: white },
        { x: 19, y: 13, fill: white },
        { x: 20, y: 13, fill: colorsContour[0], report: "contour" },
        { x: 21, y: 13, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 13, fill: colorsContour[0], report: "contour" },
        //l15
        { x: 11, y: 14, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 14, fill: colorsContour[0], report: "contour" },
        { x: 13, y: 14, fill: white },
        { x: 14, y: 14, fill: white },
        { x: 15, y: 14, fill: white },
        { x: 16, y: 14, fill: white },
        { x: 17, y: 14, fill: white },
        { x: 18, y: 14, fill: white },
        { x: 19, y: 14, fill: white },
        { x: 20, y: 14, fill: colorsContour[0], report: "contour" },
        { x: 21, y: 14, fill: colorsContour[0], report: "contour" },
        //l16
        { x: 10, y: 15, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 15, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 15, fill: white },
        { x: 13, y: 15, fill: white },
        { x: 14, y: 15, fill: white },
        { x: 15, y: 15, fill: white },
        { x: 16, y: 15, fill: white },
        { x: 17, y: 15, fill: white },
        { x: 18, y: 15, fill: white },
        { x: 19, y: 15, fill: white },
        { x: 20, y: 15, fill: white },
        { x: 21, y: 15, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 15, fill: colorsContour[0], report: "contour" },
        //l17
        { x: 9, y: 16, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 16, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 16, fill: white },
        { x: 12, y: 16, fill: white },
        { x: 13, y: 16, fill: white },
        { x: 14, y: 16, fill: white },
        { x: 15, y: 16, fill: white },
        { x: 16, y: 16, fill: white },
        { x: 17, y: 16, fill: white },
        { x: 18, y: 16, fill: white },
        { x: 19, y: 16, fill: white },
        { x: 20, y: 16, fill: white },
        { x: 21, y: 16, fill: white },
        { x: 22, y: 16, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 16, fill: colorsContour[0], report: "contour" },
        //l18
        { x: 8, y: 17, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 17, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 17, fill: white },
        { x: 11, y: 17, fill: white },
        { x: 12, y: 17, fill: white },
        { x: 13, y: 17, fill: white },
        { x: 14, y: 17, fill: white },
        { x: 15, y: 17, fill: white },
        { x: 16, y: 17, fill: white },
        { x: 17, y: 17, fill: white },
        { x: 18, y: 17, fill: white },
        { x: 19, y: 17, fill: white },
        { x: 20, y: 17, fill: white },
        { x: 21, y: 17, fill: white },
        { x: 22, y: 17, fill: white },
        { x: 23, y: 17, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 17, fill: colorsContour[0], report: "contour" },
        //l29
        { x: 7, y: 18, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 18, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 18, fill: white },
        { x: 10, y: 18, fill: white },
        { x: 11, y: 18, fill: white },
        { x: 12, y: 18, fill: colorsContour[0], report: "contour" },
        { x: 13, y: 18, fill: white },
        { x: 14, y: 18, fill: white },
        { x: 15, y: 18, fill: white },
        { x: 16, y: 18, fill: white },
        { x: 17, y: 18, fill: white },
        { x: 18, y: 18, fill: white },
        { x: 19, y: 18, fill: white },
        { x: 20, y: 18, fill: colorsContour[0], report: "contour" },
        { x: 21, y: 18, fill: white },
        { x: 22, y: 18, fill: white },
        { x: 23, y: 18, fill: white },
        { x: 24, y: 18, fill: colorsContour[0], report: "contour" },
        { x: 25, y: 18, fill: colorsContour[0], report: "contour" },
        //l20

        { x: 7, y: 19, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 19, fill: white },
        { x: 9, y: 19, fill: white },
        { x: 10, y: 19, fill: white },
        { x: 11, y: 19, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 19, fill: white },
        { x: 13, y: 19, fill: white },
        { x: 14, y: 19, fill: white },
        { x: 15, y: 19, fill: white },
        { x: 16, y: 19, fill: white },
        { x: 17, y: 19, fill: white },
        { x: 18, y: 19, fill: white },
        { x: 19, y: 19, fill: white },
        { x: 20, y: 19, fill: white },
        { x: 21, y: 19, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 19, fill: white },
        { x: 23, y: 19, fill: white },
        { x: 24, y: 19, fill: white },
        { x: 25, y: 19, fill: colorsContour[0], report: "contour" },
        //l21
        { x: 6, y: 20, fill: colorsContour[0], report: "contour" },
        { x: 7, y: 20, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 20, fill: white },
        { x: 9, y: 20, fill: white },
        { x: 10, y: 20, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 20, fill: white },
        { x: 12, y: 20, fill: white },
        { x: 13, y: 20, fill: white },
        { x: 14, y: 20, fill: white },
        { x: 15, y: 20, fill: white },
        { x: 16, y: 20, fill: white },
        { x: 17, y: 20, fill: white },
        { x: 18, y: 20, fill: white },
        { x: 19, y: 20, fill: white },
        { x: 20, y: 20, fill: white },
        { x: 21, y: 20, fill: white },
        { x: 22, y: 20, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 20, fill: white },
        { x: 24, y: 20, fill: white },
        { x: 25, y: 20, fill: colorsContour[0], report: "contour" },
        { x: 26, y: 20, fill: colorsContour[0], report: "contour" },
        //l22
        { x: 6, y: 21, fill: colorsContour[0], report: "contour" },
        { x: 7, y: 21, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 21, fill: white },
        { x: 9, y: 21, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 21, fill: white },
        { x: 11, y: 21, fill: white },
        { x: 12, y: 21, fill: white },
        { x: 13, y: 21, fill: white },
        { x: 14, y: 21, fill: white },
        { x: 15, y: 21, fill: white },
        { x: 16, y: 21, fill: white },
        { x: 17, y: 21, fill: white },
        { x: 18, y: 21, fill: white },
        { x: 19, y: 21, fill: white },
        { x: 20, y: 21, fill: white },
        { x: 21, y: 21, fill: white },
        { x: 22, y: 21, fill: white },
        { x: 23, y: 21, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 21, fill: white },
        { x: 25, y: 21, fill: colorsContour[0], report: "contour" },
        { x: 26, y: 21, fill: colorsContour[0], report: "contour" },
        //l23
        { x: 6, y: 22, fill: colorsContour[0], report: "contour" },
        { x: 7, y: 22, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 22, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 22, fill: white },
        { x: 10, y: 22, fill: white },
        { x: 11, y: 22, fill: white },
        { x: 12, y: 22, fill: white },
        { x: 13, y: 22, fill: white },
        { x: 14, y: 22, fill: white },
        { x: 15, y: 22, fill: white },
        { x: 16, y: 22, fill: white },
        { x: 17, y: 22, fill: white },
        { x: 18, y: 22, fill: white },
        { x: 19, y: 22, fill: white },
        { x: 20, y: 22, fill: white },
        { x: 21, y: 22, fill: white },
        { x: 22, y: 22, fill: white },
        { x: 23, y: 22, fill: white },
        { x: 24, y: 22, fill: colorsContour[0], report: "contour" },
        { x: 25, y: 22, fill: colorsContour[0], report: "contour" },
        { x: 26, y: 22, fill: colorsContour[0], report: "contour" },
        //l24
        { x: 6, y: 23, fill: colorsContour[0], report: "contour" },
        { x: 7, y: 23, fill: colorsContour[0], report: "contour" },
        { x: 8, y: 23, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 23, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 23, fill: white },
        { x: 11, y: 23, fill: white },
        { x: 12, y: 23, fill: white },
        { x: 13, y: 23, fill: white },
        { x: 14, y: 23, fill: white },
        { x: 15, y: 23, fill: white },
        { x: 16, y: 23, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 23, fill: white },
        { x: 18, y: 23, fill: white },
        { x: 19, y: 23, fill: white },
        { x: 20, y: 23, fill: white },
        { x: 21, y: 23, fill: white },
        { x: 22, y: 23, fill: white },
        { x: 23, y: 23, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 23, fill: colorsContour[0], report: "contour" },
        { x: 25, y: 23, fill: colorsContour[0], report: "contour" },
        { x: 26, y: 23, fill: colorsContour[0], report: "contour" },
        //l25

        { x: 8, y: 24, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 24, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 24, fill: white },
        { x: 11, y: 24, fill: white },
        { x: 12, y: 24, fill: white },
        { x: 13, y: 24, fill: white },
        { x: 14, y: 24, fill: white },
        { x: 15, y: 24, fill: white },
        { x: 16, y: 24, fill: white },
        { x: 17, y: 24, fill: white },
        { x: 18, y: 24, fill: white },
        { x: 19, y: 24, fill: white },
        { x: 20, y: 24, fill: white },
        { x: 21, y: 24, fill: white },
        { x: 22, y: 24, fill: white },
        { x: 23, y: 24, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 24, fill: colorsContour[0], report: "contour" },

        //l26
        { x: 8, y: 25, fill: colorsContour[0], report: "contour" },
        { x: 9, y: 25, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 25, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 25, fill: white },
        { x: 12, y: 25, fill: white },
        { x: 13, y: 25, fill: white },
        { x: 14, y: 25, fill: white },
        { x: 15, y: 25, fill: white },
        { x: 16, y: 25, fill: white },
        { x: 17, y: 25, fill: white },
        { x: 18, y: 25, fill: white },
        { x: 19, y: 25, fill: white },
        { x: 20, y: 25, fill: white },
        { x: 21, y: 25, fill: white },
        { x: 22, y: 25, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 25, fill: colorsContour[0], report: "contour" },
        { x: 24, y: 25, fill: colorsContour[0], report: "contour" },
        //l27
        { x: 9, y: 26, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 26, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 26, fill: white },
        { x: 12, y: 26, fill: white },
        { x: 13, y: 26, fill: white },
        { x: 14, y: 26, fill: white },
        { x: 15, y: 26, fill: white },
        { x: 16, y: 26, fill: white },
        { x: 17, y: 26, fill: white },
        { x: 18, y: 26, fill: white },
        { x: 19, y: 26, fill: white },
        { x: 20, y: 26, fill: white },
        { x: 21, y: 26, fill: white },
        { x: 22, y: 26, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 26, fill: colorsContour[0], report: "contour" },
        //l28
        { x: 9, y: 27, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 27, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 27, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 27, fill: white },
        { x: 13, y: 27, fill: white },
        { x: 14, y: 27, fill: white },
        { x: 15, y: 27, fill: white },
        { x: 16, y: 27, fill: white },
        { x: 17, y: 27, fill: white },
        { x: 18, y: 27, fill: white },
        { x: 19, y: 27, fill: white },
        { x: 20, y: 27, fill: white },
        { x: 21, y: 27, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 27, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 27, fill: colorsContour[0], report: "contour" },
        //l29
        { x: 9, y: 28, fill: colorsContour[0], report: "contour" },
        { x: 10, y: 28, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 28, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 28, fill: white },
        { x: 13, y: 28, fill: white },
        { x: 14, y: 28, fill: white },
        { x: 15, y: 28, fill: white },
        { x: 16, y: 28, fill: white },
        { x: 17, y: 28, fill: white },
        { x: 18, y: 28, fill: white },
        { x: 19, y: 28, fill: white },
        { x: 20, y: 28, fill: white },
        { x: 21, y: 28, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 28, fill: colorsContour[0], report: "contour" },
        { x: 23, y: 28, fill: colorsContour[0], report: "contour" },
        //l30

        { x: 10, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 11, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 12, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 13, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 14, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 15, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 16, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 18, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 19, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 20, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 21, y: 29, fill: colorsContour[0], report: "contour" },
        { x: 22, y: 29, fill: colorsContour[0], report: "contour" },
        //l32
        { x: 10, y: 30, fill: 'orange' },
        { x: 11, y: 30, fill: 'orange' },
        { x: 12, y: 30, fill: 'orange' },
        { x: 13, y: 30, fill: 'orange' },
        { x: 14, y: 30, fill: colorsContour[0], report: "contour" },
        { x: 15, y: 30, fill: colorsContour[0], report: "contour" },
        { x: 16, y: 30, fill: colorsContour[0], report: "contour" },
        { x: 17, y: 30, fill: colorsContour[0], report: "contour" },
        { x: 18, y: 30, fill: colorsContour[0], report: "contour" },
        { x: 19, y: 30, fill: 'orange' },
        { x: 20, y: 30, fill: 'orange' },
        { x: 21, y: 30, fill: 'orange' },
        { x: 22, y: 30, fill: 'orange' },

    ]);


    const generate = () => {

        let rndEyes = Math.floor(Math.random() * 1000)
        let rndColorEyes = Math.floor(Math.random() * colorsEyes.length)
        let rndColorContour = Math.floor(Math.random() * colorsContour.length)
        let rndColorJoue = Math.floor(Math.random() * colorsJoue.length)
        let rndColorPied = Math.floor(Math.random() * colorsPied.length)
        let rndColorBec = Math.floor(Math.random() * colorsBec.length)


        for (let i = 0; i < pinguini.length; i++) {
            
            
                //colors
                if (pinguini[i].report === 'contour') {
                    pinguini[i].fill = colorsContour[rndColorContour]
                }
                if (pinguini[i].report === 'bec') {
                    pinguini[i].fill = colorsBec[rndColorBec]
                }
                //cheveux
                if (((pinguini[i].x > 13 && pinguini[i].x < 19) && (pinguini[i].y > 1 && pinguini[i].y < 6)) || (pinguini[i].x === 16 && pinguini[i].y === 6)) {
                    let rnd = Math.floor(Math.random() * 1000)

                    if (rnd < 300) {
                        setPinguini([...pinguini, pinguini[i].fill = white])
                    } else {
                        setPinguini([...pinguini, pinguini[i].fill = colorsContour[rndColorContour]])
                    }
                }
                //bec
                if ((pinguini[i].x > 13 && pinguini[i].x < 19) && (pinguini[i].y === 11)) {
                    let rnd = Math.floor(Math.random() * 1000)
                    if (rnd < 400) {
                        setPinguini([...pinguini, pinguini[i].fill = white])
                    } else {
                        setPinguini([...pinguini, pinguini[i].fill = colorsBec[rndColorBec]])
                    }

                }
                //pied
                if (((pinguini[i].x > 17 && pinguini[i].x <= 22) && pinguini[i].y === 30) || ((pinguini[i].x >= 10 && pinguini[i].x < 15) && pinguini[i].y === 30)) {
                    let rnd = Math.floor(Math.random() * 1000)

                    if (rnd < 400 && (pinguini[i].x !== 20 || pinguini[i].x !== 21 || pinguini[i].x !== 12 || pinguini[i].x !== 11)) {
                        setPinguini([...pinguini, pinguini[i].fill = colorsContour[rndColorContour]])
                    } else {
                        setPinguini([...pinguini, pinguini[i].fill = colorsPied[rndColorPied]])
                    }

                }
                //joue
                if (((pinguini[i].x > 19 && pinguini[i].x < 22) && (pinguini[i].y === 11 || pinguini[i].y === 12)) || ((pinguini[i].x > 10 && pinguini[i].x < 13) && (pinguini[i].y === 11 || pinguini[i].y === 12))) {
                    let rnd = Math.floor(Math.random() * 1000)

                    if (rnd < 300 && pinguini[i].x !== 20 && pinguini[i].x !== 12) {
                        setPinguini([...pinguini, pinguini[i].fill = colorsContour[rndColorContour]])
                    } else if (rnd < 600) {
                        setPinguini([...pinguini, pinguini[i].fill = colorsJoue[rndColorJoue]])
                    } else {
                        setPinguini([...pinguini, pinguini[i].fill = white])
                    }
                }
                //yeux
                if ((pinguini[i].x === 19 && pinguini[i].y === 8) || (pinguini[i].x === 13 && pinguini[i].y === 8)) {

                    if (rndEyes < 400) {
                        setPinguini([...pinguini, pinguini[i].fill = colorsEyes[rndColorEyes]])
                    } else {
                        setPinguini([...pinguini, pinguini[i].fill = colorsContour[rndColorContour]])
                    }
                }
                //aiselle
                if ((pinguini[i].x === 19 || pinguini[i].x === 20 || pinguini[i].x === 13 || pinguini[i].x === 12) && (pinguini[i].y === 19 || pinguini[i].y === 18)) {
                    let rnd = Math.floor(Math.random() * 1000)

                    if (rnd < 400) {
                        setPinguini([...pinguini, pinguini[i].fill = white])
                    } else {
                        setPinguini([...pinguini, pinguini[i].fill = colorsContour[rndColorContour]])
                    }
                }
                //nombril
                if (pinguini[i].x === 16 && (pinguini[i].y === 23 || pinguini[i].y === 24)) {
                    let rnd = Math.floor(Math.random() * 1000)
                    let rndColorNombril = Math.floor(Math.random() * colorsEyes.length)

                    if (rnd < 800) {
                        setPinguini([...pinguini, pinguini[i].fill = white])
                    } else if (rnd >= 900) {
                        setPinguini([...pinguini, pinguini[i].fill = colorsNombril[rndColorNombril]])
                    } else {
                        setPinguini([...pinguini, pinguini[i].fill = colorsContour[rndColorContour]])
                    }
                }
                //contour
                if (
                    ((pinguini[i].x > 14 && pinguini[i].x < 18) && pinguini[i].y === 0)
                    //||(pinguini[i].x === 70 && (pinguini[i].y > 60 && pinguini[i].y < 100))
                    //||(pinguini[i].x === 250 && (pinguini[i].y > 60 && pinguini[i].y < 100))
                    || (pinguini[i].x === 7 && (pinguini[i].y > 20 && pinguini[i].y < 23))
                    || (pinguini[i].x === 25 && (pinguini[i].y > 20 && pinguini[i].y < 23))
                    || (pinguini[i].x === 12 && (pinguini[i].y > 12 && pinguini[i].y < 15))
                    || (pinguini[i].x === 20 && (pinguini[i].y > 12 && pinguini[i].y < 15))
                    || (pinguini[i].y === 30 && (pinguini[i].x > 14 && pinguini[i].x < 18))
                ) {
                    let rnd = Math.floor(Math.random() * 1000)
                    if (rnd < 400) {
                        setPinguini([...pinguini, pinguini[i].fill = white])
                    } else {
                        setPinguini([...pinguini, pinguini[i].fill = colorsContour[rndColorContour]])
                    }

                }
                //colors
            
                if (pinguini[i].x === undefined) {
                    setPinguini([...pinguini, pinguini.splice(i, 1)])
                    setPinguini([...pinguini, pinguini.splice(489, 1)])
                    console.log(pinguini)
                }
            
        }
    }

    return (
        <div className="main">
            <Stage width={32 * pixelSize[1]} height={32 * pixelSize[0]} className="pinguini male" >
                <Layer>
                    {pinguini.map((pixel, index) => (
                        
                        <Rect
                            key={index}
                            x={pixel.x * pixelSize[1]}
                            y={pixel.y * pixelSize[0]}
                            width={pixelSize[0]}
                            height={pixelSize[1]}
                            fill={pixel.fill}
                        />
                    ))}
                </Layer>
            </Stage>
            <div onClick={generate}><p>Generate</p></div>
        </div>
    );
};

export default PinguiniGenerator;