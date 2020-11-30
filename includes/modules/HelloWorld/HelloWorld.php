<?php

class RESL_HelloWorld extends ET_Builder_Module {

	public $slug       = 'resl_hello_world';
	public $vb_support = 'on';

	protected $module_credits = array(
		'module_uri' => '',
		'author'     => 'Ingimar',
		'author_uri' => 'ingimar.dk',
	);

	public function init() {
		$this->name = esc_html__( 'Hello World', 'resl-review-slider' );
	}

	public function get_fields() {
		return array(
			'content' => array(
				'label'           => esc_html__( 'Content', 'resl-review-slider' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Content entered here will appear inside the module.', 'resl-review-slider' ),
				'toggle_slug'     => 'main_content',
			),
		);
	}

	public function render( $attrs, $content = null, $render_slug ) {
		return sprintf( '<h1>%1$s</h1>', $this->props['content'] );
	}
}

new RESL_HelloWorld;
