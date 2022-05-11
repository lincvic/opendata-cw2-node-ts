import logger from "../../util/logger"
import fs from 'fs'


class CrimeDataDao {
    getCrimeData(dataCallback: Function) {
        fs.readFile('src/data/json/2022-02.json', 'utf-8', (err, data) => {
            if (err) {
                logger.error("Err during reading json data: " + err.message)
                dataCallback("")
            } else {
                dataCallback(JSON.parse(data.toString()))
            }
        })
    }

    getGovEthnicityData(dataCallback: Function){
        fs.readFile('src/data/json/ethnicity.json', 'utf-8', (err, data)=>{
            if (err){
                logger.error("Err during reading json data: " + err.message)
                dataCallback("")
            }else {
                dataCallback(JSON.parse(data.toString()))
            }
        })
    }
}

export default CrimeDataDao