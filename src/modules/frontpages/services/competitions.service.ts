import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { competitions } from '../../../models/competitions.model';

@Injectable({
    providedIn: 'root',
})
export class CompetitionsService {
    /*private act: competitions [];
    link = 'http://localhost:3000/api/competitions';
    constructor(
        private http: HttpClient
    ) {
        this.act = [
        new competitions(1, 'souhir', ''),
        ];
    }
    get competition(): Observable<competitions[]> {
       return this.http.get<competitions []>(this.link);
    }
    getFakecompetition() {
        return this.competitionss;
    }
    getcompetitionById(id: number): Observable<competitions> {
        return this.http.get<competitions>( this.link + `/${id}`);
    }
    addcompetition(actu: competitions): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletecompetition(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatecompetition(actu: competitions) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

