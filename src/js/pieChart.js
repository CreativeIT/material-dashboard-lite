/**
 * Created with JetBrains WebStorm.
 * User: Alex
 * Date: 17.9.15
 * Time: 7.26
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var data = { books: 80, magazines: 120, newspapers: 30, posters: 60, brochures: 70 };
var pies = [];
var sum = 0;
var r = 0.4;
var rIn = 0.34;
var path = '';
var color = 0;
var center = "M 0.5 0.5";
var start = "L 0.5 0.1";

function calculatePie() {

    for (var key in data) {
        sum += data[key];
    }
    var deg = sum / 360;
    var i = 0;
    var r = 0.4;
    var angelStart = 0;
    for (key in data) {
        pies[i] = {};
        pies[i].name = key;
        pies[i].radius = r;
        pies[i].angelStart = angelStart;
        pies[i].angelEnd = pies[i].angelStart + data[key] / deg;
        angelStart = pies[i].angelEnd;

        x = calculateX(pies[i].angelStart, r);
        y = calculateY(pies[i].angelStart, r);
        pies[i].start = 'M ' + x + ' ' + y;

        x = calculateX(pies[i].angelEnd, r);
        y = calculateY(pies[i].angelEnd, r);
        pies[i].end = '0 0 1 ' + x + ' ' + y;

        x = calculateX(pies[i].angelEnd, rIn);
        y = calculateY(pies[i].angelEnd, rIn);
        pies[i].endIn = ' L ' + x + ' ' + y;

        x = calculateX(pies[i].angelStart, rIn);
        y = calculateY(pies[i].angelStart, rIn);
        pies[i].startIn = '0 0 0 ' + x + ' ' + y + ' z';

        pies[i].color = color;
        color += 60;
        i++;
    };
};
calculatePie();
var percent = 0;
var x = 0,
    y = 0;
var x1 = 0,
    y1 = 0;
var j = 0;
var stat = "";
i = 0;
sum = pies[i].angelEnd;
color = pies[i].color;

var trandingDivs = document.querySelectorAll(".tranding div");
var marker = document.querySelectorAll(".demo-chart:last-child .marker");
var arrayLi = document.querySelectorAll(".demo-chart:last-child .legend li");
marker[i].style.background = 'rgba(55' + ', ' + color + ', 255, 0.75)';
arrayLi[i].innerHTML += pies[i].name;
var timerId;

window.onload = function () {
    timerId = setInterval(animation, 30);
};

function animation() {

    if (j >= 370) {

        clearInterval(timerId);
        paths = document.querySelectorAll("#svg4 path");
        for (i = 0; i < paths.length; i++) {
            paths[i].addEventListener('mouseenter', select);
            paths[i].addEventListener('mouseleave', select);
            arrayLi[i].addEventListener('mouseenter', select);
            arrayLi[i].addEventListener('mouseleave', select);
        };
        setTimeout(function () {
            document.querySelector("#p2 > .progressbar").style.boxShadow = "0 0 0 red";
            document.querySelector("#p1 > .progressbar").style.boxShadow = "0 0 0 #00ff00";
        }, 150);
        return;
    };

    if (j > sum) {
        stat = stat + '<path id=\"path' + i + '\"  d=\"' + pies[i].start + ' A ' + r + ' ' + r + ' ' + pies[i].end + pies[i].endIn + ' A ' + rIn + ' ' + rIn + ' ' + pies[i].startIn + '\" ' + 'fill=\"rgba(55' + ', ' + color + ', 255, 0.75)\" />';
        i++;
        start = 'L ' + x + ' ' + y + ' ';
        color = pies[i].color;
        marker[i].style.background = 'rgba(55' + ', ' + color + ', 255, 0.75)';
        arrayLi[i].innerHTML += pies[i].name;
        sum = sum + (pies[i].angelEnd - pies[i].angelStart);
    }

    x = calculateX(j, r);
    y = calculateY(j, r);
    x1 = calculateX(j, rIn);
    y1 = calculateY(j, rIn);

    percent = Math.round(100 * j / 360);
    path = '<circle cx="0.5" cy="0.5" r="0.28" fill="white"></circle>' + '<text x="0.5" y="0.56" font-family="Roboto" font-size="0.2px" fill="#888" text-anchor="middle">' + percent + '%</text>' + stat + '<path id=\"path' + i + '\" d=\"' + pies[i].start + ' A ' + r + ' ' + r + ' 0 0 1 ' + x + ' ' + y + ' L ' + x1 + ' ' + y1 + ' A ' + rIn + ' ' + rIn + ' ' + pies[i].startIn + '\" ' + 'fill=\"rgba(55' + ', ' + color + ', 255, 0.75)\" />';

    // animation tranding widget numbers
    document.querySelector("#svg4").innerHTML = path;
    for (var k = 0; k < trandingDivs.length; k++) {
        trandingDivs[k].innerHTML = Math.round(Math.random() * 20 + 1) + "%";
    }
    //---------

    // animation likeDislike widget bars

    if (j % 3 == 0) {
        document.querySelector("#p1 > .progressbar").style.boxShadow = "0 0 10px #00ff00";
        document.querySelector("#p2 > .progressbar").style.boxShadow = "0 0 10px red";
        document.querySelector('#p1').MaterialProgress.setProgress(like);
        document.querySelector('#p2').MaterialProgress.setProgress(dislike);
        like += 2.5;
        dislike += 1;
    }
    //---------

    j += 10;
}

var str = "";
var i = 0;
var paths;
var end;
var t = 5;

function select(event) {
    //alert(event.target.id);
    var id = event.target.id;
    if (isNaN(id)) {
        id = id.slice(4);
    };

    if (pies[id].radius == 0.4) {
        str = paths[id].getAttribute('d');
        while (r < 0.51) {
            setTimeout(animationPath, t, pies[id], r, id);
            r = (r * 100 + 1) / 100;
            t += 5;
        };
        var text = Math.round(100 * (pies[id].angelEnd - pies[id].angelStart) / 360) + '%';
        document.querySelector("#svg4 text").innerHTML = text;
        pies[id].radius = 0.5;
        t = 5;
        paths[id].setAttribute('stroke', '#802420');
        paths[id].setAttribute('stroke-width', '0.004');
    } else {
        while (r > 0.39) {
            setTimeout(animationPath, t, pies[id], r, id);
            r = (r * 100 - 1) / 100;
            t += 5;
        }
        document.querySelector("#svg4 text").innerHTML = "100%";
        pies[id].radius = 0.4;
        t = 5;
        paths[id].setAttribute('stroke', 'none');
    };
};

function animationPath(pie, r, i) {
    var start, end;
    if (r > 0.5 || r < 0.4) {
        start = end = 0;
        return;
    };

    x = calculateX(pie.angelStart, r);
    y = calculateY(pie.angelStart, r);
    start = 'M ' + x + ' ' + y;
    x = calculateX(pie.angelEnd, r);
    y = calculateY(pie.angelEnd, r);
    end = '0 0 1 ' + x + ' ' + y;
    paths[i].setAttribute('d', start + ' A ' + r + ' ' + r + ' ' + end + pie.endIn + ' A ' + rIn + ' ' + rIn + ' ' + pie.startIn);
};

function calculateX(angel, r) {
    var x;
    if (angel <= 90) {
        x = 0.5 + r * Math.sin(Math.PI * angel / 180);
    }
    if (angel > 90 && angel <= 180) {
        x = 0.5 + r * Math.sin(Math.PI - angel * Math.PI / 180);
    }
    if (angel > 180 && angel <= 270) {
        x = 0.5 - r * Math.sin(Math.PI * (angel / 180 - 1));
    }
    if (angel > 270 && angel <= 360) {
        x = 0.5 - r * Math.sin(2 * Math.PI - Math.PI / 180 * angel);
    };
    return x;
}

function calculateY(angel, r) {
    var y;
    if (angel <= 90) {
        y = 0.5 - r * Math.sin(Math.PI / 2 - angel * Math.PI / 180);
    }
    if (angel > 90 && angel <= 180) {
        y = 0.5 + r * Math.sin(Math.PI * (1 / 2 - (1 - angel / 180)));
    }
    if (angel > 180 && angel <= 270) {
        y = 0.5 + r * Math.sin(3 * Math.PI / 2 - angel * Math.PI / 180);
    }
    if (angel > 270 && angel <= 360) {
        y = 0.5 - r * Math.sin(Math.PI / 2 - 2 * Math.PI + Math.PI / 180 * angel);
    };
    return y;
}

// Like-DisLike widget

var like = 1,
    dislike = 1;
var likeButton = document.querySelector('#likeButton');
var dislikeButton = document.querySelector('#dislikeButton');
var likeTime = Math.round(90 / 35),
    dislikeTime = Math.round(90 / 15);

likeButton.addEventListener('click', function () {
    document.querySelector('#likeButton > .material-icons').style.marginTop = '-4px';
    document.querySelector("#p1 > .progressbar").style.boxShadow = "0 0 10px #00ff00";
    setTimeout(function () {
        document.querySelector("#p1 > .progressbar").style.boxShadow = "0 0 0 #00ff00";
    }, 250);
    like += 5;
    document.querySelector('#p1').MaterialProgress.setProgress(like);
    setTimeout(function () {
        document.querySelector('#likeButton > .material-icons').style.marginTop = '0px';
    }, 200);
});

dislikeButton.addEventListener('click', function () {
    document.querySelector('#dislikeButton > .material-icons').style.marginTop = '4px';
    document.querySelector("#p2 > .progressbar").style.boxShadow = "0 0 10px red";

    setTimeout(function () {
        document.querySelector("#p2 > .progressbar").style.boxShadow = "0 0 0 red";
    }, 250);
    dislike += 5;
    document.querySelector('#p2').MaterialProgress.setProgress(dislike);
    setTimeout(function () {
        document.querySelector('#dislikeButton > .material-icons').style.marginTop = '0px';
    }, 200);
});

// google grafic widget

google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([['Year', 'Sales', 'Expense'], ['Jan.14', 1, 5], ['Feb', 3, 4], ['Mar', 6, 3], ['Apr.14', 4, 2], ['May', 4, 3], ['Jun', 6, 1], ['Jul.14', 3, 2], ['Aug', 2, 5], ['Sep', 4, 7], ['Oct.14', 3, 8], ['Nov', 4, 5], ['Dec', 6, 4], ['Jan.15', 5, 3], ['Feb', 3, 4], ['Mar', 6, 2], ['Apr.15', 1, 1], ['May', 2, 3], ['Jun', 3, 1], ['Jul.15', 5, 2], ['Aug', 6, 4], ['Sep', 7, 5], ['Oct.15', 5, 7], ['Nov', 4, 3], ['Dec', 9, 6], ['Jun.16', 8, 8]]);

    var options = {
        chartArea: { left: '4%', right: 50, width: '93%' },
        forceIFrame: false,
        legend: { position: 'in', maxLines: 3 },
        title: 'Company Performance',
        hAxis: { title: 'Months', titleTextStyle: { color: '#333' }, showTextEvery: 4 },
        vAxis: { minValue: 0 },
        animation: { "startup": true,
            "duration": 1500,
            "easing": 'out'
        },
        isStacked: 'absolute',

        lineWidth: 1
        //width: 500
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};

// google pie-chars widget

google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChartPie);
function drawChartPie() {
    var data = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]]);

    var options = {
        title: 'My Daily Activities',
        chartArea: { left: 20, top: 20, width: '100%', height: '80%' },
        pieHole: 0.83,
        height: 150,
        pieSliceText: 'none',
        tooltip: { isHtml: true },
        legend: { position: 'right' }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
};

// table widget

document.querySelector('#p3').addEventListener('mdl-componentupgraded', function () {
    this.MaterialProgress.setProgress(33);
    this.MaterialProgress.setBuffer(77);
});

document.querySelector('#p4').addEventListener('mdl-componentupgraded', function () {
    document.querySelector('#p4 > .progressbar').style.backgroundColor = "red";
    this.MaterialProgress.setProgress(45);
    this.MaterialProgress.setBuffer(77);
});

document.querySelector('#p5').addEventListener('mdl-componentupgraded', function () {
    document.querySelector('#p5 > .progressbar').style.backgroundColor = "#F00098";
    this.MaterialProgress.setProgress(85);
    this.MaterialProgress.setBuffer(87);
});