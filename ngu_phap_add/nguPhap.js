var API_ngu_phap = 'https://learning-english.glitch.me/ngu_phap'
const $ = document.querySelector.bind(document);

function batDau_ngu_phap() {
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

function xuLi_ngu_phap() {
    var xuLi_ngu_phap = $('.content2--create');
    var content2_create_app = $('.content2--create_app');
    var check_dang_nhap_user_NP = $('.check_dang_nhap_user_NP');
    if (document.cookie != "") {
        xuLi_ngu_phap.disabled = false;
        xuLi_ngu_phap.classList.add('Poiter');
    } else {
        xuLi_ngu_phap.disabled = true;
        check_dang_nhap_user_NP.innerHTML = "Bạn vui lòng đăng nhập để sử dụng chức năng"
    }

    if (document.cookie != "") {
        content2_create_app.disabled = false;
        content2_create_app.classList.add('Poiter');
    } else {
        content2_create_app.disabled = true;
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
                        location.reload();
                    })
                }
            }
        }
    }

    //Nhấn phím Sent
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
                    location.reload();
                })
            }
        }
    }

    //Nhấn phím Tạo
    content2_create_app.onclick = function() {
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
                    location.reload();
                })
            }
        }
    }

}

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');
hoc_bai_thoat1.onclick = function() {
    window.location.href = '/ngu_phap/nguPhap.html';
}

var header_hoc_bai3_home1 = $('.header-hoc_bai3_home1');
header_hoc_bai3_home1.onclick = function() {
    window.location.href = '/index.html';
}