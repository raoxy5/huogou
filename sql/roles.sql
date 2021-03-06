CREATE TABLE `roles` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '角色名称',
  `privilege` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '权限',
  `created_at` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色权限表';