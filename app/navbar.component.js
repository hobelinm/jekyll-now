"use strict";var __decorate=this&&this.__decorate||function(e,t,a,i){var l,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(s<3?l(r):s>3?l(t,a,r):l(t,a))||r);return s>3&&r&&Object.defineProperty(t,a,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),img_pageobject_1=require("./img.pageobject"),page_label_util_1=require("./page-label.util"),pagecontrol_util_1=require("./pagecontrol.util"),resourceman_service_1=require("./resourceman.service"),AppNavbar=function(){function e(e){this.resourceMan=e,this.toggleMessage="Loading",this.baseUrl="https://hobelinm.github.io",this.avatarUrl="Loading",this.siteName="Loading"}return e.prototype.ngOnInit=function(){this.initializeLabels()},e.prototype.initializeLabels=function(){var e=this;this.resourceMan.getAssetLabel("label.sitename").then(function(t){e.siteName=t,console.log("[Navbar] Applying resolved value: "+t)}),this.toggleMessage="Toggle Navigation",this.avatarUrl="https://bit.ly/hugobelinpic",this.avatarImg=new img_pageobject_1.Img(30,30,this.siteName,this.avatarUrl),this.pageTitle=new page_label_util_1.PageLabel("",this.siteName),this.homePage=new page_label_util_1.PageLabel("","Home"),this.aboutPage=new page_label_util_1.PageLabel("about","About"),this.blogPage=new page_label_util_1.PageLabel("blog","Blog"),this.pageSections=new Array,this.pageSections.push(new page_label_util_1.PageLabel("projects","Projects")),this.pageSections.push(new page_label_util_1.PageLabel("movies","Movies")),this.pageSections.push(new page_label_util_1.PageLabel("cars","Cars")),this.pageSections.push(new page_label_util_1.PageLabel("videogames","Videogames")),this.pageSections.push(new page_label_util_1.PageLabel("fitness","Fitness")),this.creditsPage=new page_label_util_1.PageLabel("credits","Credits"),this.pageControl=new pagecontrol_util_1.PageControl},e=__decorate([core_1.Component({selector:"app-navbar",templateUrl:"html/header.html",providers:[resourceman_service_1.ResourceMan]}),__metadata("design:paramtypes",[resourceman_service_1.ResourceMan])],e)}();exports.AppNavbar=AppNavbar;
