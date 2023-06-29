<?php
require "conn.php";

$EncodedData=file_get_contents('php://input');
$DecodedData=json_decode($EncodedData,true);

// $username=$_POST["username"];
// $password=$_POST["password"];
// $phone=$_POST["phone"];
// $email=$_POST["email"];

// $username="admin";
// $password="admin";
// $phone="99999999";
// $email='admin';
$username = $DecodedData["username"] ?? '';
$password = $DecodedData["password"] ?? '';
$phone = $DecodedData["phone"] ?? '';
$email = $DecodedData["email"] ?? '';

if($conn){
    if(strlen($password)>20 || strlen($password)==0){
        //echo"Password must be more than 0 and less than 20";
        $Message="Password must be more than 0 and less than 20";
    }
    else{
        $sqlCheckUsername="SELECT*FROM`user_info`WHERE`username`LIKE'$username'";
        $sqlCheckPhone="SELECT*FROM`user_info`WHERE`phone`LIKE '$phone'";
        $sqlCheckEmail="SELECT*FROM`user_info`WHERE`email`LIKE'$email'";
        $usernameQuery=mysqli_query($conn, $sqlCheckUsername);
        $phoneQuery=mysqli_query($conn, $sqlCheckPhone);
        $emailQuery=mysqli_query($conn, $sqlCheckEmail);

        if(mysqli_num_rows($usernameQuery) > 0 || mysqli_num_rows($phoneQuery) > 0 || mysqli_num_rows($emailQuery) > 0){
            //echo "Username or email or phone number already been used, type another one";
            $Message="Username or email or phone number already been used, type another one";
        }
        else{
            $sql_register="INSERT INTO `user_info`(`username`, `password`, `phone`, `email`)VALUES('$username','$password', $phone, '$email')";

            if(mysqli_query($conn, $sql_register)){
                $Message="Registering New Account";
                //echo "registering new account";
            }
            else{
                $Message="Failed to register";
                //echo "Failed to register";
            }

        }
    }

}
else{
    $Message="Connection error";
    //echo "connection error";    
}

$Response[]=array("Message"=>$Message);
echo json_encode($Response);
?>