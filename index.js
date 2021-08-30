// var API_tu_vung = 'https://demo-apps-en.herokuapp.com/list'
// var API_ngu_phap = 'https://demo-apps-en.herokuapp.com/ngu_phap'
// var API_gop_y = "https://demo-apps-en.herokuapp.com/gop_y"
// var API_dang_nhap ='https://demo-apps-en.herokuapp.com/user'
// var API_dang_ki ='https://demo-apps-en.herokuapp.com/user'

var API_tu_vung = 'http://localhost:3000/list'
var API_ngu_phap = 'http://localhost:3000/ngu_phap'
var API_gop_y = "http://localhost:3000/gop_y"
var API_dang_nhap ='http://localhost:3000/user'
var API_dang_ki ='http://localhost:3000/user'

//Phần API_tu_vung từ vựng
function batDau_tu_vung()
{
    layDuLieu_tu_vung(xuatDuLieu_tu_vung);
    xuLi_tu_vung();
}
batDau_tu_vung();

function layDuLieu_tu_vung(callback)
{
    fetch(API_tu_vung)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_tu_vung(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
           },
    }

    fetch(API_tu_vung,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xoaDuLieu_tu_vung(id)
{
    var opption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
           },
    }

    fetch(API_tu_vung + '/' + id,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(function()
        {
            layDuLieu_tu_vung(xuatDuLieu_tu_vung);
        });
}

function xuatDuLieu_tu_vung(list)
{
    var htmls = list.map(function(lists)
    {
        return `<li class = "list-item-${lists.id}" id = list>
                    <h4 class = "lists-tuvung">${lists.tu_vung}</h4>
                    <div class = "lists-nghia"> 
                        <h4 >=> ${lists.nghia}</h4>
                        <button class = "Poiter" onclick = "xoaDuLieu_tu_vung(${lists.id})">x</button>
                    </div>
                </li>`
    })

    document.querySelector('.content_list').innerHTML = htmls.join('');
}

function xuLi_tu_vung()
{
    var xuLi_tu_vung = document.querySelector('.content--create')
    xuLi_tu_vung.onclick = function()
    {
        var tu_vung = document.querySelector('.input1_tu').value;
        var nghia = document.querySelector('.input2_nghia').value;
        formData = {
            tu_vung:tu_vung,
            nghia:nghia,
        }
        taoDuLieu_tu_vung(formData,function()
        {
            layDuLieu_tu_vung(xuatDuLieu_tu_vung);
        })
    }
}

// Phần API ngữ pháp
function batDau_ngu_phap()
{
    layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
    xuLi_ngu_phap();
}
batDau_ngu_phap();

function layDuLieu_ngu_phap(callback)
{
    fetch(API_ngu_phap)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_ngu_phap(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
           },
    }

    fetch(API_ngu_phap,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xoaDuLieu_ngu_phap(id)
{
    var opption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
           },
    }

    fetch(API_ngu_phap + '/' + id,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(function()
        {
            layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
        });
}

function xuatDuLieu_ngu_phap(ngu_phap)
{
    var htmls = ngu_phap.map(function(pramas)
    {
        return `<li class = "prame_temp">
                    <h4>${pramas.ten}</h4>
                    <h4>Cấu trúc: ${pramas.cau_truc}</h4>
                    <h4>Cách dùng: ${pramas.cach_dung}</h4>
                    <button class = "pramas Poiter " onclick = "xoaDuLieu_ngu_phap(${pramas.id})">Xóa</button>
                </li>`
    })

    document.querySelector('.content_list2').innerHTML = htmls.join('');
}

function xuLi_ngu_phap()
{
    var xuLi_ngu_phap = document.querySelector('.content2--create')
    xuLi_ngu_phap.onclick = function()
    {
        var ten = document.querySelector('.input1_ten').value;
        var cau_truc = document.querySelector('.input2-cauTruc').value;
        var cach_dung = document.querySelector('.input2-cachDung').value;
        formData = {
            ten: ten,
            cau_truc: cau_truc,
            cach_dung: cach_dung,
        }
        taoDuLieu_ngu_phap(formData,function()
        {
            layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
        })
    }
}

