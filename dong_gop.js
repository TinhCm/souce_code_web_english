var API = 'https://demo-apps-en.herokuapp.com/list'
var API2 = 'https://demo-apps-en.herokuapp.com/ngu_phap'
var API3 = "https://demo-apps-en.herokuapp.com/gop_y"

// var API = 'http://localhost:3000/list'
// var API2 = 'http://localhost:3000/ngu_phap'
// var API3 = "http://localhost:3000/gop_y"

function batDau2()
{
    xuLi2();
}
batDau2();

function taoDuLieu2(data,callback)
{
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {  
            "Content-Type": "application/json",
        },
    }

    fetch(API3,opption)
        .then(function(response)
        {
            return response.json();
        })
        .then(callback);
}

function xuLi2()
{
    var aa = document.querySelector('.gop_y--create')
    aa.onclick = function()
    {
        var ten = document.querySelector('.gop_y_tu1').value;
        var cmt = document.querySelector('.gop_y2_cmt').value;
        formData = {
            ten: ten,
            cmt: cmt
        }
        taoDuLieu2(formData,function()
        {
            window.location.href='/index.html';
        })
        alert("Cảm ơn bạn đã đóng góp ý kiến.");
    }
}


//Xử lí động
var gop_y_tu = document.querySelector('.gop_y_tu1');
var gop_y2_cmt = document.querySelector('.gop_y2_cmt');
var aa = document.querySelector('.gop_y--create');
aa.disabled = true;

gop_y_tu.onclick = function()
{
    gop_y2_cmt.onclick = function(){
        if(gop_y_tu.value != "" && gop_y2_cmt != "")  
        {
            aa.classList.add('Poiter');
            aa.disabled = false;
        }
    }
}

gop_y2_cmt.oninput = function()
{
    gop_y_tu.oninput = function(){
        if(gop_y_tu.value != "" && gop_y2_cmt != "")  
        {
            aa.classList.add('Poiter');
            aa.disabled = false;
        }
    }
}