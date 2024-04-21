function functionLogin() {
    debugger
    var txtEmailBox = document.getElementById("txtEmail");
    var txtPasswordBox = document.getElementById("txtPassword");
    var txtEmail = txtEmailBox.value; debugger
    var txtPassword = txtPasswordBox.value;
    if (txtEmail != '' && txtPassword != '') {
        window.location.href = "/Home/Index";
    }
    else {
        functionLoginValidation()
    }
}
function functionLoginValidation() {
    var txtEmailBox = document.getElementById("txtEmail");
    var txtPasswordBox = document.getElementById("txtPassword");
    var txtEmail = txtEmailBox.value; 
    var txtPassword = txtPasswordBox.value;
    if (txtEmail == '') {
        txtEmailBox.style.borderColor = "red";
    }
    else {
        txtEmailBox.style.borderColor = "green";
    }
    if (txtPassword == '') {
        txtPasswordBox.style.borderColor = "red";
    }
    else {
        txtPasswordBox.style.borderColor = "green";
    }
    if (txtEmail != '' && txtPassword != '') {

    }
};

var txtOTP = document.getElementById("txtOTP");
var txtPassword = document.getElementById("txtPassword");
var txtPasswordConfirm = document.getElementById("txtPasswordConfirm");
var btnResetPassword = document.getElementById("btnResetPassword");
var btnSendReset = document.getElementById("btnSendReset");
var txtReturnOTPVal = "12345678";
function functionForgotPasswordLoad() {
    txtOTP.disabled = true;
    txtPassword.disabled = true;
    txtPasswordConfirm.disabled = true;
    btnResetPassword.disabled = true;
    btnSendReset.disabled = true;
}
function functionEmailEnter() {
    var txtEmailBox = document.getElementById("txtEmail");
    var txtEmail = txtEmailBox.value;
    if (txtEmail == '') {
        btnSendReset.disabled = true;
        txtEmailBox.style.borderColor = "red";
    }
    else {
        btnSendReset.disabled = false;
        txtEmailBox.style.borderColor = "green";
    }
}

function functionSendResetLink() {
    txtOTP.disabled = false;
    txtReturnOTPVal="11111111"
}

function functionOTPEnter() {
    var txtOTPval = txtOTP.value;
    if (txtOTPval.length == 8) {
        if (txtReturnOTPVal == txtOTPval) {
            txtPassword.disabled = false;
            txtPasswordConfirm.disabled = false;
        }
        else {
            txtPassword.disabled = true;
            txtPasswordConfirm.disabled = true;
        }
    }
}

var txtPasswordval = "";
var txtConfirmPasswordval = "";

function functionPasswordEnter() {
    txtPasswordval = txtPassword.value;
    txtConfirmPasswordval = txtPasswordConfirm.value;
    if (txtPasswordval == txtConfirmPasswordval) {
        btnResetPassword.disabled = false;
    }
    else {
        btnResetPassword.disabled = true;
    }
}
function functionConfirmPasswordEnter() {
    txtPasswordval = txtPassword.value;
    txtConfirmPasswordval = txtPasswordConfirm.value;
    if (txtPasswordval == txtConfirmPasswordval) {
        btnResetPassword.disabled = false;
    }
    else {
        btnResetPassword.disabled = true;
    }
}

function functionResetPassword() {
    var txtOTPval = txtOTP.value;
    txtPasswordval = txtPassword.value;
    txtConfirmPasswordval = txtPasswordConfirm.value;
    if (txtReturnOTPVal == txtOTPval && txtPasswordval == txtConfirmPasswordval) {
        window.location.href = "/Account/Index";
    }
    else {
        alert("Invalid OTP, Please try again.");
        window.location.href = "/Account/FogotPassword";
    }
    
}