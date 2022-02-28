var _0x1f6375 = _0x4b27;
(function(_0x2c9ed3, _0x2cb90b) {
    var _0x16af31 = _0x4b27,
        _0x47c5f5 = _0x2c9ed3();
    while (!![]) {
        try {
            var _0x300936 = -parseInt(_0x16af31(0x1a0)) / 0x1 + -parseInt(_0x16af31(0x1a9)) / 0x2 * (parseInt(_0x16af31(0x196)) / 0x3) + parseInt(_0x16af31(0x1b1)) / 0x4 * (parseInt(_0x16af31(0x1ae)) / 0x5) + -parseInt(_0x16af31(0x19d)) / 0x6 + parseInt(_0x16af31(0x16e)) / 0x7 + parseInt(_0x16af31(0x1b6)) / 0x8 * (-parseInt(_0x16af31(0x1af)) / 0x9) + parseInt(_0x16af31(0x16b)) / 0xa;
            if (_0x300936 === _0x2cb90b) break;
            else _0x47c5f5['push'](_0x47c5f5['shift']());
        } catch (_0x53c622) { _0x47c5f5['push'](_0x47c5f5['shift']()); }
    }
}(_0x30a9, 0x4308c));
var API_dang_nhap = 'https://learning-english.glitch.me/user',
    API_dang_ki = 'https://learning-english.glitch.me/user',
    API_hoc_bai = _0x1f6375(0x19c);
const $ = document[_0x1f6375(0x1b8)][_0x1f6375(0x1d4)](document);

function batDau_dang_nhap() { xuLi_dang_nhap(); }
batDau_dang_nhap();

function layDuLieu_dang_nhap(_0x4d4f54) {
    var _0x47210e = _0x1f6375;
    fetch(API_dang_nhap)[_0x47210e(0x18b)](function(_0x755e92) { var _0x7c29c1 = _0x47210e; return _0x755e92[_0x7c29c1(0x186)](); })['then'](_0x4d4f54);
}

function taoDuLieu_dang_nhap(_0x21b2d7, _0x35f489) {
    var _0x43e3bd = _0x1f6375,
        _0x5bdd54 = { 'method': 'POST', 'body': JSON[_0x43e3bd(0x1bb)](_0x21b2d7), 'headers': { 'Content-Type': _0x43e3bd(0x1ca) } };
    fetch(API_dang_nhap, _0x5bdd54)[_0x43e3bd(0x18b)](function(_0x48e9bc) { var _0x13c8aa = _0x43e3bd; return _0x48e9bc[_0x13c8aa(0x186)](); })['then'](_0x35f489);
}

