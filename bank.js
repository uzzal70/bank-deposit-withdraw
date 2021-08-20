document.getElementById('login-submit').addEventListener(
    'click', function ()
{
    //get user Email
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    //console.log(userEmail);

    //get user password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;

    if (userEmail == 'uzzal@gmail.com' && userPassword == 'uzzal') {
        //console.log('valid user');
        window.location.href = "banking.html";

    }
    else {
        console.log('Not founded');
    }
});
