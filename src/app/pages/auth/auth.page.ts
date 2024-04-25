import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/users.model';
import { FirebaeService } from 'src/app/services/firebae.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.minLength(5)])
  })

  firebaseSvc = inject(FirebaeService);
  utilsSvc = inject(UtilsService);

  async submit(){
    if(this.form.valid){
      const loading = await this.utilsSvc.loading()
      await loading.present();

      this.firebaseSvc.login(this.form.value as user).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err);

        this.utilsSvc.presentToast({
          message: err.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(()=>{
        loading.dismiss()
      })
    }

  }

  ngOnInit() {
  }

}
