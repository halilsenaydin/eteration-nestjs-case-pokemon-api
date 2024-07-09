import Result from "./result";

export default class SuccessResult extends Result{
    constructor(message: string){
        super(true, message);
    }
}