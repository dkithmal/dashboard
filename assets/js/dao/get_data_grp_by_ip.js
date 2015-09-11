//var serverUrl = "controllers/importnt_access_data_group_by_id.jag";

function get_data_grup_by_ip(){

console.log("inside get_important_file_accessed_data_grp_by_ip");

    $.getJSON("controllers/importnt_access_data_group_by_id.jag" , function (response){
        console.log(" impornt file grup by ip not working");

        $.each(response, function (key, val) {

            drowImportantFileAceesChart(key,val);
	
        });

    });
}


