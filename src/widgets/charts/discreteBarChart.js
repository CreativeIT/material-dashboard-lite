'use strict';

{
    document.addEventListener("DOMContentLoaded", () => {
        let container = d3.select('.discrete-bar-chart__container');

        if (container[0][0]) {
            let colors = [
                '#7726d3',
                '#ff5252',
                '#ffc107',
                '#00bcd4',
                '#00d45a',
                '#51a8f9',
                '#ff1bb9'
            ];
            let data = [{
                key: "Cumulative Return",
                values: [
                    {
                        "label": "Option 1",
                        "value": 22
                    },
                    {
                        "label": "Option 2",
                        "value": 31
                    },
                    {
                        "label": "Option 3",
                        "value": -5
                    },
                    {
                        "label": "Option 4",
                        "value": 16
                    },
                    {
                        "label": "Option 5",
                        "value": 19
                    },
                    {
                        "label": "Option 6",
                        "value": 26
                    },
                    {
                        "label": "Option 7",
                        "value": 9
                    }
                ]
            }];
            nv.addGraph(function () {
                let chart = nv.models.discreteBarChart()
                    .x(function (d) {
                        return d.label
                    })
                    .y(function (d) {
                        return d.value
                    })
                    .yDomain([-12, 37])
                    .color(colors)
                    .margin({"left": 40, "right": 30, "top": 10, "bottom": 10})
                    .showValues(true)
                    .showLegend(false)
                    .rectClass('bar');

                chart.tooltip.enabled(true)
                    .hideDelay(0)
                    .headerEnabled(false)
                    .contentGenerator(d => {
                        if (d === null) {
                            return '';
                        }
                        d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
                        return d.data.label;
                    });

                chart.yAxis
                    .showMaxMin(false)
                    .ticks(10)
                ;

                container.append('svg')
                    .datum(data)
                    .transition().duration(1200)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                let color = d3.scale.ordinal().range(colors);
                let legend = container.append('div')
                    .attr('class', 'legend')
                    .selectAll('.legend__item')
                    .data(data[0].values)
                    .enter()
                    .append('div')
                    .attr('class', 'legend__item');

                legend.append('div')
                    .attr('class', 'legend__mark pull-left')
                    .style('background-color', d => {
                        return color(d.label);
                    });

                legend.append('div')
                    .attr('class', 'legend__text')
                    .text(d => {
                        return d.label;
                    });

                return chart;
            });
        }
    });
}



