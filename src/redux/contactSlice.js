import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const contactAdapter = createEntityAdapter();

 const contactSlice = createSlice({
  name: "contact",
  initialState: contactAdapter.getInitialState(),
  reducers: {
    contactAdded: contactAdapter.addOne,
    contactDelete:contactAdapter.removeOne,
    contactDeleteAll:contactAdapter.removeAll,
    contactEdit:contactAdapter.updateOne,
  },
});

// Action creators are generated for each case reducer function

export const contactSelectors = contactAdapter.getSelectors((state) => state.contact)
export const { contactAdded,contactDelete,contactDeleteAll,contactEdit } = contactSlice.actions;
export default contactSlice.reducer;
