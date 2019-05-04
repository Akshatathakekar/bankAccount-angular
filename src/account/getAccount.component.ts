import { AccountService } from './account.service';
import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from './account';

@Component({
    templateUrl:"./getAccount.component.html"
})
export class GetAccountComponent implements OnInit {

    constructor(private accountService: AccountService,
        private route: ActivatedRoute) { }

        account:Account;
    ngOnInit(): void {
        // alert("hi");
        this.route.paramMap.subscribe((map) => {
            let Id = Number(map.get("id"));
            //console.log(bookId);

            //    let id=Number(bookId);
            this.accountService.findById(Id).subscribe((data) => {
                this.account= data;
                console.log(data);

            });

        })
    }
      
    
}