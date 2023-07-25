//Tham khảo các kí tự, các hàm và các kiến thức khác 
//tại https://regexr.com/
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const phone = document.querySelector('#phone');
const mssv = document.querySelector('#MSSV');

// {6,30} độ dài từ 6 - 30 
// ?=.* có nghĩa bắt buộc phải có 
// [a-z0-9] kí tự từ a-z 0-9
// /^  $/ bắt đầu và kết thúc 1 chuỗi
// {9} có đúng 9 kí tự
// {6,} từ 6 kí tự trở lên
// . bất kì kí tự nào trừ newline
function registerValidate() {
    if (checkUsername() & checkPassword() & checkPhone() & checkmssv()) {
        return true;
    }
    return false;
}
function checkmssv() {
    const regex = /^([1-9][0-9]{4})([a-zA-Z]{2})([1-9][0-9]{3})$/;
    if (regex.test(mssv.value)) {
        mssv.classList.add('is-valid');
        mssv.classList.remove('is-invalid');
        return true;
    }
    mssv.classList.add('is-invalid');
    mssv.classList.remove('is-valid');
    return false;
}
function checkUsername() {
    
    const regex = /^[a-z0-9]{6,30}$/;
    if (regex.test(username.value)) {
        username.classList.add('is-valid');
        username.classList.remove('is-invalid');
        return true;
    }
    username.classList.add('is-invalid');
    username.classList.remove('is-valid');
    return false;
}
function checkPassword() {
    
    const regex = /^(?=.*[0-9])(?=.*[A-Z]).{6,}$/;
    if (regex.test(password.value)) {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
        return true;
    }
    password.classList.add('is-invalid');
    password.classList.remove('is-valid');
    return false;
}
function checkPhone() {
    const regex = /^(\+84|0)[0-9]{9}$/;
    if (regex.test(phone.value)) {
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        return true;
    }
    phone.classList.add('is-invalid');
    phone.classList.remove('is-valid');
    return false;
}

//focusout khi đưa chuột ra khỏi ô cần thao tác
mssv.addEventListener('input', checkmssv);
mssv.addEventListener('focusout', checkmssv);
username.addEventListener('input', checkUsername);
username.addEventListener('focusout', checkUsername);
password.addEventListener('input', checkPassword);
password.addEventListener('focusout', checkPassword);
phone.addEventListener('input', checkPhone);
phone.addEventListener('focusout', checkPhone);