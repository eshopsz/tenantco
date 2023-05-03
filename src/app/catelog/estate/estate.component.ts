import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { PaymentService } from 'src/app/services/payment.service';
import { tns } from '../../../assets/vendor/tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html'
})
export class EstateComponent implements OnInit {

  estates: any = []
  estate: any = []
  paid: boolean = false
  account: any = []

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private paymentService: PaymentService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.accountService.getAccount().subscribe(res=>{this.account=res, this.payCheck()})
    }
    this.route.data.subscribe(data => {
      this.estate = data['estate']
      this.estates = data['estates']
    })


  }

  payCheck() {
    var es = this.account.paid_estates
    if (es.includes(this.estate.id)) {
      this.paid=true
    }

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    tns({
      container: '.tns-slider',
      items: 1,
      controls: true,
      autoplay: true,
      autoplayButtonOutput: false,
      navAsThumbnails: true,
      navContainer: '#thumbnails',
      gutter: 12,
      prevButton: '.prev-btn',
      nextButton: '.next-btn',
      responsive: {
        0: {
          controls: false
        },
        500: {
          controls: true
        }
      }
    });

    tns({
      container: '.recents',
      items: 4,
      controls: false,
      autoplay: true,
      autoplayButtonOutput: false,
      navPosition: 'bottom',
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });
  }

}
