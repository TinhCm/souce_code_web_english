var API_tu_vung = 'https://demo-apps-en.glitch.me/list'
var API_ngu_phap = 'https://demo-apps-en.glitch.me/ngu_phap'
var API_gop_y = "https://demo-apps-en.glitch.me/gop_y"
var API_dang_nhap = 'https://demo-apps-en.glitch.me/user'
var API_dang_ki = 'https://demo-apps-en.glitch.me/user'
var API_hoc_bai = 'https://demo-apps-en.glitch.me/list'

const $ = document.querySelector.bind(document);

// //Phần API_tu_vung từ vựng
// function batDau_tu_vung() {
//     layDuLieu_tu_vung(xuatDuLieu_tu_vung);
//     xuLi_tu_vung();
// }
// batDau_tu_vung();

// function layDuLieu_tu_vung(callback) {
//     fetch(API_tu_vung)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// }

// function taoDuLieu_tu_vung(data, callback) {
//     var opption = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }

//     fetch(API_tu_vung, opption)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// }

// function xoaDuLieu_tu_vung(id) {
//     var opption = {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }

//     fetch(API_tu_vung + '/' + id, opption)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function() {
//             layDuLieu_tu_vung(xuatDuLieu_tu_vung);
//         });
// }

// function xuatDuLieu_tu_vung(list) {
//     var loc_user_tu_vung = list.filter(function(lists) {
//         return lists.user === document.cookie.slice(4);
//     })

//     var htmls = loc_user_tu_vung.map(function(lists) {
//         return "<li class = 'content_list_backend-li'>" +
//             "<div class = 'content_list_backend_tu'>" + lists.tu_vung + "</div>" +
//             "<div class = 'content_list_backend_SM'>" + "=>" + "</div>" +
//             "<div class = 'content_list_backend_nghia'>" + lists.nghia + "</div>" +
//             "<div class = 'content_list_backend_tu_loai'>" + lists.tu_loai + "</div>" +
//             "<div class = 'content_list_backend_phien_am'>" + lists.phien_am + "</div>" +
//             "<button class = \"Poiter content_list_backend_nut \" onclick = \"xoaDuLieu_tu_vung(" + lists.id + ")\">" +
//             "X" + "</button>" + "</li>";
//     })

//     $('.content_list').innerHTML = htmls.join('');
// }

// function xuLi_tu_vung() {

//     //Nhấn phím Enter
//     var nghia = $('.input2_nghia');
//     nghia.onkeypress = function(e) {
//         var key = e.keyCode || e.which;
//         if (key == 13) {
//             var tu_vung = $('.input1_tu').value;
//             var nghia = $('.input2_nghia').value;
//             var tu_loai = $('.input2_tu_loai').value;
//             var phien_am = $('.input2_phien_am').value;
//             var user_tu_vung_check = $('.user_tu_vung_check');
//             var today = new Date();
//             var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
//                 today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

//             layDuLieu_tu_vung(check_ton_tai_TV);

//             function check_ton_tai_TV(list) {
//                 var loc_user_tu_vung_ton_tai = list.filter(function(lists) {
//                     return lists.user === document.cookie.slice(4);
//                 })

//                 var loc_user_tu_vung_ton_tai2 = loc_user_tu_vung_ton_tai.some(function(listss) {
//                     return listss.tu_vung === tu_vung;
//                 })

//                 if (loc_user_tu_vung_ton_tai2 == true) {
//                     user_tu_vung_check.innerHTML = "Từ vựng đã tồn tại";
//                 } else {
//                     var user = document.cookie.slice(4);
//                     if (tu_vung === "") {
//                         tu_vung = "none";
//                     }

//                     if (nghia === "") {
//                         nghia = "none";
//                     }
//                     if (tu_loai === "") {
//                         tu_loai = "none";
//                     }

//                     if (phien_am === "") {
//                         phien_am = "none";
//                     }

//                     formData = {
//                         tu_vung: tu_vung,
//                         nghia: nghia,
//                         tu_loai: tu_loai,
//                         phien_am: phien_am,
//                         date: date,
//                         user: user
//                     }
//                     taoDuLieu_tu_vung(formData, function() {
//                         layDuLieu_tu_vung(xuatDuLieu_tu_vung);
//                         location.reload();
//                     })
//                 }
//             }
//         }
//     }

