import { Component, OnInit} from '@angular/core';
import { FeedService } from '../../feed.service';

export interface dogs{
  entry;
  ref;
}

@Component({
  selector: 'app-dogs-comp',
  templateUrl: './dogs-comp.component.html',
  styleUrls: ['./dogs-comp.component.css']
})

export class DogsCompComponent implements OnInit {

  list=[];
  show=true;
  show2=false;
  setTitle='';
  
  
  constructor( public feed : FeedService) {
    
   }
  enterList(el){
    this.list.push(el);
  }

  ngOnInit(key='') {
    this.feed.getDogFeed(key).subscribe((post) => {
      this.list=[];
      //console.log(post);
    
      for (let [key, value] of Object.entries(post.message)) {
        let build = {}as dogs;

        if(value != ''){
          let valMap = new Map(Object.entries(value));

          valMap.forEach(el=>{
            let inner ={} as dogs;

            inner.entry = `${el} ${key}`;
            inner.ref= `${key}-${el}`;

            this.enterList(inner)
          })
        }

        else{
          build.entry =`${key}`;
          build.ref=key;

          this.enterList(build)
        }
      }

    });
  
  }

  images=[];
  clickPull(key='',title=''){
    this.setTitle=title.toUpperCase();
    this.feed.getDogFeed(key).subscribe((post)=>{
  
      post.message.forEach(element => {
        this.images.push(element);
      });

    })
    this.show=false;
    this.show2=true;
   
  }
  reload(){
    location.reload();
  }

}
