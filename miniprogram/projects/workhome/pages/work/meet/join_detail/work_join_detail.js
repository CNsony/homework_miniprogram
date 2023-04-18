// projects/workhome/pages/work/meet/join_detail/work_join_detail.js
const ProjectBiz = require('../../../../biz/project_biz.js');
const pageHelper = require('../../../../../../helper/page_helper');
const cloudHelper = require('../../../../../../helper/cloud_helper.js');
const timeHelper = require('../../../../../../helper/time_helper.js');

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false,
		tabCur: 0,
		mainCur: 0,
		verticalNavTop: 0,

		cur: 'time',

		dayIdx: 0,
		timeIdx: -1,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		ProjectBiz.initPage(this);

		if (!pageHelper.getOptions(this, options,'id')) return;

		this._loadDetail();
	},

	_loadDetail: async function () {
		this.setData({
			dayIdx: 0,
			timeIdx: -1,
			isLoad: false
		});

		let id = this.data.id;
		if (!id) return;

		let params = {
			joinId: id
		}
		let opts = {
			title: 'bar'
		}
		let join = await cloudHelper.callCloudData('meet/my_join_detail', params, opts);
		if (!join) {
			this.setData({
				isLoad: null
			})
			return;
		}

		// let days = meet.MEET_DAYS_SET;

		// let dayNow1 = timeHelper.time('Y-M-D');
		// let dayNow2 = timeHelper.time('Y-M-D', 86400);
		// let dayNow3 = timeHelper.time('Y-M-D', 86400 * 2);

		// for (let k = 0; k < days.length; k++) {

		// 	if (days[k].day == dayNow1) days[k].status = '今天';
		// 	if (days[k].day == dayNow2) days[k].status = '明天';
		// 	if (days[k].day == dayNow3) days[k].status = '后天';

		// 	days[k].week = timeHelper.week(days[k].day);
		// 	days[k].date = days[k].day.split('-')[1] + '-' + days[k].day.split('-')[2]
		// }


		this.setData({
			isLoad: true,
			join,
			// days,
		});

	},

	
})
