/*global colormag_script_vars, colormag_load_more*/
jQuery(document).ready(function () {

	// Load more content
	var tg_pagenumber       = 1;
	var tg_no_more_posts    = colormag_script_vars.no_more_posts;
	var tg_category         = jQuery('#tg-ajax-btn').data('category');
	var tg_number           = jQuery('#tg-ajax-btn').data('number');
	var tg_random           = jQuery('#tg-ajax-btn').data('random');

	jQuery('#tg-ajax-btn').on('click', function () {

		tg_pagenumber++;
		jQuery('#tg-ajax-loading-icon').show();
		jQuery('#tg-ajax-btn').attr('disabled', true);

		var tg_data = {
			action: 'get_ajax_results',
			tg_nonce: colormag_load_more.tg_nonce,
			tg_pagenumber: tg_pagenumber,
			tg_category: tg_category,
			tg_number: tg_number,
			tg_random: tg_random
		};

		jQuery.post(colormag_load_more.ajax_url, tg_data, function (response) {
			var tg_data = jQuery(response);

			if (tg_data.length) {
				jQuery('#tg-append-ajax-data').append(tg_data);
				jQuery('#tg-ajax-loading-icon').hide();
				jQuery('#tg-ajax-btn').attr('disabled', false);
			} else {
				jQuery('#tg-ajax-loading-icon').hide();
				jQuery('#tg-ajax-btn').attr('disabled', true);
				jQuery('#tg-ajax-btn').html( '<p>' + tg_no_more_posts + '</p>' );
			}
		});
		return false;
	});

});