function xuLi_dang_nhap() {
    var _0x51fd88 = _0x1f6375,
        _0x188584 = $(_0x51fd88(0x18d));
    _0x188584[_0x51fd88(0x17a)] = function(_0x5cefe1) {
        var _0xa1b199 = _0x51fd88,
            _0x4b1839 = _0x5cefe1[_0xa1b199(0x17c)] || _0x5cefe1[_0xa1b199(0x179)];
        if (_0x4b1839 == 0xd) {
            var _0x10724d = $(_0xa1b199(0x16c)),
                _0x4c2a77 = $(_0xa1b199(0x18d)),
                _0x31b1c2 = $(_0xa1b199(0x1d3)),
                _0x4c554e = $(_0xa1b199(0x1d2)),
                _0x153f63 = $(_0xa1b199(0x198)),
                _0x32fa29 = $('.header-thong_tin_1'),
                _0x54931c = $(_0xa1b199(0x1ab));
            layDuLieu_dang_nhap(_0x352094);

            function _0x352094(_0x37d28c) {
                var _0x178a3b = _0xa1b199,
                    _0x2ac6ee = _0x37d28c[_0x178a3b(0x1bd)](function(_0x10c39d) { var _0x1d5146 = _0x178a3b; return _0x10c39d[_0x1d5146(0x197)] === _0x10724d[_0x1d5146(0x17b)]; });
                if (_0x2ac6ee != -0x1) {
                    var _0x20062c = _0x37d28c[_0x178a3b(0x16f)](function(_0x3144c7) { return _0x3144c7['id'] === _0x2ac6ee + 0x1; });
                    if (_0x20062c[_0x178a3b(0x193)] == _0x4c2a77[_0x178a3b(0x17b)]) {
                        location[_0x178a3b(0x1cf)](), _0x54931c['innerHTML'] = _0x20062c[_0x178a3b(0x197)];

                        function _0x193b5a(_0x1aba7d, _0x1fc8a9, _0x389482) {
                            var _0x5c809f = _0x178a3b;
                            const _0xc5852d = new Date();
                            _0xc5852d[_0x5c809f(0x16d)](_0xc5852d['getTime']() + _0x389482 * 0x18 * 0x3c * 0x3c * 0x3e8);
                            let _0x1d75c1 = _0x5c809f(0x1b2) + _0xc5852d[_0x5c809f(0x178)]();
                            document['cookie'] = _0x1aba7d + '=' + _0x1fc8a9 + ';' + _0x1d75c1 + _0x5c809f(0x1d1);
                        }
                        _0x193b5a(_0x178a3b(0x197), _0x20062c[_0x178a3b(0x197)], 0x16d);
                    } else _0x31b1c2['innerHTML'] = _0x178a3b(0x189);
                } else _0x31b1c2[_0x178a3b(0x1b9)] = 'Tên\x20đăng\x20nhập\x20hoặc\x20mật\x20khẩu\x20sai';
            }
        }
    };
    var _0x388cea = $(_0x51fd88(0x1aa));
    _0x388cea['onclick'] = function() {
        var _0x5e730a = _0x51fd88,
            _0x5b8adf = $(_0x5e730a(0x16c)),
            _0x1df772 = $(_0x5e730a(0x18d)),
            _0x57f26f = $(_0x5e730a(0x1d3)),
            _0x22921c = $(_0x5e730a(0x1d2)),
            _0x115440 = $(_0x5e730a(0x198)),
            _0x177317 = $(_0x5e730a(0x1d2)),
            _0xdb5902 = $('.thong_tin_user_admin');
        layDuLieu_dang_nhap(_0x1b15de);

        function _0x1b15de(_0x1d17e1) {
            var _0x4cfa3c = _0x5e730a,
                _0x1d8ae9 = _0x1d17e1['findIndex'](function(_0x1a14fa) { var _0x1fca0a = _0x4b27; return _0x1a14fa[_0x1fca0a(0x197)] === _0x5b8adf[_0x1fca0a(0x17b)]; });
            if (_0x1d8ae9 != -0x1) {
                var _0xc2e87c = _0x1d17e1[_0x4cfa3c(0x16f)](function(_0x59e8c9) { return _0x59e8c9['id'] === _0x1d8ae9 + 0x1; });
                if (_0xc2e87c[_0x4cfa3c(0x193)] == _0x1df772[_0x4cfa3c(0x17b)]) {
                    location[_0x4cfa3c(0x1cf)](), _0xdb5902[_0x4cfa3c(0x1b9)] = _0xc2e87c[_0x4cfa3c(0x197)];

                    function _0x112434(_0xe6b137, _0x3ae0e4, _0xe297c5) {
                        var _0x4cce3b = _0x4cfa3c;
                        const _0x50a1c2 = new Date();
                        _0x50a1c2[_0x4cce3b(0x16d)](_0x50a1c2[_0x4cce3b(0x184)]() + _0xe297c5 * 0x18 * 0x3c * 0x3c * 0x3e8);
                        let _0x534fb1 = _0x4cce3b(0x1b2) + _0x50a1c2[_0x4cce3b(0x178)]();
                        document[_0x4cce3b(0x199)] = _0xe6b137 + '=' + _0x3ae0e4 + ';' + _0x534fb1 + ';path=/';
                    }
                    _0x112434(_0x4cfa3c(0x197), _0xc2e87c[_0x4cfa3c(0x197)], 0x16d);
                } else _0x57f26f[_0x4cfa3c(0x1b9)] = _0x4cfa3c(0x189);
            } else _0x57f26f[_0x4cfa3c(0x1b9)] = _0x4cfa3c(0x189);
        }
    };
}
var thong_tin_user_adminDN = $(_0x1f6375(0x1ab)),
    header_thong_tin_user_1DN = $('.header-thong_tin_user_1'),
    header_thong_tin_1DN = $('.header-thong_tin_1'),
    cat_chuoi = document['cookie'][_0x1f6375(0x1a8)](0x4);
