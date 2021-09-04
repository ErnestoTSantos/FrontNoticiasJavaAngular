import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
