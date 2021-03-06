CREATE TABLE `user_profile` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `intro` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '签名',
  `sex` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '性别',
  `birthday` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '生日',
  `constellation` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '星座',
  `live_city` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '现居地',
  `hometown` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '家乡',
  `qq` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'QQ',
  `monthly_income` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '月收入',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户资料表';