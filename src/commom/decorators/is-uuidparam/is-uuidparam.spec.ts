import { IsUUIDParam } from "./is-uuidparam.decorator";
describe("IsUuidparam", () => {
  it("should be defined", () => {
    expect(IsUUIDParam("This is not a valid UUID")).toBeDefined();
  });
});
