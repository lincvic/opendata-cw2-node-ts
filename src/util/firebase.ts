const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const serviceAccount = {
        "type": "service_account",
        "project_id": "opendata-cw2-44a16",
        "private_key_id": "35313b6856a09c3b4e345d9c87939a3e7be1b351",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCYL4MzyOE/mYWX\nspKYUqTUM/IfR5Yd0TEEwal8zyCFgu1fwwnihQA6bX9/R2pNH7b9ErpHKygPTKc8\n/1i26hmjhp1m8DfVEc5fv6FFGqXdYq90TsBGVMg7z2i02mSKyc7WKTTc69cu2pkF\na4lBCXyyZ+/AFnEf7p1AzGaHelfh9JPrc6Ozq0iNJftyFi46PsL+WmejvII1SMYt\nBARXD242L5IPa6N5M0ioSeTaowFjod522KexKXiTvjUecV/SMq8QKJjMjrzj7eXQ\ntqLQlifqLUV8LwcJjVqjv2fXn80saWKjO6QOw2lNpcImmvW6EYZ7b7AVt2ZM6l0w\nqzVltQktAgMBAAECggEAD3UP9fQK0NtmgsRr+FW4kScfigbK3Adx26JR9S/ShU0J\nkCbuu5e3sLeLciGOTfwRKX479luPS5KFEAB9gcKgTQgwt5JhkV4oIHiFyE+PFj/e\nQ0l2ZQ5achy8bVYbTS93NzBjQqcfqY4habgE7lqo1DQTWWbOIaiqRzkbltoZ0ATP\n35/nZS6lHYUsz9Copa37g/xV1qCQY2C1u1vV1xfubVpcPiRmP0s2bqeZXw5HY99m\nFR2OvRyQ6vyE/JUlnsEJE1JDl03ert/lypth/e8zZkD8plufKDdvPuXN9MTpdq1Q\nooMFJYEeg/9EuRzpxeiIbSbG7Z/3zGzEa2bGR61N7wKBgQDKVOtBHEB32wEIfxCN\nvHxCuqpKVpcCqoapoQHF5f396GVhl63jM1OHkpNJ13yIp70eTFkNWxlm3FN1/r92\n74HZOfs4NyCPqI85EvYIgsZf2SKYE8NqRwsagGSkOFLoyVSgaBzYLCFohD20XZVb\n+B9cP5D91fKDZkI4tfX0MXP9MwKBgQDAjXv7P/EGQy4R93IjsvtHGMsF5pS9QExs\nf/MLi10HQyoGTDhD7b9h8Xb+cPGmlw7sGr6G3p4iYuMkdVtBK9Bb1QKsHScHVzrh\n8tZ7XvnclgRQ8KZRoxWlD1+TvQiyLQRJUtfkTjrbMF5ako8nAPy1gTjl4jQD+sSl\ndpD2RPEgHwKBgQCD6emXgbvmaLq7t1wrjH/XYaw020+JRXSWk4p8Y/681A+FGUcd\nohELitzMf9mJnxMF9fD5bDObhHpFq9lYyb52yf6oIAjyoIsAQwR1eA2t3/tV+0yk\ntbzfgmYbSz2C2AB8tGRZ7Cu74Lv6JCmE1LhdhHQbiqmaUclLABdjJfrhUQKBgGpk\nAnQRoWgXaHYu5dcJxsNC1LKe8+IZi+CLVcw0JaOknay7In+N9qf0Vg5Cc5LbdjhI\nkqtMh81yHBUB7vj0b3y+Fmro9K6eqP89QPsLwDz8esgKH6uN06DO/L1RvmNMckjd\nSEJyYxzG/etHfWdMqVTUYI7MTHdCcLMH7xLThvN7AoGBAJaRa0zstdmymuYWjrhw\nKHt9nwLGMbiDVmP+XCVdQoooeW+JN9dqjixZAWycu+AD/L4ThsADHFIcRHbpXzBG\nDLWOaKNivSzJqRP4Ii+v/fPuX8//akS4pEPH9YxqolTFuwj9Wxm7xp0sb9Km6l+x\nHV/8j6I9qJA1nAOx2A6xSQDh\n-----END PRIVATE KEY-----\n",
        "client_email": "opendata-cw2-44a16@appspot.gserviceaccount.com",
        "client_id": "115003149344210892754",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/opendata-cw2-44a16%40appspot.gserviceaccount.com"
}

initializeApp({
        credential: cert(serviceAccount)
})

const db = getFirestore()
export default db