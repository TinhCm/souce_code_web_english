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
    var dang_nhap = document.querySelector('.create_dang_nhap')
    dang_nhap.onclick = function()
    {
        var dang_nhap_ten = document.querySelector('.dang_nhap1_ten');
        var dang_nhap_pass = document.querySelector('.dang_nhap1_password');
        var nosucces = document.querySelector('.nosuccses');
        var admin = document.querySelector('.header-thong_tin_1')

        console.log(dang_nhap_pass.value)
        layDuLieu(check)
        function check(user)
        {
            var checkten = user.findIndex(function(users)
            {
                return users.ten === dang_nhap_ten.value;
            })

            console.log(checkten);

            if(checkten != -1)
            {
                console.log(checkten)
                var checkPast = user.find(function(userss)
                {
                    return userss.id === (checkten + 1);
                })
                if(checkPast.password == dang_nhap_pass.value)
                {
                    window.location.href='/index.html';
                }
                else
                {
                    nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                }
            }
            else{
                nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
            }
        }
    }
}

//Xử lí động
var dang_nhap = document.querySelector('.create_dang_nhap');
var dang_nhap_ten = document.querySelector('.dang_nhap1_ten');
var dang_nhap_pass = document.querySelector('.dang_nhap1_password');
dang_nhap.disabled = true;

dang_nhap_ten.oninput = function()
{
    dang_nhap_pass.oninput = function(){
        if(dang_nhap_pass.value != "" && dang_nhap_ten != "")  
        {
            dang_nhap.classList.add('Poiter');
            dang_nhap.disabled = false;
        }
    }
}

dang_nhap_pass.oninput = function()
{
    dang_nhap_ten.oninput = function(){
        if(dang_nhap_ten.value != "" && dang_nhap_ten != "")  
        {
            dang_nhap.classList.add('Poiter');
            dang_nhap.disabled = false;
        }
    }
}
