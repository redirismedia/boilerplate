/*
  Convenient logging function
*/
function _log(s) {
  console.log(s);
}

/* 
  Creates a CustomEvent, cuz JS has an annoying construct.
 */
function _customEvent( type, detail) {
	var event = document.createEvent('CustomEvent');
	event.initCustomEvent( type, false, false, detail);

	return event;
}

function getQueryParams(qs) {
    qs = qs.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}