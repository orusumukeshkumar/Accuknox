import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { widgetProps } from "@/redux/dashboard/dashboard-types";
import CspmCategory from "./components/cspm-category";
import CWPPCategory from "./components/cwpp-category";
import RegistryScan from "./components/registry-scan-category";

export default function AddWidgetSheet({ open, setOpen, value }: widgetProps) {
  
  function handleOpen() {
    setOpen({ open: false, isEdit: false });
  }
  
  return (
    <div className="flex justify-end">
      <Sheet onOpenChange={handleOpen} open={open}>
        <SheetContent className="lg:max-w-[600px] md:max-w-[500px] sm:max-w-[400px] p-4 ">
          <SheetHeader className=" border-zinc-700 mb-4">
            <SheetTitle className="text-md">Add Widget</SheetTitle>
          </SheetHeader>
          <div className="m-0 gap-6  space-y-6">
            Personalize your dashboard by adding the following widget
            <div>
              <Tabs
                orientation="vertical"
                defaultValue={value}
                className="space-y-4 mt-10 "
              >
                <div className="w-full  pb-2">
                  <TabsList className="text-blue-500">
                    <TabsTrigger value="cspm" className="border-1">
                      CSPM
                    </TabsTrigger>
                    <TabsTrigger value="cwpp" className="border-1">
                      CWPP
                      </TabsTrigger>
                    <TabsTrigger value="registryscan"  className="border-1">
                      Registry Scan
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="cspm" className="space-y-4">
                    <CspmCategory />
                  </TabsContent>
                  <TabsContent value="cwpp" className="space-y-4">
                    <CWPPCategory />
                  </TabsContent>
                  <TabsContent value="registryscan" className="space-y-4">
                    <RegistryScan />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
