<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $name = $_POST['name'];
    $email = $_POST['email'];

    echo "<h2>Entered Details</h2>";

    echo "Name: " . $name . "<br><br>";

    echo "Email: " . $email;
}

?>

<form method="POST">

    <label>Name:</label>
    <br>
    <input type="text" name="name">
    <br><br>

    <label>Email:</label>
    <br>
    <input type="email" name="email">
    <br><br>

    <input type="submit" value="Submit">

</form>
