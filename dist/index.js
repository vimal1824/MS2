"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("MS2");
});
app.get("/ms2", (req, res) => {
    res.send("<h1>MS2</h1>");
});
app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
