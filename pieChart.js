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
            path[i].setAttribute('stroke', "red");
            path[i].setAttribute('stroke-width', "0.01");
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
    var data = {a: 20, b: 120, c: 300};
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
    if (angelSum <=90){
        if ((angel[key] >= 90) && (angel[key] <= 180)) {
            x[key] = r + r * Math.sin(Math.PI - (angel[key]*Math.PI/180));
            y[key] = r + r * Math.sin(Math.PI * (1/2 - (1 - (angel[key]/180))));
        } else {
             if (angel[key] < 90){
                x[key] = r + r * Math.sin(Math.PI * angel[key]/180);
                y[key] = r - r * Math.sin(Math.PI/2 - (angel[key]*Math.PI/180));
             } else {
            // in this place code are building half circle
                var ang = angel[key] - 180;
                x[key] = r * Math.sin(Math.PI * (1/2 - (ang/180)));
                y[key] = r * Math.sin(ang * Math.PI/180);
                }
            }
        angelSum += angel[key];
    }
        if ((angelSum > 90) && (angelSum <= 180)){
            if ((angel[key] >= 90) && (angel[key] <= 180)) {
                x[key] = r + r * Math.sin(Math.PI - (angel[key]*Math.PI/180));
                y[key] = r + r * Math.sin(Math.PI * (1/2 - (1 - (angel[key]/180))));
            } else {
                if (angel[key] < 90){
                    x[key] = r * Math.sin(Math.PI * (1/2 - (angel[key]/180)));
                    y[key] = r * Math.sin(angel[key]*Math.PI/180);
                } else {
                    // in this place code are building half circle
                    var ang = angel[key] - 180;
                    x[key] = r * Math.sin(Math.PI * (1/2 - (ang/180)));
                    y[key] = r * Math.sin(ang * Math.PI/180);
                }
            }
            angelSum += angel[key];
        }
        if ((angelSum > 180) && (angelSum <= 270)){
            if ((angel[key] >= 90) && (angel[key] <= 180)) {
                x[key] = r + r * Math.sin(Math.PI - (angel[key]*Math.PI/180));
                y[key] = r + r * Math.sin(Math.PI * (1/2 - (1 - (angel[key]/180))));
            } else {
                if (angel[key] < 90){
                    x[key] = r - r * Math.sin(Math.PI * (angel[key]/180 - 1));
                    y[key] = r * Math.sin(angel[key]*Math.PI/180);
                } else {
                    // in this place code are building half circle
                    var ang = angel[key] - 180;
                    x[key] = r * Math.sin(Math.PI * (1/2 - (ang/180)));
                    y[key] = r * Math.sin(ang * Math.PI/180);
                }
            }
            angelSum += angel[key];
        }
        if ((angelSum > 270) && (angelSum <= 360)){
            if ((angel[key] >= 90) && (angel[key] <= 180)) {
                x[key] = r + r * Math.sin(Math.PI - (angel[key]*Math.PI/180));
                y[key] = r + r * Math.sin(Math.PI * (1/2 - (1 - (angel[key]/180))));
            } else {
                if (angel[key] < 90){
                    x[key] = r * Math.sin(Math.PI * (1/2 - (angel[key]/180)));
                    y[key] = r * Math.sin(angel[key]*Math.PI/180);
                } else {
                    // in this place code are building half circle
                    var ang = angel[key] - 180;
                    x[key] = r * Math.sin(Math.PI * (1/2 - (ang/180)));
                    y[key] = r * Math.sin(ang * Math.PI/180);
                }
            }
            angelSum += angel[key];
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
        color += 100;


    }
    document.querySelector("#svg").innerHTML = path;
      //  <path d="M 0.5 0.5  L 0.5 0.1  A 0.4 0.4 0 0 1 0.9 0.5 z"  fill="rgba(100, 255, 255, 0.75)" />
}

calculatePie();

