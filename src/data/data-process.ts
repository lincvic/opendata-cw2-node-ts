import csv from 'csvtojson'
import CrimeNumber from './module/CrimeNumber.module'
import CrimeType from './type/crime-type'
import CrimeInfo from "./module/CrimeInfo.module"
import CrimeTypeEnum from "./module/CrimeType.enum"
import CrimeEthnicityDistribution from './module/CrimeEthnicityDistribution.module'
import ethnicityType from './type/ethnicity-type'
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
           if (item['Crime ID']){
               if (CrimeType.theft.indexOf(item['Crime type']) !== -1) {
                   crimeType = CrimeTypeEnum.Theft
               } else if (CrimeType.violence.indexOf(item['Crime type']) !== -1) {
                   crimeType = CrimeTypeEnum.Violence
               } else if (CrimeType.publicOrder.indexOf(item['Crime type']) !== -1) {
                   crimeType = CrimeTypeEnum.PublicOrder
               } else if (CrimeType.other.indexOf(item['Crime type']) !== -1) {
                   crimeType = CrimeTypeEnum.Other
               }
               crimeInfoList.push(new CrimeInfo(item['Crime ID'], item.Longitude, item.Latitude, crimeType, item['Crime type'], -1, item.Location))
           }
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

function saveEthnicityData2JSON():void{
    csv().fromFile("src/data/csv/victims-of-crime-data.csv").then((jsonData)=>{
        let ethnicity:CrimeEthnicityDistribution = new CrimeEthnicityDistribution(0,0,0,0,0)
        jsonData.forEach((item)=>{
            if (ethnicityType.Asia.indexOf(item.Ethnicity) !== -1){
                ethnicity.Asia += 1
            }else if (ethnicityType.Black.indexOf(item.Ethnicity) !== -1) {
                ethnicity.Black += 1
            } else if (ethnicityType.Mixed.indexOf(item.Ethnicity) !== -1) {
                ethnicity.Mixed += 1
            } else if (ethnicityType.White.indexOf(item.Ethnicity) !== -1) {
                ethnicity.White += 1
            }else if (ethnicityType.Other.indexOf(item.Ethnicity) !== -1) {
                ethnicity.Other += 1
            }
        })

        fs.writeFile('src/data/json/ethnicity.json', JSON.stringify(ethnicity), (err)=>{
            if (err){
                console.log(err.message)
            }else{
                console.log("File Saved")
            }
        })

    })
}

let crime:CrimeNumber = new CrimeNumber(0, 0, 0,0)
//calculateCrimeTypeNumber("src/data/csv/2022-02-hampshire-street.csv")
//saveCrimeData2JSON()
saveEthnicityData2JSON()