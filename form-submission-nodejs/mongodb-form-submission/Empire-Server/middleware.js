"use strict";
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
exports.delete_User = exports.delete_Users = exports.get_User = exports.get_All_User = void 0;
const moment_1 = __importDefault(require("moment"));
const db_connect_1 = require("./db_connect");
function get_All_User(_req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let users = yield (0, db_connect_1.get_All_User)();
        if (users) {
            return res.status(200).json(users);
        }
        res.status(404).json({ date: (0, moment_1.default)().calendar(), err: "Cant find users" });
        next();
    });
}
exports.get_All_User = get_All_User;
function get_User(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let { id } = req.query;
        id = String(id);
        const date = (0, moment_1.default)().calendar();
        let user = yield (0, db_connect_1.get_Specific_User)(id);
        if (user) {
            return res.status(200).json(user);
        }
        res.status(404).json({ date, err: "Cant find user" });
        next();
    });
}
exports.get_User = get_User;
function delete_Users(_req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let date = (0, moment_1.default)();
        let status = yield (0, db_connect_1.delete_All_User)();
        if (status) {
            return res.status(200).json({ time: date.calendar(), msg: "All users deleted" });
        }
        res.status(200).json({ time: date.calendar(), msg: "Error users not deleted" });
        next();
    });
}
exports.delete_Users = delete_Users;
function delete_User(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let { id } = req.query;
        id = String(id);
        let date = (0, moment_1.default)();
        let status = yield (0, db_connect_1.delete_Specific_User)(id);
        if (status) {
            return res.status(200).json({ time: date.calendar(), msg: "User deleted" });
        }
        res.status(404).json({ time: date.calendar(), msg: "User was not deleted" });
        next();
    });
}
exports.delete_User = delete_User;
//# sourceMappingURL=middleware.js.map