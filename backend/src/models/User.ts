import mongoose from "mongoose";

export interface UserProps extends Document {
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema({
  email: {type: String, required: true, minlength: 3, maxlength: 100},
  password: {type: String, required: true, minlength: 6, maxlength: 100},
  createdAt: {type: Date, default: Date.now},
});

const User = mongoose.model<UserProps>("User", UserSchema);
export default User;
