import { Component } from '@angular/core';
import { Buffer } from 'buffer';

import { EncryptService } from './encrypt.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variable: any;
  encryptedData: any = "";
  decryptedData: any ="";
  constructor(private enc: EncryptService) {

  }

  // text: string = 'hello & welcome to marketwicks developers association';
  result: string = '';


  encryption() {
    let text = {
      name: "ankit",
      pass: "yendra",
      login: "vikas"
    }

    this.variable = JSON.stringify(text)
    let obj = {
      key: "Password",
      variable: this.variable
    }
    this.encryptedData = this.enc.encrypt(obj)
  }

  decryption() {
    // let text = {
    //   name: "ankit",
    //   pass: "yendra",
    //   login: "vikas"
    // }

    // this.variable = JSON.stringify(text)
    let obj = {
      key: "Password",
      decKey:  this.encryptedData
    }
    this.decryptedData = this.enc.decrypt(obj)
  }
}
