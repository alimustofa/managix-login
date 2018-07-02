/*
Navicat MySQL Data Transfer

Source Server         : SQL Local
Source Server Version : 50505
Source Host           : 127.0.0.1:3306
Source Database       : managix

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-01-17 17:03:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for oauthtokens
-- ----------------------------
DROP TABLE IF EXISTS `oauthtokens`;
CREATE TABLE `oauthtokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` varchar(255) DEFAULT NULL,
  `client` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of oauthtokens
-- ----------------------------
INSERT INTO `oauthtokens` VALUES ('1', '5eacecb8904856cf1cdb8a38fc9eecd1284fb7e7', '1', '1');
INSERT INTO `oauthtokens` VALUES ('2', '2fb9275aeb9c65e2ac2ab629e2d5d4ee3e04827e', '1', '2');
