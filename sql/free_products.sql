CREATE TABLE `free_products` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` VARCHAR (255) NOT NULL COMMENT '商品名称',
  `brief` VARCHAR (255) NOT NULL DEFAULT '' COMMENT '商品简介',
  `intro` LONGTEXT COMMENT '详细介绍',
  `price` INT(10) UNSIGNED NOT NULL COMMENT '商品价值',
  `marketable` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '0=新增,1=上架,2=下架',
  `picture` VARCHAR(255) NOT NULL COMMENT '封面图,带后缀的图片名',
  `bn` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '商品编号',
  `barcode` VARCHAR(25) NOT NULL DEFAULT '' COMMENT '商品条形码',
  `delivery_id` INT(10) UNSIGNED NOT NULL COMMENT '发货方式ID',
  `order_manage_gid` INT(10) UNSIGNED NOT NULL COMMENT '订单处理小组ID',
  `total_period` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '伙购期数',
  `list_order` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序',
  `start_type` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '活动开始时间类型,0=具体时间 1=每天，每周等',
  `start_time` CHAR(20) NOT NULL COMMENT '开始时间',
  `after_end` INT(10) UNSIGNED NOT NULL COMMENT '开始后多少小时结束',
  `created_at` INT(10) UNSIGNED NOT NULL COMMENT '创建时间',
  `updated_at` INT(10) UNSIGNED NOT NULL COMMENT '更新时间',
  `admin_id` INT(10) UNSIGNED COMMENT '创建人',
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='0元购商品表';