import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrol = inject(LoadingController)
  toastCtrol = inject(ToastController)

  loading(){
    return this.loadingCtrol.create({spinner: "crescent"})
  }

  async presentToast(options:ToastOptions) {
    const toast = await this.toastCtrol.create(options);
    toast.present();
  }
}
