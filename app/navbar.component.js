"use strict";var __decorate=this&&this.__decorate||function(e,t,a,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(s<3?n(o):s>3?n(t,a,o):n(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),img_pageobject_1=require("./models/img.pageobject"),page_label_model_1=require("./models/page-label.model"),pagecontrol_util_1=require("./pagecontrol.util"),resourceman_service_1=require("./resourceman.service"),AppNavbar=function(){function e(e){this.resourceMan=e,this.baseUrl="https://hobelinm.github.io"}return e.prototype.ngOnInit=function(){var e="Loading",t=new page_label_model_1.PageLabel("",""),a=new img_pageobject_1.Img(0,0,"","");this.subscribeBtnLabel=e,this.toggleMessage=e,this.avatarImg=a,this.pageTitle=t,this.homePage=t,this.aboutPage=t,this.blogPage=t,this.pageSections=new Array,this.pageControl=new pagecontrol_util_1.PageControl,this.creditsPage=t,this.initializeLabels()},e.prototype.initializeLabels=function(){var e=this;this.resourceMan.getResource("label","navbar.subscribebtnlabel").then(function(t){return e.subscribeBtnLabel=t}),this.resourceMan.getAssetLabel("label.togglemessage").then(function(t){return e.toggleMessage=t}),this.resourceMan.getAssetImg("img.avatar").then(function(t){return e.avatarImg=t}),this.resourceMan.getAssetPageLabel("pagelabel.homepage").then(function(t){return e.pageTitle=t}),this.resourceMan.getAssetPageLabel("pagelabel.home").then(function(t){return e.homePage=t}),this.resourceMan.getAssetPageLabel("pagelabel.about").then(function(t){return e.aboutPage=t}),this.resourceMan.getAssetPageLabel("pagelabel.blog").then(function(t){return e.blogPage=t});for(var t=["pagelabel.projects","pagelabel.movies","pagelabel.cars","pagelabel.videogames","pagelabel.fitness"],a=0,r=t;a<r.length;a++){var n=r[a];this.resourceMan.getAssetPageLabel(n).then(function(t){return e.pageSections.push(t)})}this.resourceMan.getAssetPageLabel("pagelabel.credits").then(function(t){return e.creditsPage=t})},e=__decorate([core_1.Component({selector:"app-navbar",templateUrl:"html/header.html",providers:[resourceman_service_1.ResourceMan]}),__metadata("design:paramtypes",[resourceman_service_1.ResourceMan])],e)}();exports.AppNavbar=AppNavbar;
