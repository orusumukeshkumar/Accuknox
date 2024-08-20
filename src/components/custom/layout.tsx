import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"


interface ItemsSchema {
    item: string,
    address: string
}
export const LayoutHeaderBreadCrumbs = ({ items }: { items: ItemsSchema[] }) => {
    return (
        <Breadcrumb className="opacity-80 mt-2 font-semibold ">
            <BreadcrumbList>
                {
                    items.map((object: ItemsSchema, idx: number) => {
                        if (idx < items.length - 1) {
                            return <BreadcrumbList key={idx}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="lg:text-xl md:text-lg sm:text-md" href={object.address}>{object.item}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <Slash className="-rotate-12" />
                                </BreadcrumbSeparator>
                            </BreadcrumbList>
                        }
                    })
                }
                <BreadcrumbItem className="lg:text-xl md:text-lg sm:text-md">
                    <BreadcrumbPage>{items[items.length - 1].item}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}