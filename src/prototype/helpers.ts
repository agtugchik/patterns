const isPrimitive = (value: any) =>
  value === null || (typeof value !== "object" && typeof value !== "function");

const fixReferences = (obj: Object) => {
  for (const key in obj) {
    if (!isPrimitive(obj[key])) {
      obj[key] = {
        ...obj[key],
      };
      fixReferences(obj[key]);
    }
  }
};

export { isPrimitive, fixReferences };
