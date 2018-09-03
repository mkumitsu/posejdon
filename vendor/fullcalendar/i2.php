<?php

//insert.php

$server = 'mysql:host=mysql;dbname=u731698882_psd';
$username = 'u731698882_cal';
$password = 'alpha201R4';

try {
        $connect = new PDO($server, $username, $password);
    } catch (PDOException $e) {
        echo $e->getMessage();
        exit();
    }


if(isset($_POST["title"]))
{
 $query = "
 INSERT INTO room2 
 (title, start_event, end_event) 
 VALUES (:title, :start_event, :end_event)
 ";
 $statement = $connect->prepare($query);
 $statement->execute(
  array(
   ':title'  => $_POST['title'],
   ':start_event' => $_POST['start'],
   ':end_event' => $_POST['end']
  )
 );
}


?>
