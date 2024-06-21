import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private swal: SwalService
  ) { }

  errorHandler(err: HttpErrorResponse){
    console.log(err);
    let message = "Hata oldu!";
    if(err.status === 0){
      message = "API tarafı kapalı! Sunucu kapalı!";
    }else if(err.status === 401){
      message = "Erişmek istediğiniz adrese yetkiniz bulunmamaktadır!"
    }
    else if(err.status === 404){
      message = "API adresi bulunamadı!";
    }else if(err.status === 500){
      message = "";
      for(const e of err.error.errorMessages){
        message += e + "\n";
      }
    }

    this.swal.callToast(message,"error");
  }
}