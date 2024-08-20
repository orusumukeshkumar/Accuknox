import { Outlet } from "react-router-dom";

export default function AppShell() {
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 h-full`}
      >
        <div className="bg-card border-b-1 border-black py-3 px-8 ml-auto flex items-center justify-end space-x-4">

         
        </div>
        <div className="py-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
