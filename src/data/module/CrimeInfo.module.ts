class CrimeInfo {
    id: string
    longitude: string
    latitude: string
    type: string
    detail:string
    distance: number
    location:string

    constructor(
        id: string,
        longitude: string,
        latitude: string,
        type: string,
        detail:string,
        distance:number,
        location:string) {
        this.id = id
        this.longitude = longitude
        this.latitude = latitude
        this.type = type
        this.detail = detail
        this.location = location
        this.distance = distance ? distance : -1
        
    }
}

export default CrimeInfo