<?

    $name  =  $_POST['name'];   
	$telephone =  $_POST['telephone'];
    $messager = $_POST['message'];
    $form_name = $_POST['form_name'];
       
    $admin_email = 'dron_2019@ukr.net';
    // $admin_email = 'rielnordica@gmail.com';
    $message  .= "<h1>Заявка за проектом Podil Plaza 2";
    $message .= "<p>Ім'я: ".$_POST['name']."</p>";
    $message .= "<p>Телефон: ".$_POST['tel']."</p>";
    if($_POST['message']) {$message .= "<p>Повідомлення: ".$_POST['message']."</p>";};
    
    $subject = 'Заявка з сайту: '.$_POST['metka'];
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8; boundary='first'\r\n";
	if (mail($admin_email, $subject, $message, $headers)) {
        echo '11';
    } else {
        echo 'fail';
        echo $message;
    }
   
?>
