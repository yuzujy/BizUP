<?php
require "conn.php";

$EncodedData=file_get_contents('php://input');
$DecodedData=json_decode($EncodedData,true);

$email = $DecodedData["email"] ?? '';

if ($conn) {
    // Query the database to check if the email exists
    $sql = "SELECT * FROM user_info WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Email found in the database, proceed with sending the OTP

        // Generate a random OTP (6 digits)
        $otp = rand(100000, 999999);

        // Store the OTP and email in the PHP session
        session_start();
        $_SESSION['otp'] = $otp;
        $_SESSION['email'] = $email;

        // Compose the email
        $to = $email;
        $subject = 'One-Time Password (OTP)';
        $message = 'Your OTP is: ' . $otp;

        // Send the email
        if (mail($to, $subject, $message)) {
            // Send the response back to the client
            echo json_encode(['success' => true, 'message' => 'OTP sent successfully.']);
        } else {
            // Email sending failed
            echo json_encode(['success' => false, 'message' => 'Failed to send the OTP.']);
        }
    } else {
        // Email not found in the database
        echo json_encode(['success' => false, 'message' => 'Email not found.']);
    }
} else {
    // Connection error
    echo json_encode(['success' => false, 'message' => 'Connection error.']);
}

?>
