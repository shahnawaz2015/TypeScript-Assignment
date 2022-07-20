export function DateTime(target: any, key: string) {
 
  const getter = function() {
    let value: string;
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    value = date+' '+time;
    return value;
  };
 
  Object.defineProperty(target, key, {
    get: getter,
    enumerable: true,
    configurable: true
  });
}