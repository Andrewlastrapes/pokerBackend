(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,798,500);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,500);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,428,199);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(233,230,223,0.749)").s().p("AyvDIIAAmPMAlfAAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-19.9,240,40);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(233,230,223,0.749)").s().p("AyvDIIAAmPMAlfAAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-19.9,240,40);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAWIguAAIAAAeIAnAAIAAATIgnAAIAAAiIAvAAIAAAWg");
	this.shape.setTransform(246.9,-13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595652").s().p("AgNBAIgkh/IAcAAIAVBcIAVhcIAdAAIglB/g");
	this.shape_1.setTransform(237,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595652").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_2.setTransform(229.4,-13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAASQAAAZgTAKIAXA1IAAABgAgQgDIAPAAQAGAAAEgGQAEgEAAgJQAAgTgOAAIgPAAg");
	this.shape_3.setTransform(222.3,-13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595652").s().p("AgpBAIAAh/IAiAAQAVAAAOAPQANANABAZIAAAUQAAAagOAOQgNAOgXAAgAgPAqIAIAAQAMAAAFgGQAFgHABgRIAAgVQAAgSgGgHQgEgHgMAAIgJAAg");
	this.shape_4.setTransform(212,-13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAWIguAAIAAAeIAnAAIAAATIgnAAIAAAiIAvAAIAAAWg");
	this.shape_5.setTransform(198.5,-13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595652").s().p("AATBAIAAg3IglAAIAAA3IgaAAIAAh/IAaAAIAAA0IAlAAIAAg0IAaAAIAAB/g");
	this.shape_6.setTransform(188.3,-13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595652").s().p("AggAzQgLgOAAgbIAAgUQAAgaALgPQAMgOAVAAQAUAAALAMQALALACAWIgaAAQAAgNgFgFQgDgGgKAAQgKAAgEAIQgFAHABARIAAAXQAAATADAHQAFAHAJAAQALAAADgFQAEgFABgNIAaAAQgCAWgLALQgLAMgVAAQgUAAgMgPg");
	this.shape_7.setTransform(177.9,-13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595652").s().p("AgUA8QgKgFgFgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQALgKQAMgKARAAQAMAAAJAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgDgFQgFgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgKAKgSAAQgMAAgLgGg");
	this.shape_8.setTransform(167.8,-13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAASQAAAZgTAKIAXA1IAAABgAgQgDIAPAAQAGAAAEgGQAEgEAAgJQAAgTgOAAIgPAAg");
	this.shape_9.setTransform(158.3,-13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595652").s().p("AghAzQgMgOAAgZIAAgVQAAgaAMgPQAMgPAVAAQAVAAANAPQAMAOAAAaIAAAVQAAAagMAOQgMAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAVQAAARAFAIQAFAIAJAAQAKAAAFgIQAFgIAAgQIAAgVQAAgRgFgJQgFgIgKAAQgJAAgFAIg");
	this.shape_10.setTransform(147.5,-13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#595652").s().p("AgqBAIAAh/IArAAQATAAALAMQAMALAAAUQAAASgMAKQgLALgTAAIgRAAIAAAtgAgQgCIARAAQAHABAEgGQAFgEAAgJQgBgKgEgGQgEgFgHAAIgRAAg");
	this.shape_11.setTransform(137.2,-13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595652").s().p("AghAzQgMgOAAgZIAAgVQAAgaAMgPQAMgPAVAAQAVAAANAPQAMAOAAAaIAAAVQAAAagMAOQgMAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAVQAAARAFAIQAFAIAJAAQAKAAAFgIQAFgIAAgQIAAgVQAAgRgFgJQgFgIgKAAQgJAAgFAIg");
	this.shape_12.setTransform(245.6,-31.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#595652").s().p("AAPBAIgPhLIgOBLIgaAAIgWh/IAZAAIAMBQIAPhQIAVAAIAPBQIAMhQIAaAAIgXB/g");
	this.shape_13.setTransform(233.4,-31.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_14.setTransform(221.8,-31.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#595652").s().p("AgUA8QgKgFgFgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQALgKQAMgKARAAQAMAAAJAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgDgFQgEgFgHAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgKAKgSAAQgMAAgLgGg");
	this.shape_15.setTransform(207.9,-31.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#595652").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_16.setTransform(200.7,-31.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#595652").s().p("AgjBAIAAh/IAaAAIAABpIAsAAIAAAWg");
	this.shape_17.setTransform(194.2,-31.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#595652").s().p("AghAzQgMgOAAgZIAAgVQAAgaAMgPQAMgPAVAAQAVAAANAPQAMAOAAAaIAAAVQAAAagMAOQgMAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAVQAAARAFAIQAFAIAJAAQAKAAAFgIQAFgIAAgQIAAgVQAAgRgFgJQgFgIgKAAQgJAAgFAIg");
	this.shape_18.setTransform(184.2,-31.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#595652").s().p("AgUA8QgJgFgGgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAJAAQAOAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQAMgKQALgKARAAQALAAAKAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgEgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAFAEAJAEQATAHAIAJQAJAKAAAPQAAARgLAJQgLAKgSAAQgLAAgLgGg");
	this.shape_19.setTransform(173.9,-31.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_20.setTransform(160.8,-31.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595652").s().p("AggAzQgMgOAAgbIAAgUQAAgaANgPQAMgOATAAQAVAAALAMQALALABAWIgZAAQgBgNgDgFQgEgGgLAAQgJAAgEAIQgFAHAAARIAAAXQAAATAFAHQAEAHAJAAQALAAAEgFQADgFAAgNIAaAAQgBAWgLALQgLAMgVAAQgVAAgLgPg");
	this.shape_21.setTransform(151.1,-31.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#595652").s().p("AATBAIglhTIAABTIgaAAIAAh/IAaAAIAlBTIAAhTIAaAAIAAB/g");
	this.shape_22.setTransform(140.4,-31.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_23.setTransform(130.7,-31.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#595652").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_24.setTransform(123.6,-31.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAATQAAAYgTALIAXA0IAAABgAgQgEIAPAAQAGAAAEgEQAEgGAAgIQAAgUgOAAIgPAAg");
	this.shape_25.setTransform(116.5,-31.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_26.setTransform(107.1,-31.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#595652").s().p("AgpBAIAAh/IAqAAQATAAALAMQALAMAAASQABATgLAKQgMALgUAAIgQAAIAAAtgAgQgCIARAAQAHAAAFgEQADgFAAgKQAAgJgEgFQgEgHgHAAIgRAAg");
	this.shape_27.setTransform(97.5,-31.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#595652").s().p("AASBAIgSgsIgQAsIgeAAIAehAIgeg/IAeAAIAQAsIARgsIAdAAIgdA/IAeBAg");
	this.shape_28.setTransform(87.2,-31.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_29.setTransform(78,-31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(0,-44,253,43.2), null);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595652").s().p("AgUA8QgKgFgFgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQALgKQAMgKARAAQAMAAAJAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgDgFQgFgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgKAKgSAAQgMAAgLgGg");
	this.shape.setTransform(179.5,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_1.setTransform(170.5,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595652").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_2.setTransform(163.4,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_3.setTransform(156,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595652").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_4.setTransform(148.8,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595652").s().p("AATBAIglhTIAABTIgaAAIAAh/IAaAAIAlBTIAAhTIAaAAIAAB/g");
	this.shape_5.setTransform(140.8,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_6.setTransform(131.2,30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595652").s().p("AAgBAIAAgjIACg0IgZBXIgRAAIgZhXIACA0IAAAjIgaAAIAAh/IAiAAIAXBbIAYhbIAiAAIAAB/g");
	this.shape_7.setTransform(119.6,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595652").s().p("AAYBAIgHgaIgiAAIgGAaIgcAAIAoh/IAXAAIAoB/gAgMARIAYAAIgMgtg");
	this.shape_8.setTransform(107.5,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595652").s().p("AgUA8QgKgFgFgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgIgJQgJgKAAgNQAAgQALgKQAMgKARAAQAMAAAJAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgDgFQgFgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgKAKgSAAQgMAAgLgGg");
	this.shape_9.setTransform(93.1,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595652").s().p("AgUA8QgJgFgGgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQAMgKQALgKARAAQALAAAKAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgEgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgLAKgRAAQgMAAgLgGg");
	this.shape_10.setTransform(83.4,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#595652").s().p("AAYBAIgHgaIgiAAIgGAaIgcAAIAoh/IAXAAIAoB/gAgLARIAXAAIgMgtg");
	this.shape_11.setTransform(73.2,30.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595652").s().p("AgiBAIAAh/IAZAAIAABqIAtAAIAAAVg");
	this.shape_12.setTransform(63.8,30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#595652").s().p("AggAzQgLgOAAgbIAAgUQgBgaAMgPQAMgOAVAAQAVAAAKAMQALALACAWIgaAAQAAgNgFgFQgDgGgKAAQgKAAgEAIQgFAHABARIAAAXQAAATADAHQAFAHAJAAQALAAADgFQAEgFABgNIAaAAQgBAWgMALQgLAMgVAAQgVAAgLgPg");
	this.shape_13.setTransform(54.2,30.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_14.setTransform(39.9,30.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#595652").s().p("AgTA8QgLgFgFgJQgGgKAAgNIAaAAQAAALAEAFQAFAGAIAAQAOAAAAgPQAAgIgEgEQgEgEgJgEQgUgHgIgJQgJgKAAgNQAAgQALgKQAMgKARAAQALAAAKAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgDgFgIAAQgFAAgEAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAJAJQAIAKAAAPQAAARgLAJQgKAKgTAAQgLAAgKgGg");
	this.shape_15.setTransform(30.2,30.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAASQAAAZgTAKIAXA1IAAABgAgQgDIAPAAQAGgBAEgFQAEgEAAgJQAAgTgOgBIgPAAg");
	this.shape_16.setTransform(20.7,30.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#595652").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_17.setTransform(13,30.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#595652").s().p("AgiBAIAAh/IBFAAIAAAVIgsAAIAAAhIAoAAIAAAVIgoAAIAAA0g");
	this.shape_18.setTransform(6.6,30.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#595652").s().p("AglA4QgJgKAAgRQAAgJAEgHQAEgHALgJQgFgHgDgHQgCgHAAgHQAAgPAIgKQAIgJAOAAQAMAAAIAJQAIAIAAANQAAARgOALIgHAFIAQAWQAEgJAAgKIAVAAQAAAZgKAPIAQAXIgcAAIgFgHQgLAJgOAAQgQAAgKgKgAgRAMQgEAHAAAJQAAAHADAFQADAFAGAAQAHAAAFgFIgUgcgAgNgpQgCAEAAAFQAAAGAGAKIAEgEIAFgFQABgEAAgFQAAgEgCgDQgCgDgEAAQgEAAgCADg");
	this.shape_19.setTransform(134,12.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#595652").s().p("AgTA8QgKgFgGgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAJAAQAOAAAAgPQAAgIgEgEQgEgEgJgEQgUgHgIgJQgJgKAAgNQAAgQAMgKQALgKARAAQAMAAAJAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgDgFgIAAQgFAAgEAEQgEAEAAAHQAAAFAEAFQAFAEAJAEQATAHAJAJQAIAKAAAPQAAARgLAJQgKAKgTAAQgLAAgKgGg");
	this.shape_20.setTransform(119.7,12.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595652").s().p("AAgBAIAAgiIACg1IgZBXIgRAAIgZhXIACA1IAAAiIgaAAIAAh/IAiAAIAXBcIAYhcIAiAAIAAB/g");
	this.shape_21.setTransform(108,12.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#595652").s().p("AghAzQgMgOAAgZIAAgVQAAgaAMgPQAMgPAVAAQAVAAANAPQAMAOAAAaIAAAVQAAAagMAOQgMAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAVQAAARAFAIQAFAIAJAAQAKAAAFgIQAFgIAAgQIAAgVQAAgRgFgJQgFgIgKAAQgJAAgFAIg");
	this.shape_22.setTransform(95.7,12.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#595652").s().p("AghAzQgMgOAAgZIAAgVQAAgaAMgPQAMgPAVAAQAVAAANAPQAMAOAAAaIAAAVQAAAagMAOQgMAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAVQAAARAFAIQAFAIAJAAQAKAAAFgIQAFgIAAgQIAAgVQAAgRgFgJQgFgIgKAAQgJAAgFAIg");
	this.shape_23.setTransform(84.9,12.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAATQAAAYgTALIAXA0IAAABgAgQgEIAPAAQAGAAAEgEQAEgGAAgIQAAgUgOABIgPAAg");
	this.shape_24.setTransform(74.8,12.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595652").s().p("AATBAIAAg3IglAAIAAA3IgaAAIAAh/IAaAAIAAA0IAlAAIAAg0IAaAAIAAB/g");
	this.shape_25.setTransform(59.9,12.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#595652").s().p("AgUA8QgKgFgFgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQALgKQAMgKARAAQALAAAKAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgDgFQgEgFgHAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgKAKgSAAQgMAAgLgGg");
	this.shape_26.setTransform(49.5,12.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#595652").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_27.setTransform(42.3,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#595652").s().p("AgjBAIAAh/IAaAAIAABpIAsAAIAAAWg");
	this.shape_28.setTransform(35.8,12.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#595652").s().p("AgMBAIAAguIgihRIAcAAIASA6IATg6IAcAAIgiBRIAAAug");
	this.shape_29.setTransform(26.3,12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#595652").s().p("AgMBAIAAhpIgfAAIAAgWIBXAAIAAAWIgfAAIAABpg");
	this.shape_30.setTransform(16.6,12.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#595652").s().p("AgUA8QgJgFgGgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQAMgKQALgKARAAQALAAAKAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgEgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgLAKgRAAQgMAAgLgGg");
	this.shape_31.setTransform(6.9,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(0,0,186.5,43.2), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAASQAAAZgTAKIAXA1IAAABgAgQgDIAPAAQAGgBAEgFQAEgEAAgJQAAgTgOgBIgPAAg");
	this.shape.setTransform(226.7,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_1.setTransform(217.2,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_2.setTransform(207.6,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595652").s().p("AATBAIglhTIAABTIgaAAIAAh/IAaAAIAlBTIAAhTIAaAAIAAB/g");
	this.shape_3.setTransform(197.3,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_4.setTransform(187.6,39.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595652").s().p("AggAzQgLgOAAgbIAAgUQgBgaAMgPQAMgOAVAAQAVAAAKAMQALALACAWIgaAAQAAgNgFgFQgDgGgKAAQgKAAgEAIQgFAHABARIAAAXQAAATADAHQAFAHAJAAQALAAADgFQAEgFABgNIAaAAQgBAWgMALQgLAMgVAAQgVAAgLgPg");
	this.shape_5.setTransform(178,39.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_6.setTransform(164.4,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595652").s().p("AggAzQgMgOABgbIAAgUQgBgaAMgPQAMgOAVAAQAVAAALAMQAKALACAWIgaAAQAAgNgEgFQgEgGgKAAQgKAAgEAIQgEAHAAARIAAAXQAAATADAHQAFAHAJAAQAKAAAFgFQADgFAAgNIAbAAQgBAWgMALQgLAMgVAAQgUAAgMgPg");
	this.shape_7.setTransform(154.8,39.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595652").s().p("AATBAIglhTIAABTIgaAAIAAh/IAaAAIAlBTIAAhTIAaAAIAAB/g");
	this.shape_8.setTransform(144,39.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_9.setTransform(134.4,39.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595652").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_10.setTransform(127.3,39.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAASQAAAZgTAKIAXA1IAAABgAgQgDIAPAAQAGgBAEgFQAEgEAAgJQAAgTgOgBIgPAAg");
	this.shape_11.setTransform(120.2,39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_12.setTransform(110.7,39.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#595652").s().p("AgqBAIAAh/IArAAQATAAALAMQAMALAAAUQAAASgMAKQgLALgTAAIgRAAIAAAtgAgQgBIARAAQAIAAADgGQAFgEAAgJQAAgKgFgGQgEgFgHgBIgRAAg");
	this.shape_13.setTransform(101.1,39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595652").s().p("AARBAIgRgtIgRAtIgeAAIAfhAIgeg/IAdAAIARAsIARgsIAeAAIgfA/IAgBAg");
	this.shape_14.setTransform(90.8,39.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_15.setTransform(81.6,39.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAATIgnAAIAAAjIAvAAIAAAVg");
	this.shape_16.setTransform(68.6,39.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#595652").s().p("AATBAIAAg3IglAAIAAA3IgaAAIAAh/IAaAAIAAA0IAlAAIAAg0IAaAAIAAB/g");
	this.shape_17.setTransform(58.4,39.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#595652").s().p("AggAzQgMgOAAgbIAAgUQAAgaANgPQAMgOATAAQAWAAALAMQAKALABAWIgZAAQgBgNgDgFQgEgGgLAAQgJAAgEAIQgEAHgBARIAAAXQAAATAFAHQAEAHAJAAQALAAAEgFQADgFAAgNIAaAAQgBAWgLALQgLAMgVAAQgVAAgLgPg");
	this.shape_18.setTransform(48,39.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#595652").s().p("AgTA8QgLgFgFgJQgGgKAAgNIAaAAQAAALAEAFQAFAGAIAAQAOAAAAgPQAAgIgEgEQgEgEgJgEQgUgHgIgJQgJgKAAgNQAAgQALgKQAMgKARAAQALAAAKAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgDgFgIAAQgFAAgEAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAJAJQAIAKAAAPQAAARgLAJQgKAKgTAAQgLAAgKgGg");
	this.shape_19.setTransform(37.9,39.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAASQAAAZgTAKIAXA1IAAABgAgQgDIAPAAQAGgBAEgFQAEgEAAgJQAAgTgOgBIgPAAg");
	this.shape_20.setTransform(28.4,39.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595652").s().p("AghAzQgMgOAAgZIAAgVQAAgaAMgPQAMgPAVAAQAVAAANAPQAMAOAAAaIAAAVQAAAagMAOQgMAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAVQAAARAFAIQAFAIAJAAQAKAAAFgIQAFgIAAgQIAAgVQAAgRgFgJQgFgIgKAAQgJAAgFAIg");
	this.shape_21.setTransform(17.6,39.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#595652").s().p("AgpBAIAAh/IAqAAQATAAALAMQALALAAAUQAAASgLAKQgLALgTAAIgRAAIAAAtgAgQgBIARAAQAIAAAEgGQADgEAAgJQABgKgFgGQgEgFgHgBIgRAAg");
	this.shape_22.setTransform(7.3,39.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_23.setTransform(127,22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#595652").s().p("AATBAIAAg3IglAAIAAA3IgaAAIAAh/IAaAAIAAA0IAlAAIAAg0IAaAAIAAB/g");
	this.shape_24.setTransform(116.8,22.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_25.setTransform(106.4,22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#595652").s().p("AAgBAIAAgjIACg0IgZBXIgRAAIgZhXIACA0IAAAjIgaAAIAAh/IAiAAIAXBcIAYhcIAiAAIAAB/g");
	this.shape_26.setTransform(90.5,22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#595652").s().p("AghAzQgMgOAAgZIAAgVQAAgaAMgPQAMgPAVAAQAVAAANAPQAMAOAAAaIAAAVQAAAagMAOQgMAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAVQAAARAFAIQAFAIAJAAQAKAAAFgIQAFgIAAgQIAAgVQAAgRgFgJQgFgIgKAAQgJAAgFAIg");
	this.shape_27.setTransform(78.3,22.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAATQAAAYgTALIAXA0IAAABgAgQgEIAPAAQAGAAAEgEQAEgGAAgIQAAgUgOAAIgPAAg");
	this.shape_28.setTransform(68.2,22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#595652").s().p("AgiBAIAAh/IBFAAIAAAVIgsAAIAAAiIAoAAIAAAUIgoAAIAAA0g");
	this.shape_29.setTransform(58.9,22.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#595652").s().p("AgUA8QgKgFgFgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQALgKQAMgKARAAQAMAAAJAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgDgFQgFgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgKAKgSAAQgMAAgLgGg");
	this.shape_30.setTransform(45.4,22.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#595652").s().p("AgqBAIAAh/IArAAQATAAALAMQAMAMAAASQgBATgKAKQgMALgUAAIgQAAIAAAtgAgQgCIARAAQAHAAAEgEQAFgFAAgKQgBgJgEgFQgEgHgHAAIgRAAg");
	this.shape_31.setTransform(35.6,22.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_32.setTransform(26.2,22.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_33.setTransform(16.6,22.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#595652").s().p("AgUA8QgJgFgGgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAKAAQANAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQAMgKQALgKARAAQALAAAKAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgEgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAEAEAKAEQATAHAIAJQAJAKAAAPQAAARgLAJQgLAKgRAAQgMAAgLgGg");
	this.shape_34.setTransform(6.9,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,10,233.5,42.2), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595652").s().p("AgiBAIAAh/IAZAAIAABpIAtAAIAAAWg");
	this.shape.setTransform(269.3,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_1.setTransform(260.6,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_2.setTransform(251,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595652").s().p("AghAzQgMgOAAgZIAAgVQAAgaAMgPQAMgPAVAAQAVAAANAPQAMAOAAAaIAAAVQAAAagMAOQgMAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAVQAAARAFAIQAFAIAJAAQAKAAAFgIQAFgIAAgQIAAgVQAAgRgFgJQgFgIgKAAQgJAAgFAIg");
	this.shape_3.setTransform(240.7,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595652").s().p("AATBAIAAg3IglAAIAAA3IgaAAIAAh/IAaAAIAAA0IAlAAIAAg0IAaAAIAAB/g");
	this.shape_4.setTransform(229.8,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595652").s().p("AgMBAIAAguIgihRIAcAAIASA6IATg6IAcAAIgiBRIAAAug");
	this.shape_5.setTransform(215.2,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595652").s().p("AAPBAIgSgvIgNAAIAAAvIgaAAIAAh/IApAAQATAAAKAKQALAKAAATQAAAYgTALIAXA0IAAABgAgQgEIAPAAQAGAAAEgEQAEgGAAgIQAAgUgOAAIgPAAg");
	this.shape_6.setTransform(205.7,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595652").s().p("AgeA2QgLgKAAgVIAAhXIAaAAIAABXQAAALAEAEQADAFAIABQAJgBAEgFQADgEAAgLIAAhXIAaAAIAABXQAAAVgLAKQgLALgUAAQgTAAgLgLg");
	this.shape_7.setTransform(195.2,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595652").s().p("AARBAIgRgsIgRAsIgdAAIAehAIgeg/IAdAAIARAsIARgsIAdAAIgdA/IAeBAg");
	this.shape_8.setTransform(185.1,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595652").s().p("AgeA2QgLgKAAgVIAAhXIAaAAIAABXQAAALAEAEQADAFAIABQAJgBAEgFQADgEAAgLIAAhXIAaAAIAABXQAAAVgLAKQgLALgUAAQgTAAgLgLg");
	this.shape_9.setTransform(174.9,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595652").s().p("AgjBAIAAh/IAaAAIAABpIAsAAIAAAWg");
	this.shape_10.setTransform(165.8,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_11.setTransform(152.1,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595652").s().p("AgUA8QgJgFgGgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAJAAQAOAAAAgPQAAgIgEgEQgEgEgKgEQgTgHgJgJQgIgKAAgNQAAgQAMgKQALgKARAAQALAAAKAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgEgFgGAAQgHAAgDAEQgEAEAAAHQAAAFAEAFQAFAEAJAEQATAHAIAJQAJAKAAAPQAAARgLAJQgLAKgSAAQgLAAgLgGg");
	this.shape_12.setTransform(142.4,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_13.setTransform(133.4,13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595652").s().p("AAPBAIgPhLIgOBLIgaAAIgXh/IAaAAIAMBQIAPhQIAVAAIAPBQIAMhQIAaAAIgXB/g");
	this.shape_14.setTransform(122,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#595652").s().p("AgkBAIAAh/IBIAAIAAAVIguAAIAAAfIAnAAIAAAUIgnAAIAAAhIAvAAIAAAWg");
	this.shape_15.setTransform(111.1,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#595652").s().p("AATBAIglhTIAABTIgaAAIAAh/IAaAAIAlBTIAAhTIAaAAIAAB/g");
	this.shape_16.setTransform(100.9,13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#595652").s().p("AgTA8QgKgFgGgJQgGgKAAgNIAaAAQAAALAEAFQAEAGAJAAQAOAAAAgPQAAgIgEgEQgEgEgJgEQgUgHgIgJQgJgKAAgNQAAgQAMgKQALgKARAAQAMAAAJAFQAJAFAFAJQAFAJAAAMIgaAAQAAgJgEgFQgDgFgIAAQgFAAgEAEQgEAEAAAHQAAAFAEAFQAFAEAJAEQATAHAJAJQAIAKAAAPQAAARgLAJQgKAKgTAAQgLAAgKgGg");
	this.shape_17.setTransform(86.4,13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#595652").s().p("AgMAQQAGgMAAgLIAAgPIATAAIAAAOQAAAIgEAIQgFAJgFAGg");
	this.shape_18.setTransform(79.4,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#595652").s().p("AAYBAIgGgaIgjAAIgGAaIgcAAIAoh/IAXAAIAoB/gAgMARIAYAAIgMgug");
	this.shape_19.setTransform(72.1,13.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_20.setTransform(61.8,13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595652").s().p("AATBAIglhTIAABTIgaAAIAAh/IAaAAIAlBTIAAhTIAaAAIAAB/g");
	this.shape_21.setTransform(51.5,13.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#595652").s().p("AAYBAIgGgaIgjAAIgGAaIgcAAIAoh/IAXAAIAoB/gAgMARIAYAAIgMgug");
	this.shape_22.setTransform(40.6,13.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#595652").s().p("AgjBAIAAh/IAaAAIAABpIAsAAIAAAWg");
	this.shape_23.setTransform(31.2,13.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#595652").s().p("AgMBAIAAhqIgfAAIAAgVIBXAAIAAAVIgfAAIAABqg");
	this.shape_24.setTransform(21.7,13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595652").s().p("AAYBAIgHgaIgiAAIgGAaIgcAAIAoh/IAXAAIAoB/gAgLARIAXAAIgMgug");
	this.shape_25.setTransform(11.5,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(4,1,271.4,25.6), null);


(lib.SOLIS_TPA_logo_vertical1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7D6A61").ss(1.5,2,0,3).p("AlLlLIKXAAIAAKXIqXAAg");
	this.shape.setTransform(559,-49.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(329,-98,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAB101").s().p("AhGNLIAA6VICNAAIAAaVg");
	this.shape_1.setTransform(310.2,33.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(233,230,223,0.847)").s().p("Egp6ANLIAA6VMBT1AAAIAAaVg");
	this.shape_2.setTransform(585.6,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303.1,-98,550.8,215.8);


(lib.image3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.image3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.image3a, new cjs.Rectangle(0,0,375,250), null);


(lib.image2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.image2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,375,250), null);


(lib.image1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.image1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,399,250), null);


(lib.ctaBtnA2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.ctaBtnA2, null, null);


(lib.ctaBtnA1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD006","#DAB101"],[0,0.494],0,-10,0,10).s().p("ApDCWIAAkrISHAAIAAErg");
	this.shape.setTransform(0.1,0.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaBtnA1, new cjs.Rectangle(-58,-15,116,30), null);


(lib.ctaBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{over:1,out:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.bkgrndFade.gotoAndPlay(1);
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(9).call(this.frame_18).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAyIAAhjIBJAAIAAARIg0AAIAAAWIAwAAIAAAQIgwAAIAAAbIA2AAIAAARg");
	this.shape.setTransform(43,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAyIgOgWIgKgOQgDgDgEgCIgJgBIgEAAIAAAqIgVAAIAAhjIAqAAQAQAAAHADQAHADAFAGQAEAIAAAIQAAAMgHAHQgGAGgOACQAHAEAFAFIALAQIAMATgAgXgHIAOAAQAOAAADgBQAEgBACgDQACgDAAgFQAAgEgCgEQgDgCgFgBIgOgBIgPAAg");
	this.shape_1.setTransform(33.6,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAmQgOgOAAgYQAAgNAFgLQAEgIAGgGQAFgFAHgEQAJgDAMAAQAWAAANANQANAOAAAXQAAAZgNANQgNANgWABQgVgBgNgNgAgTgZQgIAJABAQQgBARAIAJQAIAIALAAQAMAAAIgIQAIgJAAgRQAAgRgIgIQgHgJgNAAQgLABgIAIg");
	this.shape_2.setTransform(22.7,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdAyIAAhOIgTBOIgSAAIgVhOIAABOIgSAAIAAhjIAeAAIARBDIAShDIAeAAIAABjg");
	this.shape_3.setTransform(11.5,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAyIgnhAIAABAIgTAAIAAhjIAUAAIAoBCIAAhCIASAAIAABjg");
	this.shape_4.setTransform(-3.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVAyIgOgWIgKgOQgDgDgEgCIgJgBIgFAAIAAAqIgUAAIAAhjIArAAQAOAAAIADQAHADAFAGQAEAIAAAIQAAAMgHAHQgGAGgOACQAHAEAFAFIALAQIAMATgAgYgHIAPAAQAOAAADgBQAEgBACgDQACgDAAgFQAAgEgCgEQgEgCgEgBIgOgBIgQAAg");
	this.shape_5.setTransform(-12.9,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcAyIgIgXIgoAAIgIAXIgVAAIAnhjIAUAAIAoBjgAgNAKIAaAAIgNgkg");
	this.shape_6.setTransform(-23.5,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAyIAAhjIBJAAIAAARIg0AAIAAAWIAwAAIAAAQIgwAAIAAAbIA2AAIAAARg");
	this.shape_7.setTransform(-33,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAxIAAhiIAUAAIAABRIAxAAIAAARg");
	this.shape_8.setTransform(-41.7,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(19));

	// txt
	this.instance = new lib.ctaBtnA1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9,cjs.Ease.get(1)).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD006").s().p("ApDCWIAAkrISHAAIAAErg");
	this.shape_9.setTransform(0.1,0.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(19));

	// bkgrnd fade
	this.bkgrndFade = new lib.ctaBtnA2();
	this.bkgrndFade.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bkgrndFade).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-15,116,30);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 15;
		stage.enableMouseOver(frequency);
		
		var canvas = document.querySelector("#canvas");
		//console.log("CANVAS %O", canvas);
		
		canvas.addEventListener("mouseover", over.bind(this));
		canvas.addEventListener("mouseout", out.bind(this));
		  
		function over() {  
			//console.log("MOUSE OVER");
			this.ctaBtn.gotoAndPlay("over");
		}
		
		function out() {  
			//console.log("MOUSE OUT");
			this.ctaBtn.gotoAndPlay("out");
		}
	}
	this.frame_397 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(397).call(this.frame_397).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(398));

	// logo
	this.instance = new lib.SOLIS_TPA_logo_vertical1ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(92.3,222,0.35,0.35,0,0,0,206.8,86.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(398));

	// ctaBtn
	this.ctaBtn = new lib.ctaBtn();
	this.ctaBtn.parent = this;
	this.ctaBtn.setTransform(242,267);

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(346).to({x:183,y:70,alpha:0},0).to({y:80,alpha:1},15,cjs.Ease.get(1)).wait(37));

	// bar4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_320 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_graphics_321 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_graphics_322 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_graphics_323 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_graphics_324 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_graphics_325 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_graphics_326 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_graphics_327 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(320).to({graphics:mask_graphics_320,x:-119,y:41}).wait(1).to({graphics:mask_graphics_321,x:-55.3,y:41}).wait(1).to({graphics:mask_graphics_322,x:-1.4,y:41}).wait(1).to({graphics:mask_graphics_323,x:42.7,y:41}).wait(1).to({graphics:mask_graphics_324,x:76.9,y:41}).wait(1).to({graphics:mask_graphics_325,x:101.4,y:41}).wait(1).to({graphics:mask_graphics_326,x:116.1,y:41}).wait(1).to({graphics:mask_graphics_327,x:121,y:41}).wait(71));

	// text4
	this.instance_1 = new lib.text4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.5,85.5,1,1,0,0,0,126.5,21.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(320).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(71));

	// bar4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(233,230,223,0.749)").s().p("AyvDIIAAmPMAlfAAAIAAGPg");
	this.shape_1.setTransform(-119,41);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(320).to({_off:false},0).wait(1).to({x:-55.3},0).wait(1).to({x:-1.4},0).wait(1).to({x:42.7},0).wait(1).to({x:76.9},0).wait(1).to({x:101.4},0).wait(1).to({x:116.1},0).wait(1).to({x:121},0).wait(71));

	// bar3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_227 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_232 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AyvDIIAAmPMAlfAAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(227).to({graphics:mask_1_graphics_227,x:421,y:41}).wait(1).to({graphics:mask_1_graphics_228,x:364.8,y:41}).wait(1).to({graphics:mask_1_graphics_229,x:316,y:41}).wait(1).to({graphics:mask_1_graphics_230,x:274.8,y:41}).wait(1).to({graphics:mask_1_graphics_231,x:241,y:41}).wait(1).to({graphics:mask_1_graphics_232,x:214.8,y:41}).wait(1).to({graphics:mask_1_graphics_233,x:196,y:41}).wait(1).to({graphics:mask_1_graphics_234,x:184.8,y:41}).wait(1).to({graphics:mask_1_graphics_235,x:181,y:41}).wait(78).to({graphics:mask_1_graphics_313,x:181,y:41}).wait(1).to({graphics:mask_1_graphics_314,x:187.7,y:41}).wait(1).to({graphics:mask_1_graphics_315,x:207.7,y:41}).wait(1).to({graphics:mask_1_graphics_316,x:241,y:41}).wait(1).to({graphics:mask_1_graphics_317,x:287.7,y:41}).wait(1).to({graphics:mask_1_graphics_318,x:347.7,y:41}).wait(1).to({graphics:mask_1_graphics_319,x:421,y:41}).wait(79));

	// text3
	this.instance_2 = new lib.text3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.3,41.5,1,1,0,0,0,93.3,21.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(227).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(78).to({alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(78));

	// bar3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(233,230,223,0.749)").s().p("AyvDIIAAmPMAlfAAAIAAGPg");
	this.shape_2.setTransform(421,41);
	this.shape_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(181,41);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(421,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},227).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_3}]},78).to({state:[{t:this.instance_4}]},6).to({state:[]},1).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(227).to({_off:false},0).wait(1).to({x:364.8},0).wait(1).to({x:316},0).wait(1).to({x:274.8},0).wait(1).to({x:241},0).wait(1).to({x:214.8},0).wait(1).to({x:196},0).wait(1).to({x:184.8},0).wait(1).to({x:181},0).to({_off:true},78).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(313).to({_off:false},0).to({_off:true,x:421},6,cjs.Ease.get(-1)).wait(79));

	// bar2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_109 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_110 = new cjs.Graphics().p("A32DRIAAmhMAvsAAAIAAGhg");
	var mask_2_graphics_111 = new cjs.Graphics().p("A32DRIAAmhMAvsAAAIAAGhg");
	var mask_2_graphics_112 = new cjs.Graphics().p("A31DRIAAmhMAvsAAAIAAGhg");
	var mask_2_graphics_113 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_114 = new cjs.Graphics().p("A32DRIAAmhMAvtAAAIAAGhg");
	var mask_2_graphics_115 = new cjs.Graphics().p("A32DRIAAmhMAvtAAAIAAGhg");
	var mask_2_graphics_116 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_117 = new cjs.Graphics().p("A32DRIAAmhMAvsAAAIAAGhg");
	var mask_2_graphics_118 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_218 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_219 = new cjs.Graphics().p("A32DRIAAmhMAvtAAAIAAGhg");
	var mask_2_graphics_220 = new cjs.Graphics().p("A31DRIAAmhMAvsAAAIAAGhg");
	var mask_2_graphics_221 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_222 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_223 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_224 = new cjs.Graphics().p("A31DRIAAmhMAvrAAAIAAGhg");
	var mask_2_graphics_225 = new cjs.Graphics().p("A31DRIAAmhMAvsAAAIAAGhg");
	var mask_2_graphics_226 = new cjs.Graphics().p("A32DRIAAmhMAvtAAAIAAGhg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_2_graphics_109,x:476.7,y:41}).wait(1).to({graphics:mask_2_graphics_110,x:417.9,y:41}).wait(1).to({graphics:mask_2_graphics_111,x:366.1,y:41}).wait(1).to({graphics:mask_2_graphics_112,x:321.1,y:41}).wait(1).to({graphics:mask_2_graphics_113,x:283.1,y:41}).wait(1).to({graphics:mask_2_graphics_114,x:252,y:41}).wait(1).to({graphics:mask_2_graphics_115,x:227.8,y:41}).wait(1).to({graphics:mask_2_graphics_116,x:210.5,y:41}).wait(1).to({graphics:mask_2_graphics_117,x:200.1,y:41}).wait(1).to({graphics:mask_2_graphics_118,x:196.7,y:41}).wait(100).to({graphics:mask_2_graphics_218,x:196.7,y:41}).wait(1).to({graphics:mask_2_graphics_219,x:200.7,y:41}).wait(1).to({graphics:mask_2_graphics_220,x:212.7,y:41}).wait(1).to({graphics:mask_2_graphics_221,x:232.7,y:41}).wait(1).to({graphics:mask_2_graphics_222,x:260.7,y:41}).wait(1).to({graphics:mask_2_graphics_223,x:296.7,y:41}).wait(1).to({graphics:mask_2_graphics_224,x:340.7,y:41}).wait(1).to({graphics:mask_2_graphics_225,x:392.7,y:41}).wait(1).to({graphics:mask_2_graphics_226,x:452.7,y:41}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// text2
	this.instance_5 = new lib.text2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163.3,32,1,1,0,0,0,116.8,21.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(100).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(171));

	// bar2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(233,230,223,0.749)").s().p("A31DRIAAmhMAvrAAAIAAGhg");
	this.shape_3.setTransform(476.7,41);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(233,230,223,0.749)").s().p("A32DRIAAmhMAvsAAAIAAGhg");
	this.shape_4.setTransform(417.9,41);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(233,230,223,0.749)").s().p("A31DRIAAmhMAvsAAAIAAGhg");
	this.shape_5.setTransform(321.1,41);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(233,230,223,0.749)").s().p("A32DRIAAmhMAvtAAAIAAGhg");
	this.shape_6.setTransform(252,41);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(233,230,223,0.749)").s().p("A32CuIAAlbMAvtAAAIAAFbg");
	this.shape_7.setTransform(452.7,41,1,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},109).to({state:[{t:this.shape_4,p:{x:417.9}}]},1).to({state:[{t:this.shape_4,p:{x:366.1}}]},1).to({state:[{t:this.shape_5,p:{x:321.1}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_6,p:{x:252}}]},1).to({state:[{t:this.shape_6,p:{x:227.8}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:200.1}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},100).to({state:[{t:this.shape_6,p:{x:200.7}}]},1).to({state:[{t:this.shape_5,p:{x:212.7}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5,p:{x:392.7}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(109).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:283.1},0).to({_off:true},1).wait(2).to({_off:false,x:210.5},0).to({_off:true},1).wait(1).to({_off:false,x:196.7},0).wait(100).to({_off:true},1).wait(2).to({_off:false,x:232.7},0).wait(1).to({x:260.7},0).wait(1).to({x:296.7},0).wait(1).to({x:340.7},0).to({_off:true},1).wait(173));

	// bar (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_1 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_2 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_3 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_4 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_5 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_6 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_7 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_101 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_102 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_103 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_104 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_105 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_106 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_107 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");
	var mask_3_graphics_108 = new cjs.Graphics().p("A38CbIAAk1MAv5AAAIAAE1g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:-152,y:32.6}).wait(1).to({graphics:mask_3_graphics_1,x:-75.3,y:32.6}).wait(1).to({graphics:mask_3_graphics_2,x:-10.4,y:32.6}).wait(1).to({graphics:mask_3_graphics_3,x:42.7,y:32.6}).wait(1).to({graphics:mask_3_graphics_4,x:83.9,y:32.6}).wait(1).to({graphics:mask_3_graphics_5,x:113.4,y:32.6}).wait(1).to({graphics:mask_3_graphics_6,x:131.1,y:32.6}).wait(1).to({graphics:mask_3_graphics_7,x:137,y:32.6}).wait(94).to({graphics:mask_3_graphics_101,x:137,y:32.6}).wait(1).to({graphics:mask_3_graphics_102,x:131.1,y:32.6}).wait(1).to({graphics:mask_3_graphics_103,x:113.4,y:32.6}).wait(1).to({graphics:mask_3_graphics_104,x:83.8,y:32.6}).wait(1).to({graphics:mask_3_graphics_105,x:42.3,y:32.6}).wait(1).to({graphics:mask_3_graphics_106,x:-10.9,y:32.6}).wait(1).to({graphics:mask_3_graphics_107,x:-76,y:32.6}).wait(1).to({graphics:mask_3_graphics_108,x:-153,y:32.6}).wait(290));

	// text1
	this.instance_6 = new lib.text1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(141,32.4,1,1,0,0,0,135.7,12.8);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},7,cjs.Ease.get(1)).wait(94).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(289));

	// bar
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(233,230,223,0.749)").s().p("A38CbIAAk1MAv5AAAIAAE1g");
	this.shape_8.setTransform(-152,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({x:-75.3},0).wait(1).to({x:-10.4},0).wait(1).to({x:42.7},0).wait(1).to({x:83.9},0).wait(1).to({x:113.4},0).wait(1).to({x:131.1},0).wait(1).to({x:137},0).wait(95).to({x:131.1},0).wait(1).to({x:113.4},0).wait(1).to({x:83.8},0).wait(1).to({x:42.3},0).wait(1).to({x:-10.9},0).wait(1).to({x:-76},0).wait(1).to({x:-153},0).to({_off:true},1).wait(289));

	// image3
	this.instance_7 = new lib.image3a();
	this.instance_7.parent = this;
	this.instance_7.setTransform(188,126.1,1,1,0,0,0,187.5,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(227).to({_off:false},0).to({x:181,alpha:1},13).to({x:113},125,cjs.Ease.get(1)).wait(33));

	// image2
	this.instance_8 = new lib.image2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(113,127.1,1,1,0,0,0,187.5,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(109).to({_off:false},0).to({x:120.6,alpha:1},14).to({x:188},117).wait(158));

	// image1
	this.instance_9 = new lib.image1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:51},123).wait(275));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.3,124.5,705.3,282.5);
// library properties:
lib.properties = {
	id: '4B74FC7B01F549298A2A52CF2D46DE28',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/image1.jpg", id:"image1"},
		{src:"images/image2.jpg", id:"image2"},
		{src:"images/image3.jpg", id:"image3"},
		{src:"images/logo.png", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4B74FC7B01F549298A2A52CF2D46DE28'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;