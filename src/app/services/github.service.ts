import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '46e3775571c7fe507781';
    private client_secret = 'e73ea993e68b2c25d57d7886e1874c90b8249bbb';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'aammon';
    }

    getUser(){
        // tslint:disable-next-line:max-line-length
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
    getRepos(){
        // tslint:disable-next-line:max-line-length
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
    updateUser(username: string){
        this.username = username;
    }
}
