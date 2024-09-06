<?php

$name = htmlspecialchars(trim($_POST['name']));
$visitor_email = htmlspecialchars(trim($_POST['email']));
$subject = htmlspecialchars(trim($_POST['subject']));
$message = htmlspecialchars(trim($_POST['message']));

$email_from = 'info@innobuildgroup.rs'; 
$email_subject = 'New Form Submission';

$email_body = "User Name: $name. \n" .
              "User Email: $visitor_email.\n" .
              "Subject: $subject.\n" .
              "User Message: $message.\n";

$to = 'innobuildgroup00@gmail.com';
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

if (!filter_var($visitor_email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

if (mail($to, $email_subject, $email_body, $headers)) {
    header("Location: kontakt.html");
    exit();
} else {
    echo "Email sending failed";
}


?>