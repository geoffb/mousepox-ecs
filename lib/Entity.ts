import { generateUUID } from "@mousepox/util";
import { IEntity, IComponent, ComponentConstructor } from "./core";

/** An entity with managed components */
export class Entity implements IEntity {

  /** This entity's unique ID */
  public id: string;

  /** List of components attached to this entity */
  public readonly components: IComponent[] = [];

  constructor(id?: string) {
    this.id = id ?? generateUUID();
  }

  /** Dispose of this entity */
  public dispose(): void {
    this.components.length = 0;
  }

  /** Add a component to this entity */
  public addComponent<T extends IComponent>(construct: ComponentConstructor<T>): T {
    const component = new construct(this);
    this.components.push(component);
    return component;
  }

  /** Check whether or not this entity has a given component */
  public hasComponent<T extends IComponent>(construct: ComponentConstructor<T>): boolean {
    for (const component of this.components) {
      if (component instanceof construct) {
        return true;
      }
    }
    return false;
  }

  /** Get a given component from this entity */
  public getComponent<T extends IComponent>(construct: ComponentConstructor<T>): T {
    for (const component of this.components) {
      if (component instanceof construct) {
        return component;
      }
    }
    throw new Error(`Component ${construct.name} does not exist`);
  }

  /** Remove a given component from this entity */
  public removeComponent<T extends IComponent>(construct: ComponentConstructor<T>): void {
    const len = this.components.length;
    for (let i = 0; i < len; i++) {
      if (this.components[i] instanceof construct) {
        this.components.splice(i, 1);
        return;
      }
    }
  }

}
