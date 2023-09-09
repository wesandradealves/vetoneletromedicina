    </main>
    <footer class="footer mt-auto">
        <?php if(get_field('footer_cta', 'option')) : ?>
            <div class="d-block footer-cta">
                <div class="container inner text-center">
                    <p class="d-block subtitle"><?php echo get_field('footer_cta_subtitulo', 'option'); ?></p>
                    <div class="d-block text">
                        <?php echo get_field('footer_cta_body', 'option'); ?>
                    </div>
                    <?php if(get_field('footer_cta_cta', 'option')) : ?>
                        <ul class="ctas d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center">
                            <?php foreach (get_field('footer_cta_cta', 'option') as $item) : ?>
                                <li class="me-sm-4 mb-4 mb-sm-0 col-12 col-sm-auto">
                                    <?php 
                                        get_template_part('template_parts/_btn', null, array(
                                            'classes' => $item['classes'],
                                            'href' =>  $item['url'],
                                            'label' => $item['label'],
                                            'icon' => $item['icon']
                                        ));                                    
                                    ?>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </div>
                <picture class="background">
                    <source srcset="<?php echo get_field('footer_cta_background', 'option'); ?>" media="(min-width: 568px)" >
                    <img loading="lazy" src="<?php echo get_field('footer_cta_background_mobile', 'option'); ?>" />
                </picture>   
            </div>
        <?php endif; ?>

        <div class="footer-top">
            <div class="container">
                <ul class="d-flex flex-wrap flex-column flex-lg-row align-items-center justify-content-between">
                    <?php if(get_field('contact_telefone', 'option')) : ?>
                        <li class="flex-fill d-flex align-items-center justify-content-center">
                            <i class="icon phone me-3"></i>
                            <span>
                                Comercial <a href="tel:<?php echo str_replace([':', '\\', '/', '*', '-', ' ', '.'], '', get_field('contact_telefone', 'option')); ?>"><?php echo get_field('contact_telefone', 'option'); ?></a>
                            </span>
                        </li>
                    <?php endif; ?>
                    <?php if(get_field('contact_email', 'option')) : ?>
                        <li class="flex-fill d-flex align-items-center justify-content-center">
                            <i class="icon envelope me-3"></i>
                            <span>
                                <a href="mailto:<?php echo get_field('contact_email', 'option'); ?>"><?php echo get_field('contact_email', 'option'); ?></a>
                            </span>
                        </li>
                    <?php endif; ?>
                    <?php if(get_field('contact_endereco', 'option')) : ?>
                        <li class="flex-fill d-flex align-items-center justify-content-center">
                            <i class="icon pin-mark me-3"></i>
                            <span class="flex-fill">
                                <?php echo get_field('contact_endereco', 'option'); ?>
                            </span>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <ul class="d-flex flex-wrap flex-column flex-lg-row align-items-center justify-content-center">
                    <li class="text-center ps-5 pe-5"><p>© <?php echo date('Y').' '.get_bloginfo('name'); ?> - Todos os direitos reservados.</p></li>
                    <?php 
                        $args = array("post_type" => "page", "name" => 'politica-de-privacidade');
                        $page = get_posts( $args ); 
                        $page = reset($page);
                        if($page) :     
                    ?>
                    <li><a title="Política de privacidade" href="<?php echo get_permalink($page->ID); ?>"><?php echo $page->post_title; ?></a></li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>        
    </footer>
    <?php get_template_part('template_parts/_whatsapp'); ?> 
</div>
<?php wp_footer(); ?>
</body>
</html>