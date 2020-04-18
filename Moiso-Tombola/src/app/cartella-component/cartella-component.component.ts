import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartella-component',
  templateUrl: './cartella-component.component.html',
  styleUrls: ['./cartella-component.component.css']
})
export class CartellaComponentComponent implements OnInit {
  @Input() numeriEstratti : string[];
  @Input() ultimoNumero : string;

  constructor() { }

  ngOnInit(): void {
  }

}
