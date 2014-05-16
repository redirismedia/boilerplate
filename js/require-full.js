/*

RequireJS listing for consolidating all js files into a single file and uglifying all js code.

 1. List out all files to include in the array parameter.
 2. In console, cd to js/ directory
 3. Run from console: node r.js -o name=require-full out=full.js baseUrl=.
 4. Include only full.js in index.html, and remove all other js includes


Reference: http://requirejs.org/docs/optimization.html#onejs

*/

require(


	[ 
	  "lib/require",
	  "lib/modernizr-2.6.2.min",
	  "lib/mdetect.js",
	  "lib/gsap/TweenMax.min",
	  "lib/support",

	  "main", 
	  
	  "app/Main"
	  
	], 
	
	function (a1, a2, a3, a4, a5, a6, a7, a8, a9, b1, b2, b3, b4, b5, b6, b7, b8, b9) {
	}
);