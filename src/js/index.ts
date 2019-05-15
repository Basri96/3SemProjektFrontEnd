import axios, { AxiosResponse, AxiosError } from "../../node_modules/axios/index"
import {recipe} from "./recipe"
import {weight} from "./weight"


let divElement : HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let idagBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("idagBtn");
let ugeBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ugeBtn");
let årBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("årBtn");
let månedsGennemsnitBtn = <HTMLButtonElement>document.getElementById("månedsGennemsnitBtn");
let Månedvalg = <HTMLButtonElement>document.getElementById("Månedvalg");

/** let Månedvalg = <>document.getElementById("Månedvalg") */

idagBtn.addEventListener('click', plotIdag);
ugeBtn.addEventListener('click', plotUge)
årBtn.addEventListener('click', plotÅr)
månedsGennemsnitBtn.addEventListener('click', månedsGennemsnit);

/*
let basket: number[] = [2,2,2,2];
let sum1 = basket.reduce((a, b) => a + b, 0);
console.log(sum1/basket.length);
*/

/*
function MånedMuligehder(){
    if(Månedvalg.value == "Måned"){

    }
    if(Månedvalg.value == "Gennemsnit"){

    }
    else if(Månedvalg.value == "Madsplid"){
        
    }
} */

function plotIdag():void{

    axios.get<weight[]>("https://restsmarttrashservice.azurewebsites.net/api/weight/1")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);

        let result: string = "<ul>"
        
        response.data.forEach((weight: weight) => {
            result += "<li>"+"Dato:"+" "+weight.weightMeasure+" "+"Gram:"+" "+weight.dato+" </li>"    
        });
        result +="</ul>"

        divElement.innerHTML = result;
    })
    .catch(
        function(error: AxiosError ): void{
            console.log("errrrrrror in my code")
            console.log(error);
        }
        
    )   
    console.log("er i slutning af getAllCustomers function");
}

function plotUge():void{

    axios.get<weight[]>("https://restsmarttrashservice.azurewebsites.net/api/weight/2")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);

        let result: string = "<ul>"
        
        response.data.forEach((weight: weight) => {
            result += "<li> "+weight.weightMeasure+" "+weight.dato+" "+weight.id+"</li>"    
        });
        result +="</ul>"

        divElement.innerHTML = result;
    })
    .catch(
        function(error: AxiosError ): void{
            console.log("errrrrrror in my code")
            console.log(error);
        }
        
    )   
    console.log("er i slutning af getAllCustomers function");
}

function månedsGennemsnit():void{

    axios.get<weight[]>("https://restsmarttrashservice.azurewebsites.net/api/weight/3")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);
        console.log("r i then");
        let result: number[] = new Array;

        response.data.forEach((weight: weight) => {
            let gram = Number(weight.dato);
            result.push(gram) 
        });
        /*gå igennem result listen og lægger tallene sammen */
       let sum = result.reduce((a, b) => a + b, 0)
       
       let myÅrMåned = (response.data[0].weightMeasure).substring(0,7);
        
        divElement.innerHTML = "Måned: "+myÅrMåned+" "+"Gennemsnits Madspild: "+String(sum/result.length);
    })
    .catch(
        function(error: AxiosError ): void{
            console.log("errrrrrror in my code")
            console.log(error);
        }
        
    )   
    console.log("er i slutning af getAllCustomers function");
}

function plotÅr():void{

    axios.get<weight[]>("https://restsmarttrashservice.azurewebsites.net/api/weight/4")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);

        let result: string = "<ul>"
        
        response.data.forEach((weight: weight) => {
            result += "<li>"+"Dato:"+" "+weight.weightMeasure+" "+"Weight: "+""+weight.dato+""+"</li>"    
        });
        result +="</ul>"

        divElement.innerHTML = result;
    })
    .catch(
        function(error: AxiosError ): void{
            console.log("errrrrrror in my code")
            console.log(error);
        }
        
    )   
    console.log("er i slutning af getAllCustomers function");
}