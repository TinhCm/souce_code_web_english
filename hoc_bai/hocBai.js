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

    var hocBai_kiem_tra = $('.hocBai_kiem_tra');
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

    //Lever2
    var hocBai_kiem_tra2 = $('.hocBai_kiem_tra2');
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

        //Random lever3
        var hocBai_kiem_tra3 = $('.hocBai_kiem_tra3');
        var hocBai_bat_dau3 = $('.hocBai_bat_dau3');
        var input1_tu_hocBai3 = $('.input1_tu_hocBai3');

        layDuLieu_hoc_bai(check_ket_qua_lever3);

        function check_ket_qua_lever3(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            const check_ket_qua_lever3_length = loc_user_hoc_bai_ton_tai.length;
            var check_ket_qua_lever3_random = (Math.floor(Math.random() * check_ket_qua_lever3_length));
            var check_ket_qua_lever3_kq_random = (loc_user_hoc_bai_ton_tai[check_ket_qua_lever3_random].nghia);
            input1_tu_hocBai3.innerHTML = check_ket_qua_lever3_kq_random;
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

    //Check đáp án
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

    //Lever 3
    var hocBai_kiem_tra3 = $('.hocBai_kiem_tra3');
    var hocBai_bat_dau3 = $('.hocBai_bat_dau3');

    //Xem đáp án
    var input1_tu_hocBai3_DA = $('.input1_tu_hocBai3_DA');
    var hocBai_dap_an3 = $('.hocBai_dap_an3');
    var input1_tu_hocBai3 = $('.input1_tu_hocBai3');
    var input2_nghia_hocBai3 = $('.input2_nghia_hocBai3').value;

    hocBai_dap_an3.onclick = function() {
        layDuLieu_hoc_bai(check_ket_qua_lever3);

        function check_ket_qua_lever3(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.find(function(listss) {
                return listss.nghia === input1_tu_hocBai3.innerHTML;
            })

            input1_tu_hocBai3_DA.innerHTML = loc_user_hoc_bai_ton_tai2.tu_vung;
            input1_tu_hocBai3_DA.classList.toggle('Display_inline');
        }
    }

    //Check đáp án

    var input2_nghia_hocBai3 = $('.input2_nghia_hocBai3');
    input2_nghia_hocBai3.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var input1_tu_hocBai3 = $('.input1_tu_hocBai3');
            var input2_nghia_hocBai3 = $('.input2_nghia_hocBai3').value;
            var hocBai_list_input1_check3 = $('.hocBai_list-input1_check3');

            layDuLieu_hoc_bai(check_ket_qua_lever3);

            function check_ket_qua_lever3(list) {
                var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                    return lists.user === document.cookie.slice(4);
                })

                var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                    return listss.nghia === input1_tu_hocBai3.innerHTML;
                })

                var loc_user_hoc_bai_ton_tai3 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                    return listss.tu_vung.toLowerCase() === input2_nghia_hocBai3.toLowerCase();
                })

                if (loc_user_hoc_bai_ton_tai3 == true) {
                    hocBai_list_input1_check3.innerHTML = "Đúng";
                    setTimeout(() => {
                        location.reload();
                    }, 1000);

                } else {
                    hocBai_list_input1_check3.innerHTML = "Sai";
                }
            }
        }
    }

    hocBai_kiem_tra3.onclick = function() {
        var input1_tu_hocBai3 = $('.input1_tu_hocBai3');
        var input2_nghia_hocBai3 = $('.input2_nghia_hocBai3').value;
        var hocBai_list_input1_check3 = $('.hocBai_list-input1_check3');

        layDuLieu_hoc_bai(check_ket_qua_lever3);

        function check_ket_qua_lever3(list) {
            var loc_user_hoc_bai_ton_tai = list.filter(function(lists) {
                return lists.user === document.cookie.slice(4);
            })

            var loc_user_hoc_bai_ton_tai2 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.nghia === input1_tu_hocBai3.innerHTML;
            })

            var loc_user_hoc_bai_ton_tai3 = loc_user_hoc_bai_ton_tai.some(function(listss) {
                return listss.tu_vung.toLowerCase() === input2_nghia_hocBai3.toLowerCase();
            })

            if (loc_user_hoc_bai_ton_tai3 == true) {
                hocBai_list_input1_check3.innerHTML = "Đúng";
                setTimeout(() => {
                    location.reload();
                }, 1000);

            } else {
                hocBai_list_input1_check3.innerHTML = "Sai";
            }
        }
    }
}

//Xu li động học bài
var hocBai_kiem_tra = $('.hocBai_kiem_tra');
var hocBai_kiem_tra2 = $('.hocBai_kiem_tra2');
var hocBai_kiem_tra3 = $('.hocBai_kiem_tra3');
var hocBai_dap_an2 = $('.hocBai_dap_an2');
var hocBai_dap_an3 = $('.hocBai_dap_an3');

hocBai_kiem_tra.disabled = true;
hocBai_kiem_tra2.disabled = true;
hocBai_kiem_tra3.disabled = true;
hocBai_dap_an2.disabled = true;
hocBai_dap_an3.disabled = true;

if (document.cookie != "") {
    hocBai_kiem_tra.disabled = false;
    hocBai_kiem_tra2.disabled = false;
    hocBai_kiem_tra3.disabled = false;
    hocBai_dap_an2.disabled = false;
    hocBai_dap_an3.disabled = false;

    hocBai_kiem_tra.classList.add('Poiter');
    hocBai_kiem_tra2.classList.add('Poiter');
    hocBai_kiem_tra3.classList.add('Poiter');
    hocBai_dap_an2.classList.add('Poiter');
    hocBai_dap_an3.classList.add('Poiter');
}

var hoc_bai_thoat1 = $('.hoc_bai_thoat1');
hoc_bai_thoat1.onclick = function() {
    window.location.href = '/index.html';
}

var hoc_bai_hello = $('.hoc_bai_hello');
var cat_chuoi = document.cookie.slice(4);
hoc_bai_hello.innerHTML = 'Xin chào ' + cat_chuoi;

var header_hoc_bai3 = $('.header-hoc_bai3');
header_hoc_bai3.onclick = function() {
    location.reload();
}