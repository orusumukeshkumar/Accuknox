import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { WidgetItemProps } from "@/redux/dashboard/dashboard-types";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AddRegistryWidget, RootState, UpdateRegistryWidget } from "@/redux/store";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Schema } from "@/redux/dashboard/dashboard-types";

export default function  RegistryScan(){
  const dispatch = useDispatch();
  const {registryscan}=useSelector((state:RootState)=>state);
  function handleClick() {
    form.reset();
  }

  function onSubmit(data: z.infer<typeof Schema>) {
    dispatch(AddRegistryWidget({...data,isActive:true,category:'registryscan'}));
    toast({
      variant: "default",
      title: "Widget Added Successfully"
    })
    form.reset()
    
  }

  const handleTodoUpdate=async (data: {isActive:boolean,name:string})=> {
    dispatch(UpdateRegistryWidget(data))
    toast({
      variant: "default",
      title: "Dashboard Updated Successfully"
    })
  }
  
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    mode: "onChange",
    defaultValues: {
      widgetName: "",
      widgetText: "",
    },
  }); 

  return (
    <div>
    <Card className=" w-full py-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="widgetName"
            render={() => (
              <FormItem className="flex flex-row">
                <FormLabel className="w-32 m-1 after:content-['*'] after:text-red-600 after:ml-1 ">
                  Widget Name
                </FormLabel>
                <div className="flex flex-col pt-0 m-0">
                <FormControl className="h-5">
                  <Input
                  
                    placeholder="Enter Widget Name"
                    {...form.register("widgetName")}
                  />
                </FormControl>
                <FormMessage className="ml-3" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="widgetText"
            render={() => (
              <FormItem className="flex flex-row">
                <FormLabel className=" w-32 m-1 after:content-['*'] after:text-red-600 after:ml-1 ">
                  Widget Text
                </FormLabel>
                <div className="flex flex-col">
                <FormControl className="h-5">
                  <Input
                    className=""
                    placeholder="Enter Widget Text"
                    {...form.register("widgetText")}
                  />
                </FormControl>
                <FormMessage className="ml-3" />
                </div>
              </FormItem>
            )}
          />
          <div className=" h-14  border-zinc-700 py-4 px-6 absolute bottom-0 right-0 flex items-center justify-end gap-4">
            <Button variant="default" onClick={handleClick} className="mr-2 ">
              Cancel
            </Button>
            <Button type="submit" >Confirm</Button>
          </div>
        </form>
      </Form>
    </Card>
    {registryscan?.map((object: WidgetItemProps, index: number) => {
      return (
        <Card className=" w-full h-20 " key={index}>
          <div className="flex flex-row">
          <div className={`w-5 h-5 m-2 rounded-sm flex items-center justify-center border ${object.isActive && 'bg-primary'} hover:cursor-pointer`} onClick={() => handleTodoUpdate({ isActive: object.isActive ,name:object.widgetName })}>
                      {object.isActive && <Check className=" text-white" />}
                  </div>
            <Input className="" readOnly value={object.widgetName} />
          </div>
          <Input className=" ml-3" readOnly value={object.widgetText} />
        </Card>
      );
    })}
    
  </div>
  )
}

