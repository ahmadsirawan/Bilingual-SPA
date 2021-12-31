<?php


$host = "localhost";
$user = "****";
$pass = "****";
$db = "****";

$dbi = mysqli_connect($host,$user,$pass,$db);
if ($dbi->connect_error) {
    die('Connect Error (' . $dbi->connect_error . ') ' . $dbi->connect_error);
}



?>