import express from 'express'
import {Router} from "express/ts4.0"
import logger from "../util/logger"
import UserDAO from '../DAO/user-data-dao'
import User from '../data/module/User.module'
const DAO = new UserDAO()

import UtilClass from '../util/common-utils'
const util = new UtilClass()

const router: Router = express.Router()

router.post("/createNewUser", (req, res) => {
    logger.info(req.originalUrl)
    const uid:string = req.body.uid
    const nick_name:string = req.body.nick_name
    const email:string = req.body.email
    const ethnicity:string = req.body.ethnicity
    if (!uid || !nick_name || !email || !ethnicity){
        logger.error(req.originalUrl + " Input Error")
        res.status(400).json({
            result: false,
            msg: `Input error`
        })
    }else {
        const newUser:User = new User(uid, nick_name, email, ethnicity)
        DAO.createNewUser(newUser).then(()=>{
            res.status(200).json({
                result: true
            })
        })
    }
})

router.post("/getUserByUID", (req,res)=>{
    logger.info(req.originalUrl)
    const uid = req.body.uid
    if (!uid){
        logger.error(req.originalUrl + " Input Error")
        res.status(400).json({
            result: false,
            msg: `Input error`
        })
    }else {
        DAO.getUserByUID(uid).then((it)=>{
            if (it.data()){
                res.status(200).json(it.data())
            }else {
                res.status(200).json({
                    result: false,
                    message: `User ${uid} doesn't exist`
                })
            }

        }).catch((e)=>{
            logger.error(req.originalUrl+ ' ' + e.message)
            res.status(400).json({
                result: false,
                msg: `Firebase error`
            })
        })
    }
})

module.exports = router