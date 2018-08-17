import { Binding } from 'graphql-binding';
import schema from "./schema";

export default class UserServiceBinding extends Binding {
  constructor() {
    // Invoke the constructor of `Binding` with the remote schema
    super({
      schema
    });
  }

  async userExists(id) {
    const result = await this.delegate("query", "user", { id });
    return Boolean(result);
  }
}
