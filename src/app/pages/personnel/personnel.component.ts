import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { chucvu } from 'src/app/common/chucvu';
import { nhansu } from 'src/app/common/nhansu';
import { NhansuService } from 'src/app/services/nhansu/nhansu.service';
declare var $: any;
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  nhansus:nhansu;
  vaitro:any;
  vatro = [
    {
      id:1,
      idnhansu:1,
      idphongban:1,
      chucvu:'Giám Đốc'
    },
    {
      id:2,
      idnhansu:2,
      idphongban:2,
      chucvu:'Nhân Viên'
    },{
      id:3,
      idnhansu:3,
      idphongban:3,
      chucvu:'Quản Lý'
    },{
      id:4,
      idnhansu:4,
      idphongban:4,
      chucvu:'Trưởng Phòng'
    }
  ]
    
  
  constructor(private nsv:NhansuService) { 
  }
  getAll(){
    this.nsv.getList().subscribe( res =>{
      this.nhansus = res;
    })
    
  }



 idx:number=0;

 delete(id:number){
  this.idx=id;
 }
 onDelete (){
  this.nsv.deleteById(this.idx).subscribe(res =>{
    this.getAll();
    alert("Xóa thành công !")
    });
}
  ngOnInit() {
    this.getAll();
  }


}
