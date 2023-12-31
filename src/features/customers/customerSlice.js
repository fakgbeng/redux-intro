import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

// const customerSlice = createSlice({
//   name: "customer",
//   initialState,
//   reducers: {
//     createCustomer: {
//       prepare(fullName, nationalId) {
//         return {
//           payload: {
//             fullName,
//             nationalId,
//             createdAt: new Date().toISOString(),
//           },
//         };
//       },
//       reducer(state, action) {
//         state.fullName = action.payload.fullName;
//         state.nationalId = action.payload.nationalId;
//         state.createdAt = action.payload.createdAt;
//       },
//     },
//     updateName(state, action) {
//       state.fullName = action.payload;
//     },
//   },
// });
// export const { createCustomer, updateName } = customerSlice.actions;
// export default customerSlice.reducer;

export default function customerReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: payload.fullName,
        nationalID: payload.nationalID,
        createdAt: payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: payload };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}
