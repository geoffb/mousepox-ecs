/** A constructor which results in a new Component */
export type ComponentConstructor<T extends IComponent> = new (entity: IEntity) => T;

/** An entity */
export interface IEntity {
  readonly components: IComponent[];
  dispose(): void;
  addComponent<T extends IComponent>(construct: ComponentConstructor<T>, state?: object): void;
  hasComponent<T extends IComponent>(construct: ComponentConstructor<T>): boolean;
  getComponent<T extends IComponent>(construct: ComponentConstructor<T>): T;
  removeComponent<T extends IComponent>(construct: ComponentConstructor<T>): void;
}

/** A component */
export interface IComponent {
  entity: IEntity;
}
