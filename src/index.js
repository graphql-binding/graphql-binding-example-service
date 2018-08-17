import { Binding } from "graphql-binding";
import { schema } from './schema';

export default class ExampleServiceBinding extends Binding {
  constructor() {
    // Invoke the constructor of `Binding` with the remote schema
    super({
      schema,
    });
  }
}
