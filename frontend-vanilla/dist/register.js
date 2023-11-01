"use strict";
let full_name = document.getElementById('full_name');
let email = document.getElementById('email');
let id_no = document.getElementById('id_no');
let phone_no = document.getElementById('phone_no');
let kra_pin = document.getElementById('kra_pin');
let nhif = document.getElementById('nhif');
let nssf = document.getElementById('nssf');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');
let reg_form = document.getElementById('registration-form');
reg_form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = full_name.value;
    let user_email = email.value;
    let ID_number = id_no.value;
    let phone = phone_no.value;
    let KRA = kra_pin.value;
    let NHIF = nhif.value;
    let NSSF = nssf.value;
    let pass = password.value;
    let confirm_pass = confirm_password.value;
    let state = name.trim() != '' && user_email.trim() != '' && ID_number.trim() != '' && phone.trim() != '' && KRA.trim() != '' && NHIF.trim() != '' && NSSF.trim() != '' && pass.trim() != '' && confirm_pass.trim() != '';
    if (state) {
        if (pass == confirm_pass) {
            const promise = new Promise((resolve, reject) => {
                fetch('http://localhost:4400/employee/register', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "name": name,
                        "email": user_email,
                        "phone_no": phone,
                        "id_no": ID_number,
                        "KRA_PIN": KRA,
                        "NHIF_NO": NHIF,
                        "NSSF_NO": NSSF,
                        "password": pass
                    })
                }).then((res => res.json())).then(data => {
                    console.log(data);
                    gotoLogin();
                    resolve(data);
                }).catch(error => {
                    console.log(error);
                });
            });
            function gotoLogin() {
                location.href = 'login.html';
            }
        }
        else {
            console.log('Password mismatch');
        }
    }
});
