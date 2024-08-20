import {createBrowserRouter} from "react-router-dom"

export const router=createBrowserRouter([
    {
        path:"/",
        lazy:async() => ({
            Component:(await import("@/pages/dashboard/dashboard")).default,
        }),
    },
    
])