<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// SMTP Configuration
define('SMTP_HOST', 'mail.beyond-creation.net');
define('SMTP_PORT', 465); // or 587
define('SMTP_USER', 'mostafa@beyond-creation.net');
define('SMTP_PASS', 'YOUR_PASSWORD_HERE'); // User needs to fill this
define('SMTP_SECURE', 'ssl'); // 'ssl' or 'tls'

function send_email($to, $subject, $body)
{
    $crlf = "\r\n";

    $socket = fsockopen(SMTP_SECURE . '://' . SMTP_HOST, SMTP_PORT, $errno, $errstr, 15);

    if (!$socket) {
        throw new Exception("Could not connect to SMTP host: $errstr ($errno)");
    }

    $log = [];

    $log[] = "Connected: " . fgets($socket, 515);

    fputs($socket, "EHLO " . $_SERVER['SERVER_NAME'] . $crlf);
    $log[] = "EHLO: " . fgets($socket, 515);

    fputs($socket, "AUTH LOGIN" . $crlf);
    $log[] = "AUTH_LOGIN: " . fgets($socket, 515);

    fputs($socket, base64_encode(SMTP_USER) . $crlf);
    $log[] = "USER: " . fgets($socket, 515);

    fputs($socket, base64_encode(SMTP_PASS) . $crlf);
    $log[] = "PASS: " . fgets($socket, 515);

    fputs($socket, "MAIL FROM: <" . SMTP_USER . ">" . $crlf);
    $log[] = "MAIL FROM: " . fgets($socket, 515);

    fputs($socket, "RCPT TO: <" . $to . ">" . $crlf);
    $log[] = "RCPT TO: " . fgets($socket, 515);

    fputs($socket, "DATA" . $crlf);
    $log[] = "DATA: " . fgets($socket, 515);

    $headers = "MIME-Version: 1.0" . $crlf;
    $headers .= "Content-type: text/html; charset=utf-8" . $crlf;
    $headers .= "To: " . $to . $crlf;
    $headers .= "From: AutoConnect Contact <" . SMTP_USER . ">" . $crlf;
    $headers .= "Subject: " . $subject . $crlf;

    fputs($socket, $headers . $crlf . $body . $crlf . "." . $crlf);
    $log[] = "BODY: " . fgets($socket, 515);

    fputs($socket, "QUIT" . $crlf);
    $log[] = "QUIT: " . fgets($socket, 515);

    fclose($socket);

    return $log;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$to_email = $input['to_email'] ?? 'eelasfahani@beyond-creation.net';
$first_name = htmlspecialchars($input['first_name'] ?? '');
$last_name = htmlspecialchars($input['last_name'] ?? '');
$user_email = htmlspecialchars($input['email'] ?? '');
$phone = htmlspecialchars($input['phone'] ?? '');
$company = htmlspecialchars($input['company'] ?? '');
$message_text = nl2br(htmlspecialchars($input['message'] ?? ''));

// Email Template
$email_body = "
<!DOCTYPE html>
<html>
<head>
<style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
    .header { background-color: #f60; color: #fff; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { padding: 20px; background-color: #f9f9f9; }
    .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    th, td { padding: 10px; border-bottom: 1px solid #ddd; text-align: left; }
    th { background-color: #eee; width: 150px; }
</style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Demo Request</h2>
        </div>
        <div class='content'>
            <p>You have received a new demo request from the AutoConnect website.</p>
            <table>
                <tr><th>Name</th><td>{$first_name} {$last_name}</td></tr>
                <tr><th>Email</th><td>{$user_email}</td></tr>
                <tr><th>Phone</th><td>{$phone}</td></tr>
                <tr><th>Company</th><td>{$company}</td></tr>
                <tr><th>Message</th><td>{$message_text}</td></tr>
            </table>
        </div>
        <div class='footer'>
            <p>Sent via AutoConnect Website</p>
        </div>
    </div>
</body>
</html>
";

try {
    send_email($to_email, "New Demo Request from $first_name $last_name", $email_body);
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>