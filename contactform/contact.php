<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$email_from = 'andrewbateman.org';
	$email_subject = 'New message from andrewbateman.org';
	$email_body = "Name: $name.\n".
								"Email: $email.\n".
								"Subject: $subject.\n".
								"Message: $message.\n";

	$to ="gomezbateman@yahoo.com";
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("location: success.html");
?>