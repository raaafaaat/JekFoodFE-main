import { Restaurant } from "./Restaurant";

export class Food{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean=false;
    stars:number=0;
    image!:string;
   
    origins!:string[];
    cookTime!:string;
   
}