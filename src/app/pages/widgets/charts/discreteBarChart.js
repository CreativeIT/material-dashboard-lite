'use strict';

(() => {

    var colors = [
        '#7726d3',
        '#ff5252',
        '#ffc107',
        '#00bcd4',
        '#51a8f9',
        '#7726d3',
        '#ff5252'
    ];

    var data = [{
        key: "Cumulative Return",
        values: [
            {
                "label" : "A" ,
                "value" : 22
            } ,
            {
                "label" : "B" ,
                "value" : 31
            } ,
            {
                "label" : "C" ,
                "value" : -5
            } ,
            {
                "label" : "D" ,
                "value" : 16
            } ,
            {
                "label" : "E" ,
                "value" : 19
            } ,
            {
                "label" : "F" ,
                "value" : 26
            } ,
            {
                "label" : "G" ,
                "value" : 9
            }
        ]
    }];


    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .yDomain([-10, 40])
            .yRange([150,-40])
            .staggerLabels(false)
            .showValues(true);

        d3.select('.discrete-bar-chart__container')
            .append('div')
            .append('svg')
            .datum(data)
            .transition().duration(1200)
            .call(chart);

        nv.utils.windowResize(chart.update);

        var legend = d3.select('.discrete-bar-chart__container')
            .append('div')
            .attr('class', 'legend')
            .selectAll('.legend__item')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'legend__item');

        legend.append('div')
            .attr('class', 'legend__mark pull-left')
            .style('background-color', d => {
                return ;//color(d.label);
            });

        legend.append('div')
            .attr('class', 'legend__text')
            .text(d => {
                return d.label;
            });

        return chart;
    });
})();


