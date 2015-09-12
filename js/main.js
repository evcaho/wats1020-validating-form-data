/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.
$(document).on('ready', function(){
// 2. Define a validation object for use on your page.
	  $('#order-form').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        rules: {
            "name": {
                required: true,
                maxlength: 128,
				lettersonly: true,
            },
            "state": {
                required: true,
                maxlength: 2,
            },
            "zipcode": {
				required: true,
                maxlength: 5,
				minlength: 5,
				digits: true
            },
			"address": {
				required: true,
            },
			"city": {
				required: true,
			},
            "card-holder-name": {
                required: true,
                maxlength: 128,
				lettersonly: true,
            },
            "card-number": {
                required: true,
                creditcard: true,
            },
            "cvv": {
                required: true,
                maxlength: 3,
				minlength: 3,
                digits: true
            }
        }
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});
// Refer to the `index.html` file for the validation rules that must be enforced.
