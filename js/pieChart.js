/**
 * Created with JetBrains WebStorm.
 * User: Alex
 * Date: 17.9.15
 * Time: 7.26
 * To change this template use File | Settings | File Templates.
 */
'use strict'
var str = "";
var i = 0;
var path = document.querySelectorAll("path");

function select(event) {
    var id = event.target.id;
    var elem = document.querySelector("#" + id + "> .marker");
    var color = window.getComputedStyle(elem).backgroundColor;
    for (i = 0; i < path.length; i++) {
        if ((path[i].getAttribute('fill')).slice(0,15) == (color.slice(0,15))) {
            str = path[i].getAttribute('d');
            path[i].setAttribute('d', "M 0.5 0.5  L 0.5 0  A 0.5 0.5 0 0 1 1 0.5 z");
            document.querySelector("svg > text").innerHTML = "25%";
            break;
        }
    }
}

function unSelect(event) {
    path[i].setAttribute('d', str);
    path[i].setAttribute('stroke', "none");
    document.querySelector("svg > text").innerHTML = "100%";
}

function calculatePie() {
    var data = {a: 90, b: 90, c: 90, d: 90, e: 90, f: 90};
    var sum = 0;
    var r = 0.5;

    for (var key in data) {
        sum += data[key];
}
    var deg = sum/360;
    var angel = {};
    var x = {};
    var y = {};
    var angelSum = 0;

    for (key in data) {
        angel[key] = data[key]/deg;
        angelSum += angel[key];
        if (angelSum <=90){
            x[key] = r + r * Math.sin(Math.PI * angelSum/180);
            y[key] = r - r * Math.sin(Math.PI/2 - (angelSum * Math.PI/180));
        }
        if ((angelSum > 90) && (angelSum <= 180)){
            x[key] = r + r * Math.sin(Math.PI - (angelSum*Math.PI/180));
            y[key] = r + r * Math.sin(Math.PI * (1/2 - (1 - (angelSum/180))));
        }
        if ((angelSum > 180) && (angelSum <= 270)){
            x[key] = r - r * Math.sin(Math.PI * (angelSum/180 - 1));
            y[key] = r + r * Math.sin((3 * Math.PI/2) - angelSum * Math.PI/180);
            if (angel[key] > 180) {
                buildPie(0.5, 1); 
            };
        }
        if ((angelSum > 270) && (angelSum <= 360)){
            x[key] = r - r * Math.sin(2*Math.PI - (Math.PI/180)*angelSum);
            y[key] = r - r * Math.sin(Math.PI/2 - 2 * Math.PI + (Math.PI/180)*angelSum);
            if (angel[key] > 180) {
                buildPie(0.5, 1);
            };
        }
        buildPie(x, y);
    }
}

function buildPie(x, y) {
    var color = 0;
    var center = "M 0.5 0.5 ";
    var path = '';
    var start = "L 0.5 0 "
    var svg = document.querySelector(".demo-char > svg");
    for (var key in x){
        path = path + '<path d=\"' + center + start + 'A 0.5 0.5 0 0 1 ' + x[key] + ' ' + y[key] + ' z\" ' +
            'fill=\"rgba(' + color +', ' + color +', 255, 0.75)\" />';
        start = 'L ' + x[key] + ' ' + y[key] + ' ';
        color += 40;


    }
    path = path + '<circle cx="0.5" cy="0.5" r="0.28" fill="white"></circle>' +
        '<text x="0.5" y="0.47" font-family="Roboto" font-size="0.2" fill="#888" text-anchor="middle" dy="0.1">100%</text>';
    document.querySelector("#svg").innerHTML = path;
      //  <path d="M 0.5 0.5  L 0.5 0.1  A 0.4 0.4 0 0 1 0.9 0.5 z"  fill="rgba(100, 255, 255, 0.75)" />
}

calculatePie();

