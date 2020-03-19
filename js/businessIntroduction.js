function loadPage(url) {
    // 通过Ajax请求异步刷新将URL的内容显示在#main-right中
    $.ajax({
        type: "POST",
        url: url,
        async: true,
        dataType: "html",
        contentType: 'application/json; charset=utf-8',
        success: function (html) {
            // $('#main-right').html(html);
            $('#main-right').load(url);
        }
    });
}
