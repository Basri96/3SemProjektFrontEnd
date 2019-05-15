import axios, { AxiosResponse, AxiosError } from "../../node_modules/axios/index"
import {recipe} from "./recipe"
import {weight} from "./weight"


let divElement : HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let idagBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("idagBtn");
let ugeBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ugeBtn");
let årBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("årBtn");
let månedsGennemsnitBtn = <HTMLButtonElement>document.getElementById("månedsGennemsnitBtn");
let Månedvalg = <HTMLButtonElement>document.getElementById("Månedvalg");
let notifikationDiv = <HTMLDivElement>document.getElementById("notifikation")
let ugensMaxBtn = <HTMLButtonElement>document.getElementById("størsteUge");
let ugensMinBtn = <HTMLButtonElement>document.getElementById("mindsteUge");

/** let Månedvalg = <>document.getElementById("Månedvalg") */

idagBtn.addEventListener('click', plotIdag);
ugeBtn.addEventListener('click', plotUge);
årBtn.addEventListener('click', plotÅr);
månedsGennemsnitBtn.addEventListener('click', månedsGennemsnit);
console.log("Hej")
madSpildFaldet();
//spildBedringTjek();
//forgåendeUge();
//nuværendeUge();


ugensMaxBtn.addEventListener("click",ugensMax);
ugensMinBtn.addEventListener("click",ugensMin);
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

    axios.get<weight[]>("https://localhost:44355/api/weight/1")
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

    axios.get<weight[]>("https://localhost:44355/api/weight/2")
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

function sortUgenEfterStørrelse(w : weight[]):weight[]{

    let sortedList:weight[] = new Array;
    /* sortere listen af weight objektor efter weight attributtet*/
    sortedList = w.sort((n1,n2) => Number(n1.dato) - Number(n2.dato));

    return sortedList;
}

function ugensMax():void{
    
    axios.get<weight[]>("https://localhost:44355/api/weight/2")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);
        
        let myList:weight[] = new Array;
        myList =  response.data;
        let sortedList = sortUgenEfterStørrelse(myList).reverse();
        let størsteDag = sortedList[0];
        

        divElement.innerHTML = "Dag: " + størsteDag.weightMeasure.substring(0,10) +" "+"Vægt: "+ størsteDag.dato;
    })
    .catch(
        function(error: AxiosError ): void{
            console.log("errrrrrror in my code")
            console.log(error);
        }
        
    )   
    console.log("er i slutning af getAllCustomers function");
}

function ugensMin():void{
    
    axios.get<weight[]>("https://localhost:44355/api/weight/2")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);
        
        let myList:weight[] = new Array;
        myList =  response.data;
        let sortedList = sortUgenEfterStørrelse(myList);
        let mindsteDag = sortedList[0];
        

        divElement.innerHTML = "Dag: " + mindsteDag.weightMeasure.substring(0,10) +" "+"Vægt: "+ mindsteDag.dato;
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

    axios.get<weight[]>("https://localhost:44355/api/weight/3")
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

    axios.get<weight[]>("https://localhost:44355/api/weight/4")
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

function madSpildFaldet():void{
    let nuværendeUge: string | number
    let forrigeUge
    axios.get<weight[]>("https://localhost:44355/api/weight/2")
    .then(function(response: AxiosResponse<weight[]>): void
    {
        console.log(response);
        
        let result: number[] = new Array;

        response.data.forEach((weight: weight) => {
            let gram = Number(weight.dato);
            result.push(gram) 
        });
            /*gå igennem result listen og lægger tallene sammen */
            nuværendeUge = result.reduce((a, b) => a + b, 0)
            axios.get<weight[]>("https://localhost:44355/api/weight/5")
            .then(function(response: AxiosResponse<weight[]>): void
            {
                console.log(response);
                
                let result: number[] = new Array;
        
                response.data.forEach((weight: weight) => {
                    let gram = Number(weight.dato);
                    result.push(gram) 
                });
                    /* gå igennem result listen og lægger tallene sammen */
                    forrigeUge = result.reduce((a, b) => a + b, 0) 
                    if(nuværendeUge>forrigeUge){
                    notifikationDiv.innerHTML = "NOTIFIKATION: " + "Dit madspild er faldet: " + "Nuværende Uge: "+nuværendeUge+ " - " + "Forrige Uge: "+forrigeUge ;
                    }
                }) 

    })
   

   

    console.log("er i slutning af getAllCustomers function");
}

