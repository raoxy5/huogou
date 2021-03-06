CREATE TABLE `orders` (
  `id` CHAR(25) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `order_no` CHAR(25) NOT NULL COMMENT '中奖订单号',
  `product_id` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '商品ID',
  `period_id` BIGINT(20) UNSIGNED NOT NULL DEFAULT '0' COMMENT '期数ID',
  `ship_status` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '发货状态',
  `payment` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '支付方式',
  `shipping_id` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '配送方式ID',
  `shipping` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '配送方式',
  `user_id` INT(10) UNSIGNED NOT NULL COMMENT '用户ID',
  `status` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '订单状态,0中奖，1待确认，2备货，3发货，4收货，5晒单，6异常订单，7售后',
  `confirm` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '确认状态',
  `ship_area` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '收货地区',
  `ship_name` VARCHAR(25) NOT NULL DEFAULT '' COMMENT '收货人',
  `weight` INT(10) NOT NULL DEFAULT '0' COMMENT '订单总重量',
  `tostr` VARCHAR(255) COMMENT '订单文字描述',
  `ship_addr` VARCHAR(255) COMMENT '收货地址',
  `ship_zip` VARCHAR(20) NOT NULL DEFAULT '' COMMENT '收货人邮编',
  `ship_tel` VARCHAR(25) NOT NULL DEFAULT '' COMMENT '收货电话',
  `ship_email` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '收货人email',
  `ship_time` VARCHAR(25) NOT NULL DEFAULT '' COMMENT '配送时间',
  `ship_mobile` VARCHAR(25) NOT NULL DEFAULT '' COMMENT '收货人手机',
  `price` INT(10) NOT NULL COMMENT '订单商品价格',
  `memo` TEXT COMMENT '订单附言',
  `mark_text` TEXT COMMENT '订单备注',
  `cost_freight` INT(10) NOT NULL DEFAULT '0'  COMMENT '配送费用',
  `fail_type` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '订单失败类型，1驳回填写地址，2发货异常，3无法送达，4换货原因',
  `fail_id` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '订单失败关联id',
  `create_time` INT(10) UNSIGNED NOT NULL COMMENT '创建时间',
  `last_modified` INT(10) UNSIGNED NOT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_no` (`order_no`),
  KEY `idx_user_id` (`user_id`, `create_time`),
  UNIQUE KEY `period_id` (`period_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8 COMMENT '中奖订单';