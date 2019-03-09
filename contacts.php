<?


if (array_key_exists('messageFF', $_POST)) {
  $to = 'yura_eremok@mail.ru';   
   $subject = 'заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nТелефон:".$_POST['tel']."\nCообщение:".$_POST['messageFF'];
   $headers = 'Content-type: text/plain; charset="utf-8"'; 
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

   mail($to, $subject, $message, $headers);
  echo $_POST['nameFF'];
}




?>
<!-- 
romanyakubovski@mail.ru -->