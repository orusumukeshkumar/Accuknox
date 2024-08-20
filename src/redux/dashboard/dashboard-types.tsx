import { z } from "zod";

export interface widgetProps {
    open: boolean;
    setOpen: (open: { open: boolean; isEdit: boolean }) => void;
    value: string;
  }
  
export  interface WidgetItemProps {
    widgetName: string;
    widgetText: string;
    isActive: boolean;
    category:string;
  }

 export const Schema = z.object({
    widgetName: z.string()
        .nonempty("Widget Name is required")
        .regex(/^[a-zA-Z\s]+$/,"Widget Name should not contain special characters or numbers")
        .max(10,{message:"Widget Name must bt atmost 10 characters long"}),
    widgetText: z.string()
         .nonempty("Widget Text is required")
         .regex(/^[a-zA-Z\s]+$/,"Widget Text should not contain special characters or numbers")
         .max(20,{message:"Widget Text must be atmost 20 characters long"}),
  });