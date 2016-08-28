var todo = angular.module('todo', ['ngAnimate']);
todo.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.title = 'todos';
	if(localStorage.__data) {
		$scope.todos = JSON.parse(localStorage.__data);
	} else {
		$scope.todos = [];
	}
    $scope.name='';
	$scope.add = function(e) {
		if(e.keyCode===13){
			if($scope.todos.length===0){
				var id=1000;
			}else{
				var max=-Infinity;
				for (var i = 0; i < $scope.todos.length; i++) {
					if($scope.todos[i].id>max){
						max=$scope.todos[i].id;
					}
					
				}
				var id=max+1;
			}
			$scope.todos.push({id:id,name:$scope.name,isDone:false});
			$scope.name='';
		} 
	}

   $scope.delete=function(id){
   	var index;
   	 for (var i = 0; i < $scope.todos.length; i++) {
   	 	if($scope.todos[i].id==id){
   	 		index=i;
   	 	}
   	 }
   	 $scope.todos.splice(index,1);
   }

   $scope.focus=function(e){
   	$timeout(function(){
   		$(e.currentTarget)
   		.find('input')
   		.trigger('focus');
   	},0);
   }
 $scope.save=function(){
 	localStorage.__data=JSON.stringify($scope.todos);
 }
$scope.clear=function(){
	var arr=[];
	for (var i = 0; i < $scope.todos.length; i++) {
		if(!$scope.todos[i].isDone){
			arr.push($scope.todos[i]);
		}
	}
	$scope.todos=arr;
}
}])






















	//	$scope.todos=[];
	//	
	//	if(localStorage.__x){
	//		$scope.todos=JSON.parse(localStorage.__x);
	//	}else{
	//		$scope.todo=[];
	//	}
	//	
	//	$scope.delete=function(id){
	//		
	//		var index;
	//	   for (var i = 0; i < $scope.todos.length; i++) {
	//	   	if($scope.todos[i].id===id){
	//			index=i;
	//		}
	//	   }
	//		$scope.todos.splice(index,1);
	//	}
	//	$scope.add=function(e){
	//		if(e.keyCode===13){
	//			var el = $scope.name;
	//			if($scope.name==''){
	//				return;
	//			}else{
	//				if($scope.todos.length===0){
	//				var id=1;
	//			}else{
	//				var max=-Infinity;
	//				for (var i = 0; i < $scope.todos.length; i++) {
	//					var index=$scope.todos[i];
	//					if(index.id>max){
	//						max=index.id;
	//					}
	//				}
	//			}
	//			    var id= max +1;
	//				$scope.todos.push({id:id,name:el,isDone:false})
	//				$scope.name='';
	//			}
	//		}
	//	}
	//
	//	$scope.focus=function(e){
	//		$timeout(function(){
	//			$(e.currentTarget).find('input').trigger('focus');
	//			
	//		},0);
	//	}
	//	$scope.save=function(){
	//		localStorage.__x=JSON.stringify($scope.todos);
	//		
	//	}
	//	
	//	
	//	
	//	$scope.setcount=function(type){
	//		var num=0;
	//		if(type='all'){
	//			num=$scope.todos.length;
	//		}else if(type='wancheng'){
	//			for (var i = 0; i < todos.length; i++) {
	//				if($scope.todos[i].isDone){
	//					num++;
	//				}
	//			}
	//		}else if(type='weiwancheng'){
	//			for (var i = 0; i < todos.length; i++) {
	//				if(!$scope.todos[i].cc)
	//		

	//	var getTime=function(){
	//	var data=new Date();
	//			var h=data.getHours();
	//			var m=data.getMinutes();
	//			var s=data.getSeconds();
	//			s=(s<10)?('0'+s):s;
	//			$scope.title=h+':'+m+':'+s;
	//	}
	//	setInterval(function(){
	//		$timeout(function(){
	//			getTime();
	//		},0)
	//	},1000);


//var todo=angular.module('todo',[]);
//todo.controller('mainCtrl',['$scope',function($scope){
//	$scope.title="welcome to  todos";
//	$scope.huanbiaoti=function(){
//		$scope.title='welcome to todolist';
//	}
//	$scope.todos=[
//	{name:'aa',isDone:false},
//	{name:'aa',isDone:true},
//	{name:'aa',isDone:false}
//	];
//	
//	
//	
//	
//	if(localStorage.__x){
//		$scope.todos=JSON.parse(localStorage.__x);
//	}else{
//		$scope.todos=[];
//	}
//	$scope.add=function(e){
//		if(e.keyCode===13){
//			$scope.todos.push({name:$scope.name,isDone:false});
//		}else{
//			$scope.name='';
//		}
//	}
//	$scope.save=function(){
//		
//		localStorage.__x=JSON.stringify($scope.todos);
//	}
//	$scope.delete=function(id){
//		$scope.todos.splice(id,1);
//	}
//}])
//
//
//
//
//

/*var todo=angular.module('todo',[]);
todo.controller(
	'mainCtrl',
	[
	'$scope',
	function($scope){
		$scope.title='welcome to music';
		$scope.huanbiaoti=function(){
			$scope.title='welcome to todo';
		}
		$scope.musics=[
{name:'a',zuozhe:'z',},
{name:'a',zuozhe:'z',},
{name:'a',zuozhe:'z',},
{name:'a',zuozhe:'z',},
{name:'a',zuozhe:'z',},
{name:'a',zuozhe:'z',},
{name:'a',zuozhe:'z',}
];
 $scope.delete=function(id){
 	$scope.musics.splice(id,1);
 }
	}
	]
)*/