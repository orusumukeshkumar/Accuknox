import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/custom/search";
import { LayoutHeaderBreadCrumbs } from "@/components/custom/layout";
import { dashboardBreadcrumbs } from "@/components/custom/breadcrumbsItems";
import { useState } from "react";
import AddWidgetSheet from "./add-widget-sheet/add-widget-sheet";
import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CSPMDashboard from "./components/cspm-dashboard";
import CWPPDashboard from "./components/cwpp-dashboard";
import RegistryScan from "./components/registry-scan";
import {  useSelector } from "react-redux";
import { WidgetItemProps } from "@/redux/dashboard/dashboard-types";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openTab, setOpenTab] = useState("cspm");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const allwidgets: any = useSelector((state) => state);
  const arr = [
    ...allwidgets.cspm,
    ...allwidgets.cwpp,
    ...allwidgets.registryscan,
  ];
  const filteredWidgets = arr.filter((widget) =>
    widget.widgetName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
    setDropdownVisible(true);
  };
  const handleSelectWidget = (selectedWidget: WidgetItemProps) => {
    setOpenTab(selectedWidget.category);
    setOpen({ open: true, isEdit: false });
    setDropdownVisible(false);
    
  };

  const [open, setOpen] = useState({ open: false, isEdit: false });
  const handleOpenWidget = () => {
    setOpen({ open: true, isEdit: false });
  };

  return (
    <div className="bg-blue-50">
      <div className="flex text-xl  justify-between  m-3 mb-2">
        <LayoutHeaderBreadCrumbs items={dashboardBreadcrumbs} />
        <div className="relative">
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
          {dropdownVisible && searchTerm && (
            <div className="absolute bg-white border border-gray-300  w-full">
              {filteredWidgets.map((widget, index) => (
                <div
                  key={index}
                  className="p-1 hover:bg-gray-200 cursor-pointer text-sm"
                  onClick={() => handleSelectWidget(widget)}
                >
                  {widget.widgetName} ({widget.category})
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Card className="lg:p-7 md:p-5 sm:p-4 bg-gray-300  h-full">
        <CardContent>
          <div className="justify-between mb-2  flex">
            <h2 className="font-semibold lg:text-xl md:text-lg sm:text-md">CNAPP Dashboard</h2>
            <Button
              size={"sm"}
              className="lg:h-9 md:h-7 sm:h-6 lg:rounded-xl bg-slate-400 hover:bg-slate-500 md:rounded-xl sm:rounded-lg lg:text-lg md:text-md sm:text-sm"
              onClick={handleOpenWidget}
            >
              <Plus className="lg:h-5 lg:w-5  md:h-4 md:w-4 sm:h-4 sm:w-4   mr-1 " />
              Add Widget
            </Button>
          </div>
          <h2 className="font-semibold lg:text-lg md:text-md sm:text-sm">CSPM Dashboard</h2>
          <CSPMDashboard />
          <h2 className="font-semibold lg:text-lg md:text-md sm:text-sm">CWPP Dashboard</h2>
          <CWPPDashboard />
          <h2 className="font-semibold lg:text-lg md:text-md sm:text-sm">Registry Scan</h2>
          <RegistryScan />
        </CardContent>
      </Card>
      <AddWidgetSheet value={openTab} open={open.open} setOpen={setOpen} />
    </div>
  );
};

export default Dashboard;
