// 列表切換
let group = document.querySelectorAll('#one .group');

let enter_li = null;

for(let i = 0; i < group.length; i++){
    let title = group[i].querySelector('#one .group_title');
    let ul_list = group[i].querySelector('#one ul');
    title.isShow = true;
    // console.log(title)
    title.addEventListener('click',function(){
        title.isShow = !title.isShow;
        // console.log(this)
        if(title.isShow){
            ul_list.style.display = 'block';
            title.style.backgroundImage = 'url(./images/down.png)'
        }else{
            ul_list.style.display = 'none';
            title.style.backgroundImage = 'url(./images/right.png)'
        }
    });

    let li_list = group[i].querySelectorAll('li');
    for(let j = 0; j < li_list.length; j++){
        li_list[j].addEventListener('click',function(){
            if(enter_li){
                enter_li.className = '';
            }
            enter_li = this;
            enter_li.classList.add('active')
        })
    }
}

// 頁籤切換
let outBox = document.querySelector('#two');
let title = document.querySelector('#two .title');
let title_a = document.querySelectorAll('#two .title a');

let title_a_first = document.querySelectorAll('#two .title a')[0];
let inContent = document.querySelector('#two .content');
let inUl = document.querySelectorAll('#two .content ul');
title_a_first.classList.add('choice');
inUl[0].style.display = "block";

for(let i = 0; i < title_a.length; i++){
    title_a[i].index = i;
    title_a[i].addEventListener('mouseover',function(){
        // console.log(title_a[i]);
        for(let j = 0; j < inUl.length; j++){
            inUl[j].style.display = "none";
            title_a[j].className = '';
            // console.log(inUl[j]);
            // console.log(title_a[j]);
        }
        // console.log(inUl[this.index])
        inUl[this.index].style.display = "block";
        title_a[this.index].classList.add('choice');
    })
}

// 單個按鈕控制圖示
let three_btn = document.querySelector('#three #btn');
let circle = document.querySelector('#three #circle img');
three_btn.addEventListener('click',show)
let circle_img = true;
// 第一種寫法
// function show(){
//     if(circle_img){
//         circle_img = false;
//     }else{
//         circle_img = true;
//     }
//     console.log(circle_img)
//     if(circle_img){
//         circle.style.display = "block";
//     }else{
//         circle.style.display = "none";
//     }
// }
    
// 第二種寫法
function show(){
    circle_img = !circle_img;
    circle.style.display = circle_img ? 'block' : 'none';
}