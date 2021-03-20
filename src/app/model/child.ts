
import { BaseClass } from "./Basemodel";

export default class Grocery extends BaseClass{
    constructor(Pid:number,PName:string,desc:string,cost:number){
        super();
        this.Pid = Pid;
        this.PName = PName;
        this.desc=desc;
        this.cost=cost;
    }
    Pid:number;
    PName:string;
    desc:string;
    cost:number;
}

