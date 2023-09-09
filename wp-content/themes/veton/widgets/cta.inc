<?php

// Creating the widget
class wpb_widget extends WP_Widget
{

    // The construct part
    function __construct()
    {
        parent::__construct(

            // Base ID of your widget
            'wpb_widget',

            // Widget name will appear in UI
            __('CTA', 'wpb_widget_domain'),

            // Widget description
            array(
                'description' => __('', 'wpb_widget_domain'),
            )
        );
    }

    // Creating widget front-end
    public function widget($args, $instance)
    {
        global $wp_query;

        $title = apply_filters('widget_title', $instance['title']);
        $allowed = get_field('paginas', 'widget_' . $args['widget_id']);

        if ($wp_query->get_queried_object()->post_type) {
            $id = $wp_query->get_queried_object()->ID;
            if (in_array($id, $allowed)) {
                echo $args['before_widget'];
                ?>
                <style>
                    #<?php echo $args['widget_id']; ?> {
                        color: <?php echo get_field('textcolor', 'widget_' . $args['widget_id']); ?>;
                    }
                </style>
                <div class="inner d-flex align-items-center justify-content-between flex-wrap"
                    style="background-color: <?php echo get_field('background', 'widget_' . $args['widget_id']); ?>">
                    <div class="col-12 col-lg-6 info text-center text-lg-start">
                        <?php if (get_field('subtitulo', 'widget_' . $args['widget_id'])): ?>
                            <p class="d-block subtitle">
                                <?php echo get_field('subtitulo', 'widget_' . $args['widget_id']); ?>
                            </p>
                        <?php endif; ?>
                        <?php if(get_field('titulo_customizado', 'widget_' . $args['widget_id'])) : ?>
                            <div class="d-block title">
                                <?php echo get_field('titulo_customizado', 'widget_' . $args['widget_id']); ?>
                            </div>
                        <?php elseif($instance['title']) : ?>
                            <h3 class="d-block title">
                                <?php echo __($instance['title'], 'wpb_widget_domain'); ?>
                            </h3>
                        <?php endif; ?>
                        <?php if (get_field('texto', 'widget_' . $args['widget_id'])): ?>
                            <div class="d-block text">
                                <?php echo get_field('texto', 'widget_' . $args['widget_id']); ?>
                            </div>
                        <?php endif; ?>
                        <?php
                        if (get_field('cta', 'widget_' . $args['widget_id'])) {
                            get_template_part('template_parts/_btn', null, array(
                                'classes' => 'helper me-auto mt-4',
                                'href' => get_field('cta_url', 'widget_' . $args['widget_id']),
                                'label' => get_field('cta_label', 'widget_' . $args['widget_id']),
                                'icon' => 'fa-solid fa-angle-right',
                                'transparent' => get_field('cta_transparente', 'widget_' . $args['widget_id']) ? get_field('cta_transparente', 'widget_' . $args['widget_id']) : false
                            )
                            );
                        }
                        ?>
                    </div>
                    <?php if (get_field('thumbnail', 'widget_' . $args['widget_id'])): ?>
                        <div class="flex-fill d-flex align-items-center justify-content-center d-none d-lg-block">
                            <img loading="lazy" src="<?php echo get_field('thumbnail', 'widget_' . $args['widget_id']); ?>"
                                class="d-block m-auto img-fluid" />
                        </div>
                    <?php endif; ?>
                </div>
                <?php

                echo $args['after_widget'];
            }
        }
    }

    // Creating widget Backend
    public function form($instance)
    {
        if (isset($instance['title'])) {
            $title = $instance['title'];
        } else {
            $title = __('New title', 'wpb_widget_domain');
        }
        // Widget admin form
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>"
                name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
        </p>
        <?php
    }

    // Updating widget replacing old instances with new
    public function update($new_instance, $old_instance)
    {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
        return $instance;
    }

    // Class wpb_widget ends here
}

add_action('in_widget_form', 'show_widget_id');

function show_widget_id($widget_instance)
{
    echo "<p><strong>Widget ID: </strong>" . $widget_instance->id . "</p>";
}