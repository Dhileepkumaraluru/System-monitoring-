"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SecretarySchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    loginTime: { type: Date, default: null }, // Default to null
    workingHours: { type: Number, default: 0 }
});
exports.default = mongoose_1.default.model('Secretary', SecretarySchema);
