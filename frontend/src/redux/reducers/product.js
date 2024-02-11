import { createReducer } from "@reduxjs/toolkit";

// Define action type constants
const productCreateRequest = "productCreateRequest";
const productCreateSuccess = "productCreateSuccess";
const productCreateFail = "productCreateFail";
const getAllProductsShopRequest = "getAllProductsShopRequest";
const getAllProductsShopSuccess = "getAllProductsShopSuccess";
const getAllProductsShopFailed = "getAllProductsShopFailed";
const deleteProductRequest = "deleteProductRequest";
const deleteProductSuccess = "deleteProductSuccess";
const deleteProductFailed = "deleteProductFailed";
const getAllProductsRequest = "getAllProductsRequest";
const getAllProductsSuccess = "getAllProductsSuccess";
const getAllProductsFailed = "getAllProductsFailed";
const clearErrors = "clearErrors";

// Initial state
const initialState = {
  isLoading: true,
};

// Reducer
export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productCreateRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(productCreateSuccess, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase(productCreateFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase(getAllProductsShopRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllProductsShopSuccess, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(getAllProductsShopFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteProductRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteProductSuccess, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase(deleteProductFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(getAllProductsRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllProductsSuccess, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    })
    .addCase(getAllProductsFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});

//back
// import { createReducer } from "@reduxjs/toolkit";

// // Define action types as string constants
// const productCreateRequest = "productCreateRequest";
// const productCreateSuccess = "productCreateSuccess";
// const productCreateFail = "productCreateFail";
// const getAllProductsShopRequest = "getAllProductsShopRequest";
// const getAllProductsShopSuccess = "getAllProductsShopSuccess";
// const getAllProductsShopFailed = "getAllProductsShopFailed";
// const clearErrors = "clearErrors";

// const initialState = {
//   isLoading: true,
// };

// export const productReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(productCreateRequest, (state) => {
//       state.isLoading = true;
//     })
//     .addCase(productCreateSuccess, (state, action) => {
//       state.isLoading = false;
//       state.product = action.payload;
//       state.success = true;
//     })
//     .addCase(productCreateFail, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//       state.success = false;
//     })
//     .addCase(getAllProductsShopRequest, (state) => {
//       state.isLoading = true;
//     })
//     .addCase(getAllProductsShopSuccess, (state, action) => {
//       state.isLoading = false;
//       state.products = action.payload;
//     })
//     .addCase(getAllProductsShopFailed, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     })

//     .addCase(clearErrors, (state) => {
//       state.error = null;
//     });
// });

//this is
