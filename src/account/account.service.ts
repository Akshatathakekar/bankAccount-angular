import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';


@Injectable()
export class AccountService{

    baseUrl="http://localhost:8080/";
    constructor(private http:HttpClient){}
    createNewAccount(account:Account):Observable<Account>{

        return this.http.post<Account>(this.baseUrl+"account",account);
    }

    findById(id:number):Observable<Account>{

        return this.http.get<Account>(this.baseUrl+"account/"+id);
    }

}