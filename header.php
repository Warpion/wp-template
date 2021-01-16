<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title(); ?></title>
	<link rel="alternate" hreflang="ru" href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>" />
  
  <?php wp_head(); ?>
</head>
<body>
