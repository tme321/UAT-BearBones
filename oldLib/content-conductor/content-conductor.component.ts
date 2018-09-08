import { Component, OnInit, ContentChildren, QueryList, ViewContainerRef, TemplateRef, ViewChildren } from '@angular/core';
import { BBContentDirective } from './content/content.directive';
import { BBContentConductorService } from './content-conductor.service';
import { BBContentContainerDirective } from './content-container/content-container.directive';
import { BBContentConductor } from './content-conductor.model';
import { BBContentContainer } from './content-container/content-container.model';

/**
 * Used just for tesitng the content conductor functionality.
 */
@Component({
  selector: '[bb-content-conductor]',
  templateUrl: './content-conductor.component.html',
  styleUrls: ['./content-conductor.component.css']
})
export class BBContentConductorComponent implements OnInit {
  @ContentChildren(BBContentDirective,{ read: TemplateRef, descendants: true }) 
  contents: QueryList<TemplateRef<any>>;

  @ViewChildren(BBContentContainerDirective) // BBContentContainerDirective) 
  containers: QueryList<BBContentContainerDirective>;

  cont: 'one' | 'two' = 'one';

  conductor: BBContentConductor<BBContentContainer>;

  constructor(
    private ccService: BBContentConductorService,
    private vcRef: ViewContainerRef) { }

  ngOnInit() {
  }

  onToggle() {
    const oldCont = this.cont;
    if(this.cont === 'one') { 
      this.cont = 'two'; 
    } 
    else if(this.cont === 'two') { 
      this.cont = 'one'; 
    }
    this.conductor.moveViews(oldCont,this.cont);
  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    this.conductor = this.ccService
      .createContentConductor(this.containers, this.contents);

    this.conductor.init(this.cont);
  }

  ngAfterViewChecked() {
  }
}
