// The interface that we want to have readonly without defining another interface
interface OriginalInterface {
  x: number;
  y: string;
}

// The mapped type that map a generic type with the readonly constraint
type ReadonlyInterface<T> = { readonly [P in keyof T]: T[P] };

function genericInterfaceToReadOnly<T>(o: T): ReadonlyInterface<T> {
  return Object.freeze(o);
}

// type Partial<T> = {
//     [P in keyof T]?: T[P];
// }

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
