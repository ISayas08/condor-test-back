export const isEmpty = (obj: object): boolean => {
  return obj ? !Object.keys(obj).length : true;
};

export const pick = (obj: any, ...keys: string[]): any => {
  if (keys.length && !isEmpty(obj)) {
    const auxObj: any = {};
    keys.forEach(key => {
      if (obj[key]) auxObj[key] = obj[key];
    });
    return auxObj;
  }
  return {};
};

export const normalizeArray = (array: any[] = [], propertyName: string) => {
  if (array && array.length) {
    const auxObj: any = {};

    array.forEach((item: any) => {
      const auxItem = Object.assign({}, item);
      auxObj[item[propertyName]] = auxItem;
    });

    return auxObj;
  }
  return {};
};
