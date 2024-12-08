# eslint-plugin-roro

[![npm version](https://badge.fury.io/js/eslint-plugin-roro.svg)](https://badge.fury.io/js/eslint-plugin-roro)
[![CI](https://github.com/tasshi-me/eslint-plugin-roro/actions/workflows/ci.yml/badge.svg)](https://github.com/tasshi-me/eslint-plugin-roro/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

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
