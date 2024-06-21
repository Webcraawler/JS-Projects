
const form_container = document.querySelector('.form_container')

//-------------selecting the login and signup button on res pages--------
const login_btn = document.querySelector('.login-btn')
const signup_btn = document.querySelector('.signup-btn')


//-------------selecting the login and signup form------------
const login_form = document.querySelector('.login_form')
const signup_form = document.querySelector('.signup_form')



//--------login button on web for opening the login form-----------
const formOpen_btn = document.querySelector('.login')

formOpen_btn.addEventListener('click',function(e){
    e.preventDefault();
    form_container.style.display = 'block'
})


//--------for closing the form by clicking on the cross------
const form_close = document.querySelector('.form_close')


form_close.addEventListener('click',function(e){
    e.preventDefault();
    form_container.style.transform = `all ${0.4}s ease-out`
    form_container.style.display = 'none'

    emailVal.value = ""
    passVal.value = ""
})




// -------to change between login page and signup page--------
const newAcc = document.querySelector('#signup')
const loginAcc = document.querySelector('#login')


newAcc.addEventListener('click',function(e){
    e.preventDefault();
    login_form.style.display = 'none'
    signup_form.style.display = 'block'
})

loginAcc.addEventListener('click',function(e){
    e.preventDefault();
    login_form.style.display = 'block'
    signup_form.style.display = 'none'
})


//-----------------getting value login and password----------
const emailVal = document.querySelector('#loginEmail')
const passVal = document.querySelector('#loginPassword')

login_btn.addEventListener('click' , function(e){
    const email = emailVal.value.trim()
    const pass = passVal.value.trim()

    console.log(email)
    console.log(pass)
    // emailVal.value = ""
    // passVal.value = ""
})

//--------------hiding and showing the password-----------

const pwShowHide = document.querySelectorAll('.pw_hide')


pwShowHide.forEach((icon)=>{
    icon.addEventListener('click',(e)=>{
        e.preventDefault();
        let getPwInput = icon.parentElement.querySelector("input")

        if(getPwInput.type === "password"){
            getPwInput.type = "text"
            icon.classList.replace("uil-eye-slash", "uil-eye")
        }
        else{
            getPwInput.type = "password"
            icon.classList.replace("uil-eye", "uil-eye-slash")
        }
        // console.log(getPwInput)
    })
})