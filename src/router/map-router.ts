import express from 'express'
import {Router} from "express/ts4.0"
import logger from "../util/logger"
import CrimeDAO from '../data/DAO/crime-data-dao'

const DAO = new CrimeDAO()
import UtilClass from '../util/common-utils'

const util = new UtilClass()

const router: Router = express.Router()

router.get("/getAllLocation", (req, res) => {
    logger.info(req.originalUrl)
    DAO.getCrimeData((data: string) => {
        if (data) {
            res.json(data)
        } else {
            logger.error("Failed in API: /api/map/getAllLocation")
            res.status(400).json({
                result: false,
                msg: `GET DATA FAILED`
            })
        }
    })
})

router.post("/calculateDistance", (req, res) => {
    const longitudeA: string = req.body.longitudeA
    const latitudeA: string = req.body.latitudeA
    const longitudeB: string = req.body.longitudeB
    const latitudeB: string = req.body.latitudeB
    logger.info(req.originalUrl)
    if (!longitudeA || !latitudeA || !longitudeB || !latitudeB) {
        logger.error(req.originalUrl + " Input Error")
        res.status(400).json({
            result: false,
            msg: `Input error`
        })
    } else {
        const distance = util.calculateDistance(
            Number(longitudeA),
            Number(latitudeA),
            Number(longitudeB),
            Number(latitudeB)
        )
        res.status(200).json({
            result: distance
        })
    }
})

router.post("/getAllCoordinateByDistance", (req, res) => {
    const longitude: string = req.body.longitude
    const latitude: string = req.body.latitude
    const distance: string = req.body.distance ? req.body.distance : "5"
    logger.info(req.originalUrl)
    if (!longitude || !latitude) {
        logger.error(req.originalUrl + " Input Error")
        res.status(400).json({
            result: false,
            msg: `Input error`
        })
    } else {
        util.getAllCoordinateByDistance(
            Number(longitude),
            Number(latitude),
            Number(distance),
            (data: Array<any>) => {
                res.status(200).json(data)
            })
    }


})

module.exports = router