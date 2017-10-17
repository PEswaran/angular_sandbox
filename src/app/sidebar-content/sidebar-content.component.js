"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SidebarContentComponent = (function () {
    function SidebarContentComponent() {
        this.fullImagePath = './swet_new.png';
    }
    SidebarContentComponent.prototype.ngOnInit = function () {
    };
    SidebarContentComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar-content',
            templateUrl: './sidebar-content.component.html',
            styleUrls: ['./sidebar-content.component.scss']
        })
    ], SidebarContentComponent);
    return SidebarContentComponent;
}());
exports.SidebarContentComponent = SidebarContentComponent;