//     //Nhấn phím Enter
//     var input2_phien_am = $('.input2_phien_am');
//     input2_phien_am.onkeypress = function(e) {
//         var key = e.keyCode || e.which;
//         if (key == 13) {
//             var tu_vung = $('.input1_tu').value;
//             var nghia = $('.input2_nghia').value;
//             var tu_loai = $('.input2_tu_loai').value;
//             var phien_am = $('.input2_phien_am').value;
//             var user_tu_vung_check = $('.user_tu_vung_check');
//             var today = new Date();
//             var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
//                 today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

//             layDuLieu_tu_vung(check_ton_tai_TV);

//             function check_ton_tai_TV(list) {
//                 var loc_user_tu_vung_ton_tai = list.filter(function(lists) {
//                     return lists.user === document.cookie.slice(4);
//                 })

//                 var loc_user_tu_vung_ton_tai2 = loc_user_tu_vung_ton_tai.some(function(listss) {
//                     return listss.tu_vung === tu_vung;
//                 })

//                 if (loc_user_tu_vung_ton_tai2 == true) {
//                     user_tu_vung_check.innerHTML = "Từ vựng đã tồn tại";
//                 } else {
//                     var user = document.cookie.slice(4);
//                     if (tu_vung === "") {
//                         tu_vung = "none";
//                     }

//                     if (nghia === "") {
//                         nghia = "none";
//                     }
//                     if (tu_loai === "") {
//                         tu_loai = "none";
//                     }

//                     if (phien_am === "") {
//                         phien_am = "none";
//                     }

//                     formData = {
//                         tu_vung: tu_vung,
//                         nghia: nghia,
//                         tu_loai: tu_loai,
//                         phien_am: phien_am,
//                         date: date,
//                         user: user
//                     }
//                     taoDuLieu_tu_vung(formData, function() {
//                         layDuLieu_tu_vung(xuatDuLieu_tu_vung);
//                         location.reload();
//                     })
//                 }
//             }
//         }
//     }

//     //Nhấn phím Tạo
//     var xuLi_tu_vung = $('.content--create')
//     var check_dang_nhap_user = $('.check_dang_nhap_user');

//     if (document.cookie != "") {
//         xuLi_tu_vung.disabled = false;
//         xuLi_tu_vung.classList.add('Poiter');
//     } else {
//         xuLi_tu_vung.disabled = true
//         check_dang_nhap_user.innerHTML = "Bạn vui lòng đăng nhập để sử dụng chức năng"
//     }

//     xuLi_tu_vung.onclick = function() {
//         var tu_vung = $('.input1_tu').value;
//         var nghia = $('.input2_nghia').value;
//         var tu_loai = $('.input2_tu_loai').value;
//         var phien_am = $('.input2_phien_am').value;
//         var user_tu_vung_check = $('.user_tu_vung_check');
//         var today = new Date();
//         var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
//             today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

//         layDuLieu_tu_vung(check_ton_tai_TV);

//         function check_ton_tai_TV(list) {
//             var loc_user_tu_vung_ton_tai = list.filter(function(lists) {
//                 return lists.user === document.cookie.slice(4);
//             })

//             var loc_user_tu_vung_ton_tai2 = loc_user_tu_vung_ton_tai.some(function(listss) {
//                 return listss.tu_vung === tu_vung;
//             })

//             if (loc_user_tu_vung_ton_tai2 == true) {
//                 user_tu_vung_check.innerHTML = "Từ vựng đã tồn tại";
//             } else {
//                 var user = document.cookie.slice(4);
//                 if (tu_vung === "") {
//                     tu_vung = "none";
//                 }

//                 if (nghia === "") {
//                     nghia = "none";
//                 }
//                 if (tu_loai === "") {
//                     tu_loai = "none";
//                 }

//                 if (phien_am === "") {
//                     phien_am = "none";
//                 }

//                 formData = {
//                     tu_vung: tu_vung,
//                     nghia: nghia,
//                     tu_loai: tu_loai,
//                     phien_am: phien_am,
//                     date: date,
//                     user: user
//                 }
//                 taoDuLieu_tu_vung(formData, function() {
//                     layDuLieu_tu_vung(xuatDuLieu_tu_vung);
//                     location.reload();
//                 })
//             }
//         }
//     }
// }

