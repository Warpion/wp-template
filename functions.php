<?php 
	add_action( 'after_setup_theme', 'theme_register_nav_menu' );
	function theme_register_nav_menu()
	{
		register_nav_menu( 'main', 'Основное меню' );
	}

	add_action( 'wp_enqueue_scripts', 'my_scripts_and_styles' );
	function my_scripts_and_styles(){
		wp_enqueue_style( 'bootstrap', get_stylesheet_uri().'/view/libs/bootstrap/bootstrap-grid.min.css' );
		wp_enqueue_style( 'style', get_stylesheet_uri().'/main.css' );

		wp_deregister_script( 'jquery' );
		
		//wp_enqueue_script( 'jquery', get_template_directory_uri() . '/view/libs/jquery/jquery-3.4.1.min.js');
		wp_enqueue_script( 'script', get_template_directory_uri() . '/main.js');
	}

?>