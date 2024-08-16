// import { UsersResponse } from '@/interfaces/user.interface';
// import { productService } from '@/services/product.service';
// import { userService } from '@/services/user.service';
// type page = number;
// export async function getProducts(page:page = 1) {
//     const { products, totalPages, currentPage } = await productService.fetchProducts(page);
//     return { products, totalPages, currentPage };
// }
// // export async function getUsers(page:page = 1) {
// //   const { data  } = await userService.fetchUsers(page);
// //   return data;
// // }
// // export async function getUsers(page: page = 1): Promise<UsersResponse> {
// //     const response = await userService.fetchUsers(page);
// //     return  response;
// // }
// export async function getUsers(page: number = 1): Promise<UsersResponse> {
//     const response = await userService.fetchUsers(page);
//     return response;
// }
// export async function getGroups(page: number = 1): Promise<UsersResponse> {
//     const response = await userService.fetchUsers(page);
//     return response;
// }

// export const default_responst = {
//     items: [],
//     current_page: 0,
//     has_more: false,
//     per_page: 0,
//     total_count: 0,
// }