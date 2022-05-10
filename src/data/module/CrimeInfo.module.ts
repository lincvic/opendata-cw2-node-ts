class CrimeInfo {
    id: string
    longitude: string
    latitude: string
    type: string

    constructor(
        id: string,
        longitude: string,
        latitude: string,
        type: string) {
        this.id = id
        this.longitude = longitude
        this.latitude = latitude
        this.type = type
    }
}

export default CrimeInfo