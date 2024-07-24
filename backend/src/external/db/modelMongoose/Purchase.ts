import mongoose, {Schema, Document} from "mongoose";

export interface PurchaseProps extends Document {
  userId: mongoose.Types.ObjectId;
  price: number;
  description: string;
  purchasedIn: string;
  responsable: string;
  status: boolean;
}

const PurchaseSchema: Schema = new mongoose.Schema({
  userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
  price: {type: Number, required: true, minlength: 3, maxlength: 10},
  description: {type: String, maxlength: 50},
  purchasedIn: {type: Date},
  responsable: {type: String, required: true, minlength: 3, maxlength: 50},
  createdAt: {type: Date, default: Date.now},
  status: {type: Boolean, default: false},
});

const PurchaseModel = mongoose.model<PurchaseProps>("Purchase", PurchaseSchema);
export default PurchaseModel;
