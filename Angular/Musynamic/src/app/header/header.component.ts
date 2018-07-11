import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../header';
import { RouterModule, Routes, Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Produit } from '../produit';
import { Http } from '../../../node_modules/@angular/http';
import { NgForm, FormControl } from '../../../node_modules/@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  head : Header = new Header("Connexion","Inscription","Boutique");
  produits: Array<Produit>;
  public produitUrl = '//localhost:8086';
  public PRODUIT_API = this.produitUrl + '/musynamic/products/search/';

constructor(private router: Router, private http : HttpClient) { 

  }



  public getProduits() {
    // return this.http.get('//localhost:8086/musynamic/products/search');
    this.http.get('//localhost:8086/musynamic/').subscribe(v => console.log(v));
    

  }
    

get(nomProduit: string){
  return this.http.get(this.produits + '/' + nomProduit);
}


  ngOnInit() {
    this.head
    
  }
  

   
  logout() {
    sessionStorage.removeItem('auth');
    console.log("logout");
  }
  IsAccueil() {
    return this.router.url === "/accueil";
  }

  authe() {
    return sessionStorage.getItem('auth');

  }


  let nameControl = new FormControl("Produit");
  let name = nameControl.value;

  nameControl.errors // -> StringMap<string, any> of errors
nameControl.dirty  // -> false
nameControl.valid  // -> true 



  // search(form:NgForm){
  //   //fetch("http://localhost:8086/musynamic/products/search/" +  form.)
  //     //.then(response => {console.log(response);}
  //     //)
  //     console.log(form);


    
  //   //return this.http.get('//localhost:8086/musynamic/products/search/' + nom);
  // }




  // // search(){
  // //   return this.router.url==="/products/search"
  // // }
}