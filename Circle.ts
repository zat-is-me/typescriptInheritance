import {Shape} from './Shape';

export class Circle extends Shape{

    constructor(theX:number, theY:number, private _radius:number){
    super(theX,theY);
    }

    //get/ set accessor...
    get radius():number{
        return this._radius;
    }
    set radius(value:number){
        this._radius = value;
    }

    //override super class getInfo methode
    getInfo(): string{
        return super.getInfo() +` radius = ${this._radius}`;
    }
}