// Phần API ngữ pháp
// function batDau_ngu_phap() {
//     layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
//     xuLi_ngu_phap();
// }
// batDau_ngu_phap();

// function layDuLieu_ngu_phap(callback) {
//     fetch(API_ngu_phap)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// }

// function taoDuLieu_ngu_phap(data, callback) {
//     var opption = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }

//     fetch(API_ngu_phap, opption)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// }

// function xoaDuLieu_ngu_phap(id) {
//     var opption = {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }

//     fetch(API_ngu_phap + '/' + id, opption)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function() {
//             layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
//         });
// }

// function xuatDuLieu_ngu_phap(ngu_phap) {
//     var loc_user_ngu_phap = ngu_phap.filter(function(ngu_phaps) {
//         return ngu_phaps.user === document.cookie.slice(4);
//     })

//     var htmls = loc_user_ngu_phap.map(function(pramas) {
//         return "<li class = 'content_list2_backend-li'>" +
//             "<div class = 'content_list2_backend_ten'>" + pramas.ten + "</div>" +
//             "<div class = 'content_list2_backend_SM'>" + "=>" + "</div>" +
//             "<div class = 'content_list2_backend_cau_truc'>" + pramas.cau_truc + "</div>" +
//             "<div class = 'content_list2_backend_SM'>" + "=>" + "</div>" +
//             "<div class = 'content_list2_backend_cach_dung'>" + pramas.cach_dung + "</div>" +
//             "<button class = \"Poiter pramas \" onclick = \"xoaDuLieu_ngu_phap(" + pramas.id + ")\">" +
//             "X" + "</button>" + "</li>";
//     })

//     $('.content_list2').innerHTML = htmls.join('');
// }

// function xuLi_ngu_phap() {
//     var xuLi_ngu_phap = $('.content2--create');
//     var check_dang_nhap_user_NP = $('.check_dang_nhap_user_NP');
//     if (document.cookie != "") {
//         xuLi_ngu_phap.disabled = false;
//         xuLi_ngu_phap.classList.add('Poiter');
//     } else {
//         xuLi_ngu_phap.disabled = true;
//         check_dang_nhap_user_NP.innerHTML = "Bạn vui lòng đăng nhập để sử dụng chức năng"
//     }

//     //Nhấn phím Enter
//     var input2_cachDung = $('.input2-cachDung');
//     input2_cachDung.onkeypress = function(e) {
//         var key = e.keyCode || e.which;
//         if (key == 13) {
//             var ten = $('.input1_ten').value;
//             var cau_truc = $('.input2-cauTruc').value;
//             var cach_dung = $('.input2-cachDung').value;
//             var user_ngu_phap_check = $('.user_ngu_phap_check');
//             var today = new Date();
//             var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
//                 today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

//             layDuLieu_ngu_phap(check_ton_tai_NP);

//             function check_ton_tai_NP(ngu_phap) {
//                 var loc_user_ngu_phap_ton_tai = ngu_phap.filter(function(ngu_phaps) {
//                     return ngu_phaps.user === document.cookie.slice(4);
//                 })

//                 var loc_user_ngu_phap_ton_tai2 = loc_user_ngu_phap_ton_tai.some(function(ngu_phapss) {
//                     return ngu_phapss.ten === ten;
//                 })

//                 if (loc_user_ngu_phap_ton_tai2 == true) {
//                     user_ngu_phap_check.innerHTML = "Ngữ pháp đã tồn tại";
//                 } else {
//                     var user = document.cookie.slice(4);
//                     if (ten === "") {
//                         ten = "none";
//                     }

//                     if (cau_truc === "") {
//                         cau_truc = "none";
//                     }

//                     if (cach_dung === "") {
//                         cach_dung = "none";
//                     }

//                     formData = {
//                         ten: ten,
//                         cau_truc: cau_truc,
//                         cach_dung: cach_dung,
//                         date: date,
//                         user: user
//                     }
//                     taoDuLieu_ngu_phap(formData, function() {
//                         layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
//                         location.reload();
//                     })
//                 }
//             }
//         }
//     }

