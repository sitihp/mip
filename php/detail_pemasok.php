<?php
$dbhost = 'localhost';
$dbuser = 'postgres';
$dbpass = 'admin';
$dbname = 'testing';

$sql= "
SELECT  
  nama_perusahaan, 
  alamat, 
  telp, 
  kodepos, 
  nama_direksi, 
  nilai_saham,
  nama_stakeholder,   
  pekerjaan_stakeholder, 
  kewarganegaraan_stakeholder,  
  alamat_stakeholder, 
  komoditas,
  lokasi, 
  desa, 
  kecamatan, 
  kabkota, 
  prov, 
  luas, 
  jangka_wkt_p, 
  jangka_wkt_eks, 
  jangka_wkt_studi,
  status_pemasok,
  tgl_pengesahan 
FROM 
  public.pemasok
WHERE
no_iup = :no_iup";



try {
	$db = new PDO("pgsql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $db->prepare($sql);  
	$stmt->bindParam("no_iup", $_GET['no_iup']);
	$stmt->execute();
	$pemasok = $stmt->fetchObject();  
	$db = null;
	echo '{"items":'. json_encode($pemasok) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>