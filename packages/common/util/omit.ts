/**
 * 返回一个移除掉目标对象中的字段之后的对象
 * @param obj 目标对象
 * @param fields 字段
 * @returns
 */
export default function omit<T extends object, K extends keyof T>(obj: T, fields: K[]): Omit<T, K> {
  const clone = { ...obj };

  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      delete clone[key];
    });
  }

  return clone;
}
