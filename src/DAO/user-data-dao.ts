import db from '../util/firebase'
const ref = db.collection('Users')
import CommonUtils from "../util/common-utils"
const util = new CommonUtils()
import User from '../data/module/User.module'

class UserDataDao {
    async createNewUser(User: User) {
        const doc = ref.doc(User.uid.toString())
        return await doc.set(util.parseJSON(User))
    }

    async getUserByUID(uid:string){
        const doc = ref.doc(uid.toString())
        return await doc.get()
    }
}

export default UserDataDao