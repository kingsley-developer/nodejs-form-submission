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
exports.delete_Specific_User = exports.delete_All_User = exports.get_Specific_User = exports.get_All_User = exports.update_Data_DB = exports.add_Data_DB = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const utils_1 = require("./utils");
function add_Data_DB(firstName, lastName, age, password, country, alive, occupation) {
    return __awaiter(this, void 0, void 0, function* () {
        password = yield (0, utils_1.encrypt_password)(password);
        const conn = promise_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        });
        yield (yield conn).execute(`insert into kingdb_table(first_name, last_name, user_age, user_password, user_country, user_alive, user_occupation)
                                                    values("${firstName}","${lastName}",${age},"${password}","${country}","${alive}","${occupation}")`);
    });
}
exports.add_Data_DB = add_Data_DB;
function update_Data_DB(firstName, lastName, age, password, country, alive, occupation, beforefirstName, beforelastName) {
    return __awaiter(this, void 0, void 0, function* () {
        password = yield (0, utils_1.encrypt_password)(password);
        const conn = promise_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        });
        yield (yield conn).execute(`update kingdb_table set first_name="${firstName}", last_name="${lastName}", user_age=${age}, user_password="${password}", user_country="${country}", user_alive="${alive}", user_occupation="${occupation}"
                                                     where first_name="${beforefirstName}" and last_name="${beforelastName}"`);
    });
}
exports.update_Data_DB = update_Data_DB;
function get_All_User() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = promise_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        });
        const [rows] = yield (yield conn).execute("SELECT * from kingdb_table");
        return rows;
    });
}
exports.get_All_User = get_All_User;
function get_Specific_User(firstName, lastName, age) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = promise_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        });
        const [rows] = yield (yield conn).execute(`SELECT * from kingdb_table where first_name="${firstName}" and last_name="${lastName}" and user_age =${age}`);
        console.log(rows);
        return rows;
    });
}
exports.get_Specific_User = get_Specific_User;
function delete_All_User() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = promise_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'kingdb',
            rowsAsArray: true,
            port: 3306,
            password: "football"
        });
        const [rows] = yield (yield conn).execute("delete * from kingdb_table");
        console.log(rows);
    });
}
exports.delete_All_User = delete_All_User;
function delete_Specific_User(firstName, lastName, age) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = promise_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            port: 3306,
            password: "football",
            database: 'kingdb',
            rowsAsArray: true
        });
        const [rows] = yield (yield conn).execute(`delete * from kingdb_table where first_name=? and last_name=? and user_age =?`, [`"${firstName}"`, `"${lastName}"`, `${age}`]);
    });
}
exports.delete_Specific_User = delete_Specific_User;
//# sourceMappingURL=db_connect.js.map