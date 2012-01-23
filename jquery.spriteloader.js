(function($){

$.spriteLoaderDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAr8AAAAlCAMAAAB8pXHQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDcwMTIzMUIzOUY5MTFFMUFEREJFODY0MDk4NThGNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDcwMTIzMUMzOUY5MTFFMUFEREJFODY0MDk4NThGNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENzAxMjMxOTM5RjkxMUUxQUREQkU4NjQwOTg1OEY0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENzAxMjMxQTM5RjkxMUUxQUREQkU4NjQwOTg1OEY0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlcMUxoAAAMAUExURQAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wc9CwgAAAD/dFJOUwABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/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";

$.support.datauri = false;

var data = new Image();
data.onload = data.onerror = function(){
	if(this.width == 1 && this.height == 1){
		$.support.datauri = true;
	}
}
data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

var createLoader = function(op) {
	var ops = $.extend(op, {
		width: '37px',
		height: '37px',
		image: $.support.datauri ? $.spriteLoaderDataUri : 'loaderbg.png',
		steps: 19,
		index: 0,
		interval: null
	});
	
	return $("<div />").css({
		width: ops.width,
		height: ops.height,
		position: 'absolute',
		background: 'transparent url(' + ops.image + ') left top no-repeat',
		display: 'none',
		marginLeft: '-18px',
		marginTop: '-18px',
		left: '50%',
		top: '50%'
	}).addClass('spriteloader').data("loader.data", ops);
}

var startLoader = function() {
	var self = this.show(),
		interval;
	
	if(this.data("loader.data").interval)
		stopLoader.apply($(this));
	
	interval = setInterval(function(){
		var ops = self.data("loader.data");
			
		self.css({backgroundPosition: '-' + ( ( ++ops.index % 19 ) * 37 ) + 'px top'})
			.data("loader.index", ops.index >= 19 ? 0 : ops.index);
	}, 40);
	
	this.data("loader.data").interval = interval;

	return this;
}

var stopLoader = function() {
	if(this.data("loader.data"))
		clearInterval(this.data("loader.data").interval);

	return this;
}

$.fn.showLoader = function(op) {

	if($("> .spriteloader", this).length) {
		startLoader.call($("> .spriteloader", this), op);
		return this;
	}
	
	var loader = createLoader(op);
	
	// Is this sufficient?
	if(this.css("position") == "static")
		this.css("position", "relative");

	this.append(loader);
	startLoader.call(loader);
	
	return this;
}

$.fn.hideLoader = function() {
	$("> .spriteloader", this).fadeOut("fast", function(){
		stopLoader.call($(this));
		$(this).remove();
	});
	return this;
}

})(jQuery);
