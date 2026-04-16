



// <?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $service = $_POST['service'];
        $message = $_POST['message'];

        $mail = new PHPMailer(true);

        try {

            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'jsmwealth@gmail.com';
            $mail->Password = 'rtmwzewlwsazhutv';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;

            $mail->setFrom('jsmwealth@gmail.com', 'JSM Health Wealth Insurance');
            $mail->addAddress('jsmwealth@gmail.com');
            $mail->addReplyTo($email, $name);

            $mail->isHTML(false);
            $mail->Subject = "You Have One New Lead";

            $mail->Body =
                "New Lead Details:\n\n" .
                "Name: $name\n" .
                "Email: $email\n" .
                "Phone: $phone\n" .
                "Service: $service\n\n" .
                "Message:\n$message";

            $mail->send();
            echo "Message Sent Successfully ✅";

        } catch (Exception $e) {
            echo "Mailer Error: {$mail->ErrorInfo}";
        }
    }
    ?>
