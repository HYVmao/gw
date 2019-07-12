window.onload = function(){
    /**
     * Created by 韩宇 on 2019/6/17.
     */
    var sildeshow = document.getElementById('sildeshow');
    var imgs = sildeshow.getElementsByTagName("img");
    var current = 0;

    function  slideOff(){
        imgs[current].className = " ";
    }

    function  slideOn(){
        imgs[current].className = "active";
    }

    function  changeSlide(){
        slideOff();
        current++;
        if(current == imgs.length){
            current = 0;
        }
        slideOn();
        console.log(imgs.length);
    }

    var slideon = setInterval(changeSlide, 2000);

    sildeshow.onmouseover = function(){
        clearInterval(slideon);
    }

    sildeshow.onmouseout = function(){
        slideon = setInterval(changeSlide,2000);
    }

}