//Phần API góp ý
function batDau_gop_y()
{
    xuLi_gop_y();
}
batDau_gop_y();

function taoDuLieu_gop_y(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
        },
    }

    fetch(API_gop_y,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xuLi_gop_y()
{
    var xuLi_gop_y = document.querySelector('.gop_y--create')
    xuLi_gop_y.onclick = function()
    {
        var ten = document.querySelector('.gop_y_tu1').value;
        var cmt = document.querySelector('.gop_y2_cmt').value;
        formData = {
            ten: ten,
            cmt: cmt
        }
        taoDuLieu_gop_y(formData,function()
        {
            location.reload();
        })
        alert("Cảm ơn bạn đã đóng góp ý kiến.");
    }
}

//Xử lí động
var gop_y_tu = document.querySelector('.gop_y_tu1');
var gop_y2_cmt = document.querySelector('.gop_y2_cmt');
var xuLi_gop_y = document.querySelector('.gop_y--create');
xuLi_gop_y.disabled = true;

gop_y_tu.oninput = function()
{
    gop_y2_cmt.oninput = function(){
        if(gop_y_tu.value != "" && gop_y2_cmt != "")  
        {
            xuLi_gop_y.classList.add('Poiter');
            xuLi_gop_y.disabled = false;
        }
    }
}

gop_y2_cmt.oninput = function()
{
    gop_y_tu.oninput = function(){
        if(gop_y_tu.value != "" && gop_y2_cmt != "")  
        {
            xuLi_gop_y.classList.add('Poiter');
            xuLi_gop_y.disabled = false;
        }
    }
}

//Phần API đăng nhập
function batDau_dang_nhap()
{
    xuLi_dang_nhap();
}
batDau_dang_nhap();

function layDuLieu_dang_nhap(callback)
{
    fetch(API_dang_nhap)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_dang_nhap(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
           },
    }

    fetch(API_dang_nhap,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xuLi_dang_nhap()
{
    var dang_nhap = document.querySelector('.create_dang_nhap')
    dang_nhap.onclick = function()
    {
        var dang_nhap_ten = document.querySelector('.dang_nhap1_ten');
        var dang_nhap_pass = document.querySelector('.dang_nhap1_password');
        var nosucces = document.querySelector('.nosuccses');
        var admin = document.querySelector('.header-thong_tin_1');
        var header_thong_tin_user_1DN = document.querySelector('.header-thong_tin_user_1');
        var header_thong_tin_1DN =document.querySelector('.header-thong_tin_1');
        var thong_tin_user_adminDN = document.querySelector('.thong_tin_user_admin');

        layDuLieu_dang_nhap(check)
        function check(user)
        {
            var checkten = user.findIndex(function(users)
            {
                return users.ten === dang_nhap_ten.value;
            })

            if(checkten != -1)
            {
                var checkPast = user.find(function(userss)
                {
                    return userss.id === (checkten + 1);
                })
                if(checkPast.password == dang_nhap_pass.value)
                {
                    var headerXL = document.querySelector('.header');

                    var header_secondXL = document.querySelector('.header_second');
                    var body_cmtXL = document.querySelector('.body_cmt');
                    var footerXL = document.querySelector('.footer');
                    var danhGiaXL = document.querySelector('#danhGia');
                    var dang_nhapXL = document.querySelector('#dang_nhap');
                    var dang_kiXL = document.querySelector('#dang_ki');
                    headerXL.classList.remove('noneDisplay');
                    header_secondXL.classList.remove('noneDisplay');
                    body_cmtXL.classList.remove('noneDisplay');
                    footerXL.classList.remove('noneDisplay');
                    dang_nhapXL.classList.remove('Display')

                    header_thong_tin_user_1DN.classList.add('Display');
                    header_thong_tin_1DN.classList.add('noneDisplay')

                    thong_tin_user_adminDN.innerHTML = checkPast.ten;
                    document.cookie = checkPast.ten;
                    
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

var thong_tin_user_adminDN = document.querySelector('.thong_tin_user_admin');
var header_thong_tin_user_1DN = document.querySelector('.header-thong_tin_user_1');
var header_thong_tin_1DN =document.querySelector('.header-thong_tin_1');
thong_tin_user_adminDN.innerHTML = document.cookie;

if(document.cookie != "")
{
    header_thong_tin_user_1DN.classList.add('Display');
    header_thong_tin_1DN.classList.add('noneDisplay')
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

//Phần API đăng kí
function batDau_dang_ki()
{
    xuLi_dang_ki();
}
batDau_dang_ki();

function layDuLieu_dang_ki(callback)
{
    fetch(API_dang_ki)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_dang_ki(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
           },
    }

    fetch(API_dang_ki,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xuLi_dang_ki()
{
    var dang_ki = document.querySelector('.create_dang_ki')
    var dang_ki_ten = document.querySelector('.dang_ki1_ten');
    var dang_ki_pass = document.querySelector('.dang_ki1_password');
    var nosucces = document.querySelector('.checkTen');
    dang_ki.onclick = function()
    {
        layDuLieu_dang_ki(check)
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
                taoDuLieu_dang_ki(formData,function()
                {
                    location.reload();
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

//Xử lí chung
var headerXL = document.querySelector('.header');

var header_secondXL = document.querySelector('.header_second');
var body_cmtXL = document.querySelector('.body_cmt');
var footerXL = document.querySelector('.footer');
var danhGiaXL = document.querySelector('#danhGia');
var dang_nhapXL = document.querySelector('#dang_nhap');
var dang_kiXL = document.querySelector('#dang_ki');

var header_second_cmt1 = document.querySelector('.header_second--cmt1');
var nut_dang_nhap = document.querySelector('.nut_dang_nhap');
var nut_dang_ki = document.querySelector('.nut_dang_ki');

var danhGia_thoat = document.querySelector('.danhGia_thoat');
var dang_nhap_thoat = document.querySelector('.dang_nhap_thoat');
var dang_ki_thoat = document.querySelector('.dang_ki_thoat');

var dang_ki_chuyenXL = document.querySelector('.dang_ki_chuyen');
var dang_nhap_chuyenXL =document.querySelector('.dang_nhap_chuyen');


//thoát

danhGia_thoat.onclick = function()
{
    location.reload();
}

dang_nhap_thoat.onclick = function()
{
    location.reload();
}

dang_ki_thoat.onclick = function()
{
    location.reload();
}

//chuyển

dang_ki_chuyenXL.onclick = function()
{
    dang_kiXL.classList.add('Display');
    dang_nhapXL.classList.remove('Display')
}

dang_nhap_chuyenXL.onclick = function()
{
    dang_nhapXL.classList.add('Display')
    dang_kiXL.classList.remove('Display')
}

//đánh giá
header_second_cmt1.onclick = function()
{
    headerXL.classList.add('noneDisplay');
    header_secondXL.classList.add('noneDisplay');
    body_cmtXL.classList.add('noneDisplay');
    footerXL.classList.add('noneDisplay');
    danhGiaXL.classList.add('Display');
}

//đăng nhập
nut_dang_nhap.onclick = function()
{
    headerXL.classList.add('noneDisplay');
    header_secondXL.classList.add('noneDisplay');
    body_cmtXL.classList.add('noneDisplay');
    footerXL.classList.add('noneDisplay');
    dang_nhapXL.classList.add('Display');
}

//đăng kí

nut_dang_ki.onclick = function()
{
    headerXL.classList.add('noneDisplay');
    header_secondXL.classList.add('noneDisplay');
    body_cmtXL.classList.add('noneDisplay');
    footerXL.classList.add('noneDisplay');
    dang_kiXL.classList.add('Display');
}

//Phần API user
