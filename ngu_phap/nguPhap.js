var API_ngu_phap = 'https://demo-apps-en.glitch.me/ngu_phap'
const $ = document.querySelector.bind(document);

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

function xuLi_ngu_phap() {
    var xuLi_ngu_phap = $('.content2--create');
    var check_dang_nhap_user_NP = $('.check_dang_nhap_user_NP');
    if (document.cookie != "") {
        xuLi_ngu_phap.disabled = false;
        xuLi_ngu_phap.classList.add('Poiter');
    } else {
        xuLi_ngu_phap.disabled = true;
        check_dang_nhap_user_NP.innerHTML = "Bạn vui lòng đăng nhập để sử dụng chức năng"
    }

    //Nhấn phím Enter
    var input2_cachDung = $('.input2-cachDung');
    input2_cachDung.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var ten = $('.input1_ten').value;
            var cau_truc = $('.input2-cauTruc').value;
            var cach_dung = $('.input2-cachDung').value;
            var user_ngu_phap_check = $('.user_ngu_phap_check');
            var today = new Date();
            var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
                today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

            layDuLieu_ngu_phap(check_ton_tai_NP);

            function check_ton_tai_NP(ngu_phap) {
                var loc_user_ngu_phap_ton_tai = ngu_phap.filter(function(ngu_phaps) {
                    return ngu_phaps.user === document.cookie.slice(4);
                })

                var loc_user_ngu_phap_ton_tai2 = loc_user_ngu_phap_ton_tai.some(function(ngu_phapss) {
                    return ngu_phapss.ten === ten;
                })

                if (loc_user_ngu_phap_ton_tai2 == true) {
                    user_ngu_phap_check.innerHTML = "Ngữ pháp đã tồn tại";
                } else {
                    var user = document.cookie.slice(4);
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

    //Nhấn phím Tạo
    xuLi_ngu_phap.onclick = function() {
        var ten = $('.input1_ten').value;
        var cau_truc = $('.input2-cauTruc').value;
        var cach_dung = $('.input2-cachDung').value;
        var user_ngu_phap_check = $('.user_ngu_phap_check');
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        layDuLieu_ngu_phap(check_ton_tai_NP);

        function check_ton_tai_NP(ngu_phap) {
            var loc_user_ngu_phap_ton_tai = ngu_phap.filter(function(ngu_phaps) {
                return ngu_phaps.user === document.cookie.slice(4);
            })

            var loc_user_ngu_phap_ton_tai2 = loc_user_ngu_phap_ton_tai.some(function(ngu_phapss) {
                return ngu_phapss.ten === ten;
            })

            if (loc_user_ngu_phap_ton_tai2 == true) {
                user_ngu_phap_check.innerHTML = "Ngữ pháp đã tồn tại";
            } else {
                var user = document.cookie.slice(4);
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

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');
hoc_bai_thoat1.onclick = function() {
    window.location.href = '/index.html';
}

var hoc_bai_hello = $('.hoc_bai_hello');
var cat_chuoi = document.cookie.slice(4);
hoc_bai_hello.innerHTML = 'Xin chào ' + cat_chuoi;