thong_tin_user_adminDN[_0x1f6375(0x1b9)] = cat_chuoi;
document[_0x1f6375(0x199)] != '' && (header_thong_tin_user_1DN[_0x1f6375(0x18f)][_0x1f6375(0x18e)]('DisplayFlex'), header_thong_tin_1DN[_0x1f6375(0x18f)][_0x1f6375(0x18e)](_0x1f6375(0x19b)));
var dang_nhap = $(_0x1f6375(0x1aa)),
    dang_nhap_ten = $(_0x1f6375(0x16c)),
    dang_nhap_pass = $(_0x1f6375(0x18d));

function _0x30a9() {
    var _0x2bf99c = ['add', 'classList', 'href', '.header-thong_tin_menu2', '/index.html#cau_hoi', 'password', '.header_second--cmt1', '.content_update', '3xmapXz', 'ten', '.header-thong_tin_user_1', 'cookie', '.header-thong_tin_menu', 'noneDisplay', 'https://learning-english.glitch.me/list', '1980858poONCv', '.gop_y2_cmt', 'setAttribute', '143478CWRJdZ', 'type', 'length', 'Display', 'disabled', '.header', 'style', '.dang_ki1_ten', 'slice', '1022596ZjPmCB', '.create_dang_nhap', '.thong_tin_user_admin', 'addEventListener', '.footer', '1346745PgYQkk', '18ofMPRZ', 'text', '4tNwNoG', 'expires=', 'Bạn\x20đã\x20đăng\x20kí\x20tài\x20khoản\x20thành\x20công', 'substr', 'getMonth', '2162832HbrVus', 'screen', 'querySelector', 'innerHTML', 'localStorage', 'stringify', '.create_dang_ki', 'findIndex', 'POST', 'getAttribute', 'getFullYear', 'Poiter', '.header1', '/thong_tin_user/thong_tin.html', '.header-thong_tin_menu1b', '.tai_lieu', '.dang_ki1_password', 'location', 'getSeconds', '.checkTen', 'application/json', '.header-thong_tin_menu2_ul', 'padding', '/index.html#tai_lieu', '.dang_ki1_xemMK', 'reload', '=;expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT', ';path=/', '.header-thong_tin_1', '.nosuccses', 'bind', '.nhan_tai_lieu', 'split', '#danhGia', '11515320kzgtbI', '.dang_nhap1_ten', 'setTime', '2655226kClxpG', 'find', '.nut_dang_ki', 'assign', '#header-thong_tin_user_1', '.dang_ki_chuyen', '.dang_nhap_thoat', '.dang_nhap1_xemMK', '.thoat_menu', '#dang_nhap', 'toUTCString', 'which', 'onkeypress', 'value', 'keyCode', 'opacity', 'remove', 'getDate', 'oninput', 'click', '.danhGia_button', 'getMinutes', 'getTime', 'onclick', 'json', '.cau_hoi', 'Tên\x20tài\x20khoản\x20đã\x20tồn\x20tại', 'Tên\x20đăng\x20nhập\x20hoặc\x20mật\x20khẩu\x20sai', 'getHours', 'then', 'width', '.dang_nhap1_password'];
    _0x30a9 = function() { return _0x2bf99c; };
    return _0x30a9();
}
dang_nhap[_0x1f6375(0x1a4)] = !![], dang_nhap_ten[_0x1f6375(0x180)] = function() {
    var _0x2857f7 = _0x1f6375;
    dang_nhap_pass[_0x2857f7(0x180)] = function() {
        var _0x2bc3e1 = _0x2857f7;
        dang_nhap_pass['value'] != '' && dang_nhap_ten != '' && (dang_nhap[_0x2bc3e1(0x18f)][_0x2bc3e1(0x18e)](_0x2bc3e1(0x1c1)), dang_nhap['disabled'] = ![]);
    };
}, dang_nhap_pass[_0x1f6375(0x180)] = function() {
    var _0x1bad57 = _0x1f6375;
    dang_nhap_ten[_0x1bad57(0x180)] = function() {
        var _0x298b70 = _0x1bad57;
        dang_nhap_ten['value'] != '' && dang_nhap_ten != '' && (dang_nhap['classList'][_0x298b70(0x18e)](_0x298b70(0x1c1)), dang_nhap[_0x298b70(0x1a4)] = ![]);
    };
};

