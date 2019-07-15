headerFix()
 Nav('#nav')//导航
SerMax()//搜索
mobideMenu()// 移动端主导航
//搜索点击弹出效果
function SerMax(){
    $('.bjtu-serBtn').click(function(){
    	$(this).fadeOut(300)
    	$('#ser').addClass('open')
	})
}
/*tab切换*/
;(function($){
    $.fn.extend({
        tab: function (options){
            var defaults = {         //默认参数
                ev : 'mouseover',    //默认事件'mouseover','click'
                delay : 100,         //延迟时间
                auto : true,         //是否自动切换 true,false
                speed : 2000,        //自动切换间隔时间(毫秒)
                more : false         //是否有more,false,true
            };
            var options = $.extend(defaults, options);  //用户设置参数覆盖默认参数
            return this.each(function (){
                var o = options;
                var obj = $(this);
                var oTil = obj.find('.til_tab');
                var oBox = obj.find('.tabListBox');
                var oMore = null;
                var iNum = 0;
                var iLen = oTil.length;
                $('.more_tab').eq(0).css('display','block')
                oBox.eq(0).css('display','block')
                oTil.eq(0).addClass('on')
                //鼠标事件绑定
                oTil.bind(o.ev , function (){
                    var _this = this;
                    if(o.ev == 'mouseover' && o.delay){
                        _this.timer = setTimeout(function (){
                            change(_this);
                        },o.delay);
                    }else{
                        change(_this);
                    };
                })

                oTil.bind('mouseout',function (){
                    var _this = this;
                    clearTimeout(_this.timer);
                });

                //自动切换效果
                (function autoPlay(){
                    var timer2 = null;
                    if(o.auto){
                        function play(){
                            iNum++;
                            if(iNum >= iLen){
                                iNum =0;
                            };
                            change(oTil.eq(iNum));
                        };
                        timer2 = setInterval(play,o.speed);

                        obj.on('mouseover',function (){
                            clearInterval(timer2);
                        })

                        obj.on('mouseout',function (){
                            timer2 = setInterval(play,o.speed);
                        })
                    };
                })();

                function change(box){
                    iNum = $(box).index();
                    oTil.removeClass('on');
                    oBox.css('display','none');
                    if(o.more){
                        oMore = obj.find('.more_tab');
                        oMore.css('display','none');
                        oMore.eq(iNum).css('display','block');
                    };
                    oTil.eq(iNum).addClass('on');
                    oBox.eq(iNum).css('display','block');
                }
            });
        }
    })
})(jQuery);

//下拉菜单 例调用：Nav('#nav');
function Nav(id){
	var oNav = $(id);
	var aLi = oNav.find('li');

	aLi.hover(function (){
        $(this).addClass('on');
       $(this).find('.bjtu-subNav').addClass('flipInY');
       //$(this).find('.subNav').removClass('flipOutY');
        //$(this).css('z-index','9999');
	},function (){
        $(this).removeClass('on');
        $(this).find('.bjtu-subNav').removeClass('flipInY');
       //$(this).find('.subNav').addClass('flipOutY');
        //$(this).css('z-index','999');
	})
};
//移动端主导航
function mobideMenu(){
	$(".mobile-inner-header .mobile-inner-header-icon").click(function(){
	  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
	  	$('.logo').toggleClass('mobile_logo');
	  	$('.mobile_bg02').fadeToggle(200)
	  	$(".mobile-inner-nav").slideToggle(250);
	  	// if($(this).hasClass('mobile-inner-header-icon-click')){
	  	// 	$(this).html('&times;')
	  	// }else{
	  	// 	$(this).html('+')
	  	// }
	  });
	  $(".mobile-inner-nav li").each(function( index ) {
	  	$( this ).css({'animation-delay': (index/30)+'s'});
	  });
	  $('.mobile-inner-nav li strong').click(function(){
	  	$(this).next('dl').slideToggle(500);
	  	$(this).toggleClass('on');
	  	if($(this).hasClass('on')){
	  		$(this).html("&times;")
	  	}else{
	  		$(this).html("+")
	  	}
	  })




}

// function n2(){
// 	$('.systemList').find('li').each(function(e){
// 		if(e%2==1){
// 			$(this).addClass('n2')
// 		}
// 	})
// }
//移动端顶部点击弹出下拉菜单
function Menu(menu,main){
		$(menu).click(function(){
	  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
	  	$(this).find('.iconfont').toggleClass("iconjia1 iconjian")
	  	$(".sub_navm").slideToggle(250);
		$('.sub_navm').find('.phone_toggle').click(function(){
			$(this).next('dl').slideToggle(500);
			$(this).toggleClass('on');
			if($(this).hasClass('on')){
				$(this).html("&times;")
			}else{
				$(this).html("+")
			}
			})
	  });
};
function subLeft(){
	$('.subLeft').find('.active').each(function(){
        if($(this).parent().parent().hasClass('second_nav')){
            $(this).parent().parent().css('display','block');
             $(this).parent().parent().parent().addClass('active')
             $(this).parent().parent().prev('.toggles').html('&times;')

        }
    })
	$('.subLeft').find('.toggles').click(function(){
		if($(this).parent('li').hasClass('active')){
				$(this).html("+")
				$(this).next('.second_nav').slideUp(500)
				$(this).parent('li').removeClass('active')
			}else{
				$(this).html("&times;")
				$(this).next('.second_nav').slideDown(500);
				$(this).parent().siblings().find('.second_nav').slideUp(500)
				$(this).parent().siblings().removeClass('active')
				$(this).parent().siblings().find('.toggles').html("+")
				$(this).parent('li').addClass('active')
			}
		})
	}