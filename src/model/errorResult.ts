import Result from "./result";

export default class ErrorResult extends Result{
    constructor(message: string){
        super(false, message);
    }
}