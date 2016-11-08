"use strict";var __extends=this&&this.__extends||function(e,r){function s(){this.constructor=e}for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a]);e.prototype=null===r?Object.create(r):(s.prototype=r.prototype,new s)},__decorate=this&&this.__decorate||function(e,r,s,a){var o,t=arguments.length,l=t<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,s,a);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(l=(t<3?o(l):t>3?o(r,s,l):o(r,s))||l);return t>3&&l&&Object.defineProperty(r,s,l),l},__metadata=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},core_1=require("@angular/core"),img_pageobject_1=require("./models/img.pageobject"),page_label_model_1=require("./models/page-label.model"),locales_util_1=require("./locales.util"),config_util_1=require("./config.util"),ResourceMan=function(){function e(){if(this.serverVersionReady=null,null==e.instanceClass){this.userLocale=new locales_util_1.UserLocale;var r=localStorage.getItem(this.keyMaker("system","locale"));null==r?(r=this.userLocale.AsString(this.userLocale.GetDefaultLocale()),this.userLocale.currentLocale=this.userLocale.GetDefaultLocale(),console.log("Set locale to: "+r),localStorage.setItem(this.keyMaker("system","locale"),r)):this.userLocale.currentLocale=this.userLocale.AsLocale(r),this.resourceStrings={},this.resourceImgs={},this.resourcePageLabels={},this.getServerSchema(),e.instanceClass=this}}return e.prototype.getServerSchema=function(){var e=this.keyMaker("user","schemaVersion"),r=this.keyMaker("system","pageversion"),s=function(){sessionStorage.setItem(e,"8");var s="0.1.@@@.1";return sessionStorage.setItem(r,s.replace("@@@",config_util_1.SiteConfig.clientVersion)),!0};this.serverVersionReady=Promise.resolve(s())},e.prototype.keyMaker=function(e,r){var s;return s="system"===e?"":this.userLocale.AsString(this.userLocale.currentLocale)+".",s+e+"."+r},e.prototype.getResource=function(r,s){var a=function(e){var r=localStorage.getItem(e);if(null==r)throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceNotFound,"Element with "+e+" was not found");return r},o=function(e){return console.debug("[getResource<T>] Reading ["+r+"] "+s),Promise.resolve(JSON.parse(a(e)))},t=function(r){return e.instanceClass.getServerResource(e.instanceClass.userLocale.currentLocale).then(function(){return o(r)})};return e.instanceClass.serverVersionReady.then(function(){var a=e.instanceClass.keyMaker(r,s),l=localStorage.getItem(a),n=e.instanceClass.keyMaker("user","schemaVersion"),i=localStorage.getItem(n),c=sessionStorage.getItem(n);return null==l||null==i||i!=c?t(a):o(a)})},e.prototype.getPageVersion=function(){var r=e.instanceClass.keyMaker("system","pageversion");return e.instanceClass.serverVersionReady.then(function(){return sessionStorage.getItem(r)})},e.prototype.getServerResource=function(r){console.debug("Loading resources from server..."),localStorage.setItem("English.label.navbar.subscribebtnlabel",'"Subscribe"'),localStorage.setItem("English.label.togglemessage",'"Toggle Message"'),localStorage.setItem("English.label.copyright",'"Copyright"'),localStorage.setItem("English.label.pageviews",'"Pageviews"'),localStorage.setItem("English.label.visitors",'"Visitors"'),localStorage.setItem("English.label.myviews",'"My Views"'),localStorage.setItem("English.label.totalpageviews",'"Site Views"'),localStorage.setItem("English.svgIcon.email",'{"page":"mailto:info@hugobelin.com","label":"email"}'),localStorage.setItem("English.svgIcon.facebook",'{"page":"https://www.facebook.com/hobelinm","label":"facebook"}'),localStorage.setItem("English.svgIcon.github",'{"page":"https://github.com/hobelinm","label":"github"}'),localStorage.setItem("English.svgIcon.linkedin",'{"page":"https://www.linkedin.com/in/hugobelin","label":"linkedin"}'),localStorage.setItem("English.svgIcon.twitter",'{"page":"https://www.twitter.com/hugobelinm","label":"twitter"}'),localStorage.setItem("English.svgIcon.stackoverflow",'{"page":"http://stackoverflow.com/users/747572/hobelinm","label":"stackoverflow"}'),localStorage.setItem("English.pagelabel.homepage",'{"page":"","label":"Hugo Belin"}'),localStorage.setItem("English.pagelabel.home",'{"page":"","label":"Hugo"}'),localStorage.setItem("English.pagelabel.about",'{"page":"about","label":"About"}'),localStorage.setItem("English.pagelabel.blog",'{"page":"blog","label":"Blog"}'),localStorage.setItem("English.pagelabel.credits",'{"page":"credits","label":"Credits"}'),localStorage.setItem("English.pagelabel.projects",'{"page":"projects","label":"Projects"}'),localStorage.setItem("English.pagelabel.movies",'{"page":"movies","label":"Movies"}'),localStorage.setItem("English.pagelabel.cars",'{"page":"cars","label":"Cars"}'),localStorage.setItem("English.pagelabel.videogames",'{"page":"videogames","label":"Videogames"}'),localStorage.setItem("English.pagelabel.fitness",'{"page":"fitness","label":"Fitness"}');var s=e.instanceClass.keyMaker("user","schemaVersion"),a=sessionStorage.getItem(s);return localStorage.setItem(s,a),Promise.resolve(!0)},e.prototype.getAssetLabel=function(r){if(null==e.instanceClass.resourceStrings[r]){if(console.log("[ResourceMan] Label <"+r+"> was not found, attempting to read from server..."),e.instanceClass.readStringsFromServer(e.instanceClass.userLocale.currentLocale),null==e.instanceClass.resourceStrings[r])throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceStringNotFound,"Unable to fetch resource <"+r+">");console.log("[ResourceMan] Label <"+r+"> is now: "+e.instanceClass.resourceStrings[r])}return Promise.resolve(e.instanceClass.resourceStrings[r])},e.prototype.getAssetImg=function(r){if(null==e.instanceClass.resourceImgs[r]&&(e.instanceClass.readImgFromServer(e.instanceClass.userLocale.currentLocale),null==e.instanceClass.resourceImgs[r]))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceImgNotFound,"Unable to fetch resource <"+r+">");return Promise.resolve(e.instanceClass.resourceImgs[r])},e.prototype.getAssetPageLabel=function(r){if(null==e.instanceClass.resourcePageLabels[r]&&(e.instanceClass.readPageLabelFromServer(e.instanceClass.userLocale.currentLocale),null==e.instanceClass.resourcePageLabels[r]))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourcePageLabelNotFound,"Unable to fetch resource <"+r+">");return Promise.resolve(e.instanceClass.resourcePageLabels[r])},e.prototype.readStringsFromServer=function(r){this.resourceStrings.siteversion=e.instanceClass.readVersionFromServer().replace("@@@",config_util_1.SiteConfig.clientVersion);var s=e.instanceClass.readResourceSchemaFromServer(),a="ResourceSchema."+e.instanceClass.userLocale.AsString(e.instanceClass.userLocale.currentLocale)+".Version";null!=localStorage.getItem(a)&&localStorage.getItem(a)==s||console.log("[readStringsFromServer] Reading resources from server"),this.resourceStrings["label.subscribebtnlabel"]="Subscribe",this.resourceStrings["label.togglemessage"]="Toggle Navigation",this.resourceStrings["label.copyright"]="Copyright",this.resourceStrings["label.pageviews"]="Pageviews",this.resourceStrings["label.visitors"]="Visitors",this.resourceStrings["label.myviews"]="My Views",this.resourceStrings["label.totalPageViewsLabel"]="Total Page Views"},e.prototype.readImgFromServer=function(e){this.resourceImgs["img.avatar"]=new img_pageobject_1.Img(30,30,"Hugo Belin","https://bit.ly/hugobelinpic")},e.prototype.readPageLabelFromServer=function(e){this.resourcePageLabels["pagelabel.home"]=new page_label_model_1.PageLabel("","Home"),this.resourcePageLabels["pagelabel.homepage"]=new page_label_model_1.PageLabel("","Hugo Belin"),this.resourcePageLabels["pagelabel.about"]=new page_label_model_1.PageLabel("about","About"),this.resourcePageLabels["pagelabel.blog"]=new page_label_model_1.PageLabel("blog","Blog"),this.resourcePageLabels["pagelabel.projects"]=new page_label_model_1.PageLabel("projects","Projects"),this.resourcePageLabels["pagelabel.movies"]=new page_label_model_1.PageLabel("movies","Movies"),this.resourcePageLabels["pagelabel.cars"]=new page_label_model_1.PageLabel("cars","Cars"),this.resourcePageLabels["pagelabel.videogames"]=new page_label_model_1.PageLabel("videogames","Videogames"),this.resourcePageLabels["pagelabel.fitness"]=new page_label_model_1.PageLabel("fitness","Fitness"),this.resourcePageLabels["pagelabel.credits"]=new page_label_model_1.PageLabel("credits","Credits"),this.resourcePageLabels["svgIcon.email"]=new page_label_model_1.PageLabel("mailto:info@hugobelin.com","email"),this.resourcePageLabels["svgIcon.facebook"]=new page_label_model_1.PageLabel("https://www.facebook.com/hobelinm","facebook"),this.resourcePageLabels["svgIcon.github"]=new page_label_model_1.PageLabel("https://github.com/hobelinm","github"),this.resourcePageLabels["svgIcon.linkedin"]=new page_label_model_1.PageLabel("https://www.linkedin.com/in/hugobelin","linkedin"),this.resourcePageLabels["svgIcon.twitter"]=new page_label_model_1.PageLabel("https://www.twitter.com/hugobelinm","twitter"),this.resourcePageLabels["svgIcon.stackoverflow"]=new page_label_model_1.PageLabel("http://stackoverflow.com/users/747572/hobelinm","stackoverflow")},e.prototype.readVersionFromServer=function(){var e="ServerVersion";return null==sessionStorage.getItem(e)&&sessionStorage.setItem(e,"0.1.@@@.1"),sessionStorage.getItem(e)},e.prototype.readResourceSchemaFromServer=function(){var r="ResourceSchema."+e.instanceClass.userLocale.AsString(e.instanceClass.userLocale.currentLocale)+".Version";return null==sessionStorage.getItem(r)&&sessionStorage.setItem(r,"0"),sessionStorage.getItem(r)},e.prototype.writeElement=function(e,r){if(null!=localStorage.getItem(e))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceStorageAlreadyExists,"Unable to write element with key: "+e+" because that key is already being used.");localStorage.setItem(e,JSON.stringify(r))},e.prototype.writeOrUpdateElement=function(e,r){localStorage.setItem(e,JSON.stringify(r))},e.prototype.readElement=function(e){if(localStorage.getItem(e))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceStorageNotFound,"Item with key: "+e+" not found");return JSON.parse(localStorage.getItem(e))},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],e)}();exports.ResourceMan=ResourceMan,function(e){e[e.ResourceStringNotFound=0]="ResourceStringNotFound",e[e.ResourceImgNotFound=1]="ResourceImgNotFound",e[e.ResourcePageLabelNotFound=2]="ResourcePageLabelNotFound",e[e.ResourceStorageAlreadyExists=3]="ResourceStorageAlreadyExists",e[e.ResourceStorageNotFound=4]="ResourceStorageNotFound",e[e.ResourceNotFound=5]="ResourceNotFound"}(exports.ResourceManagerErrorTypes||(exports.ResourceManagerErrorTypes={}));var ResourceManagerErrorTypes=exports.ResourceManagerErrorTypes,ResourceManagerError=function(e){function r(r,s){var a=ResourceManagerErrorTypes[r]+": "+s;console.error(a),e.call(this,a)}return __extends(r,e),r}(Error);exports.ResourceManagerError=ResourceManagerError;
