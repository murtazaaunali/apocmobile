/*
Contact Service Provider for extracting and storing Contacts from Salesforce against User

@imports
Injectables from angular/core
DataService from forcejs

@variables
Service type any;

@Funtions

prettifyContact
@desc prettify contact details in provided map.
@param  contact
@return contact object

findAll
@desc Find All function to find all the contact
@param
@return queried map results

findById
@desc Find All function to find all the contact
@param id -> contact ID
@return queried map results
*/

import { Injectable } from '@angular/core';
import {DataService} from 'forcejs';

@Injectable()
export class ContactServiceProvider {
  service: any;
  responseData:any;

  constructor() {
    this.service = DataService.getInstance();
  }

  prettifyContact(contact) {
    return {
      id: contact.Id,
      name: contact.Name,
      job_title: contact.Title,
      department: contact.Department,
      account_name: contact.AccountName,
      phone: contact.Phone,
      mobile: contact.MobilePhone,
      email: contact.Email
    }
  }

  findAllContacts() {
    return this.service.query('SELECT Id, Name, Title, Department, Account.Name, Phone, MobilePhone, Email  FROM Contact ORDER BY name')
      .then(response => {
        this.responseData= response.records.map(this.prettifyContact);
        return this.responseData;
      });
  }

  findById(id) {
    return this.service.retrieve('Contact', id, 'Id, Name, Title, Department, Phone, MobilePhone, Email').then(this.prettifyContact);
  }

  searchFilteredContacts(filters,contacts){
    return new Promise((resolve, reject) => {
    /*this.responseData=contacts.filter(function (el) {
      return (el.name.toLowerCase() == filters.firstName.toLowerCase() ||
        el.job_title.toLowerCase() == filters.jobTitle.toLowerCase() ||
        el.department.toLowerCase() == filters.department.toLowerCase() ||
        el.phone == filters.phone||
        el.mobile == filters.mobile ||
        el.email == filters.email ||
        el.account_name.toLowerCase() == filters.accountName.toLowerCase());
    });*/
      this.responseData=[];
     /* for (var property in filters) {
        if (filters.hasOwnProperty(property)) {
          this.responseData.push(contacts.filter(item => JSON.stringify(item).toLowerCase().indexOf(filters.hasOwnProperty(property).toLowerCase()) !== -1));
        }
      }*/


    /*  Object.keys(filters).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        this.responseData.push(contacts.filter(item => item.toLowerCase().indexOf(item[key].toLowerCase()) !== -1));
      });

      var filterKeys = Object.keys(filters);
      this.responseData=contacts.filter(function (eachObj){
        return filterKeys.every(function (eachKey) {
          if (!filters[eachKey].length) {
            return true;
          }
          return filters[eachKey].includes(eachObj[eachKey]);
        });
      });*/

    console.log(this.responseData);
      if(this.responseData.length>0){
        resolve(this.responseData);
      }
      else{
        console.log("No Contacts Found");
        reject();
      }
  });
  }
}
