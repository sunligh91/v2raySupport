 //品牌控制层 
app.controller('baseController' ,function($scope){	
	
    //重新加载列表 数据
    $scope.reloadList=function(){
    	//切换页码  
    	$scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);	   	
    }
    
	//分页控件配置 
	$scope.paginationConf = {
         currentPage: 1,
         totalItems: 10,
         itemsPerPage: 10,
         perPageOptions: [10, 20, 30, 40, 50],
         onChange: function(){
        	 $scope.reloadList();//重新加载
     	 }
	}; 
	
	$scope.selectIds=[];//选中的ID集合 

	$scope.selectAll = function($event){
		if($event.target.checked){
			angular.forEach($scope.list,function (each) {
				$scope.selectIds.push(each.id);//push向集合添加元素
			})
			angular.forEach(angular.element(':checkbox'),function(each){each.checked=true})
		}else{
			angular.forEach($scope.list,function (each) {
				var index = $scope.selectIds.indexOf(each);//查找值的 位置
				$scope.selectIds.splice(index,1);//参数1：移除的位置 参数2：移除的个数
			})
			angular.forEach(angular.element(':checkbox'),function(each){each.checked=false})
		}
	};

	//更新复选
	$scope.updateSelection = function($event, id) {		
		if($event.target.checked){//如果是被选中,则增加到数组
			$scope.selectIds.push( id);			
		}else{
			var idx = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(idx, 1);//删除 
		}
	}

	$scope.clear_toastr= function(time,url){
		setTimeout(
			function(){
				toastr.clear();
				if (url != undefined){
					location.href = url;
				}
			}, time);
	}
	$scope.layoutList = [
		{name:'别墅',number:'0'},
		{name:'小区',number:'1'},
		{name:'酒店',number:'2'},
		{name:'办公',number:'3'}
	];
	$scope.getDesignTypeList=function(number){
		var type;
		angular.forEach($scope.designTypeList,function (each) {
			if (each.number == number){
				type = each.name;
				return
			}
		})
		return type;
	}
	$scope.status = ['未审核','已审核','审核未通过','已关闭'];
	$scope.designTypeList = [
		{name:'古典',number:'0'},
		{name:'现代',number:'1'},
		{name:'欧式',number:'2'},
		{name:'田园',number:'3'}
	];
	$scope.getLayoutList=function(number){
		var layout;
		angular.forEach($scope.layoutList,function (each) {
			if (each.number == number){
				layout = each.name;
				return
			}
		})
		return layout;
	}
});	