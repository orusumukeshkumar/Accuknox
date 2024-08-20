import { useState } from 'react'
import AddWidgetSheet from '../add-widget-sheet/add-widget-sheet';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WidgetItemProps } from '@/redux/dashboard/dashboard-types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, UpdateRegistryWidget } from '@/redux/store';
import { ChartPie, Plus, Sparkle, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const  RegistryScan=()=>{
  const dispatch=useDispatch()
  const [open, setOpen] = useState({ open: false, isEdit: false });
  const openTab="registryscan";

  const {registryscan}=useSelector((state:RootState)=>state)
  const handleOpenWidget = () => {
    setOpen({ open: true, isEdit: false });
  };
  const handleTodoUpdate = async (data: {isActive:boolean,name:string}) => {
    dispatch(UpdateRegistryWidget(data));
    toast({
      variant: "default",
      title: "Dashboard Updated Successfully"
    })
  };
  return (
    <Card className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 bg-transparent border-0 border-transparent">
      
        {registryscan?.map((object: WidgetItemProps) => {
          if (object.isActive){
            return (
              <Card className="lg:h-[200px] md:h-[170px] sm:h-[100px]  border-4 border-gray-500  rounded-xl">
                <CardHeader className="mt-0 p-0 flex  h-3">
                  <CardTitle className="flex justify-end">
                    <div
                      className={` rounded-sm flex items-center justify-center  ${
                        object.isActive && "bg-white"
                      } hover:cursor-pointer`}
                      onClick={() =>
                        handleTodoUpdate({
                          isActive: object.isActive,
                          name: object.widgetName,
                        })
                      }
                    >
                      {object.isActive && <X className="lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 text-red-500" />}
                    </div>
                  </CardTitle>
                </CardHeader>
                <div className="flex flex-row ">
                  <div className="lg:my-6 md:my-4 sm:my-3 ml-5 w-1/3">
                      <ChartPie className="text-blue-400  lg:h-20 lg:w-20 h-16 w-16"/>
                  </div>
                  <div className="lg:m-4 md:m-3 sm:m-2 lg:my-6 md:my-4 sm:my-0 w-2/3">
                  <CardContent className="m-1 lg:text-2xl md:text-xl sm:text-lg flex flex-row"><Sparkle className="h-5 w-5 mt-1 mr-1 text-blue-600 text-5xl"/> {object.widgetName}</CardContent>
                  <CardFooter className="pl-3 lg:text-xl md:text-md sm:text-sm">{object.widgetText}</CardFooter>
                  </div>
                </div>
              </Card>
            );
          }
        })}
       <Card className="lg:h-[200px] md:h-[170px] sm:h-[100px]   p-5 border-4 border-gray-500 rounded-xl">
        
        <CardContent className="flex m-2 justify-center mx-auto lg:mt-12 md:mt-7 sm:mt-1 flex-row w-[110px]  border-gray-200 rounded hover:bg-gray-300 hover:text-accent-foreground">
          <Plus className="my-2 lg:w-[14px] md:w-[12px] sm:w-[10px] text-gray-500" />
          <Button
            type="button"
            variant="ghost"
            className="bg-tranparent  p-1 text-gray-500 lg:text-md md:text-sm sm:text-sm"
            onClick={handleOpenWidget}
          >
            Add Widget
          </Button>
        </CardContent>
      </Card>

      <AddWidgetSheet value={openTab} open={open.open} setOpen={setOpen} />
    </Card>
  )
}

export default RegistryScan