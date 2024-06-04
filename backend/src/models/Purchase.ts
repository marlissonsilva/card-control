import mongoose, {Schema, Document} from "mongoose";

export interface PurchaseProps extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  price: number;
  description: string;
  purchasedIn: string;
  responsable: string;
}

const PurchaseSchema: Schema = new mongoose.Schema({
  user: {type: mongoose.Types.ObjectId, ref: "User", required: true},
  name: {type: String, required: true, minlength: 3, maxlength: 50},
  price: {type: Number, required: true, minlength: 3, maxlength: 10},
  description: {type: String, maxlength: 50},
  purchasedIn: {type: Date},
  responsable: {type: String, required: true, minlength: 3, maxlength: 50},
  createdAt: {type: Date, default: Date.now},
});

const PurchaseModel = mongoose.model<PurchaseProps>("Purchase", PurchaseSchema);
export default PurchaseModel;
