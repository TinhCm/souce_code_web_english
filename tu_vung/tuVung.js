var API_tu_vung = 'https://learning-english.glitch.me/list'
const $ = document.querySelector.bind(document);

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
    var a = 0;
    var loc_user_tu_vung = list.filter(function(lists) {
        return lists.user === document.cookie.slice(4);
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

    $('.content_list').innerHTML = htmls.join('');
}

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');
hoc_bai_thoat1.onclick = function() {
    window.location.href = '/index.html';
}

var hoc_bai_hello = $('.hoc_bai_hello');
var cat_chuoi = document.cookie.slice(4);
hoc_bai_hello.innerHTML = 'Xin chào ' + cat_chuoi;