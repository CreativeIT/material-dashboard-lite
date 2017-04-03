'use strict';

(() => {
    let container = d3.select('.chart2__container');
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
                'key': 'United States',
                'y': 31
            },
            {
                'key': 'Belarus',
                'y': 26
            },
            {
                'key': 'Italy',
                'y': 18
            },
            {
                'key': 'France',
                'y': 15
            },
            {
                'key': 'Other',
                'y': 10
            }
        ];

        nv.addGraph(() => {
            var innerRadius = 0.06,
                outerRadius = 1.02;

            var pieChart = nv.models.pieChart()
                .x(d => {return d.key;})
                .y(d => {return d.y;})
                .showLabels(false)
                .donut(true)
                .growOnHover(true)
                .padAngle(.04)
                .cornerRadius(0)
                .margin({'left': -10, 'right': -10, 'top': -10, 'bottom': -10})
                .color(colors)
                .arcsRadius([{'inner': innerRadius, 'outer': outerRadius},
                    {'inner': innerRadius, 'outer': outerRadius},
                    {'inner': innerRadius, 'outer': outerRadius},
                    {'inner': innerRadius, 'outer': outerRadius},
                    {'inner': innerRadius, 'outer': outerRadius}
                ])
                .showLegend(false)
                .title('0%');

            pieChart.tooltip.enabled(true)
                .hideDelay(0)
                .headerEnabled(false)
                .contentGenerator(d => {
                    if (d === null) {
                        return '';
                    }
                    d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
                    return d.data.y + '%';
                });

            container.append('div')
                .append('svg')
                .datum(data)
                .transition().duration(1200)
                .call(pieChart);

            var h = 0, i = 0.08;
            var sum = 0;
            data.forEach((item) => {
                sum = sum + item.y;
            });

            var timer = setInterval(animatePie, 30, data);

            function animatePie() {
                if (innerRadius < 0.86) {
                    pieChart.arcsRadius([{'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius}
                    ])
                        .title(h + '%')
                        .update();
                    innerRadius += i;
                    h += 10;
                } else {
                    innerRadius = 0.86;
                    pieChart.arcsRadius([{'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius},
                        {'inner': innerRadius, 'outer': outerRadius}
                    ])
                        .update();
                    clearInterval(timer);
                }
            }

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

