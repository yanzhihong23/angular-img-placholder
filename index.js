(function() {
    'use strict';

    angular
      .module('imgHttpSrc', [])
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
      }])
      .directive('dataSrc', function() {
        var directive = {
          restrict: 'A',
          link: function(scope, element, attrs) {
            if (attrs.placeholder) {
              attrs.$set('src', attrs.placeholder);
            }

            attrs.$observe('httpSrc', function(url) {
              if (!url) return;

              var img = new Image();
              img.onload = function() {
                var canvas = document.createElement('canvas'),
                  ctx = canvas.getContext('2d'),
                  dataURL;

                canvas.height = this.height;
                canvas.width = this.width;
                ctx.drawImage(this, 0, 0);
                dataURL = canvas.toDataURL();

                attrs.$set('src', dataURL);
              };

              img.src = url;
            });

          }
        };

        return directive;
      });
})();
