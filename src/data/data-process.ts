import csv from 'csvtojson'
import Crime from './module/Crime.module'
import CrimeType from './crime-type'
import CrimeInfo from "./module/CrimeInfo.module"
import CrimeTypeEnum from "./module/CrimeType.enum"
import fs from 'fs'

function calculateCrimeTypeNumber(path:string){
    csv().fromFile(path).then((jsonObj)=>{
        jsonObj.forEach((item)=>{
            //item['Crime type']
            if (CrimeType.theft.indexOf(item['Crime type']) !== -1){
                crime.theft += 1
            }
            if (CrimeType.violence.indexOf(item['Crime type']) !== -1){
                crime.violence += 1
            }
            if (CrimeType.publicOrder.indexOf(item['Crime type']) !== -1){
                crime.publicOrder += 1
            }
            if (CrimeType.other.indexOf(item['Crime type']) !== -1){
                crime.other += 1
            }
        })
        console.log(crime)
    })
}

function saveCrimeData2JSON():void{
    csv().fromFile("src/data/csv/2022-02-hampshire-street.csv").then((jsonData) => {
        let crimeInfoList: Array<CrimeInfo> = []
        let crimeType: string
        jsonData.forEach((item) => {
            if (CrimeType.theft.indexOf(item['Crime type']) !== -1) {
                crimeType = CrimeTypeEnum.Theft
            } else if (CrimeType.violence.indexOf(item['Crime type']) !== -1) {
                crimeType = CrimeTypeEnum.Violence
            } else if (CrimeType.publicOrder.indexOf(item['Crime type']) !== -1) {
                crimeType = CrimeTypeEnum.PublicOrder
            } else if (CrimeType.other.indexOf(item['Crime type']) !== -1) {
                crimeType = CrimeTypeEnum.Other
            }
            crimeInfoList.push(new CrimeInfo(item[ 'Crime ID'], item.Longitude, item.Latitude, crimeType, item['Crime type'], -1, item.Location))
        })

        fs.writeFile('src/data/json/2022-02.json', JSON.stringify(crimeInfoList), (err)=>{
            if (err){
                console.log(err.message)
            }else{
                console.log("File Saved")
            }
        })

    })
}

let crime:Crime = new Crime(0, 0, 0,0)
//calculateCrimeTypeNumber("src/data/csv/2022-02-hampshire-street.csv")
saveCrimeData2JSON()