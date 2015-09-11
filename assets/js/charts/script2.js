//---------------------nadeesha-----------------------
var data = [{name : "192.168.1.4", value :10000},{name : "192.168.1.5", value : 15000}];

for (i = 0; i < 6; i++) {

var address2 = 8080 + (Math.random()*10)%5;
var count22 = 5000 + Math.random() * 25000;
data.push({name : address2, value : count2});
drowChart2();
drowpie();

    i++;
	
	if (count22 > 25000) {
   
	
	drowAlertChart2('www.google.com','admin account','30000 data','5 accounts');
	
}

	
}
//var counter = 0;
//window.setInterval("refreshDiv()", 1000);
  //          function refreshDiv(){
                //counter = counter + 1;
    //            document.getElementById("chart2").innerHTML; 
	//			window.location.reload();
	//		}


//----------------------------nadeesha end--------------------------------

function drowChart2(){

    //var data = [{name : a, value :10},{name : b, value : 5}];
   //var data = [{name : "192.168.1.1", value :0},{name : "192.168.1.2", value : 0}];

    var index=0;

    while(true)
    {
        console.log("debug");
        if(sessionStorage.key(index)!=null)
        {
            console.log(sessionStorage.key(index)+ sessionStorage.getItem(sessionStorage.key(index)).split(',').length+"session data");
            //data.push({name : sessionStorage.key(index), value : sessionStorage.getItem(sessionStorage.key(index)).split(',').length});

            index++;

        }
        else
        {
            break;
        }

    }




    var margin = {top: 20, right: 30, bottom: 30, left: 60},
        width = 495 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg2.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg2.axis()
        .scale(y)
        .orient("left");


    //when new data comes remove existing svg bar chart
    var chart2 = d3.select("svg2").remove();

    //var chart = d3.select(".chart2")
    var chart2 = d3.select("#chart2").append('svg2')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    x.domain(data.map(function(d) { return d.name; }));
    y.domain([0, d3.max(data, function(d) { return d.value; })]);

    chart2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    chart2.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    chart2.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.name); })
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .attr("width", x.rangeBand())
        .on('mouseover', function(d){

            d3.selectAll('p').remove();

            d3.select(this)
                .style('opacity',.5);
				
			document.getElementById('info').style.backgroundColor = "lightblue";
			document.getElementById('info').style.border="3px solid gray"; 	
			document.getElementById('info').style.borderRadius="5px"; 
			document.getElementById('info').style.paddingLeft="20px";
			document.getElementById('info').style.paddingBottom="5px";
			document.getElementById('info').style.paddingTop="5px";
			document.getElementById('info').style.zIndex="10";
			document.getElementById('info').style.position="absolute";
			document.getElementById('info').style.marginTop="20%";
			document.getElementById('info').style.marginLeft="50px";

            //var split=sessionStorage.getItem(d.name).split(',');

         //for(var x=0;x<sessionStorage.getItem(d.name).split(',').length;x++)
            //{
              // d3.select("#info")
                //    .append('p')
                  //  .text(split[x]);

            //}
			 //nadeesha   
			 
			d3.select("#info")
                    .append('p')
                    .text("number of counts : "+count22);
			
			d3.select(this)
					.style("background-color","lightblue")
					.append("div")
					.style("position", "absolute")
					.style("z-index", "10")
					.style("visibility", "hidden")
					.text("a simple tooltip");
					
					
			 //
        })
		
		
        .on('mouseout', function(d){

            d3.select(this)
                .style('opacity',1);
				
//d3.selectAll('p').remove();
				
		   //d3.select("#alert")
			
				
        });
		
		//.on('click', function(d,i){
            
			
			//d3.select(this)
              //  .style('opacity',1);
        //});



};






drowChart2();


































/*
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

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  chart.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .attr("width", x.rangeBand());
*/