function batDau_dang_ki() { xuLi_dang_ki(); }
batDau_dang_ki();

function layDuLieu_dang_ki(_0x110b5b) {
    var _0x58dfdc = _0x1f6375;
    fetch(API_dang_ki)['then'](function(_0x24fcbc) { var _0x2a20c3 = _0x4b27; return _0x24fcbc[_0x2a20c3(0x186)](); })[_0x58dfdc(0x18b)](_0x110b5b);
}

function taoDuLieu_dang_ki(_0x59993a, _0x20b6ae) {
    var _0x42cc46 = _0x1f6375,
        _0x12f8b4 = { 'method': _0x42cc46(0x1be), 'body': JSON['stringify'](_0x59993a), 'headers': { 'Content-Type': _0x42cc46(0x1ca) } };
    fetch(API_dang_ki, _0x12f8b4)[_0x42cc46(0x18b)](function(_0x12c845) { var _0x1efd7a = _0x42cc46; return _0x12c845[_0x1efd7a(0x186)](); })[_0x42cc46(0x18b)](_0x20b6ae);
}

function xuLi_dang_ki() {
    var _0x39d22e = _0x1f6375,
        _0x39958f = $(_0x39d22e(0x1c6));
    _0x39958f[_0x39d22e(0x17a)] = function(_0x4de2c7) {
        var _0x2a87ba = _0x39d22e,
            _0x42140f = _0x4de2c7[_0x2a87ba(0x17c)] || _0x4de2c7[_0x2a87ba(0x179)];
        if (_0x42140f == 0xd) {
            layDuLieu_dang_ki(_0x55ea0f);

            function _0x55ea0f(_0x5c67a2) {
                var _0x3883a2 = _0x2a87ba,
                    _0x3640f9 = _0x5c67a2['findIndex'](function(_0x300d69) { var _0x55f17a = _0x4b27; return _0x300d69[_0x55f17a(0x197)] === _0x257b51[_0x55f17a(0x17b)]; });
                if (_0x3640f9 != -0x1) _0x41c0c6[_0x3883a2(0x1b9)] = _0x3883a2(0x188);
                else {
                    var _0x1c067d = $('.dang_ki1_ten')['value'],
                        _0x2fe266 = $(_0x3883a2(0x1c6))[_0x3883a2(0x17b)],
                        _0x40fba3 = new Date(),
                        _0xf413c3 = _0x40fba3[_0x3883a2(0x18a)]() + ':' + _0x40fba3[_0x3883a2(0x183)]() + ':' + _0x40fba3[_0x3883a2(0x1c8)]() + '-' + _0x40fba3[_0x3883a2(0x17f)]() + '/' + (_0x40fba3['getMonth']() + 0x1) + '/' + _0x40fba3[_0x3883a2(0x1c0)]();
                    formData = { 'ten': _0x1c067d, 'password': _0x2fe266, 'date': _0xf413c3 }, taoDuLieu_dang_ki(formData, function() { location['reload'](); }), alert(_0x3883a2(0x1b3));
                }
            }
        }
    };
    var _0x6d9d9c = $(_0x39d22e(0x1bc)),
        _0x257b51 = $(_0x39d22e(0x1a7)),
        _0x1fea41 = $(_0x39d22e(0x1c6)),
        _0x41c0c6 = $(_0x39d22e(0x1c9));
    _0x6d9d9c['onclick'] = function() {
        layDuLieu_dang_ki(_0x55a648);

        function _0x55a648(_0x5a4c7) {
            var _0x498ac6 = _0x4b27,
                _0x35ed3d = _0x5a4c7[_0x498ac6(0x1bd)](function(_0x930581) { var _0x4dfa13 = _0x498ac6; return _0x930581[_0x4dfa13(0x197)] === _0x257b51[_0x4dfa13(0x17b)]; });
            if (_0x35ed3d != -0x1) _0x41c0c6[_0x498ac6(0x1b9)] = _0x498ac6(0x188);
            else {
                var _0x5794b9 = $(_0x498ac6(0x1a7))[_0x498ac6(0x17b)],
                    _0x5c56a0 = $('.dang_ki1_password')['value'],
                    _0x2e0535 = new Date(),
                    _0x45709e = _0x2e0535[_0x498ac6(0x18a)]() + ':' + _0x2e0535[_0x498ac6(0x183)]() + ':' + _0x2e0535['getSeconds']() + '-' + _0x2e0535['getDate']() + '/' + (_0x2e0535[_0x498ac6(0x1b5)]() + 0x1) + '/' + _0x2e0535[_0x498ac6(0x1c0)]();
                formData = { 'ten': _0x5794b9, 'password': _0x5c56a0, 'date': _0x45709e }, taoDuLieu_dang_ki(formData, function() { location['reload'](); }), alert('Bạn\x20đã\x20đăng\x20kí\x20tài\x20khoản\x20thành\x20công');
            }
        }
    };
}

