<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fname"];
    $email = $_POST["email"];
    $title = $_POST["title"];
    $content = $_POST["content"];

    $to = "nguyendinhtrung.it@gmail.com";
    $subject = $title;
    $message = "From: $name\nEmail: $email\n\n$content";

    // Sử dụng hàm mail() để gửi email
    if (mail($to, $subject, $message)) {
        echo "Email đã được gửi thành công!";
    } else {
        echo "Có lỗi xảy ra khi gửi email.";
    }
}
?>
