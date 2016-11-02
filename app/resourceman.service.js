"use strict";var __extends=this&&this.__extends||function(e,r){function o(){this.constructor=e}for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)},__decorate=this&&this.__decorate||function(e,r,o,t){var a,s=arguments.length,l=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,o,t);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(l=(s<3?a(l):s>3?a(r,o,l):a(r,o))||l);return s>3&&l&&Object.defineProperty(r,o,l),l},__metadata=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},core_1=require("@angular/core"),img_pageobject_1=require("./img.pageobject"),page_label_util_1=require("./page-label.util"),locales_util_1=require("./locales.util"),config_util_1=require("./config.util"),ResourceMan=function(){function e(){this.userLocale=new locales_util_1.UserLocale;var e=localStorage.getItem("user.locale");null==e&&(e=this.userLocale.AsString(this.userLocale.GetDefaultLocale()),localStorage.setItem("user.locale",e),console.log("Set locale to: "+e)),this.resourceStrings={},this.resourceImgs={},this.resourcePageLabels={}}return e.prototype.getAssetLabel=function(e){if(null==this.resourceStrings[e]){if(console.log("[ResourceMan] Label <"+e+"> was not found, attempting to read from server..."),this.readStringsFromServer(this.userLocale.currentLocale),null==this.resourceStrings[e])throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceStringNotFound,"Unable to fetch resource <"+e+">");console.log("[ResourceMan] Label <"+e+"> is now: "+this.resourceStrings[e])}return Promise.resolve(this.resourceStrings[e])},e.prototype.getAssetImg=function(e){if(null==this.resourceImgs[e]&&(this.readImgFromServer(this.userLocale.currentLocale),null==this.resourceImgs[e]))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourceImgNotFound,"Unable to fetch resource <"+e+">");return Promise.resolve(this.resourceImgs[e])},e.prototype.getAssetPageLabel=function(e){if(null==this.resourcePageLabels[e]&&(this.readPageLabelFromServer(this.userLocale.currentLocale),null==this.resourcePageLabels[e]))throw new ResourceManagerError(ResourceManagerErrorTypes.ResourcePageLabelNotFound,"Unable to fetch resource <"+e+">");return Promise.resolve(this.resourcePageLabels[e])},e.prototype.readStringsFromServer=function(e){this.resourceStrings.siteversion=this.readVersionFromServer().replace("@@@",config_util_1.SiteConfig.clientVersion),this.resourceStrings["label.subscribebtnlabel"]="Subscribe",this.resourceStrings["label.togglemessage"]="Toggle Navigation",this.resourceStrings["label.copyright"]="Copyright",this.resourceStrings["label.pageviews"]="Pageviews",this.resourceStrings["label.visitors"]="Visitors",this.resourceStrings["label.myviews"]="My Views",this.resourceStrings["label.totalPageViewsLabel"]="Total Page Views"},e.prototype.readImgFromServer=function(e){this.resourceImgs["img.avatar"]=new img_pageobject_1.Img(30,30,"Hugo Belin","https://bit.ly/hugobelinpic")},e.prototype.readPageLabelFromServer=function(e){this.resourcePageLabels["pagelabel.home"]=new page_label_util_1.PageLabel("","Home"),this.resourcePageLabels["pagelabel.homepage"]=new page_label_util_1.PageLabel("","Hugo Belin"),this.resourcePageLabels["pagelabel.about"]=new page_label_util_1.PageLabel("about","About"),this.resourcePageLabels["pagelabel.blog"]=new page_label_util_1.PageLabel("blog","Blog"),this.resourcePageLabels["pagelabel.projects"]=new page_label_util_1.PageLabel("projects","Projects"),this.resourcePageLabels["pagelabel.movies"]=new page_label_util_1.PageLabel("movies","Movies"),this.resourcePageLabels["pagelabel.cars"]=new page_label_util_1.PageLabel("cars","Cars"),this.resourcePageLabels["pagelabel.videogames"]=new page_label_util_1.PageLabel("videogames","Videogames"),this.resourcePageLabels["pagelabel.fitness"]=new page_label_util_1.PageLabel("fitness","Fitness"),this.resourcePageLabels["pagelabel.credits"]=new page_label_util_1.PageLabel("credits","Credits"),this.resourcePageLabels["svgIcon.email"]=new page_label_util_1.PageLabel("mailto:info@hugobelin.com","email"),this.resourcePageLabels["svgIcon.facebook"]=new page_label_util_1.PageLabel("https://www.facebook.com/hobelinm","facebook"),this.resourcePageLabels["svgIcon.github"]=new page_label_util_1.PageLabel("https://github.com/hobelinm","github"),this.resourcePageLabels["svgIcon.linkedin"]=new page_label_util_1.PageLabel("https://www.linkedin.com/in/hugobelin","linkedin"),this.resourcePageLabels["svgIcon.twitter"]=new page_label_util_1.PageLabel("https://www.twitter.com/hugobelinm","twitter"),this.resourcePageLabels["svgIcon.stackoverflow"]=new page_label_util_1.PageLabel("http://stackoverflow.com/users/747572/hobelinm","stackoverflow")},e.prototype.readVersionFromServer=function(){return"0.1.@@@.1"},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],e)}();exports.ResourceMan=ResourceMan,function(e){e[e.ResourceStringNotFound=0]="ResourceStringNotFound",e[e.ResourceImgNotFound=1]="ResourceImgNotFound",e[e.ResourcePageLabelNotFound=2]="ResourcePageLabelNotFound"}(exports.ResourceManagerErrorTypes||(exports.ResourceManagerErrorTypes={}));var ResourceManagerErrorTypes=exports.ResourceManagerErrorTypes,ResourceManagerError=function(e){function r(r,o){var t=ResourceManagerErrorTypes[r]+": "+o;console.error(t),e.call(this,t)}return __extends(r,e),r}(Error);exports.ResourceManagerError=ResourceManagerError;