//     //Nhấn phím Tạo
//     xuLi_ngu_phap.onclick = function() {
//         var ten = $('.input1_ten').value;
//         var cau_truc = $('.input2-cauTruc').value;
//         var cach_dung = $('.input2-cachDung').value;
//         var user_ngu_phap_check = $('.user_ngu_phap_check');
//         var today = new Date();
//         var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
//             today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

//         layDuLieu_ngu_phap(check_ton_tai_NP);

//         function check_ton_tai_NP(ngu_phap) {
//             var loc_user_ngu_phap_ton_tai = ngu_phap.filter(function(ngu_phaps) {
//                 return ngu_phaps.user === document.cookie.slice(4);
//             })

//             var loc_user_ngu_phap_ton_tai2 = loc_user_ngu_phap_ton_tai.some(function(ngu_phapss) {
//                 return ngu_phapss.ten === ten;
//             })

//             if (loc_user_ngu_phap_ton_tai2 == true) {
//                 user_ngu_phap_check.innerHTML = "Ngữ pháp đã tồn tại";
//             } else {
//                 var user = document.cookie.slice(4);
//                 if (ten === "") {
//                     ten = "none";
//                 }

//                 if (cau_truc === "") {
//                     cau_truc = "none";
//                 }

//                 if (cach_dung === "") {
//                     cach_dung = "none";
//                 }

//                 formData = {
//                     ten: ten,
//                     cau_truc: cau_truc,
//                     cach_dung: cach_dung,
//                     date: date,
//                     user: user
//                 }
//                 taoDuLieu_ngu_phap(formData, function() {
//                     layDuLieu_ngu_phap(xuatDuLieu_ngu_phap);
//                     location.reload();
//                 })
//             }
//         }
//     }
// }

//Phần API đăng nhập
function batDau_dang_nhap() {
    xuLi_dang_nhap();
}
batDau_dang_nhap();

function layDuLieu_dang_nhap(callback) {
    fetch(API_dang_nhap)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_dang_nhap(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_dang_nhap, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_dang_nhap() {
    var dang_nhap1_password = $('.dang_nhap1_password');
    dang_nhap1_password.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var dang_nhap_ten = $('.dang_nhap1_ten');
            var dang_nhap_pass = $('.dang_nhap1_password');
            var nosucces = $('.nosuccses');
            var admin = $('.header-thong_tin_1');
            var header_thong_tin_user_1DN = $('.header-thong_tin_user_1');
            var header_thong_tin_1DN = $('.header-thong_tin_1');
            var thong_tin_user_adminDN = $('.thong_tin_user_admin');

            layDuLieu_dang_nhap(check)

            function check(user) {
                var checkten = user.findIndex(function(users) {
                    return users.ten === dang_nhap_ten.value;
                })

                if (checkten != -1) {
                    var checkPast = user.find(function(userss) {
                        return userss.id === (checkten + 1);
                    })
                    if (checkPast.password == dang_nhap_pass.value) {
                        location.reload();
                        thong_tin_user_adminDN.innerHTML = checkPast.ten;

                        function setCookie(cname, cvalue, exdays) {
                            const d = new Date();
                            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                            let expires = "expires=" + d.toUTCString();
                            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                        }
                        setCookie("ten", checkPast.ten, 365);
                    } else {
                        nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                    }
                } else {
                    nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                }
            }
        }
    }
    var dang_nhap = $('.create_dang_nhap')
    dang_nhap.onclick = function() {
        var dang_nhap_ten = $('.dang_nhap1_ten');
        var dang_nhap_pass = $('.dang_nhap1_password');
        var nosucces = $('.nosuccses');
        var admin = $('.header-thong_tin_1');
        var header_thong_tin_user_1DN = $('.header-thong_tin_user_1');
        var header_thong_tin_1DN = $('.header-thong_tin_1');
        var thong_tin_user_adminDN = $('.thong_tin_user_admin');

        layDuLieu_dang_nhap(check)

        function check(user) {
            var checkten = user.findIndex(function(users) {
                return users.ten === dang_nhap_ten.value;
            })

            if (checkten != -1) {
                var checkPast = user.find(function(userss) {
                    return userss.id === (checkten + 1);
                })
                if (checkPast.password == dang_nhap_pass.value) {
                    location.reload();
                    thong_tin_user_adminDN.innerHTML = checkPast.ten;

                    function setCookie(cname, cvalue, exdays) {
                        const d = new Date();
                        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                        let expires = "expires=" + d.toUTCString();
                        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                    }
                    setCookie("ten", checkPast.ten, 365);
                } else {
                    nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                }
            } else {
                nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
            }
        }
    }
}

