export default defineNuxtPlugin(() => ({
  provide: {
    locally: {
      getItem(item:string) {
        if (process.client) {
          return localStorage.getItem(item);
        } 
        return undefined;
      },

      setItem(item:string, value:string) {
        if (process.client) {
          return localStorage.setItem(item, value);
        }
        return undefined;
      },
    },
  },
}));