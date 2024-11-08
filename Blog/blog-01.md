## The Significance of Union and Intersection Types in TypeScript

In TypeScript, union and intersection types are powerful tools that help manage different types of data in a structured way. They help ensure type safety in code.

Union types allow a variable to be one of several possible types, denoted by the "|" symbol.

-A variable with a union type can only use methods and properties that exist on all of its constituent types. If it tries to access a property that doesn't exist on one of them, TypeScript will throw a compile-time error.
-One can perform conditional checks at runtime to determine which type a union value currently holds using the typeof operator or other custom logic.

### Example:

```typescript
let userId: string | number;
userId = "abc123";
userId = 456;
```

Intersection types combine multiple types into one, denoted by the "&" symbol.

-An intersection type combines the structure of two or more types into a single type. Any variables declared with an intersection type must satisfy all of the constraints imposed by each individual type.
-Intersection types are commonly used to define objects that need to implement multiple interfaces or extend multiple classes.
-Intersection types can also be combined with union types to represent complex data structures that may contain values from multiple sources with differing types.

### Example:

```typescript
interface User {
  name: string;
}

interface Admin {
  role: string;
}

let userAdmin: User & Admin = {
  name: "John Doe",
  role: "admin",
};
```
