// JavaScript Document
$(function(){
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  $('a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(document).ready(function(){
	var topnav = $('.headclearfix');
	var topbn = $('.goTopBtn');
    var hd = $('.header');
	var spMn = $('#menuButton');
	
	//navの位置	
	var navTop = topnav.offset().top;
	//スクロールするたびに実行
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		//スクロール位置がnavの位置より下だったらクラスfixedを追加
		if (winTop >= navTop) {
			topbn.addClass('on'),
            hd.addClass('on'),
			spMn.addClass('on')   

			
		} else if (winTop <= navTop) {
			topbn.removeClass('on'),
            hd.removeClass('on'),
			spMn.removeClass('on')    
			
		}
	});
});


$(function(){
    $("#menuButton").click(function(){
	$(this).toggleClass("active"); //メニューボタンの切り替え
        return false;
    });
});



$(function(){
$(".openNav").click(function(){
$("#overlay").toggleClass('openMenu');
 
});
});



$(function(){
$(".subClose").click(function(){
$("#overlay").removeClass('openMenu');
  
     $("#menuButton").removeClass('active');
});  
});

$(function(){
    //スマホドロップダウン
        $(".menuSp dt").click(function(){
            $(this).parents().children("dd").slideToggle('fast');
            $(this).toggleClass("menuOpen");
        });    
});