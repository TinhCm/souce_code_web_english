var API = 'https://demo-apps-en.herokuapp.com/list'
var API2 = 'https://demo-apps-en.herokuapp.com/ngu_phap'
var API3 = "https://demo-apps-en.herokuapp.com/gop_y"

// var API = 'http://localhost:3000/list'
// var API2 = 'http://localhost:3000/ngu_phap'
// var API3 = "http://localhost:3000/gop_y"

//Phần API từ vựng
function batDau1()
{
    layDuLieu1(xuatDuLieu1);
    xuLi1();
}
batDau1();

function layDuLieu1(callback)
{
    fetch(API)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu1(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
           },
    }

    fetch(API,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xoaDuLieu1(id)
{
    var opption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
           },
    }

    fetch(API + '/' + id,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(function()
        {
            layDuLieu1(xuatDuLieu1);
        });
}

function xuatDuLieu1(list)
{
    var htmls = list.map(function(lists)
    {
        return `<li class = "list-item-${lists.id}" id = list>
                    <h4 class = "lists-tuvung">${lists.tu_vung}</h4>
                    <div class = "lists-nghia"> 
                        <h4 >=> ${lists.nghia}</h4>
                        <button class = "Poiter" onclick = "xoaDuLieu1(${lists.id})">x</button>
                    </div>
                </li>`
    })

    document.querySelector('.content_list').innerHTML = htmls.join('');
}

// function handleChangeCourse(id) { // khi an vao nut change: hien khung thay doi va thay doi khi an vao nut save
//     fetch(API)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(list) {
//         return lists = list.find(function(lists) {
//             return lists.id = id
//         })
//     })
//     .then(function(lists) {
//         var formChange = document.getElementById('one')
//         div = `
//         <div>
//             <label style="width: 15%;">New Name</label>
//             <input  placeholder="Change: phan tu thu ${lists.id}" type="text" name="tu_vung_moi">
//         </div>
//         <div>
//             <label style="width: 15%;">New Description</label>
//             <input placeholder="Change: phan tu thu ${lists.id}" type="text" name="nghia_moi">
//         </div>
//         <div>
//             <button id="save">Save</button>
//         </div>
//         `
//         formChange.innerHTML = div

//         var saveBtn = document.querySelector('#save')
//         saveBtn.onclick = function() {
//             var tu_vung_moi = document.querySelector('input[name="tu_vung_moi"]').value
//             var nghia_moi = document.querySelector('input[name="nghia_moi"]').value
//             var newFormData = {
//                 tu_vung: tu_vung_moi,
//                 nghia: nghia_moi
//             }
            
//             var option = {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newFormData)
//             }

//             fetch(API + '/' + id, option)
//                 .then(function(response) {
//                     return response.json()
//                 })
//                 .then(function() {
//                     layDuLieu1(xuatDuLieu1);
//                 })
//                 formChange.classList.remove('#one')
//         }
//     })
// }

function xuLi1()
{
    var a = document.querySelector('.content--create')
    a.onclick = function()
    {
        var tu_vung = document.querySelector('.input1_tu').value;
        var nghia = document.querySelector('.input2_nghia').value;
        formData = {
            tu_vung:tu_vung,
            nghia:nghia,
        }
        taoDuLieu1(formData,function()
        {
            layDuLieu1(xuatDuLieu1);
        })
    }
}

// Phần API ngữ pháp
function batDau()
{
    layDuLieu(xuatDuLieu);
    xuLi();
}
batDau();

function layDuLieu(callback)
{
    fetch(API2)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
           },
    }

    fetch(API2,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xoaDuLieu(id)
{
    var opption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
           },
    }

    fetch(API2 + '/' + id,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(function()
        {
            layDuLieu(xuatDuLieu);
        });
}

function xuatDuLieu(ngu_phap)
{
    var htmls = ngu_phap.map(function(pramas)
    {
        return `<li class = "prame_temp">
                    <h4>${pramas.ten}</h4>
                    <h4>Cấu trúc: ${pramas.cau_truc}</h4>
                    <h4>Cách dùng: ${pramas.cach_dung}</h4>
                    <button class = "pramas Poiter " onclick = "xoaDuLieu(${pramas.id})">Xóa</button>
                </li>`
    })

    document.querySelector('.content_list2').innerHTML = htmls.join('');
}

function xuLi()
{
    var b = document.querySelector('.content2--create')
    b.onclick = function()
    {
        var ten = document.querySelector('.input1_ten').value;
        var cau_truc = document.querySelector('.input2-cauTruc').value;
        var cach_dung = document.querySelector('.input2-cachDung').value;
        formData = {
            ten: ten,
            cau_truc: cau_truc,
            cach_dung: cach_dung,
        }
        taoDuLieu(formData,function()
        {
            layDuLieu(xuatDuLieu);
        })
    }
}

 