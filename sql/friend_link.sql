CREATE TABLE `friend_link` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` VARCHAR(50) NOT NULL COMMENT '名称',
  `picture` VARCHAR(255) NOT NULL DEFAULT 0 COMMENT '图片',
  `link` VARCHAR(100) NOT NULL COMMENT '链接地址',
  `list_order` TINYINT(1) UNSIGNED  DEFAULT '0' COMMENT '排序',
  `username` VARCHAR(50) NOT NULL COMMENT '操作人',
  `created_at` INT(10) UNSIGNED COMMENT '创建时间',
  `updated_at` INT(10) UNSIGNED COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT 'friend_link';