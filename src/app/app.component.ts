import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from "./services/ui.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  @ViewChild('music') music : ElementRef;

  isLoading: boolean;
  isPlaying: boolean = true;
  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.music.nativeElement.play().then(()=>{
      this.uiService.getIsLoading().subscribe((loading)=>{
        this.isLoading = loading;
      });
    });

  }

  playMusic()
  {
    this.music.nativeElement.play().then(()=>{
      this.isPlaying = true;
    });
  }
  stopMusic()
  {
    this.isPlaying = false;
    this.music.nativeElement.pause();
    this.music.nativeElement.currentTime =0;
  }

}
