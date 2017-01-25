<?php
  include("connection.php");
		$Name = $_POST['Name'];
  		$email = $_POST['email'];
  		$message = $_POST['message'];
      $date = $_POST['date'];
 
			 $sql = "INSERT INTO detail(`name`, `email`, `message`, `date`)
 					VALUES ( \"" .$Name. "\", \"" . $email . "\",\"" . $message . "\",\"" . $date . "\" )";
         $record= mysqli_query($conn, $sql);

 mysqli_close($conn);



?>
