import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HouseService} from "../../service/house/house.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit, OnDestroy {

  house: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private houseService: HouseService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.houseService.get(id).subscribe((house: any) => {
          if (house) {
            this.house = house;
            this.house.href = house._links.self.href;
          } else {
            console.log(`house with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/house']);
  }

  save(form: NgForm) {
    this.houseService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.houseService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
