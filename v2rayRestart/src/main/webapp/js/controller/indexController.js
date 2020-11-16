app.controller('indexController' ,function($scope,$controller) {
    $controller('headerController',{$scope:$scope});//继承

    $scope.init = function () {
        contentService.findPage(1,10,1).success(function (response) {
            $scope.contentList = response.rows;
        });

        designService.findRecommend().success(function (response) {
            $scope.designList = response;
        });

        companyService.findAll().success(function (response) {
            $scope.companyList = response;
        });

        designerService.findAll().success(function (response) {
            $scope.designerList = response;
            console.log(response)
        })

        proclamationService.findAll().success(function (response) {
            $scope.proclamationList = response;
        })

        likeService.findLikeList().success(function (response) {
            $scope.likeList = response.rows;
        })
    }
});