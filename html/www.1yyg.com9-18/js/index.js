/**
 * Created by han on 2015/9/7.
 */

$(function(){
	//������ά���ƹ������˵�չʾ
	$("#liMobile").hover(function(){
		$(this).toggleClass("u-arr-hover");
	})
	$("#liMember").hover(function(){
		$(this).toggleClass("u-arr-hover");
	})


	//�ƶ������������ ��ɫ������»�����Ӱ
	$("#divSortList dl").hover(function(){
		$("#divSortList dl").children("i").remove();
		$(this).toggleClass("hover");
		$(this).append("<i></i>");
	})
})


//���ֹ���Ч��
var p_timer = null;
function mt0(){
	var liHeight = $("#UserBuyNewList li").outerHeight();
	var lastLi = $("#UserBuyNewList li:last-child").html(); //ȡ�����һ��li�е�����
	lastLi = "<li>"+lastLi+"</li>";  //����li��ǩ
	$("#UserBuyNewList li:last-child").remove(); //ɾ�����һ��li
	var ulHtml = lastLi+$("#UserBuyNewList").html();  //��������ul�е�li��ǩ�����һ��li����ul��ʣ���  ***
	$("#UserBuyNewList").html("").html(ulHtml);        //���ul��html  �����������е�html  ***
	$("#UserBuyNewList").css('marginTop','-'+liHeight+'px');
	$("#UserBuyNewList").animate({marginTop:"0px"},1000);
}
$(function(){
	clearInterval(p_timer);
	p_timer = setInterval("mt0()",3000);
})


//����չʾ������
//��ʾ����
function pageShow(){
	$("#pageDialogBG").show();
	$("#pageDialogBorder").show();
	$("#pageDialog").show();
}
//ȷ�Ϲرյ���
function pageHide(){
	$("#pageDialogBG").hide();
	$("#pageDialogBorder").hide();
	$("#pageDialog").hide();
}




