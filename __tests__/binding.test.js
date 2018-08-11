import { expect } from "chai";
import ExampleServiceBinding from "../src";

const exampleBinding = new ExampleServiceBinding();

describe("Example Binding", function() {
  it("should return an array of users", async function() {
    const users = await exampleBinding.query.users();
    expect(users.length).not.to.eql(0);
  });

  it("should return a user after creating one", async function() {
    const user = await exampleBinding.mutation.createUser({ name: "Rowan" });
    expect(user.name).to.eql("Rowan");
  });

  it("should find a user document for id: cjkpro9ugnyqb0b77mawk139e", async () => {
    const user = await exampleBinding.query.user({
      id: "cjkpro9ugnyqb0b77mawk139e"
    });
    expect(user.name).to.eql("Rowan");
  });

  it("should update a user's name", async () => {
    let user = await exampleBinding.mutation.createUser({ name: "Rowan" });
    expect(user.name).to.eql("Rowan");
    user = await exampleBinding.mutation.updateUser({
      id: user.id,
      name: "Andy"
    });
    expect(user.name).to.eql("Andy");
  });

  it("should delete a user", async () => {
    let user = await exampleBinding.mutation.createUser({ name: "Rowan" });
    expect(user.name).to.eql("Rowan");
    user = await exampleBinding.mutation.deleteUser({
      id: user.id
    });

    user = await exampleBinding.query.user({
      id: user.id
    });

    expect(user).to.eql(null);
  });
  //
  // it("should return users from query", async function() {
  //   const users = await userBinding.query.users();
  //   expect(users.length).to.eql(1);
  // });
});
