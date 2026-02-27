jQuery.validator.addMethod("checkEmail", function(e, a) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
}, " Email is invalid."), jQuery.validator.addMethod("phoneNumber", function(e, a) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(e)
}, "should contain only number."), $(document).on("submit", "form", function(e) {
    if ($(this).hasClass("no-submit")) return e.preventDefault(), !1
});
$(".contactForm").validate({
    rules: {
        name: {
            required: !0
        },
        phone: {
            number: !0,
            required: !0
        },
        email: {
            checkEmail: !0
        }
    },
    submitHandler: function(e) {
        var fname = $(e).find("[name='fname']").val(),
            lname = $(e).find("[name='lname']").val(),
            email = $(e).find("[name='email']").val(),
            phone = $(e).find("[name='phone']").val(),
            msg = $(e).find("[name='msg']").val();
        return $.ajax({
            type: "POST",
            url: "email.php?action=contact",
            data: {
                fname: fname,
                lname: lname,
                email: email,
                phone: phone,
                msg: msg
            },
            success: function(a) {

                if (a == 'success') {
                    $('.contactForm').trigger("reset");
                    $("#contactFormResult").addClass("alert alert-success").html("Thank you! Your message has been successfully sent");
                    $("#contactFormResult").fadeIn();
                    $("#contactFormResult").delay(1500).fadeOut();
                }                
            }
        }), !1
    }
});
$(".newsletterForm").validate({
    rules: {        
        email: {
            checkEmail: !0
        }
    },
    submitHandler: function(e) {
        var email = $(e).find("[name='email']").val();            
        return $.ajax({
            type: "POST",
            url: "email.php?action=newsletter",
            data: {
                email: email
            },
            success: function(a) {
                if (a == 'success') {
                    $('.newsletterForm').trigger("reset");
                    $("#newsletterFormResult").addClass("alert alert-success").html("Thank you! Your message has been successfully sent");
                    $("#newsletterFormResult").fadeIn();
                    $("#newsletterFormResult").delay(1500).fadeOut();
                }                
            }
        }), !1
    }
});