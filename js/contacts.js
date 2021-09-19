const nameInput = document.getElementById("callback_input_name")
const telInput = document.getElementById("callback_input_tel")
const emailInput = document.getElementById("callback_input_email")
const textareaInput = document.getElementById("callback_input_textarea")
const form = document.getElementById("callback_form")
const nameError = document.getElementById("callback_name_error")
const tellError = document.getElementById("callback_tell_error")
const emailError = document.getElementById("callback_email_error")
const textareaError = document.getElementById("callback_textarea_error")

form.addEventListener("submit" , (e) => {
    ShowError(e);
})

function ShowError(e)
{
    if(nameInput.value === "" || nameInput.value == null)
    {
        GetError(nameError, "Заповніть це поле", e)
    }

    else if(telInput.value === "" || telInput.value == null)//чи не пусте
    {
        GetError(tellError, "Заповніть це поле", e)
    }

    else if(!Number.isInteger(Number(telInput.value)))//чи є цілим числом
    {
        GetError(tellError, "Неправильно введено номер", e)
    }

    else if(!(Math.sign(Number(telInput.value)) === 1))//чи є не відємним числом
    {
        GetError(tellError, "Неправильно введено номер", e)
    }

    else if(telInput.value.length > 12 || telInput.value.length<10)//чи правильна довжина
    {
        GetError(tellError, "Неправильна довжина номеру", e)
    }

    else if(emailInput.value.indexOf("@", 0) === -1)
    {
        GetError(emailError, "Не валідний емейл", e)
    }

    else if(!(emailInput.value.indexOf("@", 0) > 0 && emailInput.value.indexOf("@", 0) < (emailInput.value.length-1)))
    {
        GetError(emailError, "Не валідний емейл", e)
    }

    else if(emailInput.value.slice(0, emailInput.value.indexOf("@", 0)+1).indexOf(" ") !=-1 || emailInput.value.slice(emailInput.value.indexOf("@", 0), emailInput.value.length).indexOf(" ") !== -1)
    {
        GetError(emailError, "Не валідний емейл", e)
    }

    else if(textareaInput.value.length > 400)
    {
        GetError(textareaError, "Введіть менше 400 символів", e)
    }

    // console.log(emailInput.value.slice(0, emailInput.value.indexOf("@", 0)+1));
    // e.preventDefault()

    // || emailInput.value.slice(emailInput.value.indexOf("@", 0), emailInput.value.length).indexOf(" ") !== -1)
}

function GetError(nameError, errorMes, e){
    e.preventDefault()
    nameError.innerText = errorMes
    nameError.style.visibility = "visible";
    nameError.style.opacity = "1"
}


nameInput.addEventListener("focus", () => {
    nameError.style.opacity = "0"
    nameError.style.visibility = "hidden";
})

telInput.addEventListener("focus", () => {
    tellError.style.opacity = "0";
    nameError.style.visibility = "hidden";
})

emailInput.addEventListener("focus", () => {
    emailError.style.opacity = "0";
    nameError.style.visibility = "hidden";
})

textareaInput.addEventListener("focus", () => {
    textareaError.style.opacity = "0";
    nameError.style.visibility = "hidden";
})