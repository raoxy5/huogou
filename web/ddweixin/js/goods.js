/**
 * Created by jun on 15/11/19.
 */
$(function () {

    var productId = getProductIdByUrl(window.location.href);
    $.getJsonp(apiBaseUrl + '/product/info', {id: productId}, function (json) {

        if (!json.periodInfo) {
            createEndProInfo(json);
        } else {
            createProInfo(json);
        }
        createPhotos(json.photoList);
        
        $.getJsonp(apiBaseUrl + '/product/periodlist', {id: productId, page: 1, perpage: 2}, function (data) {
            createPeriodList(data);
        });

        $("#sliderBox").picslider();


        var periodId = $('#periodId').val();
        $('.ann_btn a:eq(0)').attr('href', weixinBaseUrl + '/buyrecords-' + periodId + '.html');
        $('.ann_btn a:eq(1)').attr('href', weixinBaseUrl + '/goodsimgdesc-' + productId + '.html');
        $('.ann_btn a:eq(2)').attr('href', weixinBaseUrl + '/goodspost-' + productId + '.html');
        $('.ann_btn a:eq(3)').attr('href', weixinBaseUrl +'/moreperiod-'+productId+'.html');
        isFollowed($('#a_sc'), json.userInfo.followed);
        $('#a_sc').click(function () {
            var url = $(this).attr('data-src');
            $.getJsonp(url, {pid: productId}, function (json) {
                successFollow(json);
            });
        });

    });

    $('.orangeBtn').on('click', function () {
        var periodId = $('#periodId').val();
        var buyUnit = $('#buyUnit').val();
        goCart(periodId, 1*buyUnit);
    });
    $('.blueBtn').on('click', function () {
        var periodId = $('#periodId').val();
        var buyUnit = $('#buyUnit').val();
        addCart(periodId, 1*buyUnit);
    });
});

function createProInfo(json) {
    var periodInfo = json.periodInfo;
    var goodsName = json.name;
    var brief = json.brief;
    var periodId = periodInfo.id;
    //var periodNumber = periodInfo.period_number;
    var periodNumber = periodInfo.period_no;
    var price = periodInfo.price;
    var salesNum = periodInfo.sales_num;
    var leftNum = periodInfo.left_num;
    var limitNum = periodInfo.limit_num;
    var buyUnit = periodInfo.buy_unit;
    var peopleNum = parseInt(price);
    var progress = parseFloat(salesNum / peopleNum) * 100;
    var html = '';
    if (limitNum > 0) {
        html += '<h2 class="gray6"> <span class="purchase-icon">限购</span> ' + goodsName + '<span>' + brief + '</span></h2>';
        html += '<div class="purchase-txt gray9 clearfix"> 价值：￥' + price + '<span>限购'+limitNum+'人次</span> </div>';
    } else if (buyUnit==10) {
        html += '<h2 class="gray6"> <span class="sbei-icon">十元专区</span>' + goodsName + '<span>' + brief + '</span></h2>';
        html += '<div class="purchase-txt gray9 clearfix"> 价值：￥' + price + ' </div>';
    } else {
        html += '<h2 class="gray6">' + goodsName + '<span>' + brief + '</span></h2>';
        html += '<div class="purchase-txt gray9 clearfix"> 价值：￥' + price + '</div>';
    }
    html += '<div class="clearfix">';
    html += '<div class="g-goods-share fr"><a id="btnShare" href="javascript:;"><p class="z-set"></p>分享</a></div>';
    html += '<div class="gRate">';
    html += '<div class="Progress-bar">';
    html += '<p class="u-progress" title="已完成' + progress + '%"><span class="pgbar" style="width:' + progress + '%;"><span class="pging"></span></span></p>';
    html += '<ul class="Pro-bar-li">';
    html += '<li class="P-bar01"><em>' + salesNum + '</em>已参与</li>';
    html += '<li class="P-bar02"><em>' + peopleNum + '</em>总需人次</li>';
    html += '<li class="P-bar03"><em>' + leftNum + '</em>剩余</li>';
    html += '</ul>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $('.pro_info').html(html);
    $('.pro_foot').show();
    $('#periodId').val(periodId);
    $('#periodNumber').val(periodNumber);
    $('#buyUnit').val(buyUnit);

    var productId = getProductIdByUrl(window.location.href);
    //设置页面分享
    Base.getScript(skinBaseUrl + '/weixin/js/wxshare.js', function () {
        wxShareFun({
            shareTitle: "对不起，这么晚才告诉你！全部1块钱，随便选 ! ",
            shareImg: json.photoList[0] ? createGoodsImgUrl(json.photoList[0], photoSize[1], photoSize[1]) : '',
            shareLink: createGoodsUrl(productId),
            shareDesc: json.name,
            shareMoney: false,
            showMask: false
        });
    });
    $('#btnShare').click(function() {
        wxShareFun({
            shareTitle: "对不起，这么晚才告诉你！全部1块钱，随便选 ! ",
            shareImg: json.photoList[0] ? createGoodsImgUrl(json.photoList[0], photoSize[1], photoSize[1]) : '',
            shareLink: createGoodsUrl(productId),
            shareDesc: json.name,
            shareMoney: false,
            showMask: true
        });
    });
}

function createEndProInfo(json) {
    var goodsName = json.name;
    var brief = json.brief;

    var html = '';
    html += '<h2 class="gray6">' + goodsName + '<span>' + brief + '</span></h2>';
    html += '<div class="purchase-txt gray9 clearfix">';
    html += '</div>';
    html += '<div class="clearfix">';
    html += '<div class="gRate">';
    html += '</div>';
    html += '</div>';
    html += '<div class="g-goods-end gray6">本商品已下架</div>';
    $('.ann_btn a:eq(0)').hide();
    $('.pro_info').addClass('pro_info_con').html(html);
}

function createPeriodList(json) {
    var productId = getProductIdByUrl(window.location.href);
    var productUrl = createGoodsUrl(productId);
    var curPeriodNumber = $('#periodNumber').val();

    if (json.totalCount >= 3) {
        var morePeriodUrl = weixinBaseUrl + '/moreperiod-' + productId + '.html';
        var moreBtnItem = '<li><a href="' + morePeriodUrl + '"><s class="fl"></s>更多 <em>&gt;&gt;</em> </a> </li>';
        $('#morePeriod').prepend(moreBtnItem);
    }
    var html = '';
    $.each(json.list, function (i, v) {
        var periodId = v.id;
       // var periodNumber = v.period_number;
        var periodNo = v.period_no;

        var periodUrl = createPeriodUrl(periodId);
       // html += '<li><a href="' + periodUrl + '" ><s class="fl"></s>第' + periodNo + '期<i class="fr"></i> </a> </li>';
        html += '<li><a href="' + periodUrl + '" ><s class="fl"></s>' + periodNo + '期<i class="fr"></i> </a> </li>';
    });
    $('#morePeriod').prepend(html);
    if (curPeriodNumber) {
       // var firstPeridHtml = '<li><a href="' + productUrl + '" class="hover"><s class="fl"></s>第' + curPeriodNumber + '期<i class="fr"></i> </a> </li>';
        var firstPeridHtml = '<li><a href="' + productUrl + '" class="hover"><s class="fl"></s>' + periodNo + '期<i class="fr"></i> </a> </li>';
        $('#morePeriod').prepend(firstPeridHtml);
    }
}

