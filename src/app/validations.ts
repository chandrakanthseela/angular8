import { FormControl } from '@angular/forms';

export class Validations{
    static alphabetsOnly(name: FormControl){
       const regex= /^[a-zA-Z]+$/;
       if (regex.test(name.value)){
           return null;
       } else {
           return {
               alphaOnly: true
           }
       }
    }
    static email(email: FormControl){
        const regex = /^[a-zA-Z0-9_.]+@+[A-Za-z0-9]+.[a-z]+$/;
        if (regex.test(email.value)) {
            return null;
        } else {
            return {
                invalidEmail: true
            }
        }
    }
}