/**
 * Created with JetBrains WebStorm.
 * User: Alex
 * Date: 17.9.15
 * Time: 7.26
 * To change this template use File | Settings | File Templates.
 */
'use strict'

function animationPath(pie, r, i) {
    var start, end;
    if ((r > 0.5) || (r < 0.4)) {
        start = end = 0;
        return;
    };

    x = calculateX(pie.angelStart, r);
    y = calculateY(pie.angelStart, r);
    start = 'M ' + x + ' ' + y;
    x = calculateX(pie.angelEnd, r);
    y = calculateY(pie.angelEnd, r);
    end = '0 0 1 ' + x + ' ' + y;
    paths[i].setAttribute('d', start + ' A '+ r +' '+ r +' '+ end + pie.endIn + ' A '+ rIn + ' ' + rIn + ' ' + pie.startIn );

}

var data = {books: 80, magazines: 120, newspapers: 30, posters:60, brochures:70};
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
    var deg = sum/360;
    var i = 0;
    var r = 0.4;
    var angelStart = 0;
    for (key in data) {
        pies[i] = {};
        pies[i].name = key;
        pies[i].radius = r;
        pies[i].angelStart = angelStart;
        pies[i].angelEnd = pies[i].angelStart + data[key]/deg;
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
var x = 0, y = 0;
var x1 = 0, y1 = 0;
var j = 0;
var stat = "";
i = 0;
sum = pies[i].angelEnd;
color = pies[i].color;

var marker = document.querySelectorAll(".demo-chart:last-child .marker");
var arrayLi = document.querySelectorAll(".demo-chart:last-child .legend li");
marker[i].style.background = 'rgba(55'  + ', ' + color +', 255, 0.75)';
arrayLi[i].innerHTML += pies[i].name;

var timerId = setInterval(animation, 10);

function animation() {


    if (j == 360) {
        clearInterval(timerId);
    };

    if (j > sum) {


        stat = stat + '<path id=\"path' + i +'\"  d=\"' + pies[i].start + ' A ' + r + ' ' + r + ' ' + pies[i].end + pies[i].endIn + ' A '+ rIn + ' ' + rIn + ' ' + pies[i].startIn + '\" ' +
            'fill=\"rgba(55'  +', ' + color +', 255, 0.75)\" onmouseenter=\"select(event)\" onmouseleave=\"select(event)\"/>';
        i++;
        start = 'L ' + x + ' ' + y + ' ';
        color = pies[i].color;
        marker[i].style.background = 'rgba(55'  + ', ' + color +', 255, 0.75)';
        arrayLi[i].innerHTML += pies[i].name;
        sum = sum + (pies[i].angelEnd - pies[i].angelStart);
    }

    x = calculateX(j, r);
    y = calculateY(j, r);
    x1 = calculateX(j, rIn);
    y1 = calculateY(j, rIn);

    percent = Math.round(100 * j/360);
    path = '<circle cx="0.5" cy="0.5" r="0.28" fill="white"></circle>' +
        '<text x="0.5" y="0.56" font-family="Roboto" font-size="0.2px" fill="#888" text-anchor="middle">'+ percent +'%</text>'+
        stat + '<path id=\"path' + i +'\" d=\"' + pies[i].start + ' A ' + r + ' ' + r + ' 0 0 1 ' + x + ' ' + y +
        ' L ' + x1 + ' ' + y1 + ' A ' + rIn + ' ' + rIn + ' ' + pies[i].startIn + '\" ' +
        'fill=\"rgba(55'  +', ' + color +', 255, 0.75)\" onmouseenter=\"select(event)\" onmouseleave=\"select(event)\"/>';



    document.querySelector("#svg4").innerHTML = path;
    j++; j++;j++; j++;
}

var str = "";
var i = 0;
var paths;
var idd;
var end;
var t = 5;
function getPath(event) {
    idd = event.target.id;
    paths = document.querySelectorAll("#" + idd + " path")
};


function select(event) {
    var id = event.target.id;
    if (isNaN(id)) {
        id = id.slice(4);
    };

    if (pies[id].radius == 0.4)   {
        str = paths[id].getAttribute('d');
        while (r < 0.51) {
            setTimeout(animationPath, t, pies[id], r, id);
            r = (r*100 + 1)/100;
            t += 5;
        };
        var text = Math.round(100*(pies[id].angelEnd - pies[id].angelStart)/360) + '%';
        document.querySelector('#'+ idd +" text").innerHTML = text;
        pies[id].radius = 0.5;
        t = 5;
        paths[id].setAttribute('stroke', '#802420');
        paths[id].setAttribute('stroke-width', '0.004');
    } else {
        while (r > 0.39) {
            setTimeout(animationPath, t, pies[id], r, id);
            r = (r*100 - 1)/100;
            t += 5;
        }
        document.querySelector('#'+ idd +" text").innerHTML = "100%";
        pies[id].radius = 0.4;
        t = 5;
        paths[id].setAttribute('stroke', 'none');
    };

}




function calculateX(angel, r) {
    var x;
    if (angel <=90){
        x = 0.5 + r * Math.sin(Math.PI * angel/180);
    }
    if ((angel > 90) && (angel <= 180)){
        x = 0.5 + r * Math.sin(Math.PI - (angel*Math.PI/180));
    }
    if ((angel > 180) && (angel <= 270)){
        x = 0.5 - r * Math.sin(Math.PI * (angel/180 - 1));
    }
    if ((angel > 270) && (angel <= 360)){
        x = 0.5 - r * Math.sin(2*Math.PI - (Math.PI/180)*angel);
    };
    return x;
}

function calculateY(angel, r) {
    var y;
    if (angel <=90){
        y = 0.5 - r * Math.sin(Math.PI/2 - (angel * Math.PI/180));
    }
    if ((angel > 90) && (angel <= 180)){
        y = 0.5 + r * Math.sin(Math.PI * (1/2 - (1 - (angel/180))));
    }
    if ((angel > 180) && (angel <= 270)){
        y = 0.5 + r * Math.sin((3 * Math.PI/2) - angel * Math.PI/180);
    }
    if ((angel > 270) && (angel <= 360)){
        y = 0.5 - r * Math.sin(Math.PI/2 - 2 * Math.PI + (Math.PI/180)*angel);
    };
    return y;
}

// Like-DisLike widget

var like = 35, dislike = 15;
var likeButton = document.querySelector('#likeButton');
var dislikeButton  = document.querySelector('#dislikeButton');

likeButton.addEventListener('click', function(){
    document.querySelector("#p1 > .progressbar").style.boxShadow = "0 0 10px #00ff00";
    setTimeout(function(){
        document.querySelector("#p1 > .progressbar").style.boxShadow = "0 0 0 #00ff00";
    }, 250);
    like += 5;
    document.querySelector('#p1').MaterialProgress.setProgress(like);
    setTimeout(function() {
        document.querySelector('#likeButton > .material-icons').style.marginTop = '0px';
    }, 200);
})

dislikeButton.addEventListener('click', function(){
    document.querySelector("#p2 > .progressbar").style.boxShadow = "0 0 10px red";

        setTimeout(function(){
            document.querySelector("#p2 > .progressbar").style.boxShadow = "0 0 0 red";
        }, 250);
    dislike += 5;
    document.querySelector('#p2').MaterialProgress.setProgress(dislike);
    setTimeout(function() {
        document.querySelector('#dislikeButton > .material-icons').style.marginTop = '0px';
    }, 200);
})

document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(like);
});

document.querySelector('#p2').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(dislike);
});



