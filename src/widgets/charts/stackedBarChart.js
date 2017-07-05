'use strict';

{
    document.addEventListener("DOMContentLoaded", () => {
        let container = d3.select('.stacked-bar-chart__container');

        if (container[0][0]) {

            let testData = (k) => {
                let data = [];
                for (let i = 65; i <= 90; i++) {
                    data.push(
                        {
                            x: String.fromCharCode(i),
                            y: Math.round(((Math.random() * 0.15 + 1.15) * (200 - 2 * i) * k) * 1000 / i)
                        }
                    )
                }
                k += 0.2;
                return data;
            };

            let data = [
                {
                    "key": "Book1",
                    "color": "#00bcd4",
                    "values": testData(1.2)//[{x: 'A', y: 10}, {x: 'B', y: 40}, {x: 'C', y: 15}]
                },
                {
                    "key": "Book2",
                    "color": "#ffc107",
                    "values": testData(1)//[{x: 'A', y: 20}, {x: 'B', y: 30}, {x: 'C', y: 15}]
                },
                {
                    "key": "Book3",
                    "color": "#ff5252",
                    "values": testData(1.1)//[{x: 'A', y: 20}, {x: 'B', y: 30}, {x: 'C', y: 15}]
                }
            ];

            nv.addGraph(function () {
                let chart = nv.models.multiBarChart()
                        .margin({top: 60, right: 20, bottom: 22, left: 50})
                        .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
                        .rotateLabels(0)      //Angle to rotate x-axis labels.
                        .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                        .groupSpacing(0.3)    //Distance between each group of bars.
                        .stacked(true)
                    ;

                chart.xAxis
                    .showMaxMin(false)
                    .tickSize(10)
                    .ticks(10);

                chart.legend
                    .margin({top: 2, bottom: 10});

                chart.controls
                    .margin({top: 2, right: 0, bottom: 10, left: -18})
                    .color(["#FF0000", "#00FF00"]);

                chart.yAxis
                    .showMaxMin(false)
                    .tickFormat(d3.format(',f'));

                chart.tooltip
                    .contentGenerator(d => {
                        if (d === null) {
                            return '';
                        }
                        d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
                        if (d.hasOwnProperty('point')) {
                            return d3.time.format('%x')(new Date(d.value)) + '<br>Price: $' + d.series[0].value;
                        } else {
                            return d.series[0].key + '<br>' + d.value + '<br>' + d.series[0].value;
                        }

                    });

                container.append('svg')
                    .datum(data)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });

        }
    });
}
