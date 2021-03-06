CREATE TABLE `honour` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `period` INT(10) UNSIGNED NOT NULL DEFAULT 0  COMMENT '期数id',
  `rich_userid` INT(10) UNSIGNED NOT NULL DEFAULT 0  COMMENT '土豪',
  `buynum` INT(10) NOT NULL DEFAULT 0  COMMENT '次数',
  `first_userid` INT(10) NOT NULL DEFAULT 0  COMMENT '沙发君',
  `end_userid` INT(10) NOT NULL DEFAULT 0 COMMENT '终结者',
  `created_at` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `period` (`period`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='荣誉榜';