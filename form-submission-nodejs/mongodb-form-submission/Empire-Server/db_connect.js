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
const utils_1 = require("./utils");
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
function add_Data_DB(firstName, lastName, age, password, country, alive, occupation) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            password = yield (0, utils_1.encrypt_password)(password);
            mongoose_1.default.connect("mongodb://127.0.0.1:27017/empire", (err) => {
                if (err)
                    console.log(err);
                else
                    console.log("Connected");
            });
            const user = new schema_1.default({
                firstName,
                lastName,
                age,
                password,
                country,
                alive,
                occupation
            });
            yield user.save();
            return true;
        }
        catch (e) {
            console.log("Failed to connect ", e.message);
            return false;
        }
    });
}
exports.add_Data_DB = add_Data_DB;
function update_Data_DB(firstName, lastName, age, password, country, alive, occupation, beforefirstName, beforelastName) {
    return __awaiter(this, void 0, void 0, function* () {
        password = yield (0, utils_1.encrypt_password)(password);
    });
}
exports.update_Data_DB = update_Data_DB;
function get_All_User() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.get_All_User = get_All_User;
function get_Specific_User(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect("mongodb://127.0.0.1:27017/empire", (err) => {
            if (err)
                console.log(err);
            else
                console.log("Connected");
        });
        try {
            const user = yield schema_1.default.findById(user_id);
            return user;
        }
        catch (e) {
            console.log(e.message);
        }
    });
}
exports.get_Specific_User = get_Specific_User;
function delete_All_User() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect("mongodb://127.0.0.1:27017/empire", (err) => {
            if (err)
                console.log(err);
            else
                console.log("Connected");
        });
        try {
            mongoose_1.default.deleteModel("customers");
            return true;
        }
        catch (e) {
            console.log(e.message);
            return false;
        }
    });
}
exports.delete_All_User = delete_All_User;
function delete_Specific_User(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect("mongodb://127.0.0.1:27017/empire", (err) => {
            if (err)
                console.log(err);
            else
                console.log("Connected");
        });
        try {
            yield schema_1.default.findByIdAndDelete(user_id);
            return true;
        }
        catch (e) {
            console.log(e.message);
            return false;
        }
    });
}
exports.delete_Specific_User = delete_Specific_User;
//# sourceMappingURL=db_connect.js.map