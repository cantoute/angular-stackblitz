import { Component, OnInit } from '@angular/core';
import { Innertag } from '../innertag';
import { InnertagService } from '../innertag.service';

@Component({
  selector: 'inner-tag',
  templateUrl: './innertag.component.html',
  styleUrls: ['./innertag.component.css']
})

export class InnertagComponent implements OnInit {
  name = '';
  uri = '';
  title = '';
  status = '';
  items : Innertag[];

/*constructor(){
  this.items = [
    {name : 'name1', uri : 'uri1', title : 'title1', status : 'status1'}, 
    {name : 'name2', uri : 'uri2', title : 'title2', status : 'status2'}
  ];
}*/

  constructor(private innertagService: InnertagService) { }

  ngOnInit() {
     this.refreshList();
  }

  private refreshList(){
       this.innertagService.display().
         subscribe(items => { console.log('iteration1'); console.log(items)} );
  }


}
