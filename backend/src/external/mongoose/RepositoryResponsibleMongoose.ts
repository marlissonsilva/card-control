import Responsible from "../../core/responsible/model/Responsible";
import Repository from "../../core/responsible/useCases/Repository";
import ResponsibleModel from "../db/modelMongoose/Responsible";

export default class RepositoryResponsibleMongoose implements Repository {
  async list(userId: string): Promise<Responsible[]> {
    const responsible = await ResponsibleModel.find({
      userId,
    });
    return responsible.map((r) => r.toObject()) as Responsible[];
  }
}
