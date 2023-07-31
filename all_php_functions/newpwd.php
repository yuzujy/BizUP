<?php
require "conn.php";

$EncodedData=file_get_contents('php://input');
$DecodedData=json_decode($EncodedData,true);

$Clientotp = $DecodedData["Clientotp"] ?? '';
$newPassword = $DecodedData["newpassword"] ?? '';

if ($conn) {
    // Retrieve the stored OTP from the PHP session
    session_start();
    $otp = $_SESSION['otp'] ?? '';
    $email = $_SESSION['email'] ?? '';

    // Debugging
    //echo "OTP from client: " . $otp . "\n";
    //echo "Stored OTP in newpwd.php: " . $storedOtp . "\n";
    //echo "Email in newpwd.php: " . $email . "\n";

    if ($otp === $Clientotp) {
        // Reset the user's password in the database
        $sql = "UPDATE user_info SET password = '$newPassword' WHERE email = '$email'";
        if (mysqli_query($conn, $sql)) {
            // Password reset successful
            echo json_encode(['success' => true, 'message' => 'Password reset successfully.']);
        } else {
            // Password reset failed
            echo json_encode(['success' => false, 'message' => 'Failed to reset the password.']);
        }
    } else {
        // Incorrect OTP 
        echo json_encode(['success' => false, 'message' => 'Invalid OTP.']);
    }
} else {
    // Connection error
    echo json_encode(['success' => false, 'message' => 'Connection error.']);
}

?>