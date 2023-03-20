import { Component } from '@angular/core';
import { Buffer } from 'buffer';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variable: any;
  constructor() {
 this.variable=JSON.stringify(this.text)
  }

  // text: string = 'hello & welcome to marketwicks developers association';
  result: string = '';
  text:any={
    name: "ankit",
    pass: "yendra",
    login: "vikas"
  }


  key: string = 'Password';
  iv: string = '1111111111111111';

  encrypt() {
    let key = CryptoJS.enc.Utf8.parse(this.key);
    let iv = CryptoJS.enc.Utf8.parse(this.iv);
    let encrypted = CryptoJS.DES.encrypt(this.variable, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    this.result = encrypted.toString();
    console.log(this.result);
  }

  decrypt() {
    
    let key = CryptoJS.enc.Utf8.parse(this.key);
    let iv = CryptoJS.enc.Utf8.parse(this.iv);
    let decrypted = CryptoJS.DES.decrypt("EAPbxrpKdQv42oaqUpNOuoib7fmvdaEFC9QEKL1s6IpoDeeLIrGt6gKOInkyY+DTpiDsCFY0SJ8=", key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    this.result = decrypted.toString(CryptoJS.enc.Utf8);
    console.log("decrypt",this.result);
  }
}
