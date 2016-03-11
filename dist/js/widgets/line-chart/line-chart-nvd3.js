'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

{
  (function () {
    var LineChart = (function () {
      function LineChart(columns, color, margin, data, nv) {
        _classCallCheck(this, LineChart);

        this.columns = columns;
        this.color = color;
        this.margin = margin;
        this.data = data;
        this.nv = nv;
        this.maxX = 130;
        this.drawStep = 6; // It shows how many points will be drawn in one step
        this.durationResizeAnimation = 500;
      }

      _createClass(LineChart, [{
        key: '_addSvgContainer',
        value: function _addSvgContainer() {
          this.svg = d3.select('.line-chart__container').append('div').append('svg');
        }
      }, {
        key: '_getSvgSizes',
        value: function _getSvgSizes() {
          var svgWidth = getComputedStyle(this.svg[0][0]).width,
              svgHeight = getComputedStyle(this.svg[0][0]).height;
          this.svgWidth = svgWidth.slice(0, svgWidth.length - 2);
          this.svgHeight = svgHeight.slice(0, svgHeight.length - 2) - this.margin;
        }
      }, {
        key: '_addAxisLabels',
        value: function _addAxisLabels() {
          d3.selectAll('.line-chart__container svg .y-axis-label').remove();
          d3.select('.line-chart__container svg').append('text').attr('class', 'y-axis-label').attr('x', '-72').attr('y', '12').attr('transform', 'rotate(-90)').text('REVENUE');
          d3.select('.line-chart__container svg').append('text').attr('class', 'x-axis-label').text('TIME');
        }
      }, {
        key: '_buildBackground',
        value: function _buildBackground() {
          this._addSvgContainer();
          this._getSvgSizes();

          var bars = [];
          for (var i = 0; i < this.columns; i++) {
            bars.push(this.svgHeight);
          }

          this.barsLayout = this.svg.append('g').attr('class', 'bars').attr('transform', 'translate(' + this.margin + ', 0)').selectAll('rect').data(bars).enter().append('rect');

          this._addAxisLabels();

          this._setBackgroundSizes();
        }
      }, {
        key: '_setBackgroundSizes',
        value: function _setBackgroundSizes() {
          var availableBarWidth = (this.svgWidth - 2 * this.margin) / this.columns,
              barWidth = availableBarWidth / 2;
          this.barsLayout.attr('fill', this.color).attr('y', this.margin).attr('height', function (d, i) {
            return d;
          }).transition().duration(this.durationResizeAnimation).attr('width', barWidth).attr('x', function (d, i) {
            return i * availableBarWidth;
          });
          d3.select('.line-chart__container svg .x-axis-label').transition().duration(this.durationResizeAnimation).attr('x', this.svgWidth - this.margin - 30).attr('y', this.svgHeight - this.svgHeight / 4 + this.margin + 14);
        }
      }, {
        key: 'drawChart',
        value: function drawChart() {
          this._buildBackground();
          this._buildLegend();
          this._buildNvGraph();
          this._animateGraphs();
        }
      }, {
        key: '_buildNvGraph',
        value: function _buildNvGraph() {
          var _this = this;

          this._tuneNvGraph();

          nv.addGraph(function () {
            _this.svg.datum(_this.data).transition().duration(0).call(_this.lineChart);
            nv.utils.windowResize(_this.resizeBackground.bind(_this));
            nv.utils.windowResize(_this.lineChart.update);
            return _this.lineChart;
          });
        }
      }, {
        key: '_tuneNvGraph',
        value: function _tuneNvGraph() {
          this.lineChart = nv.models.lineChart().margin({ top: this.margin, right: this.margin, bottom: 0, left: this.margin }).useInteractiveGuideline(true).xDomain([0, 13.6]).yDomain([-1.01, 3]).showLegend(false).showYAxis(true).showXAxis(true).pointSize(5);

          this.lineChart.tooltip.enabled(false);
          this.lineChart.interactiveLayer.tooltip.enabled(false);

          this.lineChart.xAxis.showMaxMin(false).tickValues([0]).tickFormat(d3.format('c'));

          this.lineChart.yAxis.showMaxMin(false).ticks(10).tickFormat(d3.format('c'));
        }
      }, {
        key: '_buildLegend',
        value: function _buildLegend() {
          var legend = d3.select('.line-chart__container').append('div').attr('class', 'legend').selectAll('.legend__item').data(this.data).enter().append('div').attr('class', 'legend__item');

          legend.append('div').attr('class', 'legend__mark pull-left').style('background-color', function (d) {
            return d.color;
          });

          legend.append('div').attr('class', 'legend__text').text(function (d) {
            return d.key;
          });
        }
      }, {
        key: 'resizeBackground',
        value: function resizeBackground() {
          this._getSvgSizes();
          this._setBackgroundSizes();
        }
      }, {
        key: '_animateGraphs',
        value: function _animateGraphs() {
          var _this2 = this;

          var i = 1;
          this.timer = setInterval(function () {
            _this2._calcAllGraphs(i);
            _this2._drawNextStep(i);
            i++;
            _this2._checkEndOfAnimation(i);
          }, 15);
        }
      }, {
        key: '_drawNextStep',
        value: function _drawNextStep(i) {
          if (i % this.drawStep == 0 || i == this.maxX) {
            this.lineChart.update();
          }
        }
      }, {
        key: '_checkEndOfAnimation',
        value: function _checkEndOfAnimation(i) {
          if (i == this.maxX + 1) {
            this.lineChart.duration(this.durationResizeAnimation);
            this.data[1].fillOpacity = 0.11;
            this.lineChart.update();
            clearInterval(this.timer);
          }
        }
      }, {
        key: '_calcAllGraphs',
        value: function _calcAllGraphs(i) {
          this._calcFirstGraph(i);
          this._calcSecondGraph(i);
          this._calcThirdGraph(i);
        }
      }, {
        key: '_calcFirstGraph',
        value: function _calcFirstGraph(i) {
          var INTERVAL_1 = 28,
              INTERVAL_2 = 71,
              INTERVAL_3 = 110;
          var graphAwesome = this.data[0].values;

          if (i < INTERVAL_1) {
            graphAwesome.push({ x: i / 10, y: (.0343 * i * i - .67 * i) / 14 });
          } else {
            if (i < INTERVAL_2) {
              graphAwesome.push({ x: i / 10, y: -(i - 71) * (i - 71) / 1026 + 2.378 });
            } else {
              if (i < INTERVAL_3) {
                graphAwesome.push({ x: i / 10, y: -4 / (i - 43) + 2.53 });
              } else {
                graphAwesome.push({ x: i / 10, y: (i - 114) * (i - 114) * (i - 114) / 13000 + 2.476 });
              }
            }
          }
        }
      }, {
        key: '_calcSecondGraph',
        value: function _calcSecondGraph(i) {
          var INTERVAL_1 = 30,
              INTERVAL_2 = 82;
          var graphGood = this.data[1].values;

          if (i < INTERVAL_1) {
            graphGood.push({ x: i / 10, y: (.03255 * i * i - .96 * i) / 16 });
          } else {
            if (i < INTERVAL_2) {
              graphGood.push({ x: i / 10, y: (-.01055 * (i - 80.3) * (i - 80.3) + 27) / 15 });
            } else {
              graphGood.push({ x: i / 10, y: (i / 2 - 45) * (i / 2 - 45) * (i / 2 - 45) / 15000 + 1.805 });
            }
          }
        }
      }, {
        key: '_calcThirdGraph',
        value: function _calcThirdGraph(i) {
          var INTERVAL_1 = 31,
              INTERVAL_2 = 103;
          var graphFail = this.data[2].values;

          if (i < INTERVAL_1) {
            graphFail.push({ x: i / 10, y: (.02255 * i * i - .91 * i) / 13 });
          } else {
            if (i < INTERVAL_2) {
              graphFail.push({ x: i / 10, y: .82 * Math.sin((i - 45) / 21) });
            } else {
              graphFail.push({ x: i / 10, y: -(i - 130) * (i - 130) * (i - 130) / 64000 });
            }
          }
        }
      }]);

      return LineChart;
    })();

    var data = [{
      values: [{ x: 0, y: 0 }],
      key: 'Awesome',
      color: 'rgb(80, 150, 215)'
    }, {
      values: [{ x: 0, y: 0 }],
      key: 'Good',
      color: 'rgb(0, 188, 212)',
      fillOpacity: 0.00001,
      area: true
    }, {
      values: [{ x: 0, y: 0 }],
      key: 'Fail',
      color: 'rgb(255, 82, 82)'
    }];

    var lineChart = new LineChart(7, '#4a4a4a', 20, data, nv);
    lineChart.drawChart();
  })();
}