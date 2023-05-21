let register = document.getElementById('form')

register.addEventListener('submit',(f)=>{
    f.preventDefault()
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let repassword = document.getElementById('repassword')
    let gender = document.getElementById('gender')
    let message = document.getElementById('message')
    message.innerHTML =''

    //name
    if(name.value.length>30 || name.value.length<2){
        message.innerHTML='Name must be between 2 until 30 characters'
        return
    }

    //email
    if(!validasiEmail(email.value)){
        message.innerHTML = 'Email must include @ and .com '
        return
    }

    //pass
    if(password.value.length>15 || password.value.length<8){
        message.innerHTML='Password must be between 8 until 15 characters'
        return
    }

    //repass
    if(repassword.value != password.value){
        message.innerHTML='Confirm Your Password    '
        return
    }

    //gender
    if(gender.value == ''){
        message.innerHTML='Select gender'
        return
    }

    //terms1
    if(!terms1.checked){
        message.innerHTML='Agree Terms of Service'
        return
    }

    //terms2
    if(!terms2.checked){
        message.innerHTML='Agree Privacy Policy'
        return
    }

})

function validasiEmail(email){
    return email.indexOf('@') != -1 && email.endsWith('.com')
}
