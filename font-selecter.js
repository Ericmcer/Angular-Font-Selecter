angular.module('RestApp')
.directive('fontSelecter', ["$compile", '$http', function($compile, $http){
		return{
			restrict:'E',
			templateUrl:'/public/modules/rest-app/directives/Angular-Font-Selecter/font-selecter.html',
			scope:{
				fontSelected:'=',
				selectStyle:'=',
				wrapperStyle:'='

			},
			link : function(scope, elem, attrs){
				
				scope.fonts = ['Open Sans', 'Source Sans Pro', 'Montserrat','Roboto Slab', 'Droid Serif', 'Fjalla One', 'Playfair Display',
				'Indie Flower', 'Poiret One', 'Yanone Kaffeesatz', 'Inconsolata'];
				
				scope.importFonts = scope.fonts.map(function(val){
										return val.split(' ').join('+');
									});
				
				var font = document.getElementById('font-demo');

				scope.selectFont = function(){
					font.style.fontFamily = scope.fontSelected;
				}

			}
	 	}
	}
]);