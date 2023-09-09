<section data-layout="<?php echo $args['default'] ? 'default' : 'boxed'; ?>" class="banner" style="background: <?php echo $args['background'] ? $args['background'] : 'transparent'; ?>">
    <div class="container flex-column flex-md-row d-flex flex-wrap align-items-center">
        <div class="col-12 col-lg-4 info">
            <?php echo $args['body']; ?>
        </div>
        <?php if($args['body']) : ?>
        <div class="flex-fill d-none d-lg-block">
            <img class="ps-5 d-block img-fluid ms-auto" src="<?php echo $args['image']; ?>" />
        </div>
        <?php endif; ?>
    </div>
</section>