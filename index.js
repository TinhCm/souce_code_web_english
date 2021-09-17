// var API_tu_vung = 'https://demo-apps-en.herokuapp.com/list'
// var API_ngu_phap = 'https://demo-apps-en.herokuapp.com/ngu_phap'
// var API_gop_y = "https://demo-apps-en.herokuapp.com/gop_y"
// var API_dang_nhap ='https://demo-apps-en.herokuapp.com/user'
// var API_dang_ki ='https://demo-apps-en.herokuapp.com/user'

var API_tu_vung = 'https://demo-apps-en.glitch.me/list'
var API_ngu_phap = 'https://demo-apps-en.glitch.me/ngu_phap'
var API_gop_y = "https://demo-apps-en.glitch.me/gop_y"
var API_dang_nhap = 'https://demo-apps-en.glitch.me/user'
var API_dang_ki = 'https://demo-apps-en.glitch.me/user'
var API_hoc_bai = 'https://demo-apps-en.glitch.me/list'

// var API_tu_vung = 'http://localhost:3000/list'
// var API_ngu_phap = 'http://localhost:3000/ngu_phap'
// var API_gop_y = "http://localhost:3000/gop_y"
// var API_dang_nhap = 'http://localhost:3000/user'
// var API_dang_ki = 'http://localhost:3000/user'
// var API_hoc_bai = 'http://localhost:3000/list'

//Phần API_tu_vung từ vựng
function batDau_tu_vung() {
    layDuLieu_tu_vung(xuatDuLieu_tu_vung);
    xuLi_tu_vung();
}
batDau_tu_vung();

function layDuLieu_tu_vung(callback) {
    fetch(API_tu_vung)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_tu_vung(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_tu_vung, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xoaDuLieu_tu_vung(id) {
    var opption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_tu_vung + '/' + id, opption)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            layDuLieu_tu_vung(xuatDuLieu_tu_vung);
        });
}

function xuatDuLieu_tu_vung(list) {
    var loc_user_tu_vung = list.filter(function(lists) {
        return lists.user === document.cookie;
    })

    var htmls = loc_user_tu_vung.map(function(lists) {
        return "<li class = 'content_list_backend-li'>" +
            "<div class = 'content_list_backend_tu'>" + lists.tu_vung + "</div>" +
            "<div class = 'content_list_backend_SM'>" + "=>" + "</div>" +
            "<div class = 'content_list_backend_nghia'>" + lists.nghia + "</div>" +
            "<div class = 'content_list_backend_tu_loai'>" + lists.tu_loai + "</div>" +
            "<div class = 'content_list_backend_phien_am'>" + lists.phien_am + "</div>" +
            "<button class = \"Poiter content_list_backend_nut \" onclick = \"xoaDuLieu_tu_vung(" + lists.id + ")\">" +
            "X" + "</button>" + "</li>";
    })

    document.querySelector('.content_list').innerHTML = htmls.join('');
}

function xuLi_tu_vung() {
    var xuLi_tu_vung = document.querySelector('.content--create')
    var check_dang_nhap_user = document.querySelector('.check_dang_nhap_user');

    if (document.cookie != "") {
        xuLi_tu_vung.disabled = false;
        xuLi_tu_vung.classList.add('Poiter');
    } else {
        xuLi_tu_vung.disabled = true
        check_dang_nhap_user.innerHTML = "Bạn vui lòng đăng nhập để sử dụng chức năng"
    }

    xuLi_tu_vung.onclick = function() {
        var tu_vung = document.querySelector('.input1_tu').value;
        var nghia = document.querySelector('.input2_nghia').value;
        var tu_loai = document.querySelector('.input2_tu_loai').value;
        var phien_am = document.querySelector('.input2_phien_am').value;
        var user_tu_vung_check = document.querySelector('.user_tu_vung_check');
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        layDuLieu_tu_vung(check_ton_tai_TV);

        function check_ton_tai_TV(list) {
            var loc_user_tu_vung_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie;
            })

            var loc_user_tu_vung_ton_tai2 = loc_user_tu_vung_ton_tai.some(function(listss) {
                return listss.tu_vung === tu_vung;
            })

            if (loc_user_tu_vung_ton_tai2 == true) {
                user_tu_vung_check.innerHTML = "Từ vựng đã tồn tại";
            } else {
                var user = document.cookie;
                if (tu_vung === "") {
                    tu_vung = "none";
                }

                if (nghia === "") {
                    nghia = "none";
                }
                if (tu_loai === "") {
                    tu_loai = "none";
                }

                if (phien_am === "") {
                    phien_am = "none";
                }

                formData = {
                    tu_vung: tu_vung,
                    nghia: nghia,
                    tu_loai: tu_loai,
                    phien_am: phien_am,
                    date: date,
                    user: user
                }
                taoDuLieu_tu_vung(formData, function() {
                    layDuLieu_tu_vung(xuatDuLieu_tu_vung);
                    location.reload();
                })
            }
        }
    }
}

