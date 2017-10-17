"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var people_list_component_1 = require("./people-list/people-list.component");
var people_service_1 = require("./people.service");
var my_test_comp_component_1 = require("./my-test-comp/my-test-comp.component");
var sidebar_content_component_1 = require("./sidebar-content/sidebar-content.component");
var projects_content_component_1 = require("./projects-content/projects-content.component");
var contact_content_component_1 = require("./contact-content/contact-content.component");
var peeves_content_component_1 = require("./peeves-content/peeves-content.component");
var social_content_component_1 = require("./social-content/social-content.component");
var tech_news_content_component_1 = require("./tech-news-content/tech-news-content.component");
var news_service_1 = require("./news.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                people_list_component_1.PeopleListComponent,
                my_test_comp_component_1.MyTestCompComponent,
                sidebar_content_component_1.SidebarContentComponent,
                projects_content_component_1.ProjectsContentComponent,
                contact_content_component_1.ContactContentComponent,
                peeves_content_component_1.PeevesContentComponent,
                social_content_component_1.SocialContentComponent,
                tech_news_content_component_1.TechNewsContentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, http_1.HttpClientModule
            ],
            providers: [people_service_1.PeopleService, news_service_1.NewsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
