-- todo table
CREATE TABLE `todo` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '할 일 일련번호',
    `category_id` int(11) DEFAULT NULL COMMENT '그룹 번호 (FK)',
    `name` varchar(200) DEFAULT NULL COMMENT '할일명',
    `star_flag` char(1) DEFAULT NULL COMMENT '중요표시(Y/N)',
    `check_flag` char(1) DEFAULT 'N' COMMENT '체크여부(Y/N)'
    PRIMARY KEY (`id`)
) COMMENT='할 일';

INSERT INTO `todo` (`id`, `category_id`, `name`, `star_flag`, `check_flag`) VALUES (1, 1, 'PC 환경 정리', 'Y', 'N');


-- category table
CREATE TABLE `category` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '그룹일련번호',
    `name` varchar(200) DEFAULT NULL COMMENT '그룹명'
    PRIMARY KEY (`id`)
) COMMENT='그룹';

INSERT INTO `category` (`id`, `name`) VALUES (1, '미분류'), (2, '업무');

  