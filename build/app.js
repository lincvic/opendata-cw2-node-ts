"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CONFIG_1 = __importDefault(require("./config/CONFIG"));
const logger_1 = __importDefault(require("./util/logger"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/map/", require("./router/map-router"));
app.get("/", (req, res) => {
    res.send("Server Started!");
});
app.listen(CONFIG_1.default.ports, () => {
    logger_1.default.info(`Server start at port ${CONFIG_1.default.ports}`);
});
