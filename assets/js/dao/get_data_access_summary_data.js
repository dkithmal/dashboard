//var serverUrl = "controllers/data_access_summary_server.jag";

function addTileUrl(zzz){
    print("worikig");
}
$.getJSON("controllers/data_access_summary_server.jag" , function (response){
    console.log(" aaa working");

    $.each(response, function (key, val) {

        drowDataAccessChart(key,val);
    });
//alert( response );
//drowAccessChart(response);
});


