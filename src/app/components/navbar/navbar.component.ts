import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import {
  Location,
} from "@angular/common";
import { Router } from "@angular/router";
import { NhansuService } from "src/app/services/nhansu/nhansu.service";
import { nhansu } from "src/app/common/nhansu";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public focus: any;
  public listTitles: any[];
  public location: Location;
  nhanvien:any;


  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private nsv:NhansuService
  ) {
    this.location = location;
  }
  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    this.getnhansu(17);
  }


  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }


  getnhansu(id:any){
    this.nsv.getById(id).subscribe( res =>{
     this.nhanvien=res;
    })
  }

}
