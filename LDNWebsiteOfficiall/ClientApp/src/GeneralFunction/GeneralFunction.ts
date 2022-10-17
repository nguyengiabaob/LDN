export const TransferValueObject = (object: any) => {
  for (const [key, value] of Object.entries<any>(object)) {
    if (value == undefined) {
      object[`${key}`] = null;
    }
  }
  return object;
};
