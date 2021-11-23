var API_tu_vung = 'https://learning-english.glitch.me/list'
const $ = document.querySelector.bind(document);

function batDau_tu_vung() {
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

function xuLi_tu_vung() {

    //Nhấn phím Enter
    var nghia = $('.input2_nghia');
    nghia.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var tu_vung = $('.input1_tu').value;
            var nghia = $('.input2_nghia').value;
            var tu_loai = $('.input2_tu_loai').value;
            var phien_am = $('.input2_phien_am').value;
            var user_tu_vung_check = $('.user_tu_vung_check');
            var today = new Date();
            var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
                today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

            layDuLieu_tu_vung(check_ton_tai_TV);

            function check_ton_tai_TV(list) {
                var loc_user_tu_vung_ton_tai = list.filter(function(lists) {
                    return lists.user === document.cookie.slice(4);
                })

                var loc_user_tu_vung_ton_tai2 = loc_user_tu_vung_ton_tai.some(function(listss) {
                    return listss.tu_vung === tu_vung;
                })

                if (loc_user_tu_vung_ton_tai2 == true) {
                    user_tu_vung_check.innerHTML = "Từ vựng đã tồn tại";
                } else {
                    var user = document.cookie.slice(4);
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
                        location.reload();
                    })
                }
            }
        }
    }

    //Nhấn phím Enter
    var input2_phien_am = $('.input2_phien_am');
    input2_phien_am.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var tu_vung = $('.input1_tu').value;
            var nghia = $('.input2_nghia').value;
            var tu_loai = $('.input2_tu_loai').value;
            var phien_am = $('.input2_phien_am').value;
            var user_tu_vung_check = $('.user_tu_vung_check');
            var today = new Date();
            var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
                today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

            layDuLieu_tu_vung(check_ton_tai_TV);

            function check_ton_tai_TV(list) {
                var loc_user_tu_vung_ton_tai = list.filter(function(lists) {
                    return lists.user === document.cookie.slice(4);
                })

                var loc_user_tu_vung_ton_tai2 = loc_user_tu_vung_ton_tai.some(function(listss) {
                    return listss.tu_vung === tu_vung;
                })

                if (loc_user_tu_vung_ton_tai2 == true) {
                    user_tu_vung_check.innerHTML = "Từ vựng đã tồn tại";
                } else {
                    var user = document.cookie.slice(4);
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
                        location.reload();
                    })
                }
            }
        }
    }

    //Nhấn phím Sent
    var xuLi_tu_vung = $('.content--create')
    var check_dang_nhap_user = $('.check_dang_nhap_user');

    if (document.cookie != "") {
        xuLi_tu_vung.disabled = false;
        xuLi_tu_vung.classList.add('Poiter');
    } else {
        xuLi_tu_vung.disabled = true
        check_dang_nhap_user.innerHTML = "Bạn vui lòng đăng nhập để sử dụng chức năng"
    }

    xuLi_tu_vung.onclick = function() {
        var tu_vung = $('.input1_tu').value;
        var nghia = $('.input2_nghia').value;
        var tu_loai = $('.input2_tu_loai').value;
        var phien_am = $('.input2_phien_am').value;
        var user_tu_vung_check = $('.user_tu_vung_check');
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        layDuLieu_tu_vung(check_ton_tai_TV);

        function check_ton_tai_TV(list) {
            var loc_user_tu_vung_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_tu_vung_ton_tai2 = loc_user_tu_vung_ton_tai.some(function(listss) {
                return listss.tu_vung === tu_vung;
            })

            if (loc_user_tu_vung_ton_tai2 == true) {
                user_tu_vung_check.innerHTML = "Từ vựng đã tồn tại";
            } else {
                var user = document.cookie.slice(4);
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
                    location.reload();
                })
            }
        }
    }

    //Nhấp phím Tạo
    var content_create_app = $('.content--create_app');
    var check_dang_nhap_user = $('.check_dang_nhap_user');

    if (document.cookie != "") {
        content_create_app.disabled = false;
        content_create_app.classList.add('Poiter');
    } else {
        content_create_app.disabled = true
        check_dang_nhap_user.innerHTML = "Bạn vui lòng đăng nhập để sử dụng chức năng"
    }

    content_create_app.onclick = function() {
        var tu_vung = $('.input1_tu').value;
        var nghia = $('.input2_nghia').value;
        var tu_loai = $('.input2_tu_loai').value;
        var phien_am = $('.input2_phien_am').value;
        var user_tu_vung_check = $('.user_tu_vung_check');
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        layDuLieu_tu_vung(check_ton_tai_TV);

        function check_ton_tai_TV(list) {
            var loc_user_tu_vung_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_tu_vung_ton_tai2 = loc_user_tu_vung_ton_tai.some(function(listss) {
                return listss.tu_vung === tu_vung;
            })

            if (loc_user_tu_vung_ton_tai2 == true) {
                user_tu_vung_check.innerHTML = "Từ vựng đã tồn tại";
            } else {
                var user = document.cookie.slice(4);
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
                    location.reload();
                })
            }
        }
    }
}

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');
hoc_bai_thoat1.onclick = function() {
    window.location.href = '/tu_vung/tuvung.html';
}

var header_hoc_bai3_home1 = $('.header-hoc_bai3_home1');
header_hoc_bai3_home1.onclick = function() {
    window.location.href = '/index.html';
}