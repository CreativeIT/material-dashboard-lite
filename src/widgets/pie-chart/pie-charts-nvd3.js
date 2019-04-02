'use strict';

{
    const COLORS = {
        red: '#f44336',
        lightBlue: '#03a9f4',
        orange: '#ffc107',
        amber: '#ff9800',
        teal: '#00bcd4',
        purple: '#7726d3',
        green: '#00d45a',
        rowBgColor: '#4a4a4a',
    };

    document.addEventListener("DOMContentLoaded", () => {
//pie chart on index page
        let container = d3.select('.pie-chart__container');
        if (container[0][0]) {
            let colors = [
                COLORS.lightBlue,
                COLORS.red,
                COLORS.amber,
                COLORS.orange,
                COLORS.teal
            ];

            let data = [
                {
                    'key': 'Coding',
                    'y': 0,
                    'end': 9
                },
                {
                    'key': 'Eating',
                    'y': 0,
                    'end': 3
                },
                {
                    'key': 'Sleeping',
                    'y': 0,
                    'end': 3
                },
                {
                    'key': 'Meditation',
                    'y': 0,
                    'end': 3
                },
                {
                    'key': 'The fight against evil',
                    'y': 0,
                    'end': 6
                }
                ,
                {
                    'key': 'Pending',
                    'y': 23.9
                }
            ];

            nv.addGraph(() => {
                let innerRadius = 0.86,
                    outerRadius = 1.02;

                let pieChart = nv.models.pieChart()
                    .x(d => {
                        return d.key;
                    })
                    .y(d => {
                        return d.y;
                    })
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
                    .title('0 hours')
                    .titleOffset(10);

                pieChart.tooltip.enabled(true)
                    .hideDelay(0)
                    .headerEnabled(false)
                    .contentGenerator(d => {
                        if (d === null) {
                            return '';
                        }
                        d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
                        return d.data.y + ' hours';
                    });

                let container = d3.select('.pie-chart__container')
                    .append('div')
                    .append('svg')
                    .datum(data)
                    .transition().duration(1200)
                    .call(pieChart);

                let h = 0, i = 0;
                let timer = setInterval(animatePie, 70, data);

                function animatePie(data) {
                    if (i < data.length - 1) {
                        if (data[i].y < data[i].end) {
                            data[i].y++;
                            data[data.length - 1].y--;
                            pieChart.title((h + 1) + ' hours');
                            h++;
                        } else {
                            i++;
                        }
                    } else {
                        data.splice(data.length - 1, 1);
                        clearInterval(timer);
                        return;
                    }
                    if (container[0][0]) {
                        pieChart.update();
                    } else {
                        clearInterval(timer);
                    }
                }

                d3.select('.pie-chart__container .nv-pie .nv-pie')
                    .append('image')
                    .attr('width', '30')
                    .attr('height', '30')
                    .attr('xlink:href', 'images/watch_white.svg')
                    .attr('transform', 'translate(-15,-35)');

                let color = d3.scale.ordinal().range(colors);

                let legend = d3.select('.pie-chart__container')
                    .append('div')
                    .attr('class', 'legend')
                    .selectAll('.legend__item')
                    .data(data.slice(0, data.length - 1))
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

        //first pie chart on charts page
        let container1 = d3.select('.chart1__container');
        if (container1[0][0]) {
            let colors = [
                COLORS.purple,
                COLORS.red,
                COLORS.orange,
                COLORS.teal,
                COLORS.lightBlue
            ];

            let data = [
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

            nv.addGraph(() => {
                let innerRadius = 0.03,
                    outerRadius = 0.02;

                let pieChart = nv.models.pieChart()
                    .x(d => {
                        return d.key;
                    })
                    .y(d => {
                        return d.y;
                    })
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

                container1.append('div')
                    .append('svg')
                    .datum(data)
                    .transition().duration(1200)
                    .call(pieChart);

                let h = 0, i = 0.35;
                let timer = setInterval(animatePie, 70);

                function animatePie() {
                    if (outerRadius < 1.02) {
                        pieChart.arcsRadius([{'inner': innerRadius, 'outer': outerRadius},
                            {'inner': innerRadius, 'outer': outerRadius},
                            {'inner': innerRadius, 'outer': outerRadius},
                            {'inner': innerRadius, 'outer': outerRadius},
                            {'inner': innerRadius, 'outer': outerRadius}
                        ]).update();
                        outerRadius += i;
                        (i > 0.2) ? i -= 0.05 : i;
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

                let color = d3.scale.ordinal().range(colors);

                let legend = container1.append('div')
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

        //Second pie chart on charts page
        let container2 = d3.select('.chart2__container');
        if (container2[0][0]) {
            let colors = [
                COLORS.purple,
                COLORS.red,
                COLORS.orange,
                COLORS.teal,
                COLORS.lightBlue
            ];

            let data = [
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
                let innerRadius = 0.06,
                    outerRadius = 1.02;

                let pieChart = nv.models.pieChart()
                    .x(d => {
                        return d.key;
                    })
                    .y(d => {
                        return d.y;
                    })
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

                container2.append('div')
                    .append('svg')
                    .datum(data)
                    .transition().duration(1200)
                    .call(pieChart);

                let h = 0, i = 0.08;
                let sum = 0;
                data.forEach((item) => {
                    sum = sum + item.y;
                });

                let timer = setInterval(animatePie, 30, data);

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

                let color = d3.scale.ordinal().range(colors);

                let legend = container2.append('div')
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
    });
}


{

}

{

}

{

}