function _0x4b27(_0x419ad6, _0x5880cb) { var _0x30a951 = _0x30a9(); return _0x4b27 = function(_0x4b27fc, _0x32a82c) { _0x4b27fc = _0x4b27fc - 0x168; var _0x570cbb = _0x30a951[_0x4b27fc]; return _0x570cbb; }, _0x4b27(_0x419ad6, _0x5880cb); }
var dang_ki = $(_0x1f6375(0x1bc)),
    dang_ki_ten = $('.dang_ki1_ten'),
    dang_ki_pass = $(_0x1f6375(0x1c6));
dang_ki[_0x1f6375(0x1a4)] = !![], dang_ki_ten['oninput'] = function() {
    dang_ki_pass['oninput'] = function() {
        var _0x32da05 = _0x4b27;
        dang_ki_pass[_0x32da05(0x17b)] != '' && dang_ki_ten != '' && (dang_ki['classList'][_0x32da05(0x18e)](_0x32da05(0x1c1)), dang_ki[_0x32da05(0x1a4)] = ![]);
    };
}, dang_ki_pass[_0x1f6375(0x180)] = function() {
    var _0x26b396 = _0x1f6375;
    dang_ki_ten[_0x26b396(0x180)] = function() {
        var _0x28998d = _0x26b396;
        dang_ki_ten[_0x28998d(0x17b)] != '' && dang_ki_ten != '' && (dang_ki[_0x28998d(0x18f)]['add'](_0x28998d(0x1c1)), dang_ki['disabled'] = ![]);
    };
};
var headerXL = $(_0x1f6375(0x1a5)),
    header_secondXL = $('.header_second'),
    content_update = $(_0x1f6375(0x195)),
    cau_hoi = $(_0x1f6375(0x187)),
    body_cmtXL = $('.body_cmt'),
    footerXL = $(_0x1f6375(0x1ad)),
    danhGiaXL = $(_0x1f6375(0x16a)),
    dang_nhapXL = $(_0x1f6375(0x177)),
    dang_kiXL = $('#dang_ki'),
    tai_lieu = $(_0x1f6375(0x1c5)),
    header_second_cmt1 = $(_0x1f6375(0x194)),
    nut_dang_nhap = $('.nut_dang_nhap'),
    nut_dang_ki = $(_0x1f6375(0x170)),
    dang_nhap_thoat = $(_0x1f6375(0x174)),
    dang_ki_thoat = $('.dang_ki_thoat'),
    dang_ki_chuyenXL = $(_0x1f6375(0x173)),
    dang_nhap_chuyenXL = $('.dang_nhap_chuyen');
