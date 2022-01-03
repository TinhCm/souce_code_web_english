var API_gop_y = "https://learning-english.glitch.me/gop_y"
var API_tu_vung = 'https://learning-english.glitch.me/list'
var API_ngu_phap = 'https://learning-english.glitch.me/ngu_phap'
var API_tai_khoan = 'https://learning-english.glitch.me/user'
const $ = document.querySelector.bind(document);

//Đánh giá
function batDau_gop_y() {
    xuLi_gop_y();
}
batDau_gop_y();

function taoDuLieu_gop_y(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_gop_y, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_gop_y() {
    var gop_y2_cmt = $('.gop_y2_cmt');

    //Nhấn phím Enter
    gop_y2_cmt.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var ten = document.cookie.slice(4);
            var cmt = $('.gop_y2_cmt').value;
            var today = new Date();
            var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
                today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            formData = {
                ten: ten,
                cmt: cmt,
                date: date
            }
            taoDuLieu_gop_y(formData, function() {
                location.reload();
            })

            alert("Cảm ơn bạn đã đóng góp ý kiến.");
        }
    }

    //Nhấn phím Gửi
    var xuLi_gop_y = $('.gop_y--create')
    xuLi_gop_y.onclick = function() {
        var ten = document.cookie.slice(4);
        var cmt = $('.gop_y2_cmt').value;
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        formData = {
            ten: ten,
            cmt: cmt,
            date: date
        }
        taoDuLieu_gop_y(formData, function() {
            location.reload();
        })

        alert("Cảm ơn bạn đã đóng góp ý kiến.");
    }
}

//Tu vung
function batDau_tu_vung() {
    layDuLieu_tu_vung(xuatDuLieu_tu_vung);
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

function xuatDuLieu_tu_vung(list) {
    var so_luong_tv = $('.so_luong_tv');
    var loc_user_tu_vung = list.filter(function(lists) {
        return lists.user === document.cookie.slice(4);
    })
    so_luong_tv.innerHTML = 'Số lượng từ vựng: ' + loc_user_tu_vung.length;

    var cap_bac = $('.cap_bac');

    if (loc_user_tu_vung.length == 0) {
        cap_bac.innerHTML = 'Cấp bậc: thành viên mới';
    } else if (loc_user_tu_vung.length > 10) {
        cap_bac.innerHTML = 'Cấp bậc: Đồng';
    } else if (loc_user_tu_vung.length > 50) {
        cap_bac.innerHTML = 'Cấp bậc: Bạc';
    } else if (loc_user_tu_vung.length > 100) {
        cap_bac.innerHTML = 'Cấp bậc: Vàng';
    } else if (loc_user_tu_vung.length > 200) {
        cap_bac.innerHTML = 'Cấp bậc: Kim cương';
    } else {
        cap_bac.innerHTML = 'Cấp bậc: Thách đấu';
    }
}

//Ngu phap
function batDau_ngu_phap() {
    layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
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

function xuatDuLieu_ngu_phap(ngu_phap) {
    var so_luong_np = $('.so_luong_np');
    var loc_user_ngu_phap = ngu_phap.filter(function(ngu_phaps) {
        return ngu_phaps.user === document.cookie.slice(4);
    })
    so_luong_np.innerHTML = 'Số lượng ngữ pháp: ' + loc_user_ngu_phap.length;
}

//User
function batDau_tai_khoan() {
    layDuLieu_tai_khoan(xuatDuLieu_tai_khoan);
}
batDau_tai_khoan();

function layDuLieu_tai_khoan(callback) {
    fetch(API_tai_khoan)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_tai_khoan(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_tai_khoan, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuatDuLieu_tai_khoan(user) {

    var cat_chuoi = (document.cookie.slice(4));
    var checkten = user.findIndex(function(users) {
        return users.ten === cat_chuoi;
    })

    var checkPast = user.find(function(userss) {
        return userss.id === (checkten + 1);
    })

    var ngay_tham_gia = $('.ngay_tham_gia');
    var gioi_tinh = $('.gioi_tinh');
    var ho_ten = $('.ho_ten');

    ngay_tham_gia.innerHTML = 'Ngày tham gia: ' + checkPast.date;
    gioi_tinh.innerHTML = 'Giới tính: ' + checkPast.gioi_tinh;
    ho_ten.innerHTML = 'Họ tên: ' + checkPast.ten;
}

//Xử lí động
var gop_y_tu = $('.gop_y_tu1');
var gop_y2_cmt = $('.gop_y2_cmt');
var xuLi_gop_y = $('.gop_y--create');
var checkten_user = $('.checkten_user');
xuLi_gop_y.disabled = true;

if (document.cookie != "") {
    gop_y2_cmt.oninput = function() {
        if (gop_y2_cmt != "") {
            xuLi_gop_y.classList.add('Poiter');
            xuLi_gop_y.disabled = false;
        }
    }
}

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');

hoc_bai_thoat1.onclick = function() {
    window.location.href = '/index.html';
}