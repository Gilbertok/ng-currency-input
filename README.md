ngCurrency is a directive that enables seamless use of currency inputs.  

Main features:

* The model is consistent as it values is a float (even if there are alpha caracters in the middle) or NaN in the empty case.
* Input value is always filtered with locale currency when load and on blur.
* You may write the amount using locale decimal or use dot (.) as default.
* The only required dependency is [angular](https://github.com/angular/angular.js)!
* Min and Max validators like input[number].

## Bower

You may install it via bower using

`bower install ng-currency-input`

## Example

You may see it in action and play a lot using [plunker](http://plnkr.co/edit/u9mJqDH8UpwxDnOv8gZL?p=preview).

<iframe width="100%" src="http://embed.plnkr.co/u9mJqDH8UpwxDnOv8gZL/preview" frameborder="0" allowfullscreen></iframe>

## Quick start

+ Include the required libraries:

>
``` html
<script src="https://code.angularjs.org/1.2.16/angular.js"></script>
<script src="http://github.com/Gilbertok/ng-currency-input/blob/master/dist/ng-currency-input.min.js"></script>
```

+ Inject the `ngCurrency` module into your app:

>
``` JavaScript
angular.module('myApp', ['ng-currency-input']);
```

+ In your input tag

>
``` html
<input ng-model="yourModel" currency-input />
```
>

## Contributing

Please submit all pull requests the against master branch. If your unit test contains JavaScript patches or features, you should include relevant unit tests. Thanks!



## Authors

**Gilberto Kolacki**

+ http://github.com/Gilbertok


## Copyright and license

	Copyright (c) 2012 - 2014 Olivier Louvignes

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
