import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { Account } from './account';

@Component({
    templateUrl:"./create-account.component.html"
})
export class CreateAccountComponent implements OnInit{

    account:Account
    constructor(private accountService:AccountService,private router:Router)
    {

    }
    ngOnInit()
    {
        this.account=new Account();
        
    }

    createNewAccount():void{

        console.log(this.account);
        this.accountService.createNewAccount(this.account).subscribe((data)=>{
            console.log("success");
            if(data!=null)
            {
                alert("successfull registration");
                // this.router.navigate[]
            }
        })
    }

}