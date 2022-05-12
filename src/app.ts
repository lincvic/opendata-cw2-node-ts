import express from 'express'
import {Express} from "express/ts4.0"
import config from './config/CONFIG'
import logger from './util/logger'

const app:Express = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/map/", require("./router/map-router"))
app.use("/api/user/", require("./router/user-router"))

app.get("/", (req, res) => {
    res.send("Server Started!")
})

app.listen(config.ports, () => {
    logger.info(`Server start at port ${config.ports}`)
})