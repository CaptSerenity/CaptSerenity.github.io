<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Compose the email message
    $to = "cbenjamin0909@gmail.com";
    $subject = "New message from $name: $subject";
    $body = "Name: $name\nEmail: $email\n\n$message";
    
    // Send the email
    if (mail($to, $subject, $body)) {
        echo "Thank you for your message. I will contact you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