dang_nhap_thoat[_0x1f6375(0x185)] = function() {
    var _0x936bf0 = _0x1f6375;
    location[_0x936bf0(0x1cf)]();
}, dang_ki_thoat[_0x1f6375(0x185)] = function() {
    var _0x2340e6 = _0x1f6375;
    location[_0x2340e6(0x1cf)]();
}, dang_ki_chuyenXL[_0x1f6375(0x185)] = function() {
    var _0x44907c = _0x1f6375;
    dang_kiXL['classList'][_0x44907c(0x18e)](_0x44907c(0x1a3)), dang_nhapXL[_0x44907c(0x18f)]['remove'](_0x44907c(0x1a3));
}, dang_nhap_chuyenXL[_0x1f6375(0x185)] = function() {
    var _0x5cdfa8 = _0x1f6375;
    dang_nhapXL[_0x5cdfa8(0x18f)][_0x5cdfa8(0x18e)](_0x5cdfa8(0x1a3)), dang_kiXL[_0x5cdfa8(0x18f)][_0x5cdfa8(0x17e)](_0x5cdfa8(0x1a3));
}, nut_dang_nhap['onclick'] = function() {
    var _0x2d83df = _0x1f6375;
    headerXL[_0x2d83df(0x18f)][_0x2d83df(0x18e)]('noneDisplay'), header_secondXL[_0x2d83df(0x18f)][_0x2d83df(0x18e)](_0x2d83df(0x19b)), footerXL['classList'][_0x2d83df(0x18e)](_0x2d83df(0x19b)), dang_nhapXL[_0x2d83df(0x18f)][_0x2d83df(0x18e)]('Display'), content_update[_0x2d83df(0x18f)][_0x2d83df(0x18e)](_0x2d83df(0x19b)), cau_hoi[_0x2d83df(0x18f)][_0x2d83df(0x18e)]('noneDisplay'), tai_lieu[_0x2d83df(0x18f)][_0x2d83df(0x18e)](_0x2d83df(0x19b));
};
const dang_nhap1_password = $(_0x1f6375(0x18d)),
    dang_nhap1_xemMK = $(_0x1f6375(0x175));
dang_nhap1_xemMK[_0x1f6375(0x1ac)](_0x1f6375(0x181), function() {
    var _0x374b8b = _0x1f6375;
    const _0xddb6a3 = dang_nhap1_password['getAttribute'](_0x374b8b(0x1a1));
    dang_nhap1_password['setAttribute']('type', _0xddb6a3 === _0x374b8b(0x193) ? 'text' : 'password');
}), nut_dang_ki[_0x1f6375(0x185)] = function() {
    var _0x1baf21 = _0x1f6375;
    headerXL[_0x1baf21(0x18f)][_0x1baf21(0x18e)](_0x1baf21(0x19b)), header_secondXL[_0x1baf21(0x18f)][_0x1baf21(0x18e)](_0x1baf21(0x19b)), footerXL[_0x1baf21(0x18f)][_0x1baf21(0x18e)]('noneDisplay'), dang_kiXL['classList']['add'](_0x1baf21(0x1a3)), content_update[_0x1baf21(0x18f)][_0x1baf21(0x18e)](_0x1baf21(0x19b)), cau_hoi['classList']['add'](_0x1baf21(0x19b)), tai_lieu[_0x1baf21(0x18f)][_0x1baf21(0x18e)]('noneDisplay');
};
const dang_ki1_password = $(_0x1f6375(0x1c6)),
    dang_ki1_xemMK = $(_0x1f6375(0x1ce));
