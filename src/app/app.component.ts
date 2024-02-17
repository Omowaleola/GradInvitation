import {Component, OnInit} from '@angular/core';
import {UiService} from "./services/ui.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  isLoading: boolean;
  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.getIsLoading().subscribe((loading)=>{
      this.isLoading = loading;
    })
  }

}
