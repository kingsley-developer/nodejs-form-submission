"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', true);
const customerSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50,
        validate: {
            validator: function (x) {
                var _a;
                return (_a = x >= 18) !== null && _a !== void 0 ? _a : x <= 50;
            },
            message: (e) => {
                return `${e.value}yrs is not allowed you have to be 18 yrs and above and the limit age is 50yrs`;
            }
        }
    },
    password: {
        type: String,
        required: true,
        maxLength: 350
    },
    country: {
        type: String,
        required: true
    },
    alive: {
        type: Boolean,
        default: true
    },
    occupation: {
        type: String,
        required: true
    }
}
//{strictQuery: true, query:true}
);
//customerSchemamongoose.set('strictQuery', true)
exports.default = mongoose_1.default.model("customers", customerSchema);
//# sourceMappingURL=schema.js.map