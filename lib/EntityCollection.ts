import { Collection } from "@mousepox/util";
import { IEntity, IComponent, ComponentConstructor } from "./core";

/** A Collection of entities */
export class EntityCollection extends Collection<string, IEntity> {

  /** Return a list of entities having a given component */
  public filterByComponent<T extends IComponent>(construct: ComponentConstructor<T>): IEntity[] {
    const entities: IEntity[] = [];
    for (const [, entity] of this.things) {
      if (entity.hasComponent(construct)) {
        entities.push(entity);
      }
    }
    return entities;
  }

}
