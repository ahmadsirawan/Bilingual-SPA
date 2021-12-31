<?php 

require_once("db_connect.php");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if ($dbi) {
    
    $q = "SELECT name, review FROM spa_reviews ORDER BY id DESC";
    $rArray = array();

    if ($stmt = $dbi->prepare($q)) {
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($rName,$rReview);

        while($stmt->fetch()) {
            $rArray[] = [
                "name"=>$rName,
                "review"=>$rReview
            ];
        }
        
        
        echo json_encode($rArray);
        
        $stmt->close();        
    }
    else {
        echo "no execute statement";
    }
}

else {
        echo "Connection Error: " . mysqli_connect_error();
}

mysqli_close($dbi);
    
?>