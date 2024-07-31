import mongoose, {Schema, Document} from "mongoose";

export interface ResponsibleProps extends Document {
  userId: mongoose.Types.ObjectId;
  responsible: string;
}

const ResponsibleSchema: Schema = new mongoose.Schema({
  userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
  responsible: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    unique: true,
  },
  createdAt: {type: Date, default: Date.now},
});

const ResponsibleModel = mongoose.model<ResponsibleProps>(
  "Responsible",
  ResponsibleSchema
);
export default ResponsibleModel;
