var API_gop_y = "http://localhost:3000/gop_y"
    // var API_gop_y = "https://demo-apps-en.glitch.me/gop_y"

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
    var gop_y2_cmt = document.querySelector('.gop_y2_cmt');

    //Nhấn phím Enter
    gop_y2_cmt.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var ten = document.cookie.slice(4);
            var cmt = document.querySelector('.gop_y2_cmt').value;
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
    var xuLi_gop_y = document.querySelector('.gop_y--create')
    xuLi_gop_y.onclick = function() {
        var ten = document.cookie.slice(4);
        var cmt = document.querySelector('.gop_y2_cmt').value;
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

//Xử lí động
var gop_y_tu = document.querySelector('.gop_y_tu1');
var gop_y2_cmt = document.querySelector('.gop_y2_cmt');
var xuLi_gop_y = document.querySelector('.gop_y--create');
var checkten_user = document.querySelector('.checkten_user');
xuLi_gop_y.disabled = true;

if (document.cookie != "") {
    gop_y2_cmt.oninput = function() {
        if (gop_y2_cmt != "") {
            xuLi_gop_y.classList.add('Poiter');
            xuLi_gop_y.disabled = false;
        }
    }
} else {
    checkten_user.innerHTML = "Bạn vui lòng đăng nhập để đóng góp ý kiến";
}

var gop_y_input1_one_inner = document.querySelector('.gop_y-input1_one_inner');
gop_y_input1_one_inner.innerHTML = document.cookie.slice(4);

var dang_gia_thoat = document.querySelector('.dang_gia_thoat');
dang_gia_thoat.onclick = function() {
    window.location.href = '/index.html';
}