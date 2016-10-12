import { Component, OnInit } from '@angular/core';
require('aws-sdk/dist/aws-sdk');
declare var AWS: any;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>hello</h1>
        <input type="file" (change)="fileEvent($event)" />
    `
})
export class appComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        AWS.config.region = 'eu-west-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'eu-west-1:identity-pool-id',
        });
        AWS.config.credentials.get(function(err) {
            if (err) console.log(err);
        });
    }

    fileEvent(fileInput: any){


        var file = fileInput.target.files[0];


        var bucket = new AWS.S3({params: {Bucket: 'mybucket'}});

        var params = {Key: file.name, Body: file};

        bucket.upload(params, function (err, data) {

            console.log(err, data);

        });
    }
}