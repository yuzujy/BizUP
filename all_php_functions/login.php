<?php
require "conn.php";

$EncodedData=file_get_contents('php://input');
$DecodedData=json_decode($EncodedData,true);


$username=$DecodedData["username"] ?? '';
$password=$DecodedData["password"] ?? '';


if($conn){
    if(strlen($password)>20 || strlen($password)==0){
        $Message="Password must be more than 0 and less than 20";
    }
    elseif(strlen($username)==0){
        $Message="Please key in username";
    }
    else{
        $sqlCheckLogin="SELECT*FROM`user_info`WHERE`username`LIKE'$username' AND`password`LIKE'$password'";
        $usernameQuery=mysqli_query($conn, $sqlCheckLogin);
 
        if(mysqli_num_rows($usernameQuery)>0) {
            $row = $usernameQuery->fetch_assoc();
            $Message="Welcome, ".$row["username"];
        }
        else{
            $Message="Wrong username or password";
        }
    }
}
else{
    $Message="Connection error";
}

$Response[]=array("Message"=>$Message);
echo json_encode($Response);
?>