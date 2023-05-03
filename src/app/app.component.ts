import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    router: Router
  ) {
    router.events.subscribe(e => {
      if(e instanceof NavigationStart) {
        this.loading = true
        this.onActivate()
      }

      if(e instanceof NavigationEnd) {
        this.loading = false
      }
    })
  }

  title = 'front';
  loading: boolean = true

  onActivate() {
    window.scroll(0,0)
  }
}
