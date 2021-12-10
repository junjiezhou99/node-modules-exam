import fs from 'fs';

// afegiu codi ... (2pto)
export class ManagerFs {
    constructor(_file) {
        //...
        this._file = _file;
    }
    getData() {
        //...
        //lee un json y return de array
        let movies = JSON.parse(fs.readFileSync(this._file, "utf8"));
        return movies;
    }
}



