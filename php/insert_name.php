<?php

require_once("db_connect.php");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if ($dbi) {
    $name = $_REQUEST['name'];
    $review = $_REQUEST['review'];
    $q = "INSERT INTO  spa_reviews (name, review) VALUES (?,?)";
    $insertedRows = 0;
    if ($insertStmt = $dbi->prepare($q)) {
        $insertStmt->bind_param("ss", $name, $review);
        $insertStmt->execute();
        $insertedRows += $insertStmt->affected_rows;
    } else {
        echo "Error";
    }

    $insertStmt->close();
    $dbi->close();
}

echo "OK: $insertedRows item added";
?>