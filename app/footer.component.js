"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(n<3?a(i):n>3?a(t,r,i):a(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),pagecontrol_util_1=require("./pagecontrol.util"),resourceman_service_1=require("./resourceman.service"),AppFooter=function(){function e(e){this.resourceMan=e,this.toggleNavigationLabel="Loading",this.copyrightLabel="Loading",this.pageviewsLabel="Loading",this.visitorsLabel="Loading",this.myviewsLabel="Loading",this.totalPageViewsLabel="Loading",this.pageVersion="Loading",this.yearLabel="Loading"}return e.prototype.ngOnInit=function(){this.pageControl=new pagecontrol_util_1.PageControl,this.svgIcons=new Array,this.initializeLabels()},e.prototype.initializeLabels=function(){var e=this;this.resourceMan.getResource("label","togglemessage").then(function(t){return e.toggleNavigationLabel=t}),this.resourceMan.getAssetLabel("label.copyright").then(function(t){return e.copyrightLabel=t}),this.resourceMan.getAssetLabel("label.pageviews").then(function(t){return e.pageviewsLabel=t}),this.resourceMan.getAssetLabel("label.visitors").then(function(t){return e.visitorsLabel=t}),this.resourceMan.getAssetLabel("label.myviews").then(function(t){return e.myviewsLabel=t}),this.resourceMan.getAssetLabel("label.totalPageViewsLabel").then(function(t){return e.totalPageViewsLabel=t}),this.resourceMan.getAssetLabel("siteversion").then(function(t){return e.pageVersion=t}),this.yearLabel=(new Date).getFullYear().toString();for(var t=["svgIcon.email","svgIcon.facebook","svgIcon.github","svgIcon.linkedin","svgIcon.twitter","svgIcon.stackoverflow"],r=0,o=t;r<o.length;r++){var a=o[r];this.resourceMan.getAssetPageLabel(a).then(function(t){return e.svgIcons.push(t)})}},e=__decorate([core_1.Component({selector:"app-footer",templateUrl:"html/footer.html",providers:[resourceman_service_1.ResourceMan]}),__metadata("design:paramtypes",[resourceman_service_1.ResourceMan])],e)}();exports.AppFooter=AppFooter;
