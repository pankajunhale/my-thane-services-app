import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // (window as any).Scrollbar.init(
    //   document.querySelector('#sidenav-scrollbar'),
    //   { damping: '0.5' }
    // );
  }
  title = 'my-thane-services';
}
