CREATE TABLE `user_stat`(
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `invite_num` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '邀请人数',
  `win_num` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '中奖次数',
  `money` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '消费金额',
  `recharge` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '充值金额',
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户统计表';