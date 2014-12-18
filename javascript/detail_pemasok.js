$(document).ready(function() {
	$('#loading_panel').show();
  
    var noIup = getUrlVars()["no_iup"];
	var serviceURL = "http://localhost:81/testmobile/php/";
	$.ajax({
				type : 'GET',
				url : serviceURL + 'detail_pemasok.php?no_iup='+noIup,
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						var GetData = data.items;
                        console.log(GetData);
						if(GetData==''){
							$('#loading_panel').hide();
							$('#not_found').show();
						}else{
							
							$('#loading_panel').hide();
							$('#allData').show();
							
							var loaddata = GetData;
                            var nama_perusahaan = loaddata.nama_perusahaan;
                            var alamat = loaddata.alamat;
                            var telp = loaddata.telp;
                            var kodepos = loaddata.kodepos;
                            var nama_direksi = loaddata.nama_direksi;
                            var nilai_saham = loaddata.nilai_saham;
                            var nama_stakeholder = loaddata.nama_stakeholder;
                            var pekerjaan_stakeholder = loaddata.pekerjaan_stakeholder;
                            var kewarganegaraan_stakeholder = loaddata.kewarganegaraan_stakeholder;
                            var alamat_stakeholder = loaddata.alamat_stakeholder;
                            var komoditas = loaddata.komoditas;
                            var lokasi = loaddata.lokasi;
                            var desa = loaddata.desa;
                            var kecamatan = loaddata.kecamatan;
                            var kabkota = loaddata.kabkota;
                            var prov = loaddata.prov;
                            var luas = loaddata.luas;
                            var jangka_wkt_p = loaddata.jangka_wkt_p;
                            var jangka_wkt_eks = loaddata.jangka_wkt_eks;
                            var jangka_wkt_studi = loaddata.jangka_wkt_studi;
                            var status_pemasok = loaddata.status_pemasok;
                            var tgl_pengesahan = loaddata.tgl_pengesahan;
                            $('#nama_perusahaan').text(nama_perusahaan);
                            $('#alamat').text(alamat);
                            $('#telp').text(telp);
                            $('#kodepos').text(kodepos);
                            $('#nama_direksi').text(nama_direksi);
                            $('#nilai_saham').text(nilai_saham);
                            $('#nama_stakeholder').text(nama_stakeholder);
                            $('#pekerjaan_stakeholder').text(pekerjaan_stakeholder);
							$('#kewarganegaraan_stakeholder').text(kewarganegaraan_stakeholder);
                            $('#alamat_stakeholder').text(alamat_stakeholder);
                            $('#komoditas').text(komoditas);
                            $('#lokasi').text(lokasi);
                            $('#desa').text(desa);
                            $('#kecamatan').text(kecamatan);
                            $('#kabkota').text(kabkota);
                            $('#prov').text(prov);
                            $('#luas').text(luas);
                            $('#jangka_wkt_p').text(jangka_wkt_p);
                            $('#jangka_wkt_eks').text(jangka_wkt_eks);
                            $('#jangka_wkt_studi').text(jangka_wkt_studi);
                            $('#status_pemasok').text(status_pemasok);
                            $('#tgl_pengesahan').text(tgl_pengesahan);
                                                                
						
						}
				},
				error : function(){
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});
});

function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}



