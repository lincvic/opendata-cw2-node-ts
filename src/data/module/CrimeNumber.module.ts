class CrimeNumber {
    theft: number
    violence: number
    publicOrder: number
    other: number

    constructor(
        theft: number,
        violence: number,
        publicOrder: number,
        other: number) {
        this.theft = theft
        this.violence = violence
        this.publicOrder = publicOrder
        this.other = other
    }
}

export = CrimeNumber