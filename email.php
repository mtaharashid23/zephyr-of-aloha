<?php
  $action = $_GET['action'];
  if($action == 'contact'){
       contactmail();
  }
  if($action == 'newsletter'){
    newslettermail();
  }
  function contactmail(){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];
    $message = 'First Name: '.$fname."\r\n";
    $message .= 'Last Name: '.$lname."\r\n";
    $message .= 'Email Address: '.$email."\r\n";
    $message .= 'Phone Number: '.$phone."\r\n";
    $message .= 'Message: '.$msg."\r\n";
    // Set your email address where you want to receive emails . 
    $to = 'info@gmail.com';
    $subject = 'Contact Request From Website';
    $send_email = mail($to,$subject,$message);  
    echo ($send_email) ? 'success' : 'error';
  }
  function newslettermail(){
    $email = $_POST['email'];
    $message = 'Email: '.$email."\r\n";
    // Set your email address where you want to receive emails . 
    $to = 'info@gmail.com';
    $subject = 'Subscribe to our Newsletters for Latest Updates!';
    $send_email = mail($to,$subject,$message);
    echo ($send_email) ? 'success' : 'error';
  }
?>