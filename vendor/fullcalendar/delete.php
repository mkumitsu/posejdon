<?php

//delete.php

if(isset($_POST["id"]))
{
 $server = 'mysql:host=mysql;dbname=u731698882_psd';
$username = 'u731698882_cal';
$password = 'alpha201R4';

try {
        $connect = new PDO($server, $username, $password);
    } catch (PDOException $e) {
        echo $e->getMessage();
        exit();
    }   
 $query = "
 DELETE from room1 WHERE id=:id
 ";
 $statement = $connect->prepare($query);
 $statement->execute(
  array(
   ':id' => $_POST['id']
  )
 );
}

?>