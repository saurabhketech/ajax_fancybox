<?php

$servername="localhost";
$username="root";
$password="java@123";
$database="user";
$conn=mysqli_connect($servername,$username,$password) or die("database is not connect");
mysqli_select_db($conn,$database) or die("db not conect");
?>