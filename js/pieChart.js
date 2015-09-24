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
var paths;
var idd;
function getPath(event) {
    idd = event.target.id;
    paths = document.querySelectorAll("#" + idd + " path")
};


function select(event) {
    var id = event.target.id;

    var elem = document.querySelector("#" + id + "> .marker");
    var color = window.getComputedStyle(elem).backgroundColor;
    for (i = 0; i < path.length; i++) {
        if ((paths[i].getAttribute('fill')).slice(0,15) === (color.slice(0,15))) {
            str = paths[i].getAttribute('d');
            paths[i].setAttribute('d', '' + center + ' ' + pies[i].start + ' A 0.5 0.5 0 0 1 '+ pies[i].x +' '+ pies[i].y +' z');
            var text = Math.round(100*pies[i].angel/360) + '%';
            document.querySelector('#'+ idd +" text").innerHTML = text;
            break;
        }
    }
}

function unSelect(event) {
    paths[i].setAttribute('d', str);
    paths[i].setAttribute('stroke', "none");
    document.querySelector('#'+ idd +" text").innerHTML = "100%";
    //document.querySelector("svg > text").innerHTML = "100%";
}

var data = {books: 60, magazines: 100, newspapers: 100, posters:60, brochures: 40};
var pies = {};
var sum = 0;
var r = 0.4;
var path = '';
var color = 0;
var center = "M 0.5 0.5 ";
var start = "L 0.5 0.1 ";

function calculatePie() {

    for (var key in data) {
        sum += data[key];
}
    var deg = sum/360;
    var angelSum = 0;
    var i = 0;
    var start2 = "L 0.5 0 ";
// to do: building when angel > 180
//        animation building                        !!!!!!!!!!!!!!!!!!!!!!!!!!
//        hover

    for (key in data) {
        pies[i] = {};
        pies[i].angel = data[key]/deg;
        angelSum += pies[i].angel;
        pies[i].name = key;
        if (angelSum <=90){
            pies[i].x = 0.5 + 0.5 * Math.sin(Math.PI * angelSum/180);
            pies[i].y = 0.5 - 0.5 * Math.sin(Math.PI/2 - (angelSum * Math.PI/180));
            pies[i].start = start2;
            start2 = 'L ' + pies[i].x + ' ' + pies[i].y + ' ';
        };
        if ((angelSum > 90) && (angelSum <= 180)){
            pies[i].x = 0.5 + 0.5 * Math.sin(Math.PI - (angelSum*Math.PI/180));
            pies[i].y = 0.5 + 0.5 * Math.sin(Math.PI * (1/2 - (1 - (angelSum/180))));
            pies[i].start = start2;
            start2 = 'L ' + pies[i].x + ' ' + pies[i].y + ' ';
        };
        if ((angelSum > 180) && (angelSum <= 270)){
            pies[i].x = 0.5 - 0.5 * Math.sin(Math.PI * (angelSum/180 - 1));
            pies[i].y = 0.5 + 0.5 * Math.sin((3 * Math.PI/2) - angelSum * Math.PI/180);
            pies[i].start = start2;
            start2 = 'L ' + pies[i].x + ' ' + pies[i].y + ' ';
        };
        if ((angelSum > 270) && (angelSum <= 360)){
            pies[i].x = 0.5 - 0.5 * Math.sin(2*Math.PI - (Math.PI/180)*angelSum);
            pies[i].y = 0.5 - 0.5 * Math.sin(Math.PI/2 - 2 * Math.PI + (Math.PI/180)*angelSum);
            pies[i].start = start2;
            start2 = 'L ' + pies[i].x + ' ' + pies[i].y + ' ';
        };
        pies[i].color = color;
        color += 60;
        i++;
    };

};
calculatePie();

var x = 0, y = 0;
var j = 0;
var stat = "";
i = 0;
sum = pies[i].angel;
color = pies[i].color;

var marker = document.querySelectorAll(".demo-chart:last-child .marker");
var arrayLi = document.querySelectorAll(".demo-chart:last-child .legend li");
marker[i].style.background = 'rgba(55'  + ', ' + color +', 255, 0.75)';
arrayLi[i].innerHTML += pies[i].name;

var timerId = setInterval(animation, 3);

function animation() {
    var percent = 0;

    if (j == 360) {
        clearInterval(timerId);
    };

    if (j > sum) {
        i++;

        stat = stat + '<path d=\"' + center + start + 'A ' + r +' '+ r +' 0 0 1 ' + x + ' ' + y + ' z\" ' +
            'fill=\"rgba(55'  +', ' + color +', 255, 0.75)\" />';

        start = 'L ' + x + ' ' + y + ' ';
        color = pies[i].color;
        marker[i].style.background = 'rgba(55'  + ', ' + color +', 255, 0.75)';
        arrayLi[i].innerHTML += pies[i].name;
        sum += pies[i].angel
    }

    if (j <=90){
        x = 0.5 + r * Math.sin(Math.PI * j/180);
        y = 0.5 - r * Math.sin(Math.PI/2 - (j * Math.PI/180));
    }
    if ((j > 90) && (j <= 180)){
        x = 0.5 + r * Math.sin(Math.PI - (j*Math.PI/180));
        y = 0.5 + r * Math.sin(Math.PI * (1/2 - (1 - (j/180))));
    }
    if ((j > 180) && (j <= 270)){
        x = 0.5 - r * Math.sin(Math.PI * (j/180 - 1));
        y = 0.5 + r * Math.sin((3 * Math.PI/2) - j * Math.PI/180);

    }
    if ((j > 270) && (j <= 360)){
        x = 0.5 - r * Math.sin(2*Math.PI - (Math.PI/180)*j);
        y = 0.5 - r * Math.sin(Math.PI/2 - 2 * Math.PI + (Math.PI/180)*j);

    };
    percent = Math.round(100 * j/360);
    path =stat + '<path d=\"' + center + start + 'A ' + r +' '+ r +' 0 0 1 ' + x + ' ' + y + ' z\" ' +
        'fill=\"rgba(55'  +', ' + color +', 255, 0.75)\" />';

    path = path + '<circle cx="0.5" cy="0.5" r="0.28" fill="white"></circle>' +
        '<text x="0.5" y="0.47" font-family="Roboto" font-size="0.2" fill="#888" text-anchor="middle" dy="0.1">'+ percent +'%</text>';
    document.querySelector("#svg1").innerHTML = path;
    document.querySelector("#svg2").innerHTML = path;
    document.querySelector("#svg3").innerHTML = path;
    document.querySelector("#svg4").innerHTML = path;
    j++; j++;
}


//var timerId = setInterval( animation(), 1500);
