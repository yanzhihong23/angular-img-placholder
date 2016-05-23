# angular-img-placeholder
Set placeholder image path(if there is), then fetch image using `$http` service, set image path again when http response success.



## usage
- install from bower  

	~~~shell
	bower install angular-img-placeholder --save
	~~~
- include module `angular.img.placeholder`
- directive usage in html

	~~~javascript
	<img http-src="imgPath" placeholder="phPath" alt="img">
	~~~
