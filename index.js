(function() {
  'use strict';

  angular
    .module('angular.img.placeholder', [])
    .directive('httpSrc', ['$http', function($http) {
      var directive = {
        restrict: 'A',
        link: function(scope, element, attrs) {
          if (attrs.placeholder) {
            attrs.$set('src', attrs.placeholder);
          }

          attrs.$observe('httpSrc', function(url) {
            if (!url) return;

            $http({
              method: 'GET',
              url: url,
              responseType: 'arraybuffer',
              cache: 'true'
            }).then(function(res) {
              var blob = new Blob(
                [res.data], { type: res.headers('Content-Type') }
              );

              attrs.$set('src', URL.createObjectURL(blob));
            });
          });

        }
      };

      return directive;
    }]);
})();
