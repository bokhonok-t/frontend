<?php
  if(!$_POST['page']) die("0");

  $page = $_POST['page'];
  $pathname = $_POST['pathname'];
  $url = $pathname.'pages/'.$page.'.php';

  if(file_exists($url))
  echo file_get_contents($url);

  else echo '<h4>There is no such page!</h4>';
?>
