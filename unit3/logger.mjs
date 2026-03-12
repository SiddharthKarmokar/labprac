export class Logger {
    constructor(name){
        this.name = name;
    }

    log(message){
        console.log(`[${this.name}] - ${message}`);
    }

    error(error){
        console.error(`[${this.name}] STATUS: ${error.status} - ERROR: `, error.message);
    }
}