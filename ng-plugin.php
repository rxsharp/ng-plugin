<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              rickg.me
 * @since             1.0.0
 * @package           Ng_Plugin
 *
 * @wordpress-plugin
 * Plugin Name:       ng-plugin
 * Plugin URI:        rickg.me
 * Description:       An angular app in wordpres
 * Version:           1.0.0
 * Author:            Rick G
 * Author URI:        rickg.me
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ng-plugin
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-ng-plugin-activator.php
 */
function activate_ng_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-ng-plugin-activator.php';
	Ng_Plugin_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-ng-plugin-deactivator.php
 */
function deactivate_ng_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-ng-plugin-deactivator.php';
	Ng_Plugin_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_ng_plugin' );
register_deactivation_hook( __FILE__, 'deactivate_ng_plugin' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-ng-plugin.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_ng_plugin() {

	$plugin = new Ng_Plugin();
	$plugin->run();

}
run_ng_plugin();

// Hook in all the important things
function angular_scripts() {
    // Get plugin stylesheet
		wp_enqueue_style( 'angular-styles', plugin_dir_url( __FILE__ ) . 'app/css/main.css', array(), '0.1', 'all' );
		wp_enqueue_script( 'angular', plugin_dir_url( __FILE__ ) . 'app/js/angular.js', array('jquery'), '0.1', false );
		wp_enqueue_script( 'ui-router', plugin_dir_url( __FILE__ ) . 'app/js/angular-ui-router.js', array('angular'), '0.1', false );
		wp_enqueue_script( 'angular-resource', plugin_dir_url( __FILE__ ) . 'app/js/angular-resource.js', array('angular'), '0.1', false );
		wp_enqueue_script( 'angular-animate', plugin_dir_url( __FILE__ ) . 'app/js/angular-animate.js', array('angular'), '0.1', false );
		wp_enqueue_script( 'angular-directives', plugin_dir_url( __FILE__ ) . 'app/js/directives.js', array('angular'), '0.1', false );

		wp_enqueue_script( 'ngScripts', plugin_dir_url( __FILE__ ) . 'app/js/app.js', array( 'ui-router' ), '1.0', true );
		wp_localize_script( 'ngScripts', 'appInfo',
			array(
				'home_url'			 => '',
				'api_url'			 => rest_get_url_prefix() . '/wp/v2/',
				'template_directory' => plugin_dir_url( __FILE__ ) . '/',
				'nonce'				 => wp_create_nonce( 'wp_rest' ),
				'is_admin'			 => current_user_can('administrator')
				
			)
		);

}
add_action( 'wp_enqueue_scripts', 'angular_scripts' );