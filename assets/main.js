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


/* instagram */
$(function () {
    try {
        this.name = "liladesign7";
        $.ajax('https://www.instagram.com/' + this.name + '/', {
            timeout: 2000,
            datatype: 'html'
        }).then(function (data) {
            json_string = data.split("window._sharedData = ")[1];
            json_string = json_string.split("};</script>")[0] + "}";
            this.Arrya_data = JSON.parse(json_string);
            let datas = this.Arrya_data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
            for (i in datas) {
                url = datas[i].node.display_url;
                this.html = `
                <div class="col-4 p-2 cardImgWrp">
                <img src="${url}" class="cardImg" style="box-shadow: 5px 5px 20px #00000052;">
                </div>
                `;
                $(".insta-card").append(this.html);
            }
        });
    } catch (error) {
        alert(error);
    }
})