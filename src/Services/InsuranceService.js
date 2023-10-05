import axios from 'axios';
import React from 'react';

export class InsuranceService {
    static baseUrl="http://localhost:2210/Users";
    static base="http://localhost:2210/UserDependents";
    static depUrl="http://localhost:2210/Dependents";
    static vehicleUrl="http://localhost:2210/Vehicles";


    static getAllUsers(){
        return axios.get(this.baseUrl);
    }

    static getUserId(id)
    {
        const getUrl=`${this.base}/${id}`;
        return axios.get(getUrl);
    }

    static getAllDependents(){
        return axios.get(this.depUrl);
    }

    static addVehicle(vehicle){
        // debugger;
        alert(vehicle.RegistrationNumber);
        alert(vehicle.UserId);
        alert(vehicle.Model);
        alert(vehicle.Type);
        alert(vehicle.Year);
        return axios.post(this.vehicleUrl,vehicle);
    }

    static updateUsers(id,flag){
        const putUrl=`${this.baseUrl}/${id}/${flag}`
        return axios.put(putUrl);
    }

    static getUser(id){
        const getUrl=`${this.baseUrl}/${id}`
        return axios.get(getUrl);
    }

    static addUser(user){
        return axios.post(this.baseUrl,user);
    }

    static addDependent(dependent){
        return axios.post(this.depUrl,dependent);
    }

    static deleteUser(id){
        alert(id);
        const getUrl=`${this.depUrl}/${id}`
        return axios.delete(getUrl)
    }
}