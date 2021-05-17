import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";
import { OnInit } from '@angular/core';
import { Photo } from '../photo/photo';

@Component({
    templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {

  photo: Photo;

  constructor(private route: ActivatedRoute, private photoService: PhotoService){}

  ngOnInit(): void {
    const id = this.route.snapshot.params.photoId;
    this.photoService.findById(id)
    .subscribe(photo => this.photo = photo)
  }

 }
