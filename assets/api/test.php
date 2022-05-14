<?php
//header("Access-Control-Allow-Origin:*");
//header('Access-Control-Allow-Methods: GET, POST');
//header("Access-Control-Allow-Headers: X-Requested-With");
//header('content-type: application/json; charset=utf-8');
//header("Access-Control-Allow-Headers: Authorization, Content-Type");
//header('Content-type: application/json');

echo "***POST***";
echo "<hr>";
foreach($_POST as $key => $value) {
  echo "$key => $value  || ". gettype($value)  ."  <br/>";
}

echo "<br>";
echo "GET";
echo "<hr>";


foreach($_GET as $key => $value) {
    echo "$key => $value  || ". gettype($value)  ."  <br/>";
}

echo "<br>";
echo "session";
echo "<hr>";


session_start();

foreach ($_SESSION as $key=>$val)
    echo $key." ".$val."<br/>";
		
echo "<br>";
echo "JSON POST";
echo "<hr>";		


$json = file_get_contents('php://input');


$data = json_decode($json, TRUE ); //convert JSON into array

print_r(json_encode($data));

print_r($data);

/*
// database connection file
$databaseHost = 'localhost';//or localhost
$databaseName = 'bsnlviza_attend'; // your db_name
$databaseUsername = 'bsnlviza'; // root by default for localhost 
$databasePassword = 're3aja2u5891';  // by defualt empty for localhost

$cser = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName);

$empname = $_POST['empname'];
$hrno = $_POST['hrno'];
$desgn = $_POST['desgn'];
$phone = $_POST['phone'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$de = $_POST['de'];
$device1 = $_POST['device1'];

//insert data to database
$result = mysqli_query($cser, "INSERT INTO attendtb1(empname, hrno,desgn,phone,lat,lng,de,device1) VALUES('$empname','$hrno','$desgn','$phone','$lat','$lng','$de','$device1')");
        
//display success message
echo "<font color='green'>Data added successfully.</font>";
*/
?>
