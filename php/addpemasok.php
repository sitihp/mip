<?php

$dbhost = 'localhost';
$dbuser = 'postgres';
$dbpass = 'admin';
$dbname = 'testing';

$query = "SELECT MAX(no_iup) as maks FROM pemasok";
		
$stmt = $db->prepare( $query );
$result = $stmt->execute();
$data = $stmt->fetch(PDO::FETCH_ASSOC);
$idmaks = $data['maks'];
$nomor=$idmaks++;
$number = sprintf("%04s", $idmaks);

$strNoiup = $_POST['strNoiup'];
$strNamaP = $_POST['strNamaP'];
$strAlamat = $_POST['strAlamat'];
$strTelp	= $_POST['strTelp'];
$strKodepos = $_POST['strKodepos'];
$strNamaDir = $_POST['strNamaDir'];
$strNilaiShm = $_POST['strNilaiShm'];
$strNamaStk = $_POST['strNamaStk'];
$strPkjStk  = $_POST['strPkjStk'];
$strKwnStk   = $_POST['strKwnStk'];
$strAlamatStk  = $_POST['strAlamatStk'];
$strKomoditas	= $_POST['strKomoditas'];
$strLokasi		= $_POST['strLokasi'];
$strDesa		= $_POST['strDesa'];
$strKec	    = $_POST['strKec'];
$strKab	 = $_POST['strKab'];
$strProv  = $_POST['strProv'];
$strLuas  = $_POST['strLuas'];
$strJkp = $_POST['strJkp'];
$strJke = $_POST['strJke'];
$strJks = $_POST['strJks'];
$strStatus = $_POST['strStatus'];
$strTgl  = $_POST['strTgl'];


$sql = "INSERT INTO 
        pemasok
    (no_iup, nama_perusahaan, alamat, telp, kodepos, nama_direksi, nilai_saham, nama_stakeholder, pekerjaan_stakeholder, kewarganegaraan_stakeholder, alamat_stakeholder, komoditas, lokasi, desa, kecamatan, kabkota, prov, luas, jangka_wkt_p, jangka_wkt_eks, jangka_wkt_studi, status_pemasok, tgl_pengesahan) 

    VALUES ('$strNoiup','$strNamaP', '$strAlamat','$strTelp','$strKodepos', '$strNamaDir','$strNilaiShm','$strNamaStk', '$strPkjStk','$strKwnStk','$strAlamatStk', '$strKomoditas','$strLokasi','$strDesa', '$strKec','$strKab','$strProv', '$strLuas','$strJkp','$strJke', '$strJks','$strStatus','$strTgl')";

try
{
	$db = new PDO("pgsql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $db->prepare($sql);  
	$stmt = $db->query($sql);  
	$pemasok = $stmt->fetchAll(PDO::FETCH_OBJ);
	$db = null;
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}
	

?>
	 
