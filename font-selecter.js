angular.module('moduleNameHere',[]); //DELETE THIS
angular.module('moduleNameHere')	//REPLACE THIS WITH YOUR MODULE NAME
.directive('font-selecter', ["$compile", '$http', function($compile, $http){
		return{
			restrict:'E',
			templateUrl:'./font-selecter.html',
			scope:{
				fontSelected:'=',
				selectStyle:'=',
				wrapperStyle:'='

			},
			link : function(scope, elem, attrs){
				
				scope.fonts = ['Open Sans','Slabo', 'Source Sans Pro', 'Montserrat','Roboto Slab', 'Droid Serif', 'Fjalla One', 'Playfair Display',
				'Indie Flower', 'Poiret One', 'Yanone Kaffeesatz', 'Inconsolata'];
				
				scope.importFonts = scope.fonts.map(function(val){
										return val.split(' ').join('+');
									});

			}
	 	}
	}
]);