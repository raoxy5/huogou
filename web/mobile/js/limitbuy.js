/**
 * Created by jun on 15/11/23.
 */
var page = 1;
var perpage = 40;
var limit = 1;
$(function() {

    var data = {'page':page, 'perpage': perpage, 'limit':limit};
    $.getJsonp(apiBaseUrl+'/product/list',data,function(json) {
        createLimitbuyListHtml(json);
    });
});

function createLimitbuyListHtml(json) {
    var html = '';

    $.each(json.list,function(i,v) {
        var goodsName = v.name;
        var goodsPic = v.picture;
        var goodsId = v.product_id;
        var price = v.price;
        var periodId = v.period_id;
        var periodNumber = v.price;
        var limitBuyNum = v.limit_num;
        var salesNum = v.sales_num;
        var quantity = parseInt(v.price);
        var leftNum = v.left_num;

        var goodsUrl = createGoodsUrl(goodsId);
        var goodsImgUrl = createGoodsImgUrl(goodsPic,photoSize[1],photoSize[1]);

        var progressWidth = parseFloat(100 * (salesNum/quantity));

        html += '<li periodId="'+periodId+'">';
        html += '<div class="product-wrap">';
        html += '<div class="product-img">';
        html += '<a href="'+goodsUrl+'"> <img src="'+goodsImgUrl+'" width="136" height="136" /> </a>';
        html += '</div>';
        html += '<div class="product-price clearfix">';
        html += '<span class="pri">价值&nbsp;:&nbsp;';
        html += '<ins class="p-num">'+price+'.00</ins>';
        html += '</span>';
        html += '</div>';
        html += '<div class="Pro-bar-wrap">';
        html += '<div class="Progress-bar">';
        html += '<p class="u-progress" title="'+progressWidth+'%"> <span class="pgbar" style="width: '+progressWidth+'%;"> <span class="pging"></span></span> </p>';
        html += '<ul class="Pro-bar-li clearfix">';
        html += '<li class="P-bar01"><em>'+salesNum+'</em>已参与</li>';
        html += '<li class="P-bar02"><em>'+quantity+'</em>总需人次</li>';
        html += '<li class="P-bar03"><em>'+leftNum+'</em>剩余</li>';
        html += '</ul>';
        html += '</div>';
        html += '<div class="buy-wrap clearfix">';
        html += '<a href="javascript:;" class="buy-btn">立即伙购</a>';
        html += '<a href="javascript:;" class="shopcar-btn"> <img src="'+skinBaseUrl+'/mobile/images/shopcar-btn.png" alt="加入购物车" width="30" height="30" /></a>';
        html += '</div>';
        html += '</div>';
        html += '<span class="flag">限购'+limitBuyNum+'人次</span>';
        html += '</div>';
        html += '</li>';

    });
    $('#ul_purchaselist').html(html);

    $('.buy-btn').on('click',function() {
        var periodId = $(this).closest('li').attr('periodId');
        goCart(periodId,1);
    });
    $('.shopcar-btn').on('click',function() {
        var periodId = $(this).closest('li').attr('periodId');
        addCart(periodId,1);
    });
}
