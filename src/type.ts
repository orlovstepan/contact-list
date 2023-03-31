export type User = {
   name: string, 
   phone: string,
   id: number,
   email: string,
   [key: string]: string | number;
 };

 export type TypeSearch = 'name' | 'phone' | 'email'