var thong_tin_user_adminDN = $('.thong_tin_user_admin');
var header_thong_tin_user_1DN = $('.header-thong_tin_user_1');
var header_thong_tin_1DN = $('.header-thong_tin_1');
var cat_chuoi = document.cookie.slice(4);

thong_tin_user_adminDN.innerHTML = cat_chuoi;

if (document.cookie != "") {
    header_thong_tin_user_1DN.classList.add('DisplayFlex');
    header_thong_tin_1DN.classList.add('noneDisplay')
}

//Xử lí động
var dang_nhap = $('.create_dang_nhap');
var dang_nhap_ten = $('.dang_nhap1_ten');
var dang_nhap_pass = $('.dang_nhap1_password');
dang_nhap.disabled = true;

dang_nhap_ten.oninput = function() {
    dang_nhap_pass.oninput = function() {
        if (dang_nhap_pass.value != "" && dang_nhap_ten != "") {
            dang_nhap.classList.add('Poiter');
            dang_nhap.disabled = false;
        }
    }
}

dang_nhap_pass.oninput = function() {
    dang_nhap_ten.oninput = function() {
        if (dang_nhap_ten.value != "" && dang_nhap_ten != "") {
            dang_nhap.classList.add('Poiter');
            dang_nhap.disabled = false;
        }
    }
}

//Phần API đăng kí
function batDau_dang_ki() {
    xuLi_dang_ki();
}
batDau_dang_ki();

function layDuLieu_dang_ki(callback) {
    fetch(API_dang_ki)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_dang_ki(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_dang_ki, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_dang_ki() {
    var dang_ki1_password = $('.dang_ki1_password');
    dang_ki1_password.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            layDuLieu_dang_ki(check)

            function check(user) {
                var checkten = user.findIndex(function(users) {
                    return users.ten === dang_ki_ten.value;
                })

                if (checkten != -1) {
                    nosucces.innerHTML = "Tên tài khoản đã tồn tại";
                } else {
                    var ten = $('.dang_ki1_ten').value;
                    var password = $('.dang_ki1_password').value;
                    var today = new Date();
                    var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
                        today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

                    formData = {
                        ten: ten,
                        password: password,
                        date: date
                    }
                    taoDuLieu_dang_ki(formData, function() {
                        location.reload();
                    })
                    alert("Bạn đã đăng kí tài khoản thành công")
                }
            }
        }
    }
    var dang_ki = $('.create_dang_ki')
    var dang_ki_ten = $('.dang_ki1_ten');
    var dang_ki_pass = $('.dang_ki1_password');
    var nosucces = $('.checkTen');
    dang_ki.onclick = function() {
        layDuLieu_dang_ki(check)

        function check(user) {
            var checkten = user.findIndex(function(users) {
                return users.ten === dang_ki_ten.value;
            })

            if (checkten != -1) {
                nosucces.innerHTML = "Tên tài khoản đã tồn tại";
            } else {
                var ten = $('.dang_ki1_ten').value;
                var password = $('.dang_ki1_password').value;
                var today = new Date();
                var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
                    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

                formData = {
                    ten: ten,
                    password: password,
                    date: date
                }
                taoDuLieu_dang_ki(formData, function() {
                    location.reload();
                })
                alert("Bạn đã đăng kí tài khoản thành công")
            }
        }
    }
}

//Xử lí động
var dang_ki = $('.create_dang_ki');
var dang_ki_ten = $('.dang_ki1_ten');
var dang_ki_pass = $('.dang_ki1_password');
dang_ki.disabled = true;

dang_ki_ten.oninput = function() {
    dang_ki_pass.oninput = function() {
        if (dang_ki_pass.value != "" && dang_ki_ten != "") {
            dang_ki.classList.add('Poiter');
            dang_ki.disabled = false;
        }
    }
}

dang_ki_pass.oninput = function() {
    dang_ki_ten.oninput = function() {
        if (dang_ki_ten.value != "" && dang_ki_ten != "") {
            dang_ki.classList.add('Poiter');
            dang_ki.disabled = false;
        }
    }
}

