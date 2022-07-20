export function NewId(target: any, key: string) {
  const getter = function() {
    let value: string;
    value = Math.random().toString();
    return value;
  };
  Object.defineProperty(target, key, {
    get: getter,
    enumerable: true,
    configurable: true
  });
}