const btn = document.querySelector("#form-btn");

// const inputOne = document.querySelector(".name");
// const inputTwo = document.querySelector(".number");





function message(){

    
    const name = document.querySelector(".name").value;
    const number = document.querySelector(".number").value;
    if ((name === " ")||(number === " ")){
        alert ("Пожалуйста, введите Ваши данные и отправьте форму повторно")
    }
    
    else alert ("Форма успешно отправлена! Спасибо за обращение! Мы рассмотрим Вашу заявку в ближайшее время и свяжемся с Вами!")
    
}
btn.addEventListener("click", message());