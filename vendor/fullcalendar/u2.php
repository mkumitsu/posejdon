<?php

//update.php

$server = 'mysql:host=mysql;dbname=u731698882_psd';
$username = 'u731698882_cal';
$password = 'alpha201R4';

try {
        $connect = new PDO($server, $username, $password);
    } catch (PDOException $e) {
        echo $e->getMessage();
        exit();
    }


if(isset($_POST["id"]))
{
 $query = "
 UPDATE room2 
 SET title=:title, start_event=:start_event, end_event=:end_event 
 WHERE id=:id
 ";
 $statement = $connect->prepare($query);
 $statement->execute(
  array(
   ':title'  => $_POST['title'],
   ':start_event' => $_POST['start'],
   ':end_event' => $_POST['end'],
   ':id'   => $_POST['id']
  )
 );
}

?>