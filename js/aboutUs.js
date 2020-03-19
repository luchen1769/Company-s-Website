// $(function() {
//     $(".main-left").on("click", "li", function() {
//         var sId = $(this).data("id"); //获取data-id的值
//         window.location.hash = sId; //设置锚点
//         loadInner(sId);
//     });
//     function loadInner(sId) {
//         var sId = window.location.hash;
//         var pathn, i;
//         switch(sId) {
//             case "#Choice1":
//                 pathn = "About/CompanyPresentSituation.html";
//                 i = 0;
//                 break;　　　　　　　
//             case "#Choice2":
//                 pathn = "About/DevelopmentHistory.html";
//                 i = 1;
//                 break;
//             case "#Choice3":
//                 pathn = "About/TeamPresentSituation.html";
//                 i = 2;
//                 break;
//             case "#Choice4":
//                 pathn = "About/TeamRecruitment.html";
//                 i = 3;
//                 break;　
//             case "#Choice5":
//                 pathn = "About/TeamCulture.html";
//                 i = 4;
//                 break;　　　　　　
//             default:
//                 pathn = "About/CompanyPresentSituation.html";
//                 i = 0;
//                 break;
//         }
//         $("#main-right").load(pathn); //加载相对应的内容
//         $(".main-left li").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
//     }
//     var sId = window.location.hash;
//     loadInner(sId);
// });
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
