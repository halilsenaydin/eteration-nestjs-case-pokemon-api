import Result from "./result";

export default class DataResult<T> extends Result{
    constructor(status: boolean, message: string, data: T){
        super(status, message);
        this.data = data;
    }

    data: T;
}