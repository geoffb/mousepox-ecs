import { IEntity, IComponent } from "./core";

/** A component */
export abstract class Component implements IComponent {

  /** The entity to which this component is attached */
  public readonly entity: IEntity;

  constructor(entity: IEntity) {
    this.entity = entity;
  }

  /** Serialize this component's state */
  public abstract serialize(): object;

  /** Deserialize this componet from a given state */
  public abstract deserialize(data: object): void;

}
