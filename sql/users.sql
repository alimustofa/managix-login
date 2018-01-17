/*
Navicat MySQL Data Transfer

Source Server         : SQL Local
Source Server Version : 50505
Source Host           : 127.0.0.1:3306
Source Database       : managix

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-01-17 17:03:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'ali', '123123123');
INSERT INTO `users` VALUES ('2', 'adi', '123123123');
