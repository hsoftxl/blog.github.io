// 第一次，ios，安卓
// 
function firstLink(filter, ios_url, az_url) {
	$(function() {
		var first = true;
		var url;
		var ua = window.navigator.userAgent;
		if (ua.match(/iphone/i) || ua.match(/ipad/i) || ua.match(/ios/i)) {
			url = ios_url;
		} else {
			url = az_url;
		}
		// console.debug(url);

		$(filter).click(function() {
			if (first) {
				// console.debug(url);
				var t = $(this);
				var o = t.attr('href');
				t.attr('href', url);
				setTimeout(function() {
					t.attr('href', o);
				}, 1000);
				first = false;
			}
		});
	});
}



function bindPageScroll(obj) {
	$(window).scroll(function() {
		var p = $(obj).offset().top - $(window).scrollTop();
		if (p < $(window).height()) {
			$(obj).click();
		}
	});
}


function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ';path=/' + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name, _default) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}
	return c_value ? c_value : _default;
}


function fjcHeight() {
	$(".proportion").each(function(i, n) {
		var FjcHeight = $(this).attr("F");
		var nowWidth = $(this).width();
		var thisHeight = nowWidth * parseFloat(FjcHeight);


		$(this).css("height", thisHeight + "px");
	});
}

$(function() {

	$(".u-to-top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 300);
		return false;
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			$(".u-to-top").show();
		} else {
			$(".u-to-top").hide();
		}
	})

	$(".g-hd .more,.g-inner-hd .more").click(function() {
		$(".g-categories").toggle();
		$(".g-shade").toggle();
		$(".g-shade").height($("body").height());
		// $(".g-categories").height( $("body").height() );
		return false;
	});
	$(".g-shade").click(function() {
		$(".g-categories").toggle();
		$(".g-shade").toggle();
	});

	$(".m-slide-block").each(function() {
		var swiper = new Swiper($(this).find(".swiper-container")[0], {
			pagination: $(this).find(".pager .selector")[0],
			slidesPerView: 1,
			// centeredSlides: true,
			paginationClickable: false,
			spaceBetween: 10,
			freeMode: false,
			nextButton: $(this).find(".next"),
			prevButton: $(this).find(".prev")
			// grabCursor: true
		});

	});



	$(".m-slide-specials").each(function() {
		var swiper = new Swiper($(this).find(".swiper-container")[0], {
			pagination: $(this).find(".pager")[0],
			slidesPerView: 2.1,
			slidesPerGroup: 2,
			// centeredSlides: true,
			paginationClickable: false,
			spaceBetween: 10,
			freeMode: false,
			nextButton: $(this).find(".next"),
			prevButton: $(this).find(".prev")
			// grabCursor: true
		});

	});


	$(".m-app-screenshots").each(function() {
		var swiper = new Swiper($(this).find(".swiper-container")[0], {
			// pagination: $(this).find(".index-pagination")[0],
			slidesPerView: 2.1,
			// centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 10,
			freeMode: true
			// grabCursor: true
		});

	});


	$(".m-slide-apps").each(function() {
		var swiper = new Swiper($(this).find(".swiper-container")[0], {
			slidesPerView: $(window).width() / 90,
			// centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 5,
			freeMode: true
			// grabCursor: true
		});

	});


	$(".m-slide-covers").each(function() {
		var swiper = new Swiper($(this).find(".swiper-container")[0], {
			slidesPerView: 2.1,
			// centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 10,
			freeMode: true
			// grabCursor: true
		});

	});

	fjcHeight();



	$(".JS-tabs").each(function() {

		if (!$(this).attr('data-target')) {
			return;
		}
		var eleTarget = $($(this).attr('data-target'));
		if (!eleTarget.length) {
			return;
		}
		var eleLis = $(this).find('li');
		var eleLiAs = $(this).find('li a,li i');
		var eventType = $(this).attr('data-event');
		var elePages = eleTarget.find('.m-tab-page')
		eventType = eventType ? eventType : 'click';
		var _event;

		function change() {
			var index = $(this).parent().index();
			elePages.removeClass('m-tab-page-active');
			elePages.eq(index).addClass('m-tab-page-active')
			eleLis.removeClass('active');
			eleLis.eq(index).addClass('active');
			fjcHeight();
			return false;
		}

		if (eventType == 'hover') {
			eleLiAs.hover(change);
		} else {
			eleLiAs.click(change);
		}
		if ($(this).find('li.active').length) {
			elePages.removeClass('m-tab-page-active');
			elePages.eq($(this).find('li.active').index()).addClass('m-tab-page-active');
			fjcHeight();
		} else {
			elePages.removeClass('m-tab-page-active');
			elePages.eq(0).addClass('m-tab-page-active');
			eleLis.eq(0).addClass('active');
		}

	});

	$("img").attr('height', 'auto');
	$("img").attr('width', 'auto');
	$("img").parent().css('textIndent', '0');

});


var xzq_softID = window.location.pathname.split('/').pop().split('.')[0];

$(function() {
	$("#download").click(function() {

        if (event.srcElement.innerHTML == "资源已下架") {
            return;
        }
        
		var name = $("#down_title").val();
		var url = $("#down_url").val();
		
		var browser = {
			versions: function() {
				var u = navigator.userAgent,
					app = navigator.appVersion;
				return {
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
					android: u.indexOf('Android') > -1
				};
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		}
		{

			window.location.href = url;
		}
	});
})


$(function() {
	$("#download2").click(function() {

		var name = $("#down_title").val();
		var url = $("#down_url").val();

		var browser = {
			versions: function() {
				var u = navigator.userAgent,
					app = navigator.appVersion;
				return {
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
					android: u.indexOf('Android') > -1
				};
			}(),

			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		}


		{

			window.location.href = url;
		}





	});



})
