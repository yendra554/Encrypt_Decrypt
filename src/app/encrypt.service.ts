import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  iv: string = '11111111';

  constructor() { }

  
  encrypt(obj:any) {
    let key = CryptoJS.enc.Utf8.parse(obj.key);
    let iv = CryptoJS.enc.Utf8.parse(this.iv);
    let encrypted = CryptoJS.DES.encrypt(obj.variable, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
   return encrypted.toString();
  }

  decrypt(obj:any) {
    
    let key = CryptoJS.enc.Utf8.parse(obj.key);
    let iv = CryptoJS.enc.Utf8.parse(this.iv);
    let decrypted = CryptoJS.DES.decrypt(obj.decKey, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
