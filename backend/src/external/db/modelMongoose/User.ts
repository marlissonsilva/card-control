import mongoose from "mongoose";

export interface UserProps extends Document {
    name: string
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 100 },
    email: { type: String, required: true, minlength: 3, maxlength: 100 },
    password: { type: String, required: true, minlength: 6, maxlength: 100 },
    createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model<UserProps>("User", UserSchema);
export default UserModel;