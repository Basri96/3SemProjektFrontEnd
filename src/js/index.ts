import axios, { AxiosResponse, AxiosError } from "../../node_modules/axios/index"
import {recipe} from "./recipe"
import {weight} from "./weight"


let divElement : HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let buttonelement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("Post");
buttonelement.addEventListener('click',showAllCustomers);