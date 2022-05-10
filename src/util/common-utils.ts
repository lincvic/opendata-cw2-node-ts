import GeoPoint from "geopoint"
import CrimeInfo from "../data/module/CrimeInfo.module"
import CrimeDataDao from "../data/DAO/crime-data-dao"
const crimeDataDao = new CrimeDataDao()

class CommonUtils{
    calculateDistance(
        longA:number,
        latA:number,
        longB:number,
        latB:number
        ):number{
        const startPoint = new GeoPoint(Number(latA), Number(longA))
        const endPoint = new GeoPoint(Number(latB), Number(longB))
        return  startPoint.distanceTo(endPoint, true)
    }

    getAllCoordinateByDistance(
        long:number,
        lat:number,
        distance:number,
        dataCallBack:Function
    ){
        let crimeInfoList:Array<CrimeInfo> = []
        crimeDataDao.getCrimeData((data:Array<any>)=>{
            data.forEach((item)=>{
                const distanceCal = this.calculateDistance(long, lat, item.longitude, item.latitude)
                if (distanceCal <= distance) {
                    item.distance = distanceCal
                    crimeInfoList.push(item)
                }
            })

            crimeInfoList.sort((a,b) => a.distance > b.distance ? 1 : -1)

            dataCallBack(crimeInfoList)
        })
    }
}

export default CommonUtils