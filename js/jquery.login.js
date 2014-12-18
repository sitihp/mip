$(document).ready(function() {
	
	removeSession();
	
	$("#login").click(function(e){
		$('#formlogin').hide();
		$('#infologin').show();
		
        e.preventDefault();
		var email		= document.getElementById('email').value
		var password	= document.getElementById('password').value
		var dataString	= 'email='+ email + '&password=' + password
		$.ajax({
			url:'http://www.telkomvision.com/soap/SOAPLogin.php',
			dataType:'jsonp',
			timeout: 15000,
			cache: false,
			data: dataString,
			success:function(response){
				$('#infologin').hide();
				for(var i=0; i<response.length; i++){
					
						var str,str2,str3,str4,str5,str6,str7 = "";
						str		= response[i].NE;
						str2	= response[i].EMAIL;
						str3	= response[i].TIPE;
						str4	= response[i].NAMA;
						str5	= response[i].TELP;
						str6	= response[i].DN;
						str7	= response[i].DESC_LOGIN;
						
						
					if(str=='-'){
						$('#wrong_password').show();
					}else{
						
						sessionStorage.setItem('NoKartu',str);
						sessionStorage.setItem('Email',str2);
						sessionStorage.setItem('Tipe',str3);
						sessionStorage.setItem('Nama',str4);
						sessionStorage.setItem('Telp',str5);
						sessionStorage.setItem('IDPelanggan',str6);
						
						$.mobile.changePage($(document.location.href="admin.html"), 'slide');
					} 
				}
					
			},
			error: function (xhr, ajaxOptions, thrownError) {
				if(thrownError==="timeout") {
					$('#infologin').hide();
					$('#connection_failed').show();
				} else {
					$('#infologin').hide();
					$('#connection_failed').show();
				}
			}
		}); //Tutup Ajax
	
	
	}); //Tutup Button Click
	
}); //Tutup Document Ready


function removeSession(){
	sessionStorage.removeItem('NoKartu');
	sessionStorage.removeItem('Email');
	sessionStorage.removeItem('Tipe');
	sessionStorage.removeItem('Nama');
	sessionStorage.removeItem('Telp');
	sessionStorage.removeItem('IDPelanggan');
}
	
function LoadingPanel(){
	$.mobile.changePage( "loading.html", { 
	   role: "dialog" 
	});
}

function ClosePanel(){
	$('[data-role=dialog]').dialog( "close" );	
}

function callAdmin(){
	$.mobile.loadPage( "admin.html" );
}


function clearData(){
	$('#nokartu').val('');
	$('#dataemail').val('');
	$('#tipe').val('');
	$('#nama').val('');
	$('#telp').val('');
	$('#idpelanggan').val('');	
}

