/**
 * Ajax POST加载数据
 * @param {Object} reload 是否覆盖原有数据
 * @param {Object} url 请求URL
 * @param {Object} params_data 请求的参数
 * @param {Object} ul_id 父级UL的ID
 * @param {Object} template_id 模板ID
 * @param {Object} pageIndex 当前第几页
 * @param {Object} pageSize 每页大小
 */
function Ajax_Load_Pullrefresh_Data(reload, url, params_data, ul_id, template_id, pageIndex, pageSize) {
	//return;
	mui.showLoading('数据加载中...', 'div');
	//unBindTap();
	mui.ajax({
		url: url,
		data: params_data,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		//async:false,//同步请求
		timeout: 10000, //超时时间设置为10秒
		success: function(res) {
			mui.hideLoading();
			//取返回的数据
			var html = template(template_id, template_data);

			//if(reload) {
				//覆盖数据
			//	$('#' + ul_id).html(html);
			//} else {
				//追加数据
			//	$('#' + ul_id).append(html);
			//}
			
			//追加数据
			$('#' + ul_id).append(html);

			if($('#' + ul_id) && $('#' + ul_id).attr('pageIndex') != '') {
				$('#' + ul_id).attr('pageIndex', parseInt(pageIndex) + 1);
			}
			if($('#' + ul_id) && $('#' + ul_id).attr('dataTotal') != '') {
				$('#' + ul_id).attr('dataTotal', 2)
			}
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			mui.toast('获取数据失败，请检查网络连接');
			
			//取返回的数据
			var html = template(template_id, template_data);
			setTimeout(function() {
				mui.hideLoading();
				//if(reload) {
					//覆盖数据
				//	$('#' + ul_id).html(html);
				//} else {
					//追加数据
				//	$('#' + ul_id).append(html);
				//}
				
				$('#' + ul_id).append(html);
				
				if($('#' + ul_id) && $('#' + ul_id).attr('pageIndex') != '') {
					$('#' + ul_id).attr('pageIndex', parseInt(pageIndex) + 1);
				}
				if($('#' + ul_id) && $('#' + ul_id).attr('dataTotal') != '') {
					$('#' + ul_id).attr('dataTotal', 2)
				}
				
				bindTap();
			}, 1000);
		}
	});
};