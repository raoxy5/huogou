/**
 * Created by han on 2015/9/8.
 */
    //���ർ����ʾ����
$("#divGoodsSort").mouseover(function(){
    $(this).find("#divSortList").show();
}).mouseout(function(){
    $(this).find("#divSortList").hide();
})


//�������Ĳ�ߵ���
$(".sidebar-nav h3").click(function(){
    $(this).toggleClass("sid-iconcur");
    if($(this).is('.sid-iconcur')){
        $(this).next("ul").children("li").hide();
    }else{
        $(this).next("ul").children("li").show();
    }
})


//���li��curЧ��
$(".sidebar-nav ul li").click(function(){
    $(this).parents(".sidebar-nav").find("li").removeClass("sid-cur");
    $(this).addClass("sid-cur");
})


//tab�л�
$(".subMenu a").click(function(){
    //alert($(".subMenu a").eq(0).html());
    //alert($(this).index());
    var aIndex = $(this).index();
    $(this).addClass("current").siblings("a").removeClass("current");
    $(".single-C").hide();//�����Ʒ
    $(".page_nav").hide();//�����Ʒ
    $(".list-tab").hide();//�����Ʒ
    $("#tbList"+aIndex).css('display','block'); //�����Ʒ
    $("#PostList"+aIndex).css('display','block'); //�����Ʒ
    $("#divTopic"+aIndex).css('display','block'); //�����Ʒ
    $("#divPageNav"+aIndex).css('display','block');

})


