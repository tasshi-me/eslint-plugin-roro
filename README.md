# eslint-plugin-roro

> This plugin provide a rule to enforce the [RORO](https://medium.com/free-code-camp/elegant-patterns-in-modern-javascript-roro-be01e7669cbd) (An ESLint plugin to follow the RORO (Receive an Object, Return an Object) pattern.)

## Usage

```shell
npm i -D eslint-plugin-roro
```

## Rules

- [receive-object](#receive-object)
- [return-object](#return-object)

### receive-object

Enforce functions to receive only a single object.

#### ❌Incorrect

```typescript
const func = (param1: string, param2: string) => {
  /* ... */
};
```

#### ✅Correct

```typescript
const func = (params: { param1: string; param2: string }) => {
  /* ... */
};
```

### return-object

Enforce functions to return an object.

#### ❌Incorrect

```typescript
const func = (): string => {
  /* ... */
};
```

#### ✅Correct

```typescript
const func = (): { value: string } => {
  /* ... */
};
```

## License

[MIT](./LICENSE)
