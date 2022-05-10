"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("../util/logger"));
const crime_data_dao_1 = __importDefault(require("../data/DAO/crime-data-dao"));
const DAO = new crime_data_dao_1.default();
const crime_type_1 = __importDefault(require("../data/crime-type"));
const CrimeType_enum_1 = __importDefault(require("../data/module/CrimeType.enum"));
const CrimeInfo_module_1 = __importDefault(require("../data/module/CrimeInfo.module"));
const geopoint_1 = __importDefault(require("geopoint"));
const router = express_1.default.Router();
router.get("/getAllLocation", (req, res) => {
    logger_1.default.info(req.originalUrl);
    DAO.getCrimeData().then((jsonData) => {
        let crimeInfoList = [];
        let crimeType;
        jsonData.forEach((item) => {
            if (crime_type_1.default.theft.indexOf(item['Crime type']) !== -1) {
                crimeType = CrimeType_enum_1.default.Theft;
            }
            else if (crime_type_1.default.violence.indexOf(item['Crime type']) !== -1) {
                crimeType = CrimeType_enum_1.default.Violence;
            }
            else if (crime_type_1.default.publicOrder.indexOf(item['Crime type']) !== -1) {
                crimeType = CrimeType_enum_1.default.PublicOrder;
            }
            else if (crime_type_1.default.other.indexOf(item['Crime type']) !== -1) {
                crimeType = CrimeType_enum_1.default.Other;
            }
            crimeInfoList.push(new CrimeInfo_module_1.default(item.Longitude, item.Latitude, crimeType));
        });
        res.json(crimeInfoList);
    }).catch((err) => {
        logger_1.default.error("Failed in API: /api/map/getAllLocation : " + err.message);
        res.status(400).json({
            result: false,
            msg: `GET CSV DATA FAILED`
        });
    });
});
router.post("/calculateDistance", (req, res) => {
    const longitudeA = req.body.longitudeA;
    const latitudeA = req.body.latitudeA;
    const longitudeB = req.body.longitudeB;
    const latitudeB = req.body.latitudeB;
    logger_1.default.info(req.originalUrl);
    if (!longitudeA || !latitudeA || !longitudeB || !latitudeB) {
        logger_1.default.error(req.originalUrl + " Input Error");
        res.status(400).json({
            result: false,
            msg: `Input error`
        });
    }
    else {
        const startPoint = new geopoint_1.default(Number(latitudeA), Number(longitudeA));
        const endPoint = new geopoint_1.default(Number(latitudeB), Number(longitudeB));
        const distance = startPoint.distanceTo(endPoint, true);
        res.status(200).json({
            result: distance
        });
    }
});
module.exports = router;
