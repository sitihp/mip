$(document).ready(function() {
				
		$("#proses").click( function(e){
			var strNoiup		= $("#no_iup").val();
			var strNamaP  		= $("#nama_perusahaan").val();
			var strAlamat    	= $("#alamat").val();
			var strTelp			= $("#telp").val();
			var strKodepos		= $("#kodepos").val();
			var strNamaDir		= $("#nama_direksi").val();
            var strNilaiShm		= $("#nilai_saham").val();
			var strNamaStk		= $("#nama_stakeholder").val();
			var strPkjStk    	= $("#pekerjaan_stakeholder").val();
			var strKwnStk    	= $("#kewarganegaraan_stakeholder").val();
			var strAlamatStk    = $("#alamat_stakeholder").val();
			var strKomoditas	= $("#komoditas").val();
            var strLokasi		= $("#lokasi").val();
			var strDesa		    = $("#desa").val();
			var strKec	        = $("#kecamatan").val();
			var strKab			= $("#kabkota").val();
			var strProv			= $("#prov").val();
			var strLuas		    = $("#luas").val();
            var strJkp			= $("#jangka_wkt_p").val();
			var strJke		    = $("#jangka_wkt_eks").val();
			var strJks	        = $("#jangka_wkt_studi").val();
			var strStatus		= $("#status_pemasok").val();
			var strTgl			= $("#tgl_pengesahan").val();
            
			e.preventDefault();
			
			if(strNoiup==''){
				$('#required').show();
			}else if(strNamaP==''){
				$('#required').show();
			}else if(strAlamat==''){
				$('#required').show();
			}else if(strTelp==''){
				$('#required').show();
			}else if(strKodepos==''){
				$('#required').show();
			}else if(strNilaiShm==''){
				$('#required').show();
			}else if(strKomoditas==''){
				$('#required').show();
			}else if(strLokasi==''){
				$('#required').show();
			}else if(strDesa==''){
				$('#required').show();
			}else if(strKec==''){
				$('#required').show();
			}else if(strKab==''){
				$('#required').show();
			}else if(strProv==''){
				$('#required').show();
			}else if(strLuas==''){
				$('#required').show();
			}else if(strJkp==''){
				$('#required').show();
			}else if(strJke==''){
				$('#required').show();
			}else if(strJks==''){
				$('#required').show();
			}else if(strStatus==''){
				$('#required').show();
			}else if(strTgl==''){
            }else{
                
				$('#formpemasok').hide();
				$('#required').hide();
				$('#loading_panel').show();
				TambahData();
			}
		});
	
	
		

function TambahData(){
	var serviceURL = "http://localhost:81/testmobile/php/";
	
	var strNoiup		= $("#no_iup").val();
    var strNamaP  		= $("#nama_perusahaan").val();
    var strAlamat    	= $("#alamat").val();
    var strTelp			= $("#telp").val();
    var strKodepos		= $("#kodepos").val();
    var strNamaDir		= $("#nama_direksi").val();
    var strNilaiShm		= $("#nilai_saham").val();
    var strNamaStk		= $("#nama_stakeholder").val();
    var strPkjStk    	= $("#pekerjaan_stakeholder").val();
    var strKwnStk    	= $("#kewarganegaraan_stakeholder").val();
    var strAlamatStk    = $("#alamat_stakeholder").val();
    var strKomoditas	= $("#komoditas").val();
    var strLokasi		= $("#lokasi").val();
    var strDesa		    = $("#desa").val();
    var strKec	        = $("#kecamatan").val();
    var strKab			= $("#kabkota").val();
    var strProv			= $("#prov").val();
    var strLuas		    = $("#luas").val();
    var strJkp			= $("#jangka_wkt_p").val();
    var strJke		    = $("#jangka_wkt_eks").val();
    var strJks	        = $("#jangka_wkt_studi").val();
    var strStatus		= $("#status_pemasok").val();
    var strTgl			= $("#tgl_pengesahan").val();
    
	$.ajax({
				type : 'POST',
				url : serviceURL + 'addpemasok.php',
				async: true,
				data: {
					strNoiup : strNoiup,
                    strNamaP : strNamaP,
                    strAlamat : strAlamat,
                    strTelp : strTelp,
                    strKodepos : strKodepos,
                    strNamaDir : strNamaDir,
                    strNilaiShm : strNilaiShm,
                    strNamaStk : strNamaStk,
                    strPkjStk : strPkjStk,
                    strKwnStk : strKwnStk,
                    strAlamatStk : strAlamatStk,
                    strKomoditas : strKomoditas,
                    strLokasi : strLokasi,
                    strDesa : strDesa,
                    strKec : strKab,
                    strKab : strKab,
                    strProv : strProv,
                    strLuas : strLuas,
                    strJkp : strJkp,
                    strJke : strJke,
                    strJks : strJks,
                    strStatus : strStatus,
                    strTgl : strTgl
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						var cek = data.result;
						if(cek=='Sukses'){
							$('#loading_panel').hide();
							$('#sukses').show();
						}
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});	
}
	

}); //Tutup Document Ready









