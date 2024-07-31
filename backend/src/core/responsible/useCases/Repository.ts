import Responsible from "../model/Responsible";

export default interface Repository {
  list(userId: string): Promise<Responsible[]>;
}
