<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "showcase";

    $conn = mysqli_connect($servername, $username, $password,$db);

    if (!conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = @_POST['password'];

    $sql = "INSERT INTO `users` (`Id`, `username`, `password`, `name`) 
    VALUES 
    ('0', '$username', '$password', '$name')";

    $rs = mysqli_query($con, $sql);

    if($rs)
    {
	    echo "Contact Records Inserted";
    }

    //info: https://www.raghwendra.com/blog/how-to-connect-html-to-database-with-mysql-using-php-example/
?>