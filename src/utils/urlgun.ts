type QueryObject = Record<string, string | number | boolean | undefined>;

const serialize = function (obj: QueryObject) {
  const str = [];
  for (const p in obj)
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      const value = obj[p];

      if (typeof value !== 'undefined') {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(value));
      }
    }
  return str.join('&');
};

export const urlgun = {
  get: <T = unknown>(url: string, query?: QueryObject): Promise<T> => {
    const fullUrl = `${url}${query ? `?${serialize(query)}` : ''}`;

    return new Promise((resolve, reject) => {
      fetch(fullUrl).then((response) => {
        if (response.status >= 400) {
          return reject(response);
        }

        resolve(response.json() as unknown as T);
      });
    });
  },
};
