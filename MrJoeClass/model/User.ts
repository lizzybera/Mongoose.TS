import {Document, model, Schema} from "mongoose";

export interface iUsers extends Document{
    name?: string;
    age?: number;
    email?: string;
    gender?: string;
    hobbies?: string
}

const userSchema: Schema<iUsers> = new Schema({
    name : {type: String, required:[true, 'Name is required']},
    age: {type: Number, required: true},
    email: {type: String, required: [true, "Email is required"], unique: true},
    gender: {type: String},
    hobbies : {type: String}
}, {
    timestamps: true,
})

const userModel = model<iUsers>("users", userSchema)

export default userModel