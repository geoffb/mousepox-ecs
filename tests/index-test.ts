import { Entity, Component } from "../lib";

interface IFooState {
  bar: string;
}

class FooComponent extends Component {

  public bar = "bloop";

  public serialize(): IFooState {
    return { bar: this.bar };
  }

  public deserialize(state: IFooState) {
    this.bar = state.bar;
  }
}

const e = new Entity();

console.log(e);

console.log(e.hasComponent(FooComponent));

const c2 = e.addComponent(FooComponent, {
  bar: "florp",
});

c2.bar = "MOOFZ";

console.log(e.getComponent(FooComponent).bar);

console.log(e.hasComponent(FooComponent));

const c1 = e.getComponent(FooComponent);

console.log(c1.bar);

e.removeComponent(FooComponent);

console.log(e.hasComponent(FooComponent));

try {
  e.getComponent(FooComponent);
} catch (err) {
  console.error(`Caught expected error: ${err.message}`);
}
