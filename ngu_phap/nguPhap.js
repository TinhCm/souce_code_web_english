var API_ngu_phap = 'https://learning-english.glitch.me/ngu_phap'
const $ = document.querySelector.bind(document);

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
        return ngu_phaps.user === document.cookie.slice(4);
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

    $('.content_list2').innerHTML = htmls.join('');
}

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');
hoc_bai_thoat1.onclick = function() {
    window.location.href = '/index.html';
}

var hoc_bai_hello = $('.hoc_bai_hello');
var cat_chuoi = document.cookie.slice(4);
hoc_bai_hello.innerHTML = 'Xin chào ' + cat_chuoi;