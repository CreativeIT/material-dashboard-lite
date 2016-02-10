{
    let graphs = [
        {
            values: [{x: 0, y: 0}],
            key: 'Awesome',
            color: 'rgb(80, 150, 215)'
        },
        {
            values: [{x: 0, y: 0}],
            key: 'Good',
            color: 'rgb(0, 188, 212)',
            fillOpacity: 0.00001,
            area: true
        },
        {
            values: [{x: 0, y: 0}],
            key: 'Fail',
            color: 'rgb(255, 82, 82)'
        }
    ];

    class GraphBackground {
        constructor(columns, color, margin) {
            this.columns = columns;
            this.color = color;
            this.margin = margin;
        }

        addSvgContainer() {
            this.svg = d3.select('.line-chart__container')
                .append('div')
                .append('svg');
        }

        getSvgSizes() {
            let svgWidth = getComputedStyle(this.svg[0][0]).width,
                svgHeight = getComputedStyle(this.svg[0][0]).height;
            this.svgWidth = svgWidth.slice(0, svgWidth.length - 2);
            this.svgHeight = svgHeight.slice(0, svgHeight.length - 2) - this.margin;
        }

        buildBackground() {
            this.addSvgContainer();
            this.getSvgSizes();

            let bars = [];
            for (let i = 0; i < this.columns; i++) {
                bars.push(this.svgHeight);
            }

            this.barsLayout = this.svg.append('g')
                .attr('class', 'bars')
                .attr('transform', 'translate(' + this.margin + ', 0)')
                .selectAll('rect')
                .data(bars)
                .enter()
                .append('rect');

            this._addAxisLabels();

            this.resize();
        }

        _addAxisLabels() {
            d3.selectAll('.line-chart__container svg .y-axis-label')
                .remove();
            d3.select('.line-chart__container svg')
                .append('text')
                .attr('class', 'y-axis-label')
                .attr('x', '-72')
                .attr('y', '12')
                .attr('transform', 'rotate(-90)')
                .text('REVENUE');
            d3.select('.line-chart__container svg')
                .append('text')
                .attr('class', 'x-axis-label')
                .text('TIME')
        }

        resize() {
            let availableBarWidth = (this.svgWidth - 2 * this.margin) / this.columns,
                barWidth = availableBarWidth / 2;
            this.barsLayout
                .attr('fill', this.color)
                .attr('y', this.margin)
                .attr('height', function (d, i) {
                    return d;
                })
                .transition().duration(this.durationResizeAnimation)
                .attr('width', barWidth)
                .attr('x', function (d, i) {
                    return i * availableBarWidth;
                });
            d3.select('.line-chart__container svg .x-axis-label')
                .transition().duration(this.durationResizeAnimation)
                .attr('x', this.svgWidth - this.margin - 30)
                .attr('y', this.svgHeight - (this.svgHeight) / 4 + this.margin + 14)
        }
    }

    class LineGraph extends GraphBackground {
        constructor(columns, color, margin, graphs) {
            super(columns, color, margin);
            this.graphs = graphs;
            this.max_X = 130;
            this.drawStep = 6; // It shows how many points will be drawn in one step
            this.durationResizeAnimation = 500;
        }

        drawChart () {
            this.buildBackground();
            this.buildLegend();
            this.tuneGraph();

            nv.addGraph(() => {
                this.svg.datum(this.graphs)
                    .transition().duration(0)
                    .call(this.lineChart);
                nv.utils.windowResize(this.graphResize.bind(this));
                nv.utils.windowResize(this.lineChart.update);
                return this.lineChart;
            });

            this.animateGraphs();
        }

        tuneGraph () {
            this.lineChart = nv.models.lineChart()
                .margin({top: this.margin, right: this.margin, bottom: 0, left: this.margin})
                .useInteractiveGuideline(true)
                .xDomain([0, 13.6])
                .yDomain([-1.01, 3])
                .showLegend(false)
                .showYAxis(true)
                .showXAxis(true)
                .pointSize(5);

            this.lineChart.tooltip.enabled(false);
            this.lineChart.interactiveLayer.tooltip.enabled(false);

            this.lineChart.xAxis
                .showMaxMin(false)
                .tickValues([0])
                .tickFormat(d3.format('c'));

            this.lineChart.yAxis
                .showMaxMin(false)
                .ticks(10)
                .tickFormat(d3.format('c'));
        }

        buildLegend () {
            let legend = d3.select(".line-chart__container")
                .append("div")
                .attr("class", "legend")
                .selectAll(".legend__item")
                .data(this.graphs)
                .enter()
                .append("div")
                .attr("class", "legend__item");

            legend.append("div")
                .attr("class", "legend__mark pull-left")
                .style("background-color", d => {
                    return d.color;
                });

            legend.append("div")
                .attr("class", "legend__text")
                .text(d => {
                    return d.key;
                });
        }

        graphResize () {
            this.getSvgSizes();
            this.resize();
        }

        animateGraphs () {
            let i = 1;
            this.timer = setInterval(() => {
                LineGraph.calcAllGraphs(i);
                this.drawNextStep(i);
                i++;
                this.checkEndOfAnimation(i);

            }, 15)
        }

        drawNextStep (i) {
            if (i % this.drawStep == 0 || i == this.max_X) {
                this.lineChart.update();
            }
        }

        checkEndOfAnimation (i) {
            if (i == this.max_X + 1) {
                this.lineChart.duration(this.durationResizeAnimation);
                this.graphs[1].fillOpacity = 0.11;
                this.lineChart.update();
                clearInterval(this.timer);
            }
        }

        static calcAllGraphs (i) {
            LineGraph.calcFirstGraph(i);
            LineGraph.calcSecondGraph(i);
            LineGraph.calcThirdGraph(i);
        }

        static calcFirstGraph (i) {
            const interval_1 = 28,
                interval_2 = 71,
                interval_3 = 110;
            let graphAwesome = graphs[0].values;

            if (i < interval_1) {
                graphAwesome.push({x: i / 10, y: (.0343 * i * i - .67 * i) / 14});
            } else {
                if (i < interval_2) {
                    graphAwesome.push({x: i / 10, y: -(i - 71) * (i - 71) / 1026 + 2.378});
                } else {
                    if (i < interval_3) {
                        graphAwesome.push({x: i / 10, y: -4 / (i - 43) + 2.53});
                    } else {
                        graphAwesome.push({x: i / 10, y: ((i - 114) * (i - 114) * (i - 114)) / 13000 + 2.476});
                    }
                }
            }
        }

        static calcSecondGraph (i) {
            const interval_1 = 30,
                interval_2 = 82;
            let graphGood = graphs[1].values;

            if (i < interval_1) {
                graphGood.push({x: i / 10, y: (.03255 * i * i - .96 * i) / 16});
            } else {
                if (i < interval_2) {
                    graphGood.push({x: i / 10, y: (-.01055 * (i - 80.3) * (i - 80.3) + 27) / 15});
                } else {
                    graphGood.push({x: i / 10, y: (((i / 2) - 45) * ((i / 2) - 45) * ((i / 2) - 45)) / 15000 + 1.805});
                }
            }
        }

        static calcThirdGraph (i) {
            const interval_1 = 31,
                interval_2 = 103;
            let graphFail = graphs[2].values;

            if (i < interval_1) {
                graphFail.push({x: i / 10, y: (.02255 * i * i - .91 * i) / 13});
            } else {
                if (i < interval_2) {
                    graphFail.push({x: i / 10, y: .82 * Math.sin((i - 45) / 21)});
                } else {
                    graphFail.push({x: i / 10, y: -(i - 130) * (i - 130) * (i - 130) / 64000});
                }
            }
        }

    }

    let myChart = new LineGraph(7, '#4a4a4a', 20, graphs);
    myChart.drawChart();
}