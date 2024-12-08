# eslint-plugin-roro

> This plugin provide a rule to enforce the [RORO](https://medium.com/free-code-camp/elegant-patterns-in-modern-javascript-roro-be01e7669cbd) (An ESLint plugin to follow the RORO (Receive an Object, Return an Object) pattern.)

## Rules

- use-roro

### use-roro

```typescript
// Error

const func = (param1, param2): string => {
  /* ... */
};
```

```typescript
// OK
const func = (params: { param1; param2 }): { resp: string } => {
  /* ... */
};
```