// Phần API ngữ pháp
function batDau_ngu_phap() {
    layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
    xuLi_ngu_phap();
}
batDau_ngu_phap();

function layDuLieu_ngu_phap(callback) {
    fetch(API_ngu_phap)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_ngu_phap(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_ngu_phap, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xoaDuLieu_ngu_phap(id) {
    var opption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_ngu_phap + '/' + id, opption)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
        });
}

function xuatDuLieu_ngu_phap(ngu_phap) {
    var loc_user_ngu_phap = ngu_phap.filter(function(ngu_phaps) {
        return ngu_phaps.user === document.cookie;
    })

    var htmls = loc_user_ngu_phap.map(function(pramas) {
        return "<li class = 'content_list2_backend-li'>" +
            "<div class = 'content_list2_backend_ten'>" + pramas.ten + "</div>" +
            "<div class = 'content_list2_backend_SM'>" + "=>" + "</div>" +
            "<div class = 'content_list2_backend_cau_truc'>" + pramas.cau_truc + "</div>" +
            "<div class = 'content_list2_backend_SM'>" + "=>" + "</div>" +
            "<div class = 'content_list2_backend_cach_dung'>" + pramas.cach_dung + "</div>" +
            "<button class = \"Poiter pramas \" onclick = \"xoaDuLieu_ngu_phap(" + pramas.id + ")\">" +
            "X" + "</button>" + "</li>";
    })

    document.querySelector('.content_list2').innerHTML = htmls.join('');
}

function xuLi_ngu_phap() {
    var xuLi_ngu_phap = document.querySelector('.content2--create');
    var check_dang_nhap_user_NP = document.querySelector('.check_dang_nhap_user_NP');
    if (document.cookie != "") {
        xuLi_ngu_phap.disabled = false;
        xuLi_ngu_phap.classList.add('Poiter');
    } else {
        xuLi_ngu_phap.disabled = true;
        check_dang_nhap_user_NP.innerHTML = "Bạn vui lòng đăng nhập để sử dụng chức năng"
    }
    xuLi_ngu_phap.onclick = function() {
        var ten = document.querySelector('.input1_ten').value;
        var cau_truc = document.querySelector('.input2-cauTruc').value;
        var cach_dung = document.querySelector('.input2-cachDung').value;
        var user_ngu_phap_check = document.querySelector('.user_ngu_phap_check');
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        layDuLieu_ngu_phap(check_ton_tai_NP);

        function check_ton_tai_NP(ngu_phap) {
            var loc_user_ngu_phap_ton_tai = ngu_phap.filter(function(ngu_phaps) {
                return ngu_phaps.user === document.cookie;
            })

            var loc_user_ngu_phap_ton_tai2 = loc_user_ngu_phap_ton_tai.some(function(ngu_phapss) {
                return ngu_phapss.ten === ten;
            })

            if (loc_user_ngu_phap_ton_tai2 == true) {
                user_ngu_phap_check.innerHTML = "Ngữ pháp đã tồn tại";
            } else {
                var user = document.cookie;
                if (ten === "") {
                    ten = "none";
                }

                if (cau_truc === "") {
                    cau_truc = "none";
                }

                if (cach_dung === "") {
                    cach_dung = "none";
                }

                formData = {
                    ten: ten,
                    cau_truc: cau_truc,
                    cach_dung: cach_dung,
                    date: date,
                    user: user
                }
                taoDuLieu_ngu_phap(formData, function() {
                    layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
                    location.reload();
                })
            }
        }
    }
}

