"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csvtojson_1 = __importDefault(require("csvtojson"));
const Crime_module_1 = __importDefault(require("./module/Crime.module"));
const crime_type_1 = __importDefault(require("./crime-type"));
function calculateCrimeTypeNumber(path) {
    (0, csvtojson_1.default)().fromFile(path).then((jsonObj) => {
        jsonObj.forEach((item) => {
            //item['Crime type']
            if (crime_type_1.default.theft.indexOf(item['Crime type']) !== -1) {
                crime.theft += 1;
            }
            if (crime_type_1.default.violence.indexOf(item['Crime type']) !== -1) {
                crime.violence += 1;
            }
            if (crime_type_1.default.publicOrder.indexOf(item['Crime type']) !== -1) {
                crime.publicOrder += 1;
            }
            if (crime_type_1.default.other.indexOf(item['Crime type']) !== -1) {
                crime.other += 1;
            }
        });
        console.log(crime);
    });
}
let crime = new Crime_module_1.default(0, 0, 0, 0);
calculateCrimeTypeNumber("src/data/csv/2022-02-hampshire-street.csv");
