"use strict";

$(function() {
    $(document).on('click', 'button.exclusive', function() {
        var $button = $(this);
        $button.removeClass('added').addClass('disabled').attr('disabled', 'disabled');
        setTimeout(function () {
            $button.removeClass('disabled').addClass('added').removeAttr('disabled');
        }, 1000);
    });
});
