"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_connect_1 = require("./db_connect");
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const express_validator_1 = require("express-validator");
const middleware_1 = require("./middleware");
const moment_1 = __importDefault(require("moment"));
const app = (0, express_1.default)();
const date = (0, moment_1.default)();
dotenv.config();
app.use((0, cors_1.default)({ methods: ['GET', 'PUT', 'POST', 'DELETE'] }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/get_users", middleware_1.get_All_User);
app.use("/get_user/query?", middleware_1.get_User);
app.use("/delete_users", middleware_1.delete_Users);
app.use("/submit_data", [(0, express_validator_1.check)("firstname").notEmpty().withMessage("Firstname cannot be empty"),
    (0, express_validator_1.check)("lastname").notEmpty().withMessage("Lastname cannot be empty"),
    (0, express_validator_1.check)("age").notEmpty().withMessage("Age cannot be empty"),
    (0, express_validator_1.check)("password").notEmpty().withMessage("Password cannot be empty"),
    (0, express_validator_1.check)("country").notEmpty().withMessage("Country cannot be empty"),
    (0, express_validator_1.check)("alive").notEmpty().withMessage("Alive cannot be empty"),
    (0, express_validator_1.check)("occupation").notEmpty().withMessage("Occupation cannot be empty")]);
app.use("/update_data", [(0, express_validator_1.check)("firstname").notEmpty().withMessage("Firstname cannot be empty"),
    (0, express_validator_1.check)("lastname").notEmpty().withMessage("Lastname cannot be empty"),
    (0, express_validator_1.check)("age").notEmpty().withMessage("Age cannot be empty"),
    (0, express_validator_1.check)("password").notEmpty().withMessage("Password cannot be empty"),
    (0, express_validator_1.check)("country").notEmpty().withMessage("Country cannot be empty"),
    (0, express_validator_1.check)("alive").notEmpty().withMessage("Alive cannot be empty"),
    (0, express_validator_1.check)("occupation").notEmpty().withMessage("Occupation cannot be empty"),
    (0, express_validator_1.check)("beforefirstname").notEmpty().withMessage("beforefirstname cannot be empty"),
    (0, express_validator_1.check)("beforelastname").notEmpty().withMessage("beforelastname cannot be empty")
]);
let { PORT } = process.env;
let portnumber = Number(PORT);
function Server() {
    app.get("/get_users", (req, res) => { });
    app.get("/get_user/query?", (req, res) => { });
    app.delete("/delete_users", (req, res) => { });
    app.put("/update_data/query?", (req, res) => __awaiter(this, void 0, void 0, function* () {
        function add_data_middleware() {
            return __awaiter(this, void 0, void 0, function* () {
                let { firstname, lastname, age, password, country, alive, occupation, beforefirstname, beforelastname } = req.query;
                const err = (0, express_validator_1.validationResult)(req);
                if (!err.isEmpty()) {
                    return res.status(404).json({ sentDate: date.calendar(), msg: err.array() });
                }
                firstname = String(firstname);
                lastname = String(lastname);
                let user_age = Number(age);
                password = String(password);
                country = String(country);
                alive = String(alive);
                occupation = String(occupation);
                beforefirstname = String(beforefirstname);
                beforelastname = String(beforelastname);
                yield (0, db_connect_1.update_Data_DB)(firstname, lastname, user_age, password, country, alive, occupation, beforefirstname, beforelastname);
                res.status(200).json({ sentDate: date.calendar(), msg: "Account updated" });
            });
        }
        yield add_data_middleware();
    }));
    app.post("/submit_data", (req, res) => __awaiter(this, void 0, void 0, function* () {
        function add_data_middleware() {
            return __awaiter(this, void 0, void 0, function* () {
                let { firstname, lastname, age, password, country, alive, occupation } = req.body;
                const err = (0, express_validator_1.validationResult)(req);
                if (!err.isEmpty()) {
                    return res.status(404).json({ sentDate: date.calendar(), msg: err.array() });
                }
                firstname = String(firstname);
                lastname = String(lastname);
                age = Number(age);
                password = String(password);
                country = String(country);
                alive = String(alive);
                occupation = String(occupation);
                yield (0, db_connect_1.add_Data_DB)(firstname, lastname, age, password, country, alive, occupation);
                res.status(201).json({ sentDate: date.calendar(), msg: "Account created" });
            });
        }
        yield add_data_middleware();
    }));
    app.all("*", (req, res) => {
        res.status(404).send("<h1>Page not found</h1>");
    });
    app.listen(portnumber, () => console.log(`Server listening on port: ${portnumber}`));
}
exports.default = Server;
//# sourceMappingURL=_api.js.map