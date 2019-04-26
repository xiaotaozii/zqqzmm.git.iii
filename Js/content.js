function lunbo(){
	ul.appendChild(ul.children[0].cloneNode(true));
	$('#ul').css('width',$('#ul li').eq(0).width()*$('#wrap ul li').length);
	var key=0;
	var s=0;
	// 自动轮播
	var timer=setInterval(function(){
		move();
	},2000);

	function move(){
		key++;
		if (key>6) {
			$('#ul').css('left',0);
			key=1;
		}
		$('#ul').animate({
			'left':-key*$('#ul li').eq(0).width()
		},500)
		s++;
		if (s>=6) {
			s=0;
		}
		$('#wrap ol li').eq(s).addClass('active').siblings('li').removeClass('active');
	}
	$('#wrap ol li').click(function(){
		if (!$('#wrap ul').is(':animated')) {
			var ind=$('#wrap ol li').index(this);
			$(this).addClass('active').siblings('li').removeClass('active');
			$('#wrap ul').animate({
				'left':-ind*$('#wrap ul li').eq(0).width()
			},500)
			key=s=ind;
		}
	})
	$('#wrap').mouseover(function(){
		clearInterval(timer);
	})

	$('#wrap').mouseout(function(){
		timer=setInterval(function(){move()},2000);
	})
}

function tab(){
	// $('#tab li').mouseover(function(){
	// 	var ind=$('#tab li').index(this);
	// 	$(this).css({'background':'#fbe829','color':'#2b3762'}).siblings('li').css({'background':'','color':'#fff'});
	// 	$('.main02-cot>ul').eq(ind).show().siblings('ul').hide();
	// })
	$('#tab li').mouseover(function(){
		var ind=$('#tab li').index(this);
		$(this).css({'background':'#fbe829','color':'#2b3762'}).siblings('li').css({'background':'','color':'#fff'});

		$('.main02-cot').css('left',-ind*724+'px');
	})
}

function tab2(){
	$('#yingyin li').mouseover(function(){
		var ind=$('#yingyin li').index(this);
		$(this).addClass('cur').siblings('li').removeClass('cur');
		$('.main03-tab>ul').eq(ind).show().siblings('ul').hide();
	})
}

function lunbo2(){
	ul2.appendChild(ul2.children[0].cloneNode(true));
	$('#ul2').css('width',$('#ul2 li').eq(0).width()*$('#ul2 li').length);
	var key=0;
	var s=0;
	// 自动轮播
	var timer=setInterval(function(){
		move();
	},2000);

	function move(){
		key++;
		if (key>2) {
			$('#ul2').css('left',0)
			key=1;
		}
		$('#ul2').animate({
			'left':-key*$('#ul2 li').eq(0).width()
		},500)
		s++;
		if (s>1) {
			s=0;
		}
		$('.l ol li').eq(s).addClass('active').siblings('li').removeClass('active');
	}
	$('.l ol li').click(function(){
		if (!$('#ul2').is(':animated')) {
			var ind=$('.l ol li').index(this);
			$(this).addClass('active').siblings('li').removeClass('active');
			$('#ul2').animate({
				'left':-ind*$('#ul2 li').eq(0).width()
			},500)
			key=s=ind;
		}
	})
	$('#ul2').mouseover(function(){
		clearInterval(timer);
	})

	$('#ul2').mouseout(function(){
		timer=setInterval(function(){move()},2000);
	})
}
function tabsai(){
	$('#tab-liansai li').mouseover(function(){
		var ind=$('#tab-liansai li').index(this);
		$(this).addClass('sai').siblings('li').removeClass('sai');
		$('#sai-cot li').eq(ind).show().siblings('li').hide();
	})
}

function map(){
	$('.map i').on('click',function(){
		var ind=$('.map i').index(this);
		$('.zhezhao').css('display','block');
		$('.zhao').css('display','block');
		$('.tu img').eq(ind).show().siblings('img').hide();
	})
	$('#close').click(function(){
		$('.zhezhao').css('display','none');
		$('.zhao').css('display','none');
		$('.tu img').hide();
	})
}

function tabzhaungbei(){
	$('.main07-center span').click(function(){
		var ind=$('.main07-center span').index(this);
		$(this).css('background','#576598').siblings('span').css('background','#fff');
		$('.main07-left ul').eq(ind).show().siblings('ul').hide();
	})

	$('.main07-center div').click(function(){
		var ind=$('.main07-center div').index(this);
		$(this).css('background','#576598').siblings('div').css('background','#fff');
		$('.main07-right ul').eq(ind).show().siblings('ul').hide();
	})
}

function slide(){
	$('.top-cot a').click(function(){
		var ind=$('.top-cot a').index(this);
		$(this).addClass('slide').siblings('a').removeClass('slide');
		$('html,body').animate({
			scrollTop:$('.main>div').eq(ind).offset().top-100
		},800)
	})
	// $(window).scroll(function(){
	// 	var t= $('html,body').scrollTop();
	// 	var s=$('.top-cot a').length;
	// 	for (var i=0; i<s; i++){
	// 		if (t>$('.top-cot a').eq(i).offset().top) {
	// 			$('.top-cot a').eq(i).addClass('slide').siblings('a').removeClass('slide');
	// 		}

	// 	}
	// })
	
	$('#fh').hide();
	$(window).scroll(function(){
		var t= $('html,body').scrollTop();
		if (t>1500) {
			$('#fh').show();
		}else{
			$('#fh').hide();
		}
	})

	$('#fh').click(function(){
		$('body,html').animate({
			scrollTop:0
			},500)
		})
}


function move(){
	
	setInterval(function(){
		
		var ind=Math.ceil(Math.random()*11);
		console.log(ind)
		$('.map i').eq(ind-1).css('animation','move'+ind+' 2s ease infinite');
		// $('.map i').eq(ind-1).css('animation','');
	},1500)
	// $('.map i').css('animation','');
}