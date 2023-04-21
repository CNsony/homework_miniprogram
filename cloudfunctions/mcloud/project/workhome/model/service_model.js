/**
 * Notes: 服务实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY DeepRooter (wechat)
 * Date: 2023-04-21 16:00:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class ServiceModel extends BaseProjectModel {

}

// 集合名
ServiceModel.CL = BaseProjectModel.C('service');

ServiceModel.DB_STRUCTURE = {
	_pid: 'string|true',
	SER_ID: 'string|true',

	SER_TITLE: 'string|true|comment=标题',
	SER_DESC: 'string|false|comment=描述',
	SER_STATUS: 'int|true|default=1|comment=状态 0/1',
	SER_NAME: 'string|true|comment=服务名称',

	SER_CATE_ID: 'string|true|comment=分类编号',
	SER_CATE_NAME: 'string|true|comment=分类冗余',
	SER_PRICE:'int|true',

	SER_ORDER: 'int|true|default=9999',
	SER_VOUCH: 'int|true|default=0',

	SER_CONTENT: 'array|true|default=[]|comment=内容',

	SER_QR: 'string|false',
	SER_VIEW_CNT: 'int|true|default=0|comment=访问次数',

	SER_PIC: 'array|false|default=[]|comment=封面图  [cloudId1,cloudId2,cloudId3...]',

	SER_FORMS: 'array|true|default=[]',
	SER_OBJ: 'object|true|default={}',

	SER_ADD_TIME: 'int|true',
	SER_EDIT_TIME: 'int|true',
};

// 字段前缀
ServiceModel.FIELD_PREFIX = "SER_";



module.exports = ServiceModel;