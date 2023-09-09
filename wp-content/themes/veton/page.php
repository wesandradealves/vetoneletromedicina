<?php get_header(); ?>
<?php get_template_part('template_parts/_banner', null, array( 
    'body' => get_field('banner_body'),
    'background' => get_field('banner_background'),
    'image' => get_field('banner_image'),
)); ?>   
<?php if(get_the_content()) : ?>
    <section id="primary" class="ps-lg-5 pe-lg-5">
        <div class="container content">
            <?php 
                if ( have_posts() ) :
                    while ( have_posts() ) :
                        the_post(); 
                        the_content();
                    endwhile; 
                endif;
            ?>
        </div>
    </section>
<?php endif; ?>
<?php get_footer(); ?>