// export const BASE_URL = 
// process.env.NODE_ENV ==='development'? '': '';

export const BASE_URL = process.env.REACT_APP_BASE_URL ;
export const PRODUCTS_URL = `${BASE_URL}/api/products`;
export const USERS_URL = `${BASE_URL}/api/users`;
export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const PAYPAL_URL = `${BASE_URL}/api/config/paypal`;
export const UPLOADS_URL = `${BASE_URL}/api/upload`;