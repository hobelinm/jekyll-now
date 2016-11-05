"use strict";var __extends=this&&this.__extends||function(e,r){function o(){this.constructor=e}for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s]);e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)},__decorate=this&&this.__decorate||function(e,r,o,s){var a,t=arguments.length,l=t<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,o,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(l=(t<3?a(l):t>3?a(r,o,l):a(r,o))||l);return t>3&&l&&Object.defineProperty(r,o,l),l},__metadata=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},core_1=require("@angular/core"),img_pageobject_1=require("./models/img.pageobject"),page_label_model_1=require("./models/page-label.model"),locales_util_1=require("./locales.util"),config_util_1=require("./config.util"),ResourceMan=function(){function e(){if(this.serverVersionReady=null,null==e.instanceClass){this.userLocale=new locales_util_1.UserLocale;var r=localStorage.getItem("user.locale");null==r&&(r=this.userLocale.AsString(this.userLocale.GetDefaultLocale()),localStorage.setItem("user.locale",r),console.log("Set locale to: "+r)),this.resourceStrings={},this.resourceImgs={},this.resourcePageLabels={},console.debug("Reading readVersions from server..."),this.getServerSchema(),e.instanceClass=this}}return e.prototype.getServerSchema=function(){var e=this.keyMaker("system","schemaVersion");if(null==sessionStorage[e]){var r=function(){return console.debug("[GetServerSchema]"),!0};this.serverVersionReady=Promise.resolve(r())}else this.serverVersionReady=Promise.resolve(!0)},e.prototype.keyMaker=function(e,r){var o;return o="system"===e?"":this.userLocale.AsString(this.userLocale.currentLocale)+".",o+e+"."+r},e.prototype.getResource=function(r,o){var s=function(e){return Promise.resolve(JSON.parse(localStorage.getItem(e)))},a=function(r){return e.instanceClass.getServerResource(e.instanceClass.userLocale.AsLocale(localStorage.getItem("user.locale"))).then(function(){return s(r)})};return e.instanceClass.serverVersionReady.then(function(){var t=e.instanceClass.keyMaker(r,o),l=localStorage.getItem(t);return null==l?a(t):s(t)})},e.prototype.getServerResource=function(e){return Promise.resolve(!0)},e.prototype.getAssetLabel=function(r){if(null==e.instanceClass.resourceStrings[r]){if(console.log("[ResourceMan] Label <"+r+"> was not found, attempting to read from server..."),e.instanceClass.readStringsFromServer(e.instanceClass.userLocale.currentLocale),null==e.instanceClass.resourceStrings[r])throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceStringNotFound,"Unable to fetch resource <"+r+">");console.log("[ResourceMan] Label <"+r+"> is now: "+e.instanceClass.resourceStrings[r])}return Promise.resolve(e.instanceClass.resourceStrings[r])},e.prototype.getAssetImg=function(r){if(null==e.instanceClass.resourceImgs[r]&&(e.instanceClass.readImgFromServer(e.instanceClass.userLocale.currentLocale),null==e.instanceClass.resourceImgs[r]))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceImgNotFound,"Unable to fetch resource <"+r+">");return Promise.resolve(e.instanceClass.resourceImgs[r])},e.prototype.getAssetPageLabel=function(r){if(null==e.instanceClass.resourcePageLabels[r]&&(e.instanceClass.readPageLabelFromServer(e.instanceClass.userLocale.currentLocale),null==e.instanceClass.resourcePageLabels[r]))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourcePageLabelNotFound,"Unable to fetch resource <"+r+">");return Promise.resolve(e.instanceClass.resourcePageLabels[r])},e.prototype.readStringsFromServer=function(r){this.resourceStrings.siteversion=e.instanceClass.readVersionFromServer().replace("@@@",config_util_1.SiteConfig.clientVersion);var o=e.instanceClass.readResourceSchemaFromServer(),s="ResourceSchema."+e.instanceClass.userLocale.AsString(e.instanceClass.userLocale.currentLocale)+".Version";null!=localStorage.getItem(s)&&localStorage.getItem(s)==o||console.log("[readStringsFromServer] Reading resources from server"),this.resourceStrings["label.subscribebtnlabel"]="Subscribe",this.resourceStrings["label.togglemessage"]="Toggle Navigation",this.resourceStrings["label.copyright"]="Copyright",this.resourceStrings["label.pageviews"]="Pageviews",this.resourceStrings["label.visitors"]="Visitors",this.resourceStrings["label.myviews"]="My Views",this.resourceStrings["label.totalPageViewsLabel"]="Total Page Views"},e.prototype.readImgFromServer=function(e){this.resourceImgs["img.avatar"]=new img_pageobject_1.Img(30,30,"Hugo Belin","https://bit.ly/hugobelinpic")},e.prototype.readPageLabelFromServer=function(e){this.resourcePageLabels["pagelabel.home"]=new page_label_model_1.PageLabel("","Home"),this.resourcePageLabels["pagelabel.homepage"]=new page_label_model_1.PageLabel("","Hugo Belin"),this.resourcePageLabels["pagelabel.about"]=new page_label_model_1.PageLabel("about","About"),this.resourcePageLabels["pagelabel.blog"]=new page_label_model_1.PageLabel("blog","Blog"),this.resourcePageLabels["pagelabel.projects"]=new page_label_model_1.PageLabel("projects","Projects"),this.resourcePageLabels["pagelabel.movies"]=new page_label_model_1.PageLabel("movies","Movies"),this.resourcePageLabels["pagelabel.cars"]=new page_label_model_1.PageLabel("cars","Cars"),this.resourcePageLabels["pagelabel.videogames"]=new page_label_model_1.PageLabel("videogames","Videogames"),this.resourcePageLabels["pagelabel.fitness"]=new page_label_model_1.PageLabel("fitness","Fitness"),this.resourcePageLabels["pagelabel.credits"]=new page_label_model_1.PageLabel("credits","Credits"),this.resourcePageLabels["svgIcon.email"]=new page_label_model_1.PageLabel("mailto:info@hugobelin.com","email"),this.resourcePageLabels["svgIcon.facebook"]=new page_label_model_1.PageLabel("https://www.facebook.com/hobelinm","facebook"),this.resourcePageLabels["svgIcon.github"]=new page_label_model_1.PageLabel("https://github.com/hobelinm","github"),this.resourcePageLabels["svgIcon.linkedin"]=new page_label_model_1.PageLabel("https://www.linkedin.com/in/hugobelin","linkedin"),this.resourcePageLabels["svgIcon.twitter"]=new page_label_model_1.PageLabel("https://www.twitter.com/hugobelinm","twitter"),this.resourcePageLabels["svgIcon.stackoverflow"]=new page_label_model_1.PageLabel("http://stackoverflow.com/users/747572/hobelinm","stackoverflow")},e.prototype.readVersionFromServer=function(){var e="ServerVersion";return null==sessionStorage.getItem(e)&&sessionStorage.setItem(e,"0.1.@@@.1"),sessionStorage.getItem(e)},e.prototype.readResourceSchemaFromServer=function(){var r="ResourceSchema."+e.instanceClass.userLocale.AsString(e.instanceClass.userLocale.currentLocale)+".Version";return null==sessionStorage.getItem(r)&&sessionStorage.setItem(r,"0"),sessionStorage.getItem(r)},e.prototype.writeElement=function(e,r){if(null!=localStorage.getItem(e))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceStorageAlreadyExists,"Unable to write element with key: "+e+" because that key is already being used.");localStorage.setItem(e,JSON.stringify(r))},e.prototype.writeOrUpdateElement=function(e,r){localStorage.setItem(e,JSON.stringify(r))},e.prototype.readElement=function(e){if(localStorage.getItem(e))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceStorageNotFound,"Item with key: "+e+" not found");return JSON.parse(localStorage.getItem(e))},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],e)}();exports.ResourceMan=ResourceMan,function(e){e[e.ResourceStringNotFound=0]="ResourceStringNotFound",e[e.ResourceImgNotFound=1]="ResourceImgNotFound",e[e.ResourcePageLabelNotFound=2]="ResourcePageLabelNotFound",e[e.ResourceStorageAlreadyExists=3]="ResourceStorageAlreadyExists",e[e.ResourceStorageNotFound=4]="ResourceStorageNotFound"}(exports.ResourceManagerErrorTypes||(exports.ResourceManagerErrorTypes={}));var ResourceManagerErrorTypes=exports.ResourceManagerErrorTypes,ResourceManagerError=function(e){function r(r,o){var s=ResourceManagerErrorTypes[r]+": "+o;console.error(s),e.call(this,s)}return __extends(r,e),r}(Error);exports.ResourceManagerError=ResourceManagerError;
