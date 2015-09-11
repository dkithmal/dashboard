

var alldata = [];

function drow404RequestChart(key ,val){


    console.log("its on drow method");
    console.log(val.clientIpAddress+val.totalcount);
    alldata.push({name : val.clientIpAddress,value : val.totalcount});


    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "<strong>INFO : </strong> <span style='color:red'>" + d.name + ":"+d.value+"</span>";
        })


    //when new data comes remove existing svg bar chart
    var chart = d3.select("svg").remove();

    //var chart = d3.select(".chart")
    var chart = d3.select("#chart").append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    chart.call(tip);

    x.domain(alldata.map(function(d) { return d.name; }));
    y.domain([0, d3.max(alldata, function(d) { return d.value; })]);

    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    chart.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    chart.selectAll(".bar")
        .data(alldata)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.name); })
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .attr("width", x.rangeBand())
        .on('mouseover',tip.show)
        .on('mouseout',tip.hide);



};


function type(d) {
    d.value = +d.value; // coerce to number
    return d;
}

