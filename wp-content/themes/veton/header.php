<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php echo bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta content="<?php echo get_bloginfo('blogdescription'); ?>" name="description">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="true">
    <link rel="canonical" href="<?php echo site_url(); ?>" />
    <?php 
        wp_meta(); 
        wp_head();
    ?>
</head>

<body <?php body_class('d-none page--'.$post->post_name); ?>>
    <div id="wrap" class="d-flex w-100 flex-column justify-content-start overflow-hidden">
        <a class="skip-link screen-reader-text" href="#content">
            <?php
                /* translators: Hidden accessibility text. */
                esc_html_e( 'Skip to content', 'twentytwentyone' );
            ?>
        </a>
        <header class="header">
            <div class="header-top d-block">
                <div class="container d-flex flex-wrap align-items-center justify-content-between">
                    <?php get_template_part('template_parts/_logo', null, array( 'classes' => 'me-auto')); ?>
                    <nav class="navigation d-flex align-items-center flex-fill justify-content-end justify-content-xl-between">
                        <?php 
                            wp_nav_menu( 
                                array( 
                                    'theme_location' => 'main', 
                                    'menu_class' => 'd-none d-xl-flex align-items-center flex-fill',   
                                    'container' => false, 
                                ) 
                            ); 
                        ?>
                        <?php if(get_field('wcf7__whatsapp_form_id', 'option')) : ?>
                            <?php get_template_part('template_parts/_btn', null, array( 
                                'classes' => 'whatsapp-btn primary',
                                'href' => 'javascript:void(0)',
                                'label' => 'Orçamento',
                                'icon' => 'fa-brands fa-whatsapp'
                            )); ?>
                        <?php endif; ?>
                        <button class="hamburger hamburger--collapse d-xl-none pe-0" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>    
                    </nav>
                </div>
            </div>
            <nav class="navigation mobile  d-flex flex-column justify-content-start align-items-center">
                <?php 
                    wp_nav_menu( 
                        array( 
                            'theme_location' => 'main', 
                            'menu_class' => 'd-flex flex-column justify-content-center align-items-center',   
                            'container' => false, 
                        ) 
                    ); 
                ?>
                <?php if(get_field('wcf7__whatsapp_form_id', 'option')) : ?>
                    <?php get_template_part('template_parts/_btn', null, array( 
                        'classes' => 'whatsapp-btn primary mt-auto',
                        'href' => 'javascript:void(0)',
                        'label' => 'Orçamento',
                        'icon' => 'fa-brands fa-whatsapp'
                    )); ?>                    
                <?php endif; ?>
                <?php get_template_part('template_parts/_btn', null, array( 
                    'classes' => 'secondary',
                    'href' => 'javascript:void(0)',
                    'label' => 'Suporte técnico',
                    'icon' => 'icon chat'
                )); ?>  
            </nav>
        </header>
        <main class="main">