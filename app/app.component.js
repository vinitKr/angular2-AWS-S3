"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('aws-sdk/dist/aws-sdk');
var appComponent = (function () {
    function appComponent() {
    }
    appComponent.prototype.ngOnInit = function () {
        AWS.config.region = 'eu-west-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'eu-west-1:d41172c5-0bb3-461e-9b6a-5bc9b445f970',
        });
        AWS.config.credentials.get(function (err) {
            if (err)
                console.log(err);
        });
    };
    appComponent.prototype.fileEvent = function (fileInput) {
        var file = fileInput.target.files[0];
        var bucket = new AWS.S3({ params: { Bucket: 'od-userdetail' } });
        var params = { Key: file.name, Body: file };
        bucket.upload(params, function (err, data) {
            console.log(err, data);
        });
    };
    appComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <h1>hello</h1>\n        <input type=\"file\" (change)=\"fileEvent($event)\" />\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], appComponent);
    return appComponent;
}());
exports.appComponent = appComponent;
//# sourceMappingURL=app.component.js.map