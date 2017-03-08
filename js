$(function () {
		$('#imgHtml').css('opacity','1')
		$('#techCon').find('li').hide()
		$('#techCon').find('li').slice(0,5).show(1500)
	$('#techImg').find('li').find('img').click(function () {
		$("html,body").animate({scrollTop:441},1000)
		$(this).removeAttr('style')		
		})
	$('#imgHtml').click(function () {
		// alert($("#tech").offset().top)
		// alert($("#header").get(0).offsetHeight)
		$('#techImg').find('li').find('img').removeAttr('style')
		$(this).css('opacity','1')
		$('#techCon').find('li').hide()
		$('#techCon').find('li').slice(0,5).show(1500)			
	})
	$('#imgJs').click(function () {
		$('#techImg').find('li').find('img').removeAttr('style')
		$(this).css('opacity','1')
		$('#techCon').find('li').hide()
		$('#techCon').find('li').slice(5,10).show(1500)			
	})
	$('#imgCss').click(function () {
		$('#techImg').find('li').find('img').removeAttr('style')
		$(this).css('opacity','1')
		$('#techCon').find('li').hide()
		$('#techCon').find('li').slice(10,13).show(1500)			
	})
	$('#imgAjax').click(function () {
		$('#techImg').find('li').find('img').removeAttr('style')
		$(this).css('opacity','1')
		$('#techCon').find('li').hide()
		$('#techCon').find('li').slice(13,15).show(1500)			
	})
	$('#imgDw').click(function () {
		$('#techImg').find('li').find('img').removeAttr('style')
		$(this).css('opacity','1')
		$('#techCon').find('li').hide()
		$('#techCon').find('li').slice(15,16).show(1500)			
	})
	$('#imgPs').click(function () {
		$('#techImg').find('li').find('img').removeAttr('style')
		$(this).css('opacity','1')
		$('#techCon').find('li').hide()
		$('#techCon').find('li').slice(16,19).show(1500)			
	})
	$('#footer').find('span').eq(0).click(function () {
		$("html,body").animate({scrollTop:0},1000)
		})
	
	$('#footer').find('span').eq(1).click(function () {
		var t=$(document).scrollTop()
		if (t<=441) {
		$("html,body").animate({scrollTop:0},1000)	
		}
		else if (t<=1120) {
		$("html,body").animate({scrollTop:441},1000)				
		}
		else{
		$("html,body").animate({scrollTop:1120},1000)							
		}
		})
	$('#footer').find('span').eq(2).click(function () {
		var t=$(document).scrollTop()
		if (t<441) {
		$("html,body").animate({scrollTop:441},1000)	
		}
		else if (t<1120) {
		$("html,body").animate({scrollTop:1120},1000)				
		}
		else{
		$("html,body").animate({scrollTop:1120},1000)							
		}
		})    	
	$('#boxNav ul').find('li').hide();
	$('#boxMt').find('p').hide();
	$('#boxNav ul').find('li').eq(0).show();    		
	$('#boxMt').find('p').eq(0).show();
	var i=0;
	$('#box').find('span').eq(0).click(function () {
    		var l=$('#boxNav ul').find('li').length-1
    		if (i==0) {
    		$('#boxNav ul').find('li').eq(i).hide(1000);    		
    		$('#boxMt').find('p').eq(i).hide(1000);
    		i=l;
    		$('#boxNav ul').find('li').eq(i).show(1000);
    		$('#boxMt').find('p').eq(i).show(1000);
    		}
    		else{
    		$('#boxNav ul').find('li').eq(i).hide(1000);    		
    		$('#boxMt').find('p').eq(i).hide(1000);
    		i--;
    		$('#boxNav ul').find('li').eq(i).show(1000);
      		$('#boxMt').find('p').eq(i).show(1000);
    		}
    		return i;
    })
    $('#box').find('span').eq(1).click(function () {
    	ImgSlider();
    })
    function ImgSlider() {
    		// $('#boxNav ul').find('li').eq(2).show();

    		var l=$('#boxNav ul').find('li').length-1
    		if (i<l) {
    		$('#boxNav ul').find('li').eq(i).hide(1000);    		
    		$('#boxMt').find('p').eq(i).hide(1000);
    		i++;
    		$('#boxNav ul').find('li').eq(i).show(1000);
    		$('#boxMt').find('p').eq(i).show(1000);
    		}
    		else{
    		$('#boxNav ul').find('li').eq(i).hide(1000);    		
    		$('#boxMt').find('p').eq(i).hide(1000);
    		i=0;
    		$('#boxNav ul').find('li').eq(i).show(1000);
    		$('#boxMt').find('p').eq(i).show(1000);
    		}
    		return i;
    }
    var iCount = setInterval(ImgSlider, 5000);

$('#boxNav').find('ul').mouseenter(function () {
		clearInterval(iCount);console.log('mouseenter')}
)
	$('#boxNav').find('ul').mouseleave(function () {
		iCount = setInterval(ImgSlider, 5000);console.log('mouseleave')}
)	
	$('#box').find('span').hover(function () {
		clearInterval(iCount)},function () {
		iCount = setInterval(ImgSlider, 5000);	
	}
		)
	// var top=$("body").scrollTop()
	// $('.001').attr('value',top)
}) 
