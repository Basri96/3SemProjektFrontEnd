import axios, { AxiosResponse, AxiosError } from "../../node_modules/axios/index"
import {recipe} from "./recipe"
import {weight} from "./weight"


let divElement : HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let idagBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("idagBtn");
let ugeBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ugeBtn");
let Månedvalg = <>document.getElementById("Månedvalg")
ugeBtn.addEventListener('click', plotUge)
idagBtn.addEventListener('click', plotIdag);

function MånedMuligehder(){
    if(Månedvalg.value == "Måned"){

    }
    if(Månedvalg.value == "Gennemsnit"){

    }
    else if(Månedvalg.value == "Madsplid"){
        
    }
}

function plotIdag():void{

    axios.get<weight[]>("https://localhost:44355/api/weight/1")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);

        let result: string = "<ul>"
        
        response.data.forEach((weight: weight) => {
            result += "<li>"+weight.id+" "+weight.dato+" "+weight.weightMeasure+"</li>"    
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

    axios.get<weight[]>("https://localhost:44355/api/weight/2")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);

        let result: string = "<ul>"
        
        response.data.forEach((weight: weight) => {
            result += "<li>"+weight.id+" "+weight.dato+" "+weight.weightMeasure+"</li>"    
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