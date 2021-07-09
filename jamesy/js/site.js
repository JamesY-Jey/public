/**
 * Created by by Lete on 2020/7/7. https://butterfly.lete114.top/
 * Butterfly在3.4.0版本后去除了jQuery
 * 注意有使用到jQuery，请自行引入
 * 不想用jQuery可自行更改
 */

btf.isJqueryLoad(function () {
    (function (params) {
        // 可爱的Title
        var OriginTitle = document.title;
        var titleTime;
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                $('[rel="icon"]').attr('href', "/assets/img/favicon.png");
                document.title = '(つェ⊂) 我藏好了哦~~';
                clearTimeout(titleTime);
            } else {
                $('[rel="icon"]').attr('href', "/assets/img/favicon.png");
                document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
                titleTime = setTimeout(function() {
                    document.title = OriginTitle;
                }, 2000);
            }
        });
    })();
})

btf.isJqueryLoad(function () {
    (function (params) {
        // footer背景样式
        $('#footer').css('background-position','center');
    })();
})

// 收藏
function AddFavorite(url, title) {
	url = window.location.href || 'https://www.jamesy.cn';
	title = document.title || '哈哈哈哈密瓜的博客';
	try {
		if (window.sidebar && window.sidebar.addPanel) {
			window.sidebar.addPanel(title, url, '');
			alert('感谢宁~！');
		} else if (window.external) {
			window.external.AddFavorite(url, title);
			alert('感谢宁~！');
		} else if (window.opera && window.print) {
			return true;
		}
	} catch (e) {
		alert('收藏失败，\n请使用Ctrl+D进行添加！');
	}
}
