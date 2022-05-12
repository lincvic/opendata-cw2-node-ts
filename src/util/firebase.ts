const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const serviceAccount = require('./opendata-cw2-44a16-35313b6856a0.json')

initializeApp({
        credential: cert(serviceAccount)
})

const db = getFirestore()
export default db