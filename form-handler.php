
<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$email_from ='info@';  /* sajt kako ide   */ 

$email_subject = 'Mew Form Sunmission';


$email_body = "User Name: $name. \n" .
            "User Email: $visitor_email.\n".
            "Subject: $subject.\n".
            "User Message: $message •In";

$to = 'innobuildgroup23@gmail.com';

$headers = "From: $email_from \r\n";

$headers = "Reply-To: $visitor_email \r\n";

mail ($to,$email_subject, $email_body, $headers);

header("Location: contact.html");




?>
