import { createSlice, configureStore } from "@reduxjs/toolkit";
import { persistStore,  } from "redux-persist";
import { initialState } from "@/data/dashboard-items";
import { toast } from "@/components/ui/use-toast";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    
    AddCSPMWidget: (state, action) => {
      const widgetExists=state.cspm.some(widget=>widget.widgetName === action.payload.widgetName);
      if(!widgetExists){
        state.cspm.push(action.payload);
      }
      else{
        toast({
          variant:"default",
          title:"Widget Already Exists"
        })
      }
    },
    UpdateCSPMWidget: (state, action) => {
      state.cspm = state.cspm.map((object) => {
        if (object.widgetName === action.payload.name) {
          return { ...object, isActive: !action.payload.isActive };
        } else {
          return { ...object };
        }
      });
    },
    AddCWPPWidget: (state, action) => {
      const widgetExists=state.cwpp.some(widget=>widget.widgetName === action.payload.widgetName);
      if(!widgetExists){
        state.cwpp.push(action.payload);
      }
      else{
        toast({
          variant:"default",
          title:"Widget Already Exists"
        })
      }
      
    },
    UpdateCWPPWidget: (state, action) => {
      state.cwpp = state.cwpp.map((object) => {
        if (object.widgetName === action.payload.name) {
          return { ...object, isActive: !action.payload.isActive };
        } else {
          return { ...object };
        }
      });
    },
    AddRegistryWidget: (state, action) => {
      const widgetExists=state.registryscan.some(widget=>widget.widgetName === action.payload.widgetName);
      if(!widgetExists){
        state.registryscan.push(action.payload);
      }
      else{
        toast({
          variant:"default",
          title:"Widget Already Exists"
        })
      }
      
    
    },
    UpdateRegistryWidget: (state, action) => {
      state.registryscan = state.registryscan.map((object) => {
        if (object.widgetName === action.payload.name) {
          return { ...object, isActive: !action.payload.isActive };
        } else {
          return { ...object };
        }
      });
    },

    
  },
});

export const {
  AddCSPMWidget,
  AddCWPPWidget,
  AddRegistryWidget,
  UpdateCSPMWidget,
  UpdateCWPPWidget,
  UpdateRegistryWidget
} = dashboardSlice.actions;

const store = configureStore({
  reducer: dashboardSlice.reducer,
});

const persistor = persistStore(store);

export { persistor, store };
export type RootState = ReturnType<typeof store.getState>