//Xử lí chung
var headerXL = $('.header');
var header_secondXL = $('.header_second');
var body_cmtXL = $('.body_cmt');
var footerXL = $('.footer');
var danhGiaXL = $('#danhGia');
var dang_nhapXL = $('#dang_nhap');
var dang_kiXL = $('#dang_ki');

var header_second_cmt1 = $('.header_second--cmt1');
var nut_dang_nhap = $('.nut_dang_nhap');
var nut_dang_ki = $('.nut_dang_ki');

var dang_nhap_thoat = $('.dang_nhap_thoat');
var dang_ki_thoat = $('.dang_ki_thoat');

var dang_ki_chuyenXL = $('.dang_ki_chuyen');
var dang_nhap_chuyenXL = $('.dang_nhap_chuyen');

//Thoát

dang_nhap_thoat.onclick = function() {
    location.reload();
}

dang_ki_thoat.onclick = function() {
    location.reload();
}

//Chuyển

dang_ki_chuyenXL.onclick = function() {
    dang_kiXL.classList.add('Display');
    dang_nhapXL.classList.remove('Display')
}

dang_nhap_chuyenXL.onclick = function() {
    dang_nhapXL.classList.add('Display')
    dang_kiXL.classList.remove('Display')
}

//Đăng nhập
nut_dang_nhap.onclick = function() {
    headerXL.classList.add('noneDisplay');
    header_secondXL.classList.add('noneDisplay');
    body_cmtXL.classList.add('noneDisplay');
    footerXL.classList.add('noneDisplay');
    dang_nhapXL.classList.add('Display');
    danhGiaXL.classList.add('noneDisplay')
}

const dang_nhap1_password = $('.dang_nhap1_password')
const dang_nhap1_xemMK = $('.dang_nhap1_xemMK')

dang_nhap1_xemMK.addEventListener('click', function() {

    const currentType = dang_nhap1_password.getAttribute('type')

    dang_nhap1_password.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})

//Đăng kí
nut_dang_ki.onclick = function() {
    headerXL.classList.add('noneDisplay');
    header_secondXL.classList.add('noneDisplay');
    body_cmtXL.classList.add('noneDisplay');
    footerXL.classList.add('noneDisplay');
    dang_kiXL.classList.add('Display');
    danhGiaXL.classList.add('noneDisplay')
}

const dang_ki1_password = $('.dang_ki1_password')
const dang_ki1_xemMK = $('.dang_ki1_xemMK')

dang_ki1_xemMK.addEventListener('click', function() {

    const currentType = dang_ki1_password.getAttribute('type')

    dang_ki1_password.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})

//Đăng xuất
var dang_xuat = $('.fa-sign-out-alt');
dang_xuat.onclick = function() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var equals = cookies[i].indexOf("=");
        var name = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    location.reload()
}

//Xử lí css
var header1 = $('.header1');
var header_thong_tin_user_1 = $('#header-thong_tin_user_1');
var thong_tin_user_adminDN = $('.thong_tin_user_admin');

if (window.screen.width > 360) {
    Object.assign(header1.style, {
        flex: "1"
    })
} else {
    thong_tin_user_adminDN.style.padding = 0;
    header_thong_tin_user_1.style.padding = 0;

    Object.assign(header_thong_tin_user_1.style, {
        flex: "3"
    })
}

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

//Giao diện Apps
var header_second = $('.header_second');
var content = $('.content');
var content2 = $('.content2');
var danhGiaXL = $('#danhGia');
var footerXL = $('.footer');
var app1 = $('.app1');
var app2 = $('.app2');

app1.onclick = function() {
    content.classList.add('Display');
    header_second.classList.add('noneDisplay');
    danhGiaXL.classList.add('noneDisplay');
    content2.classList.add('noneDisplay');
    content.classList.remove('noneDisplay')
    footerXL.classList.add('noneDisplay');
}

app2.onclick = function() {
    content2.classList.add('Display');
    header_second.classList.add('noneDisplay');
    danhGiaXL.classList.add('noneDisplay');
    content.classList.add('noneDisplay');
    content2.classList.remove('noneDisplay');
    footerXL.classList.add('noneDisplay');
}