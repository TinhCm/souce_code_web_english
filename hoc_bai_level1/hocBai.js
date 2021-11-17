var API_hoc_bai = 'https://learning-english.glitch.me/list';
const $ = document.querySelector.bind(document);

//Học bài
function batDau_hoc_bai() {
    xuLi_hoc_bai();
}
batDau_hoc_bai();

function layDuLieu_hoc_bai(callback) {
    fetch(API_hoc_bai)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_hoc_bai() {
    //Lever1
    var input2_nghia_hocBai = $('.input2_nghia_hocBai');
    input2_nghia_hocBai.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var input1_tu_hocBai = $('.input1_tu_hocBai').value;
            var input2_nghia_hocBai = $('.input2_nghia_hocBai').value;
            var hocBai_list_input1_check = $('.hocBai_list-input1_check');

            layDuLieu_hoc_bai(check_ket_qua);

            function check_ket_qua(list) {
                var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                    return lists.user === document.cookie.slice(4);
                })

                var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                    return listss.tu_vung.toLowerCase() === input1_tu_hocBai.toLowerCase();
                })

                var loc_user_hoc_bai_ton_tai3 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                    return listss.nghia.toLowerCase() === input2_nghia_hocBai.toLowerCase();
                })

                if (loc_user_hoc_bai_ton_tai2 == true) {
                    if (loc_user_hoc_bai_ton_tai3 == true) {
                        hocBai_list_input1_check.innerHTML = "Đúng";
                        setTimeout(() => {
                            location.reload();
                        }, 1000);
                    } else {
                        hocBai_list_input1_check.innerHTML = "Sai";
                    }
                } else {
                    hocBai_list_input1_check.innerHTML = "Không tồn tại";
                }
            }
        }
    }

    //Nhấp phim Sent
    var hocBai_kiem_tra = $('.hocBai_kiem_tra');
    var hocBai_kiem_tra_app = $('.hocBai_kiem_tra_app');

    hocBai_kiem_tra.onclick = function() {
        var input1_tu_hocBai = $('.input1_tu_hocBai').value;
        var input2_nghia_hocBai = $('.input2_nghia_hocBai').value;
        var hocBai_list_input1_check = $('.hocBai_list-input1_check');

        layDuLieu_hoc_bai(check_ket_qua);

        function check_ket_qua(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.tu_vung.toLowerCase() === input1_tu_hocBai.toLowerCase();
            })

            var loc_user_hoc_bai_ton_tai3 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.nghia.toLowerCase() === input2_nghia_hocBai.toLowerCase();
            })

            if (loc_user_hoc_bai_ton_tai2 == true) {
                if (loc_user_hoc_bai_ton_tai3 == true) {
                    hocBai_list_input1_check.innerHTML = "Đúng";
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                } else {
                    hocBai_list_input1_check.innerHTML = "Sai";
                }
            } else {
                hocBai_list_input1_check.innerHTML = "Không tồn tại";
            }
        }
    }

    //Nhấp phím Kiểm tra
    var hocBai_kiem_tra_app = $('.hocBai_kiem_tra_app');

    hocBai_kiem_tra_app.onclick = function() {
        var input1_tu_hocBai = $('.input1_tu_hocBai').value;
        var input2_nghia_hocBai = $('.input2_nghia_hocBai').value;
        var hocBai_list_input1_check = $('.hocBai_list-input1_check');

        layDuLieu_hoc_bai(check_ket_qua);

        function check_ket_qua(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.tu_vung.toLowerCase() === input1_tu_hocBai.toLowerCase();
            })

            var loc_user_hoc_bai_ton_tai3 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.nghia.toLowerCase() === input2_nghia_hocBai.toLowerCase();
            })

            if (loc_user_hoc_bai_ton_tai2 == true) {
                if (loc_user_hoc_bai_ton_tai3 == true) {
                    hocBai_list_input1_check.innerHTML = "Đúng";
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                } else {
                    hocBai_list_input1_check.innerHTML = "Sai";
                }
            } else {
                hocBai_list_input1_check.innerHTML = "Không tồn tại";
            }
        }
    }
}

//Xu li động học bài
var hocBai_kiem_tra = $('.hocBai_kiem_tra');
var hocBai_kiem_tra_app = $('.hocBai_kiem_tra_app');
hocBai_kiem_tra.disabled = true;
hocBai_kiem_tra_app.disabled = true;

if (document.cookie != "") {
    hocBai_kiem_tra.disabled = false;
    hocBai_kiem_tra.classList.add('Poiter');
}

if (document.cookie != "") {
    hocBai_kiem_tra_app.disabled = false;
    hocBai_kiem_tra_app.classList.add('Poiter');
}

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');
hoc_bai_thoat1.onclick = function() {
    window.location.href = '/index.html';
}