import * as test from "tape";
import { Entity } from "..";
import { Empty } from "./components/Empty";

test("Entity", (t) => {
  const e = new Entity();
  t.ok(e instanceof Entity);
  t.equal(typeof e.addComponent, "function");
  t.equal(typeof e.hasComponent, "function");
  t.equal(typeof e.getComponent, "function");
  t.equal(typeof e.removeComponent, "function");
  t.end();
});

test("Entity.addComponent", (t) => {
  const e = new Entity();
  const component = e.addComponent(Empty);
  t.ok(component instanceof Empty);
  t.ok(e.hasComponent(Empty));
  t.end();
});
