// DZ 1

const emailElem = document.getElementById("form-email");
const phoneNumberElem = document.getElementById("form-phone-number");
const buttonElem = document.getElementById("form-submit");

const onSubmit = () => {
  const phoneNumberValue = phoneNumberElem.value;
  const email = emailElem.value;
  const phoneRegExp = /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
  const emailRegExp =/^\a-z,0-9,gmail.com $/;
  if (!phoneNumberValue.match(phoneRegExp)) {
    return alert("Некорректный номер телефона");
  }
  if (!emailRegExp.test(email)) {
    return alert("Некоректный Email");
  }
  alert("Данные успешно отправлены!");
};


buttonElem.addEventListener("click", onSubmit);

// DZ 2

const blockElem = document.getElementById("block");

const moveBlockToEnd = (px) => {

};

moveBlockToEnd(0);
