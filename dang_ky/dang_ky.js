var API ='https://demo-apps-en.herokuapp.com/user'

function batDau()
{
    xuLi();
}
batDau();

function layDuLieu(callback)
{
    fetch(API)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
           },
    }

    fetch(API,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xuLi()
{
    var dang_ki = document.querySelector('.create_dang_ki')
    var dang_ki_ten = document.querySelector('.dang_ki1_ten');
    var dang_ki_pass = document.querySelector('.dang_ki1_password');
    var nosucces = document.querySelector('.checkTen');
    dang_ki.onclick = function()
    {
        layDuLieu(check)
        function check(user)
        {
            var checkten = user.findIndex(function(users)
            {
                return users.ten === dang_ki_ten.value;
            })

            console.log(checkten);

            if(checkten != -1)
            {
                console.log(checkten)
                nosucces.innerHTML = "Tên tài khoản đã tồn tại";
            }
            else{
                nosucces.innerHTML = "Tên đăng nhập đã tồn tại";
                var ten = document.querySelector('.dang_ki1_ten').value;
                var password = document.querySelector('.dang_ki1_password').value;
                formData = {
                    ten: ten,
                    password:password
                }
                taoDuLieu(formData,function()
                {
                    window.location.href='/dang_nhap/form_dang_nhap.html';
                })
                alert("Bạn đã đăng kí tài khoản thành công")
            }
        }
    }
}

//Xử lí động
var dang_ki = document.querySelector('.create_dang_ki');
var dang_ki_ten = document.querySelector('.dang_ki1_ten');
var dang_ki_pass = document.querySelector('.dang_ki1_password');
dang_ki.disabled = true;

dang_ki_ten.oninput = function()
{
    dang_ki_pass.oninput = function(){
        if(dang_ki_pass.value != "" && dang_ki_ten != "")  
        {
            dang_ki.classList.add('Poiter');
            dang_ki.disabled = false;
        }
    }
}

dang_ki_pass.oninput = function()
{
    dang_ki_ten.oninput = function(){
        if(dang_ki_ten.value != "" && dang_ki_ten != "")  
        {
            dang_ki.classList.add('Poiter');
            dang_ki.disabled = false;
        }
    }
}