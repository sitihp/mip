$(document).ready(function() {

$('#loading_panel').show();
get_pemasok();

function get_pemasok(){
	var serviceURL = "http://localhost:81/testmobile/php/";
	var Pemasok;
	$.ajax({
				type : 'GET',
				url : serviceURL + 'datapemasok.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						Pemasok = data.items;
						if(Pemasok==''){
							$('#loading_panel').hide();
							$('#empty').show();
						}else{
							$('#loading_panel').hide();
							$('#tampilData').show();
							$.each(Pemasok, function(index, loaddata) {
								var no_iup = loaddata.no_iup;
								var nama_perusahaan = loaddata.nama_perusahaan;
								
							$('#pemasokList').append(
								'<li><a href="detail_pemasok.html?no_iup=' + loaddata.no_iup + '" data-ajax="false">' +
								'<h4>' + loaddata.no_iup + '</h4>' +
                                '<p>' + loaddata.nama_perusahaan +'</p>');
							});
							$('#pemasokList').listview('refresh');
						}
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});	
}
	

}); //Tutup Document Ready