//Phần API đăng nhập
function batDau_dang_nhap() {
    xuLi_dang_nhap();
}
batDau_dang_nhap();

function layDuLieu_dang_nhap(callback) {
    fetch(API_dang_nhap)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_dang_nhap(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_dang_nhap, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_dang_nhap() {
    var dang_nhap = document.querySelector('.create_dang_nhap')
    dang_nhap.onclick = function() {
        var dang_nhap_ten = document.querySelector('.dang_nhap1_ten');
        var dang_nhap_pass = document.querySelector('.dang_nhap1_password');
        var nosucces = document.querySelector('.nosuccses');
        var admin = document.querySelector('.header-thong_tin_1');
        var header_thong_tin_user_1DN = document.querySelector('.header-thong_tin_user_1');
        var header_thong_tin_1DN = document.querySelector('.header-thong_tin_1');
        var thong_tin_user_adminDN = document.querySelector('.thong_tin_user_admin');

        layDuLieu_dang_nhap(check)

        function check(user) {
            var checkten = user.findIndex(function(users) {
                return users.ten === dang_nhap_ten.value;
            })

            if (checkten != -1) {
                var checkPast = user.find(function(userss) {
                    return userss.id === (checkten + 1);
                })
                if (checkPast.password == dang_nhap_pass.value) {
                    location.reload();
                    thong_tin_user_adminDN.innerHTML = checkPast.ten;
                    document.cookie = checkPast.ten;
                } else {
                    nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                }
            } else {
                nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
            }
        }
    }
}

var thong_tin_user_adminDN = document.querySelector('.thong_tin_user_admin');
var header_thong_tin_user_1DN = document.querySelector('.header-thong_tin_user_1');
var header_thong_tin_1DN = document.querySelector('.header-thong_tin_1');
thong_tin_user_adminDN.innerHTML = document.cookie;

if (document.cookie != "") {
    header_thong_tin_user_1DN.classList.add('Display');
    header_thong_tin_1DN.classList.add('noneDisplay')
}

//Xử lí động
var dang_nhap = document.querySelector('.create_dang_nhap');
var dang_nhap_ten = document.querySelector('.dang_nhap1_ten');
var dang_nhap_pass = document.querySelector('.dang_nhap1_password');
dang_nhap.disabled = true;

dang_nhap_ten.oninput = function() {
    dang_nhap_pass.oninput = function() {
        if (dang_nhap_pass.value != "" && dang_nhap_ten != "") {
            dang_nhap.classList.add('Poiter');
            dang_nhap.disabled = false;
        }
    }
}

dang_nhap_pass.oninput = function() {
    dang_nhap_ten.oninput = function() {
        if (dang_nhap_ten.value != "" && dang_nhap_ten != "") {
            dang_nhap.classList.add('Poiter');
            dang_nhap.disabled = false;
        }
    }
}

//Phần API đăng kí
function batDau_dang_ki() {
    xuLi_dang_ki();
}
batDau_dang_ki();

function layDuLieu_dang_ki(callback) {
    fetch(API_dang_ki)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_dang_ki(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_dang_ki, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_dang_ki() {
    var dang_ki = document.querySelector('.create_dang_ki')
    var dang_ki_ten = document.querySelector('.dang_ki1_ten');
    var dang_ki_pass = document.querySelector('.dang_ki1_password');
    var nosucces = document.querySelector('.checkTen');
    dang_ki.onclick = function() {
        layDuLieu_dang_ki(check)

        function check(user) {
            var checkten = user.findIndex(function(users) {
                return users.ten === dang_ki_ten.value;
            })

            if (checkten != -1) {
                nosucces.innerHTML = "Tên tài khoản đã tồn tại";
            } else {
                var ten = document.querySelector('.dang_ki1_ten').value;
                var password = document.querySelector('.dang_ki1_password').value;
                var today = new Date();
                var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
                    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

                formData = {
                    ten: ten,
                    password: password,
                    date: date
                }
                taoDuLieu_dang_ki(formData, function() {
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

dang_ki_ten.oninput = function() {
    dang_ki_pass.oninput = function() {
        if (dang_ki_pass.value != "" && dang_ki_ten != "") {
            dang_ki.classList.add('Poiter');
            dang_ki.disabled = false;
        }
    }
}

dang_ki_pass.oninput = function() {
    dang_ki_ten.oninput = function() {
        if (dang_ki_ten.value != "" && dang_ki_ten != "") {
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
var video = document.querySelector('.video');
var music = document.querySelector('.music');

var header_second_cmt1 = document.querySelector('.header_second--cmt1');
var nut_dang_nhap = document.querySelector('.nut_dang_nhap');
var nut_dang_ki = document.querySelector('.nut_dang_ki');

var danhGia_thoat = document.querySelector('.danhGia_thoat');
var dang_nhap_thoat = document.querySelector('.dang_nhap_thoat');
var dang_ki_thoat = document.querySelector('.dang_ki_thoat');

var dang_ki_chuyenXL = document.querySelector('.dang_ki_chuyen');
var dang_nhap_chuyenXL = document.querySelector('.dang_nhap_chuyen');

//Thoát

dang_nhap_thoat.onclick = function() {
    location.reload();
}

dang_ki_thoat.onclick = function() {
    location.reload();
}

//Chuyển

dang_ki_chuyenXL.onclick = function() {
    dang_kiXL.classList.add('Display');
    dang_nhapXL.classList.remove('Display')
}

dang_nhap_chuyenXL.onclick = function() {
    dang_nhapXL.classList.add('Display')
    dang_kiXL.classList.remove('Display')
}

//Đăng nhập
nut_dang_nhap.onclick = function() {
    headerXL.classList.add('noneDisplay');
    header_secondXL.classList.add('noneDisplay');
    body_cmtXL.classList.add('noneDisplay');
    footerXL.classList.add('noneDisplay');
    dang_nhapXL.classList.add('Display');
    video.classList.add('noneDisplay')
    music.classList.add('noneDisplay')
    danhGiaXL.classList.add('noneDisplay');
}

const dang_nhap1_password = document.querySelector('.dang_nhap1_password')
const dang_nhap1_xemMK = document.querySelector('.dang_nhap1_xemMK')

dang_nhap1_xemMK.addEventListener('click', function() {

    const currentType = dang_nhap1_password.getAttribute('type')

    dang_nhap1_password.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})

//Đăng kí
nut_dang_ki.onclick = function() {
    headerXL.classList.add('noneDisplay');
    header_secondXL.classList.add('noneDisplay');
    body_cmtXL.classList.add('noneDisplay');
    footerXL.classList.add('noneDisplay');
    dang_kiXL.classList.add('Display');
    video.classList.add('noneDisplay')
    music.classList.add('noneDisplay')
    danhGiaXL.classList.add('noneDisplay');
}

const dang_ki1_password = document.querySelector('.dang_ki1_password')
const dang_ki1_xemMK = document.querySelector('.dang_ki1_xemMK')

dang_ki1_xemMK.addEventListener('click', function() {

    const currentType = dang_ki1_password.getAttribute('type')

    dang_ki1_password.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})

//Đồng hồ
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var Lgiay = $("#seconds");
var Lphut = $("#minute");
var Ldem = $("#tens");
var thoiGian = $("#gio");
var ngay = $("#today");
var hanhDong = $(".wrapper");

function start() {
    setInterval(getGio, 1000);
}
start();

function getGio() {
    var today = new Date();
    var gio = today.getHours() + ':' + today.getMinutes() + ':' + (today.getSeconds());
    thoiGian.innerHTML = gio;
    var today2 = new Date();
    var ngayN = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    ngay.innerHTML = ngayN;
}