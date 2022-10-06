import mongoose from "mongoose";
import autoincrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
    _id: {
        type: Number,
        min: 10000,
        max: 99999
    },
    firstName: String,
    lastName: String,
    emailId: String,
    phone: Number
});

autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin, 'employee');
const employee = mongoose.model('employee', userSchema);

export default employee;