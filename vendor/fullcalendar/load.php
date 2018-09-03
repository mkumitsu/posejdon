<?php

//load.php

$server = 'mysql:host=mysql;dbname=u731698882_psd';
$username = 'u731698882_cal';
$password = 'alpha201R4';

try {
        $connect = new PDO($server, $username, $password);
    } catch (PDOException $e) {
        echo $e->getMessage();
        exit();
    }   



$data = array();

$query = "SELECT * FROM room1 ORDER BY id";

$statement = $connect->prepare($query);

$statement->execute();

$result = $statement->fetchAll();

foreach($result as $row)
{
 $data[] = array(
  'id'   => $row["id"],
  'title'   => $row["title"],
  'start'   => $row["start_event"],
  'end'   => $row["end_event"]
 );
}

echo json_encode($data);

?>