class User {
    uid: string
    nick_name: string
    email:string
    ethnicity: string

    constructor(
        uid: string,
        nick_name: string,
        email:string,
        ethnicity: string
    ) {
        this.uid = uid
        this.nick_name = nick_name
        this.email = email
        this.ethnicity = ethnicity
    }
}

export default User