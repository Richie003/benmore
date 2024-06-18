$(document).ready(() => {
    $("input").addClass(`
    bg-white border border-gray-300 w-full text-sm pl-4 pr-10 py-2.5 rounded outline-blue-500
    `);
    // Add placeholders to each input fields
    $("input").each((index, element) => {
        switch (index) {
            case 1:
                $(element).attr("placeholder", "Username");
                break;
            case 2:
                $(element).attr("placeholder", "Email");
                break;
            case 3:
                $(element).attr("placeholder", "Password");
                break;
            case 4:
                $(element).attr("placeholder", "Confirm Password");
                break;
            default:
                break;
        }
    });
});
// Sign Up validations
$(document).on("submit", "#sign-up-form", (e) => {
    e.preventDefault();
    const formData = $("#sign-up-form").serialize();
    $.ajax({
        type: "POST",
        url: "/auths/sign-up/",
        data: formData,
        success: (response) => {
            if (response === "Success") {
                window.location = "/auths/sign-in/";
            } else if (response === "Error") {
                alert(
                    "An error occurred submitting the form please ensure all fields are filled."
                );
            }
        },
    });
});
// Check if username and email exists
$("#id_username").keyup(function () {
    let username = $(this).val();
    const info = $("#username-info");
    if (username.length > 0) {
        info.empty();
        $.ajax({
            type: "GET",
            url: "/auths/api/validations/", // Your URL to check username
            data: {
                username: username,
            },
            dataType: "json",
            success: function (data) {
                if (data.exists) {
                    info.text("Username already exists");
                    $("#id_username")
                        .removeClass("border-gray-300")
                        .addClass("border-red-400");
                }
            },
        });
    }
});

$("#id_email").keyup(function () {
    let email = $(this).val();
    const info = $("#email-info");
    if (email.length > 0) {
        info.empty();
        $.ajax({
            type: "GET",
            url: "/auths/api/validations/", // Your URL to check email
            data: {
                email: email,
            },
            dataType: "json",
            success: function (data) {
                if (data.exists) {
                    info.text("Email already exists");
                    $("#id_email")
                        .removeClass("border-gray-300")
                        .addClass("border-red-400");
                }
            },
        });
    }
});