<?php
session_start();

$dbhost = 'localhost';
$dbuser = 'postgres';
$dbpass = 'admin';
$dbname = 'testing';

$username = $_GET['username'];
$password = md5($_GET['password']);

$sql = "SELECT 
  pengguna.username, 
  pengguna.password
FROM 
  pengguna
WHERE
username = ? AND password = ?
";

try
{
	$db = new PDO("pgsql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $db->prepare($sql);  
	$stmt->bindParam(1, $username);
    $stmt->bindParam(2, $password);
	$stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_NUM);
    if($row > 0) {
    echo 1;
    } else {
   echo 0;
    }
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}



?>