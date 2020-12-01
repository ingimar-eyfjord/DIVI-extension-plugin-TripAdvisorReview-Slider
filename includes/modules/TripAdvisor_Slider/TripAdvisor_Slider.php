<?php

class SIMP_TripAdvisor_Slider extends ET_Builder_Module {

	/**
	 * Enqueues non-minified, hot reloaded javascript bundles.
	 *
	 * @since 3.1
	 */
	protected function _enqueue_debug_bundles() {
		// Frontend Bundle
		$site_url       = wp_parse_url( get_site_url() );
		$hot_bundle_url = "http://localhost:3000/static/js/frontend-bundle.js";

		wp_enqueue_script( "{$this->name}-frontend-bundle", $hot_bundle_url, $this->_bundle_dependencies['frontend'], $this->version, true );

		if ( et_core_is_fb_enabled() ) {
			// Builder Bundle
			$hot_bundle_url = "http://localhost:3000/static/js/builder-bundle.js";

			wp_enqueue_script( "{$this->name}-builder-bundle", $hot_bundle_url, $this->_bundle_dependencies['builder'], $this->version, true );
		}
	}
	
	public $slug       = 'tripAdvisor_slider';
	public $vb_support = 'on';

	public function init() {
		$this->name = esc_html__( 'TripAdvisor Slider', 'TripAdvisor_Slider' );
		$this->fullwidth = true;
	}


	// function init() {
	// 	$this->name             = esc_html__( 'Fullwidth Header', 'et_builder' );
	// 	$this->plural           = esc_html__( 'Fullwidth Headers', 'et_builder' );
	// 	$this->slug             = 'et_pb_fullwidth_header';
	// 	$this->vb_support       = 'on';
	// 	$this->fullwidth        = true;
	// 	$this->main_css_element = '%%order_class%%';

	// public function get_fields() {
	// 	return array(
	// 		'heading'     => array(
	// 			'label'           => esc_html__( 'Heading', 'simp-simple-extension' ),
	// 			'type'            => 'text',
	// 			'option_category' => 'basic_option',
	// 			'description'     => esc_html__( 'Hello This is now working.', 'simp-simple-extension' ),
	// 			'toggle_slug'     => 'main_content',
	// 		),
	// 		'content'     => array(
	// 			'label'           => esc_html__( 'Content', 'simp-simple-extension' ),
	// 			'type'            => 'tiny_mce',
	// 			'option_category' => 'basic_option',
	// 			'description'     => esc_html__( 'Then theres something else happening.', 'simp-simple-extension' ),
	// 			'toggle_slug'     => 'main_content',
	// 		),
	// 	);
	// }

	// public function render( $unprocessed_props, $content = null, $render_slug ) {
	// 	return sprintf(
	// 		'<h1 class="simp-simple-header-heading">%1$s</h1>
	// 		<p>%2$s</p>',
	// 		esc_html( $this->props['heading'] ),
	// 		$this->props['content']
	// 	);
	// }
}

new SIMP_TripAdvisor_Slider;