dang_ki1_xemMK['addEventListener'](_0x1f6375(0x181), function() {
    var _0x28340b = _0x1f6375;
    const _0x5215f2 = dang_ki1_password[_0x28340b(0x1bf)](_0x28340b(0x1a1));
    dang_ki1_password[_0x28340b(0x19f)](_0x28340b(0x1a1), _0x5215f2 === _0x28340b(0x193) ? _0x28340b(0x1b0) : _0x28340b(0x193));
});
var dang_xuat = $('.dang_xuat');
dang_xuat[_0x1f6375(0x185)] = function() {
    var _0x1e5cd1 = _0x1f6375,
        _0x1d1623 = document[_0x1e5cd1(0x199)][_0x1e5cd1(0x169)](';');
    for (var _0x5c7d69 = 0x0; _0x5c7d69 < _0x1d1623[_0x1e5cd1(0x1a2)]; _0x5c7d69++) {
        var _0x1e45b6 = _0x1d1623[_0x5c7d69]['indexOf']('='),
            _0x562a9d = _0x1e45b6 > -0x1 ? _0x1d1623[_0x5c7d69][_0x1e5cd1(0x1b4)](0x0, _0x1e45b6) : _0x1d1623[_0x5c7d69];
        document[_0x1e5cd1(0x199)] = _0x562a9d + _0x1e5cd1(0x1d0);
    }
    location[_0x1e5cd1(0x1cf)]();
};
var header1 = $(_0x1f6375(0x1c2)),
    header_thong_tin_user_1 = $(_0x1f6375(0x172)),
    thong_tin_user_adminDN = $('.thong_tin_user_admin');
window[_0x1f6375(0x1b7)][_0x1f6375(0x18c)] > 0x168 ? Object[_0x1f6375(0x171)](header1[_0x1f6375(0x1a6)], { 'flex': '1' }) : (thong_tin_user_adminDN[_0x1f6375(0x1a6)][_0x1f6375(0x1cc)] = 0x0, header_thong_tin_user_1[_0x1f6375(0x1a6)]['padding'] = 0x0, Object['assign'](header_thong_tin_user_1[_0x1f6375(0x1a6)], { 'flex': '3' }));
var header_thong_tin_menu = $(_0x1f6375(0x19a)),
    header_thong_tin_menu1b = $(_0x1f6375(0x1c4)),
    header_thong_tin_menu2_ul = $(_0x1f6375(0x1cb)),
    header_thong_tin_menu2 = $(_0x1f6375(0x191)),
    thoat_menu = $(_0x1f6375(0x176)),
    nhan_cau_hoi = $('.nhan_cau_hoi'),
    nhan_tai_lieu = $(_0x1f6375(0x168)),
    gop_y_input1 = $(_0x1f6375(0x19e)),
    danhGia_button = $(_0x1f6375(0x182)),
    header_thong_tin_user_1 = $(_0x1f6375(0x172));
