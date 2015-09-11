


var serverUrl = "controllers/access_summary_server.jag";

function addTileUrl(zzz){
print("worikig");
}
$.getJSON(serverUrl , function (response){
console.log(" aaa working");

$.each(response, function (key, val) {

drowAccessChart(key,val);
});
//alert( response );
//drowAccessChart(response);
});

