// 滚动
let back_top = document.querySelector(".back_top");
let head = document.querySelector(".head");

//当页面滚动超过一定距离时，显示回到顶部按钮
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        back_top.style.display = 'block';
    } else {
        back_top.style.display = 'none';
    }
    //当页面滚动到搜索框时添加scroll类
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        head.classList.add("scroll");
    } else {
        head.classList.remove("scroll");
    }
}
window.onscroll;
//平滑回到顶部按钮点击事件
back_top.onclick = function () {
    let timer = setInterval(function () {
        let top = document.body.scrollTop || document.documentElement.scrollTop;
        let speed = top / 5;
        document.body.scrollTop = document.documentElement.scrollTop = top - speed;
        if (top == 0) {
            clearInterval(timer);
        }
    }, 30);

}

let left_button = document.querySelector(".left_button");
let right_button = document.querySelector(".right_button");
//鼠标移入左右按钮时使其背景透明度变化
left_button.onmouseover = function () {
    left_button.style.backgroundColor = "rgba(0,0,0,0.5)";
}
left_button.onmouseout = function () {
    left_button.style.backgroundColor = "rgba(0,0,0,0.25)";
}
right_button.onmouseover = function () {
    right_button.style.backgroundColor = "rgba(0,0,0,0.5)";
}
right_button.onmouseout = function () {
    right_button.style.backgroundColor = "rgba(0,0,0,0.25)";
}


//获取所有小圆点
let point_list = document.querySelectorAll(".point");
//点击小圆点时为小圆点添加active类
for (let i = 0; i < point_list.length; i++) {
    point_list[i].onclick = function () {
        for (let j = 0; j < point_list.length; j++) {
            point_list[j].classList.remove("active");
        }
        this.classList.add("active");
    }
}
//轮播图
let s_p = document.querySelector(".slide_pictures");
let index = 0;

//点击左右按钮时轮播图滚动
left_button.onclick = function () {
    index--;
    if (index < 0) {
        index = point_list.length - 1;
    }
    for (let i = 0; i < point_list.length; i++) {
        point_list[i].classList.remove("active");
    }
    point_list[index].classList.add("active");
    s_p.style.left = -index * 100 + "%";
}

right_button.onclick = function () {
    index++;
    if (index > point_list.length - 1) {
        index = 0;
    }
    for (let i = 0; i < point_list.length; i++) {
        point_list[i].classList.remove("active");
    }
    point_list[index].classList.add("active");
    s_p.style.left = -index * 100 + "%";
}

//点击小圆点时轮播图滚动
for (let i = 0; i < point_list.length; i++) {
    point_list[i].onclick = function () {
        for (let j = 0; j < point_list.length; j++) {
            point_list[j].classList.remove("active");
        }
        index = i;
        this.classList.add("active");
        s_p.style.left = -i * 100 + "%";
    }
}

function play() {
    index++;

    if (index == point_list.length) {
        index = 0;
    }


    for (let i = 0; i < point_list.length; i++) {
        point_list[i].classList.remove("active");
    }
    point_list[index].classList.add("active");
    //s_p离左边的距离根据index的值变化
    s_p.style.left = -index * 564 + "px";
}




//鼠标移入轮播图时停止轮播
s_p.onmouseover = function () {
    clearInterval(timer);
}
//鼠标移出轮播图时继续轮播
s_p.onmouseout = function () {
    timer = setInterval(play
        , 3000);
}

//鼠标移入按钮时停止轮播
left_button.onmouseover = function () {
    left_button.style.backgroundColor = ("rgba(0,0,0,0.5)");
    clearInterval(timer);
}
right_button.onmouseover = function () {
    right_button.style.backgroundColor = ("rgba(0,0,0,0.5)");
    clearInterval(timer);
}
//鼠标移出按钮时继续轮播
left_button.onmouseout = function () {
    left_button.style.backgroundColor = ("rgba(0,0,0,0.25)");
    timer = setInterval(play
        , 3000);
}
right_button.onmouseout = function () {
    right_button.style.backgroundColor = ("rgba(0,0,0,0.25)");
    timer = setInterval(play, 3000)
}

//生成l_containers容器及其子元素
//随机生成一个数字不填入变量时，会自动生成一个1到6的随机数
function random(min = 1, max = 6) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let desc = {
    1: "夏季花花公子桑蚕丝短袖t恤翻领纯色爸爸装大码中年宽松男装上衣",
    2: "蕾丝加厚马桶垫夏季网红马桶坐垫大号坐便套U型马桶套通用坐便垫",
    3: "修正天然维生素E, 滋养肌肤",
    4: "超大号电线收纳盒理线盒插座插板电线整理盒电脑线竹制电源集线盒",
    5: "春雨黄蜂蜜面膜贴10片补水保湿泛醇修护舒缓敏感肌学生韩国旗舰店",
    6: "夏季七分袖衬衫男宽松中国风男装防晒开衫外套薄款古风情侣道袍"
}

let price = {
    1: 39,
    2: 12.6,
    3: 39.9,
    4: 11.3,
    5: 119,
    6: 69,
}

let tags = {
    0: "送运费险",
    1: "淘金币抵"
}


//追加到like_container中函数
function add() {
    for (let i = 0; i < 6; i++) {
        let t_h = "<div class='tag'>" + tags[0] + "</div>" + "<div class='tag'>" + tags[1] + "</div>";
        let hot_path = "./images/HOT.png";
        let like_containers = document.querySelector(".like_containers");
        let number = random();
        let flag = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        if (flag == 0) {
            hot_path = "";
        }
        let name = desc[number];
        let price_ = price[number];
        let c = random(0, 1);
        // console.log(c);
        let t = tags[random(0, 1)];
        if (c == 0) {
            t_h = "<div class='tag'>" + t + "</div>";
        }

        html = `<div class="l_containers">
<a href="#" class="l_container">
    <div class="like_picture">
        <img src="./images/${number}.webp" alt="">
    </div>
    <div class="item_info">
        <div class="info tcc">
        <img src="${hot_path}" alt=""></img>
            ${name}
        </div>
        ${t_h}
    </div>
    <div class="item_price">
        <span class="price_value"><em>¥</em>${price_}</span>
    </div>
</a>
</div>`;

        like_containers.innerHTML += html;
    }
}



let circles = document.querySelectorAll('.circle');
function setup() {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];

        //随机生成div边长
        let circleSize = Math.round(30 + Math.random() * 150);
        //随机生成圆心坐标
        let x = Math.random() * window.innerWidth * 0.9;
        let y = Math.random() * window.innerHeight * 0.5;
        //随机生成透明度
        let opacity = Math.random();
        //设置透明度
        circle.style.opacity = opacity;
        //设置圆随机旋转
        let rotate = Math.random() * 360;
        circle.style.transform = `rotate(${rotate}deg)`;
        //设置圆的位置
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        //设置圆的边长
        circle.style.width = circleSize + 'px';
        circle.style.height = circleSize + 'px';
    }
    //计时器重复执行
}
setInterval(setup, 1000);

setup();


