/*
Navicat MySQL Data Transfer

Source Server         : SQL Local
Source Server Version : 50505
Source Host           : 127.0.0.1:3306
Source Database       : managix

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-01-17 17:03:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for oauthclients
-- ----------------------------
DROP TABLE IF EXISTS `oauthclients`;
CREATE TABLE `oauthclients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` varchar(255) DEFAULT NULL,
  `client_secret` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of oauthclients
-- ----------------------------
INSERT INTO `oauthclients` VALUES ('1', '1', 'secret1', 'CMS');
