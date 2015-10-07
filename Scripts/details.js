$(document).ready(function () {
    // 1 项目亮点项目亮点项目亮点 
    //项目介绍
    $("#li_1").click(function () {
        project_switch('js');
    });
    //项目亮点
    $("#li_2").click(function () {
        project_switch('ld');
    });
    //项目信息
    $("#li_3").click(function () {
        project_switch('xx');
    });
    //房源介绍
    $("#li_4").click(function () {
        project_switch('fy');
    });
    //服务团队
    $("#li_8").click(function () {
        project_switch('fw');
    });
    //位置
    $("#li_9").click(function () {
        project_switch('wz');
    });
    //流程图
    $("#li_10").click(function () {
        project_switch('lc');
    });
    function project_switch(name) {
        $(".warp-box").hide();
        $("#xiangmu_" + name).show();
    };



    // 弹出的报名申请框
    $(".shenqing").click(function(){
        $("#dengxiang").show();
        $(".warp_1 .del_baoming").show();
    });

    $(".guanbi").click(function(){
       $("#dengxiang").hide(); 
       $(".warp_1 .del_baoming").hide();
    });

    $("#dengxiang").click(function(){
       $("#dengxiang").hide(); 
       $(".warp_1 .del_baoming").hide();
    });

    // 弹出的报名申请框








    //北京电影学院创意图（形象图hove切换）

    $(".del-x li").hover(function () {
        $(".del-s img").attr("src", $(this).find("img").attr("src"))
    });
    //   北京电影学院创意图 灯箱效果幻灯片
    $(".del-x").click(function () {
        $("#dengxiang").show();
        $("#dx_slide").show();
        $(".valin img").attr("src", $('.del-x img').attr('src'));

    });
    $("#dengxiang").click(function () {
        $(this).hide();
        $("#dx_slide").hide();

    });
})

// 计时器
function ShowCountDown(date, divname) {
    var now = new Date();
    var endDate = new Date(date);
    var leftTime = endDate.getTime() - now.getTime();
    var leftsecond = parseInt(leftTime / 1000);
    //var day1=parseInt(leftsecond/(24*60*60*6)); 
    var day1 = Math.floor(leftsecond / (60 * 60 * 24));
    var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
    var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
    var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
    var cc = document.getElementById(divname);
    cc.innerHTML = "距离结束&nbsp;<b style='background: #d79c0d; display: inline-block; width:30px; height:30px; border-radius: 5px;   text-align: center; color:#fff; margin: 0 10px; font-weight: 900;'>" + day1 + "</b>天<b style='background: #d79c0d; display: inline-block; width:30px; height:30px; border-radius: 5px;   text-align: center; color:#fff; margin: 0 10px; font-weight: 900;'>" + hour + "</b>小时<b style='background: #d79c0d; display: inline-block; width:30px; height:30px; border-radius: 5px;   text-align: center; color:#fff; margin: 0 10px; font-weight: 900;'>" + minute + "</b>分<b style='background: #d79c0d; display: inline-block; width:30px; height:30px; border-radius: 5px;   text-align: center; color:#fff; margin: 0 10px; font-weight: 900;'>" + second + "</b>秒";
}
