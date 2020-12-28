import * as test from "tape";
import { Entity, EntityCollection } from "..";
import { Empty } from "./components/Empty";

test("EntityCollection", (t) => {
  const entities = new EntityCollection();
  t.ok(entities instanceof EntityCollection);
  t.equal(typeof entities.filterByComponent, "function");
  t.end();
});

test("EntityCollection.filterByComponent", (t) => {
  const entities = new EntityCollection();
  let count = 0;
  for (let i = 0; i < 1000; i++) {
    const entity = new Entity();
    if (Math.random() > 0.5) {
      entity.addComponent(Empty);
      count++;
    }
    entities.add(entity.id, entity);
  }
  console.log(count);
  const matches = entities.filterByComponent(Empty);
  t.equal(matches.length, count);
  t.end();
});
