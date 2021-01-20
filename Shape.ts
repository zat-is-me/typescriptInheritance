export class Shape{
    //the constractor will initialize data variable and
    //the same time ovorload the constractor
    //No need of this key word
    constructor(private _x: number, private _y: number){
    }
    
    //get/set accessors
    get x(): number{
        return this._x;
    }
    get y(): number{
        return this._y;
    }
    set x(value:number){
        this._x = value;
    }
    set y(value:number){
        this._y = value;
    }

    getInfo(): string{
        return `x = ${this._x}, y = ${this._y}`;
    }
}