import { Component } from '@angular/core';

declare var Razorpay: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Payment';
  payNow(){
    const RazorpayOptions ={
      description : 'Razorpay Demo',
      currency : 'INR',
      amount : 200,
      name : 'Raji',
      key : 'rzp_test_VKpWVdGw6TLTwm',
      prefill :{
        name : '',
        email : 'Raji1434@gmail.com',
        phone : '9989611846'
      },
      theme:{
        color:'#13FCDC'
      },
      modal :{
        ondismiss: () =>{
          console.log ('dismissed')
        }
      }
    }
    const sucessCallback =(paymentid: any )=>{
      console.log (paymentid);
    }
    const errorCallback =(error : any)=>{
      console.log (error);
    }
    Razorpay.open(RazorpayOptions,sucessCallback,errorCallback)
  }
}
