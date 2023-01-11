## Sugar Daddy 🍭 (DTOs)

### Sweet

A Sweet object represents the data that is sent to the server when creating or updating a sweet.

```ts
export interface Sweet {
  name: string
  price: number
  description: string
  ingredients: Ingredient[]
}
```

### Ingredient

An Ingredient object represents the data that is sent to the server when creating or updating an ingredient.

```ts
export interface Ingredient {
  name: string
  quantity: number
  unit: string
}
```

### SweetResponse

A SweetResponse object is a view of a Sweet object that can be returned to client, it can contains additional information like the id of the object, the timestamp of the creation and update.

```ts
export interface SweetResponse extends Omit<Sweet, 'ingredients'>, Document {
  ingredients: IngredientResponse[]
}
```

### IngredientResponse

An IngredientResponse object is a view of an Ingredient object that can be returned to client, it can contains additional information like the id of the object, the timestamp of the creation and update.

```ts
export interface IngredientResponse extends Ingredient, Document {}
```

### Document

Mongo document

```ts
{
    _id: string
    createdAt: string
    updatedAt: string
    ...
}
```
