import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.development'
import { Car } from './types/cars';
import { Topic } from './types/topics';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getCars() {
        const { apiUrl } = environment;
        return this.http.get<Car[]>(`${apiUrl}/cars`);
    }

    getCar(id: string) {
        const { apiUrl } = environment;
        return this.http.get<Car>(`${apiUrl}/cars/${id}`);
    }

    getTopics() {
        const { apiUrl } = environment;
        return this.http.get<Topic[]>(`${apiUrl}/topics`);
    }

    getTopic(id: string) {
        const { apiUrl } = environment;
        return this.http.get<Topic>(`${apiUrl}/topics/${id}`);
    }
}