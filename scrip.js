var appquerry = angular.module("appquerry",[]);

appquerry.controller("inputcol",function ($scope) {
	$scope.message = "Please copy here";
	
	$scope.change = function(){
		var input = $scope.so1;
		var output = input.replace(/\n/g, ",");
		$scope.ketqua = output;
	};
	$scope.delete = function(){
		$scope.so1 = "";
	};
	
	
});
