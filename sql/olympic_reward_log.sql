CREATE TABLE `olympic_reward_log` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` INT(10) UNSIGNED NOT NULL COMMENT '用户ID',
  `reward_obj` CHAR(8) NOT NULL COMMENT '领取奖品类型 1红包,2伙购币',
  `obj_id` CHAR(8) NOT NULL COMMENT '领取数量 红包ID 或者 伙购币金额',
  `price` INT(10) UNSIGNED NOT NULL COMMENT '奖品价值(元)',
  `created_at` CHAR(16) NOT NULL COMMENT '领取时间',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '奥运会用户领取奖励纪录表';