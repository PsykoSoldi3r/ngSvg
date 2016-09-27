angular.module('ngSvg', [])
    .directive('imgSvg', ['$http', function( $http ){
        return {
            restrict: 'AEC',
            transclude: true,
            scope: {
                src: '@src'
            },
            link: function( scope, element, attr ){
                var src= attr.src;

                $http.get( src ).success( function( data ){
                    element.append( data );
                });
            }
        }
    }]
);