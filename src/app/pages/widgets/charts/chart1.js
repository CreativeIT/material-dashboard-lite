'use strict';

(() => {
    let container = d3.select('.chart1__container');
    if (container[0][0]) {
        var colors = [
            '#7726d3',
            '#ff5252',
            '#ffc107',
            '#00bcd4',
            '#51a8f9'
        ];

        var data = [
            {
                'key': 'Chrome',
                'y': 42
            },
            {
                'key': 'Opera',
                'y': 13
            },
            {
                'key': 'Safari',
                'y': 14
            },
            {
                'key': 'Firefox',
                'y': 17
            },
            {
                'key': 'IE & Edge',
                'y': 16
            }
        ];
        var pieChart;

        nv.addGraph(() => {
            var innerRadius = 0.03,
                outerRadius = 0.02;

            pieChart = nv.models.pieChart()
                .x(d => {return d.key;})
                .y(d => {return d.y;})
                .showLabels(false)
                .donut(true)
                .growOnHover(true)
                .padAngle(.03)
                .margin({'left': -10, 'right': -10, 'top': -10, 'bottom': -10})
                .color(colors)
                .arcsRadius([{'inner': innerRadius, 'outer': outerRadius},
                    {'inner': innerRadius, 'outer': outerRadius},
                    {'inner': innerRadius, 'outer': outerRadius},
                    {'inner': innerRadius, 'outer': outerRadius},
                    {'inner': innerRadius, 'outer': outerRadius}
                ])
                .showLegend(false)
                //.title('0 hours')
                .titleOffset(10);

            pieChart.tooltip.enabled(false);

            container.append('div')
                .append('svg')
                .datum(data)
                .transition().duration(1200)
                .call(pieChart);

            var h = 0, i = 0.35;
            var timer = setInterval(animatePie, 70);

            function animatePie() {
                if (outerRadius < 1.02) {
                    pieChart.arcsRadius([{'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius}
                    ]).update();
                    outerRadius += i;
                    (i > 0.2)? i -= 0.05 : i;
                } else {
                    outerRadius = 1.02;
                    pieChart.arcsRadius([{'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius}
                    ])
                        .showLabels(true)
                        .labelType("percent")
                        .update();
                    clearInterval(timer);
                }
            }

            //d3.select('.nv-pie .nv-pie')
            //    .append('image')
            //    .attr('width', '30')
            //    .attr('height', '30')
            //    .attr('xlink:href', 'images/watch_white.svg')
            //    .attr('transform', 'translate(-15,-35)');

            var color = d3.scale.ordinal().range(colors);

            var legend = container.append('div')
                .attr('class', 'legend')
                .selectAll('.legend__item')
                .data(data)
                .enter()
                .append('div')
                .attr('class', 'legend__item');

            legend.append('div')
                .attr('class', 'legend__mark pull-left')
                .style('background-color', d => {
                    return color(d.key);
                });

            legend.append('div')
                .attr('class', 'legend__text')
                .text(d => {
                    return d.key;
                });

            return pieChart;
        });
    }

})();

