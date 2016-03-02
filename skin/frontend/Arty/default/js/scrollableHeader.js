/**
 * Created by sneha on 5/2/16.
 */


jQuery(document).ready(function () {

    var navM = jQuery('#nav');
    var menu = jQuery('#cart');
    var logo = jQuery('#logox');
    var hdNv = jQuery('#headerNav');

    navM.addClass('default');
    pos = navM.offset();


    menu.addClass('default');
    posn = menu.offset();


    logo.addClass('default');
    pos1 = logo.offset();


    hdNv.addClass('default');
    pos2 = hdNv.offset();


    jQuery(window).scroll(function () {

        onscroll();

    });

    function onscroll() {
        <!-- navbar menu -->
        if (jQuery(this).scrollTop() > pos.top && navM.hasClass('default')) {

            navM.fadeOut(1, function () {

                jQuery(this).removeClass('default').addClass('fixednav')

                    .fadeIn('fast');

            });

        } else if (jQuery(this).scrollTop() <= pos.top && navM.hasClass('fixednav')) {

            navM.fadeOut(1, function () {

                jQuery(this).removeClass('fixednav').addClass('default').removeAttr('style').show();

            });

        }


        <!-- header navbar -->

        if (jQuery(this).scrollTop() > pos2.top && hdNv.hasClass('default')) {

            hdNv.fadeOut(1, function () {

                jQuery(this).removeClass('default').addClass('fixed')

                    .fadeIn('fast');

            });

        }
        else if (jQuery(this).scrollTop() <= pos2.top && hdNv.hasClass('fixed')) {

            hdNv.fadeOut(1, function () {

                jQuery(this).removeClass('fixed').addClass('default').removeAttr('style').show();

            });

        }

        <!-- cart -->
        if (jQuery(this).scrollTop() > posn.top && menu.hasClass('default')) {

            menu.fadeOut(1, function () {

                jQuery(this).removeClass('default').addClass('cart')

                    .fadeIn('fast');

            });

        }
        else if (jQuery(this).scrollTop() <= posn.top && menu.hasClass('cart')) {

            menu.fadeOut(1, function () {

                jQuery(this).removeClass('cart').addClass('default').removeAttr('style').show();

            });

        }

        <!-- logo -->
        if (jQuery(this).scrollTop() > pos1.top && logo.hasClass('default')) {

            logo.fadeOut(1, function () {

                jQuery(this).removeClass('default').addClass('logoxx')

                    .fadeIn('fast');

            });

        }
        else if (jQuery(this).scrollTop() <= pos1.top && logo.hasClass('logoxx')) {

            logo.fadeOut(1, function () {

                jQuery(this).removeClass('logoxx').addClass('default').removeAttr('style').show();

            });

        }


    }

    onscroll();

});

