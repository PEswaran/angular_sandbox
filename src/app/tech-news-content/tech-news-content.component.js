"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TechNewsContentComponent = (function () {
    function TechNewsContentComponent(http) {
        this.http = http;
    }
    TechNewsContentComponent.prototype.searchMe = function () {
        var _this = this;
        this.http.get('https://api.github.com/users/peswaran').subscribe();
        return request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            // todo: log?
            if (error.status == 500) {
                _this.alertService.showError(error.statusText);
            }
            else if (error.status == 588) {
                _this.alertService.showAlert(error.statusText);
            }
            return Observable.throw(error.statusText);
        });
    };
    TechNewsContentComponent = __decorate([
        core_1.Component({
            selector: 'app-tech-news-content',
            templateUrl: './tech-news-content.component.html',
            styleUrls: ['./tech-news-content.component.scss']
        })
    ], TechNewsContentComponent);
    return TechNewsContentComponent;
}());
exports.TechNewsContentComponent = TechNewsContentComponent;
