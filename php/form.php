<?php
if(isset($_POST['email'])) {
	
	//replace your email here
	$email_to = "jane@doe.com";
	
	
	function died($error) {
		// your error code can go here
		echo '<div class="center"><h2>There were problems submitting your inquiry:</h2></div>';
		echo '<div class="center"><p>' . $error. '</p></div>';
		echo '<div class="center">';
		echo '<ul class="pages">';
		echo '<li><a href="index.html#contact">Click to resubmit</a></li>';
		echo '</ul>';
		echo '</div>';
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['name']) || 
		!isset($_POST['email']) ||
		!isset($_POST['subject']) ||
		!isset($_POST['message'])) {
	 died('We are sorry, but there appears to be a problem with the form you submitted.');	
		}
	
	$name = $_POST['name']; // required
	$email_from = $_POST['email']; // required
	$subject = $_POST['subject']; // required
	$message = $_POST['message']; // required
	
	$error_message = "";
	$string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
  	$error_message .= 'The name you entered is not valid.<br />';
  }
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
  	$error_message .= 'The email address you entered is not valid.<br />';
  }
  if(strlen($subject) < 2) {
  	$error_message .= 'The subject you entered is not valid.<br />';
  }
  if(strlen($message) < 5) {
  	$error_message .= 'The message you entered is not valid.<br />';
  }
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message = "Name: ".clean_string($name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$subject .= "Subject: ".clean_string($subject)."\n";
	$email_message .= "Message: ".clean_string($message)."\n";
	
	
// create email headers
$headers = 'From: ' .$email_from. "\r\n"; 
$headers .= 'Reply-To: ' .$email_from. "\r\n";
'X-Mailer: PHP/' . phpversion();
mail($email_to, $subject, $email_message, $headers)

?>
<!-- place your own success html below -->
<div class="center"><h2>Thanks for contacting us!</h2></div>
<div class="center"><p>We will get back to you as soon as possible.</p></div>
<?php
}
die();
?>
