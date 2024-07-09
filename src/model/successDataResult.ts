import DataResult from "./dataResult";

export default class SuccessDataResult<T> extends DataResult<T>{
    constructor(message: string, data: T){
        super(true, message, data);
    }
}