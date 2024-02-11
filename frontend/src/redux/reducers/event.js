import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  event: null,
  events: [],
  allEvents: [],
  error: null,
  success: false,
  message: null,
};

// Define action types
const eventCreateRequest = "eventCreateRequest";
const eventCreateSuccess = "eventCreateSuccess";
const eventCreateFail = "eventCreateFail";
const getAlleventsShopRequest = "getAlleventsShopRequest";
const getAlleventsShopSuccess = "getAlleventsShopSuccess";
const getAlleventsShopFailed = "getAlleventsShopFailed";
const deleteeventRequest = "deleteeventRequest";
const deleteeventSuccess = "deleteeventSuccess";
const deleteeventFailed = "deleteeventFailed";
const getAlleventsRequest = "getAlleventsRequest";
const getAlleventsSuccess = "getAlleventsSuccess";
const getAlleventsFailed = "getAlleventsFailed";
const clearErrors = "clearErrors";

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(eventCreateRequest, (state) => {
      state.isLoading = true;
      state.success = false;
      state.error = null;
    })
    .addCase(eventCreateSuccess, (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase(eventCreateFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase(getAlleventsShopRequest, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getAlleventsShopSuccess, (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    .addCase(getAlleventsShopFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteeventRequest, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(deleteeventSuccess, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase(deleteeventFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(getAlleventsRequest, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getAlleventsSuccess, (state, action) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    })
    .addCase(getAlleventsFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const eventReducer = createReducer(initialState, {
//   eventCreateRequest: (state) => {
//     state.isLoading = true;
//   },
//   eventCreateSuccess: (state, action) => {
//     state.isLoading = false;
//     state.event = action.payload;
//     state.success = true;
//   },
//   eventCreateFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.success = false;
//   },

//   // get all events of shop
//   getAlleventsShopRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAlleventsShopSuccess: (state, action) => {
//     state.isLoading = false;
//     state.events = action.payload;
//   },
//   getAlleventsShopFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // delete event of a shop
//   deleteeventRequest: (state) => {
//     state.isLoading = true;
//   },
//   deleteeventSuccess: (state, action) => {
//     state.isLoading = false;
//     state.message = action.payload;
//   },
//   deleteeventFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // get all events
//   getAlleventsRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAlleventsSuccess: (state, action) => {
//     state.isLoading = false;
//     state.allEvents = action.payload;
//   },
//   getAlleventsFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   clearErrors: (state) => {
//     state.error = null;
//   },
// });
