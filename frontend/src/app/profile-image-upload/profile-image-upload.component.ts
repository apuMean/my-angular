import { Component, ElementRef, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-profile-image-upload',
  templateUrl: './profile-image-upload.component.html',
  styleUrls: ['./profile-image-upload.component.css']
})
export class ProfileImageUploadComponent implements OnInit {
  authToken = localStorage.getItem('email');
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo', authToken: this.authToken });
  constructor(private http: Http, private el: ElementRef) {

  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    };

  }

}





