import DataResult from "./dataResult";

export default class ErrorDataResult<T> extends DataResult<T>{
    constructor(message: string, data: T){
        super(false, message, data);
    }
}