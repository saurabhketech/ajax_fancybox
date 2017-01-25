
<?php
include("connection.php");

  $limit = 5;
       if(isset($_POST["page"])) { $page = intval($_POST["page"]);   }
          else  {
           $page =1 ;
           }
         $start_page = (($page-1) * $limit);
         $result = mysqli_query($conn, "select * from detail order by userid desc Limit $start_page, $limit");
         
            if ($result->num_rows > 0) {
              while($row = $result->fetch_row()) {      
              $tmp[] = $row;
          }
        }
else {
    echo "No results";
    }

$result = mysqli_query($conn,"select count(*) from detail");
$rows = mysqli_num_rows($result);
$total = $result->fetch_row()[0];

echo  "{ \"data\":".json_encode($tmp).", \"count\":". $total." }";
$conn->close();

?>
