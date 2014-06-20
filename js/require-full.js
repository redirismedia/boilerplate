/*

RequireJS listing for consolidating all js files into a single file and uglifying all js code.

 1. List out all files to include in the array parameter.
 2. In console, cd to root directory
 3. Run from console: node r.js -o name=require-full out=js/full.js baseUrl=js/
 4. Include only full.js in index.html, and remove all other js includes


Reference: http://requirejs.org/docs/optimization.html#onejs

*/


requirejs.config({

	baseUrl: 'js/',

	paths: {
		
	},

	// Dependencies
	shim: {
		// "lib/pxloader/PxLoaderImage": {
  //           deps: ['lib/pxloader/PxLoader']
  //       },
	}
    
});

require(
	[
	  "lib/modernizr-2.6.2.min",
	  "lib/mdetect",
	  "lib/gsap/TweenMax.min",
	  "lib/support",
	  "lib/utils",

	  "lib/pxloader/PxLoader",
	  "lib/pxloader/PxLoaderImage",

	  // "lib/jquery-1.11.1.min",
	  // "llb/jquery.address-1.5.min",

	  "main"	  	
	],

	function() {
		_init();
	}
);