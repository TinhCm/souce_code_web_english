var API_hoc_bai = 'https://demo-apps-en.glitch.me/list';
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
    //Lever2
    var hocBai_kiem_tra2 = $('.hocBai_kiem_tra2');
    var hocBai_kiem_tra2_app = $('.hocBai_kiem_tra2_app');
    window.onload = function() {
        var input1_tu_hocBai2 = $('.input1_tu_hocBai2');

        layDuLieu_hoc_bai(check_ket_qua_lever2);

        function check_ket_qua_lever2(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            const check_ket_qua_lever2_length = loc_user_hoc_bai_ton_tai.length;
            var check_ket_qua_lever2_random = (Math.floor(Math.random() * check_ket_qua_lever2_length));
            var check_ket_qua_lever2_kq_random = (loc_user_hoc_bai_ton_tai[check_ket_qua_lever2_random].tu_vung);
            input1_tu_hocBai2.innerHTML = check_ket_qua_lever2_kq_random;
        }
    }

    //Xem đáp án
    var input1_tu_hocBai2_DA = $('.input1_tu_hocBai2_DA');
    var hocBai_dap_an2 = $('.hocBai_dap_an2');
    var input1_tu_hocBai2 = $('.input1_tu_hocBai2');
    var input2_nghia_hocBai2 = $('.input2_nghia_hocBai2').value;

    hocBai_dap_an2.onclick = function() {
        layDuLieu_hoc_bai(check_ket_qua_lever2);

        function check_ket_qua_lever2(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.find(function(listss) {
                return listss.tu_vung === input1_tu_hocBai2.innerHTML;
            })

            input1_tu_hocBai2_DA.innerHTML = loc_user_hoc_bai_ton_tai2.nghia;
            input1_tu_hocBai2_DA.classList.toggle('Display_inline');
        }
    }

    //Nhấp phím hỏi
    var header_hoc_bai4 = $(".header-hoc_bai4");
    header_hoc_bai4.onclick = function() {
        layDuLieu_hoc_bai(check_ket_qua_lever2);

        function check_ket_qua_lever2(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.find(function(listss) {
                return listss.tu_vung === input1_tu_hocBai2.innerHTML;
            })

            input1_tu_hocBai2_DA.innerHTML = loc_user_hoc_bai_ton_tai2.nghia;
            input1_tu_hocBai2_DA.classList.toggle('Display_inline');
        }
    }

    //Nhấn phím Enter
    var input2_nghia_hocBai2 = $('.input2_nghia_hocBai2');
    input2_nghia_hocBai2.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var input1_tu_hocBai2 = $('.input1_tu_hocBai2');
            var input2_nghia_hocBai2 = $('.input2_nghia_hocBai2').value;
            var hocBai_list_input1_check2 = $('.hocBai_list-input1_check2');

            layDuLieu_hoc_bai(check_ket_qua_lever2);

            function check_ket_qua_lever2(list) {
                var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                    return lists.user === document.cookie.slice(4);
                })

                var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                    return listss.tu_vung === input1_tu_hocBai2.innerHTML;
                })

                var loc_user_hoc_bai_ton_tai3 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                    return listss.nghia.toLowerCase() === input2_nghia_hocBai2.toLowerCase();
                })

                if (loc_user_hoc_bai_ton_tai3 == true) {
                    hocBai_list_input1_check2.innerHTML = "Đúng";
                    setTimeout(() => {
                        location.reload();
                    }, 1000);

                } else {
                    hocBai_list_input1_check2.innerHTML = "Sai";
                }
            }
        }
    }

    //Nhấn phím Sent
    hocBai_kiem_tra2.onclick = function() {
        var input1_tu_hocBai2 = $('.input1_tu_hocBai2');
        var input2_nghia_hocBai2 = $('.input2_nghia_hocBai2').value;
        var hocBai_list_input1_check2 = $('.hocBai_list-input1_check2');

        layDuLieu_hoc_bai(check_ket_qua_lever2);

        function check_ket_qua_lever2(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.tu_vung === input1_tu_hocBai2.innerHTML;
            })

            var loc_user_hoc_bai_ton_tai3 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.nghia.toLowerCase() === input2_nghia_hocBai2.toLowerCase();
            })

            if (loc_user_hoc_bai_ton_tai3 == true) {
                hocBai_list_input1_check2.innerHTML = "Đúng";
                setTimeout(() => {
                    location.reload();
                }, 1000);

            } else {
                hocBai_list_input1_check2.innerHTML = "Sai";
            }
        }
    }

    //Nhấn phím Kiểm tra
    hocBai_kiem_tra2_app.onclick = function() {
        var input1_tu_hocBai2 = $('.input1_tu_hocBai2');
        var input2_nghia_hocBai2 = $('.input2_nghia_hocBai2').value;
        var hocBai_list_input1_check2 = $('.hocBai_list-input1_check2');

        layDuLieu_hoc_bai(check_ket_qua_lever2);

        function check_ket_qua_lever2(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.tu_vung === input1_tu_hocBai2.innerHTML;
            })

            var loc_user_hoc_bai_ton_tai3 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.nghia.toLowerCase() === input2_nghia_hocBai2.toLowerCase();
            })

            if (loc_user_hoc_bai_ton_tai3 == true) {
                hocBai_list_input1_check2.innerHTML = "Đúng";
                setTimeout(() => {
                    location.reload();
                }, 1000);

            } else {
                hocBai_list_input1_check2.innerHTML = "Sai";
            }
        }
    }

}

//Xu li động học bài
var hocBai_kiem_tra2 = $('.hocBai_kiem_tra2');
var hocBai_dap_an2 = $('.hocBai_dap_an2');
var hocBai_kiem_tra2_app = $('.hocBai_kiem_tra2_app');

hocBai_kiem_tra2.disabled = true;
hocBai_kiem_tra2_app.disabled = true;
hocBai_dap_an2.disabled = true;

if (document.cookie != "") {
    hocBai_kiem_tra2.disabled = false;
    hocBai_kiem_tra2_app.disabled = false;
    hocBai_dap_an2.disabled = false;

    hocBai_kiem_tra2.classList.add('Poiter');
    hocBai_kiem_tra2_app.classList.add('Poiter');
    hocBai_dap_an2.classList.add('Poiter');
}

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');
hoc_bai_thoat1.onclick = function() {
    window.location.href = '/hoc_bai_level1/hocBai.html';
}