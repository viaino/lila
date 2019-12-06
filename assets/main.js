function toggleNextP(item) {
	var target = item.nextElementSibling;
	target.classList.toggle('d-none');
	console.log(target);
}

function closeNav() {
	var target = document.getElementById('navbarNav');
	target.classList.toggle('show');
}

// スムーススクロール
$(function(){
  $('a[href^="#mv"]').click(function(){
    //スクロールのスピード
    var speed = 1000;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top-50;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});
});