import { 
    Component, 
    OnInit, 
    Input, 
    Output,
    EventEmitter,
    ViewChild, 
    ElementRef } from '@angular/core';
import { Observable ,  fromEvent } from 'rxjs';
import { map ,  debounceTime ,  distinctUntilChanged } from 'rxjs/operators';
import { BBMultiSelectItem } from './multi-select-item.interface';

@Component({
    selector: 'div[bb-multi-select]',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.css'],
})
export class BBMultiSelectComponent implements OnInit {
    @Input() placeholderText = "Search...";
    @Input() filterChangeDelayms = 200;

    @Input() selectionItems: BBMultiSelectItem[];

    get choices(): BBMultiSelectItem[] {
        return this.selectionItems.filter(item=>{ return !item.selected});
    }

    get selections(): BBMultiSelectItem[] {
        return this.selectionItems.filter(item=>{ return item.selected});
    }

    @ViewChild('filter') filterInput: ElementRef;

    @Output() itemSelected = new EventEmitter<BBMultiSelectItem>();
    @Output() itemUnselected = new EventEmitter<BBMultiSelectItem>();

    constructor() {
        console.log('Warning this component is still under heavy development.');
        console.log('It isn\'t completely functional yet and is subject to change.');
    }

    ngOnInit() { 
        fromEvent(this.filterInput.nativeElement, 'keyup')
        .pipe(
            map((event:KeyboardEvent)=>(event.target as HTMLInputElement).value),
            debounceTime(this.filterChangeDelayms),
            distinctUntilChanged())
        .subscribe(
            filterText=> this.filterItems(filterText)
        );

        // temp testing code
        if(!this.selectionItems) {
            this.selectionItems = [
                {
                    text: 'Name',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Position',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Year of Birth',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Rookie Season',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Height',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Weight',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Forty Time',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Bench Weight',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Vertical Jump',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Broad Jump',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Shuttle Time',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Cone Time',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Draft Position',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'College',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'College Division',
                    payload: {},
                    selected: false,
                },
                {
                    text: 'Current Team',
                    payload: {},
                    selected: false,
                }
            ];
        }

        this.selections.push(this.choices[1]);
    }

    onChoiceClicked(item: BBMultiSelectItem) {
        item.selected = true;
        this.itemSelected.emit(item);
    }

    onSelectionClicked(item: BBMultiSelectItem) {
        item.selected = false;
        this.itemUnselected.emit(item);
    }

    filterItems(text: string) {
        console.log(text);
    }
}


