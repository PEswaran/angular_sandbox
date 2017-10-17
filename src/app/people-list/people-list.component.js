"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PeopleListComponent = (function () {
    function PeopleListComponent(peopleService) {
        this.people = [];
        this.peopleService = peopleService;
        this.people = peopleService.getAll();
    }
    PeopleListComponent.prototype.showSelected = function (item) {
        this.selected = item;
    };
    PeopleListComponent.prototype.ngOnInit = function () {
    };
    PeopleListComponent = __decorate([
        core_1.Component({
            selector: 'app-people-list',
            template: "<ul>\n<li *ngFor=\"let person of people\">\n<p (click)=\"showSelected(person)\">{{person.name}}</p>\n</li>\n</ul>\n  ",
            styleUrls: ['./people-list.component.scss']
        })
    ], PeopleListComponent);
    return PeopleListComponent;
}());
exports.PeopleListComponent = PeopleListComponent;