header_thong_tin_menu['onclick'] = function() {
    var _0x3bd0ab = _0x1f6375;
    header_thong_tin_menu2_ul[_0x3bd0ab(0x18f)][_0x3bd0ab(0x17e)]('noneDisplay'), header_thong_tin_menu2_ul[_0x3bd0ab(0x18f)]['add'](_0x3bd0ab(0x1a3)), header_thong_tin_menu[_0x3bd0ab(0x18f)][_0x3bd0ab(0x18e)](_0x3bd0ab(0x19b)), header_thong_tin_menu1b[_0x3bd0ab(0x18f)][_0x3bd0ab(0x18e)]('Display'), header_thong_tin_menu1b['classList'][_0x3bd0ab(0x17e)](_0x3bd0ab(0x19b)), thoat_menu['classList'][_0x3bd0ab(0x18e)](_0x3bd0ab(0x17d)), gop_y_input1[_0x3bd0ab(0x18f)][_0x3bd0ab(0x18e)](_0x3bd0ab(0x17d));
}, header_thong_tin_menu1b[_0x1f6375(0x185)] = function() {
    var _0x21957d = _0x1f6375;
    header_thong_tin_menu2_ul['classList'][_0x21957d(0x18e)]('noneDisplay'), header_thong_tin_menu1b[_0x21957d(0x18f)][_0x21957d(0x18e)](_0x21957d(0x19b)), header_thong_tin_menu[_0x21957d(0x18f)]['remove']('noneDisplay'), header_thong_tin_menu[_0x21957d(0x18f)][_0x21957d(0x18e)](_0x21957d(0x1a3)), thoat_menu[_0x21957d(0x18f)][_0x21957d(0x17e)](_0x21957d(0x17d));
}, thoat_menu[_0x1f6375(0x185)] = function() {
    var _0x2a2e1e = _0x1f6375;
    header_thong_tin_menu2_ul[_0x2a2e1e(0x18f)][_0x2a2e1e(0x18e)]('noneDisplay'), header_thong_tin_menu1b[_0x2a2e1e(0x18f)]['add'](_0x2a2e1e(0x19b)), header_thong_tin_menu[_0x2a2e1e(0x18f)][_0x2a2e1e(0x17e)]('noneDisplay'), header_thong_tin_menu[_0x2a2e1e(0x18f)][_0x2a2e1e(0x18e)](_0x2a2e1e(0x1a3)), thoat_menu[_0x2a2e1e(0x18f)][_0x2a2e1e(0x17e)](_0x2a2e1e(0x17d));
}, nhan_cau_hoi[_0x1f6375(0x185)] = function() {
    var _0xba549d = _0x1f6375;
    header_thong_tin_menu2_ul[_0xba549d(0x18f)][_0xba549d(0x18e)](_0xba549d(0x19b)), header_thong_tin_menu1b[_0xba549d(0x18f)][_0xba549d(0x18e)](_0xba549d(0x19b)), header_thong_tin_menu[_0xba549d(0x18f)][_0xba549d(0x17e)](_0xba549d(0x19b)), header_thong_tin_menu['classList'][_0xba549d(0x18e)](_0xba549d(0x1a3)), thoat_menu[_0xba549d(0x18f)][_0xba549d(0x17e)](_0xba549d(0x17d)), window[_0xba549d(0x1ba)][_0xba549d(0x190)] = _0xba549d(0x192);
}, nhan_tai_lieu[_0x1f6375(0x185)] = function() {
    var _0x12a2c3 = _0x1f6375;
    header_thong_tin_menu2_ul[_0x12a2c3(0x18f)][_0x12a2c3(0x18e)]('noneDisplay'), header_thong_tin_menu1b['classList'][_0x12a2c3(0x18e)](_0x12a2c3(0x19b)), header_thong_tin_menu[_0x12a2c3(0x18f)][_0x12a2c3(0x17e)]('noneDisplay'), header_thong_tin_menu[_0x12a2c3(0x18f)][_0x12a2c3(0x18e)](_0x12a2c3(0x1a3)), thoat_menu[_0x12a2c3(0x18f)][_0x12a2c3(0x17e)]('opacity'), window[_0x12a2c3(0x1ba)][_0x12a2c3(0x190)] = _0x12a2c3(0x1cd);
}, header_thong_tin_user_1['onclick'] = function() {
    var _0x482cbb = _0x1f6375;
    window[_0x482cbb(0x1c7)][_0x482cbb(0x190)] = _0x482cbb(0x1c3);
};