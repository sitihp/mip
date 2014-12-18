$(document).ready(function() {
				
		$("#login").click( function(e){
			var username		= $("#username").val();
			var password  		= $("#password").val();
			
			e.preventDefault();
			
			if(username==''){
				$('#required').show();
			}else if(password==''){
				$('#required').show();
            }else{
                
				$('#formlogin').hide();
				$('#required').hide();
				$('#loading_panel').show();
				TambahData();
			}
		});
	

function TambahData(){
	var serviceURL = "http://localhost:81/testmobile/php/";
	
	var username		= $("#username").val();
    var password  		= $("#password").val();
    
	$.ajax({
				type : 'GET',
				url : serviceURL + 'login.php',
				async: true,
				data: {
					username : username,
                    password : password
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						if(data == '1'){
							$('#loading_panel').hide();
							 $('#sukses').show();
                            window.location.href='mainpage.html';
						}else{
                           $('#loading_panel').hide(); 
                           
                            $('#wrong_password').show();
                            window.location.href='index.html';
                             
                        }
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});	
}
	

}); //Tutup Document Ready









