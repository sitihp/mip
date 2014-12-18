<?php
$dbhost = 'localhost';
$dbuser = 'postgres';
$dbpass = 'admin';
$dbname = 'testing';

$sql = "SELECT 
  pemasok.no_iup, 
  pemasok.nama_perusahaan
 
FROM 
  pemasok
ORDER BY 
pemasok.no_iup;
";

try
{
	$db = new PDO("pgsql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $db->prepare($sql);  
	$stmt = $db->query($sql);  
	$pemasok = $stmt->fetchAll(PDO::FETCH_OBJ);
	$db = null;
	echo '{"items":'. json_encode($pemasok) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>