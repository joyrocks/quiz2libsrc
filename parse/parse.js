function addJavascript(jsname,pos) {
	var th = document.getElementsByTagName(pos)[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

addJavascript('//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js','body');
addJavascript('//www.parsecdn.com/js/parse-1.5.0.min.js','body');