import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { FC } from 'react'

interface HeaderMainProps {
    breadcrumbData: {
        label: string,
        href?: string
    }[]
}

const HeaderMain: FC<HeaderMainProps> = ({ breadcrumbData }) => {
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbData.map((item, index) =>
                                index === breadcrumbData.length - 1 ? (
                                    <BreadcrumbItem key={index}>
                                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                ) : (
                                    <>
                                        <BreadcrumbItem className="hidden md:block">
                                            <BreadcrumbLink href={item.href}>
                                                {item.label}
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator className="hidden md:block" />
                                    </>
                                )
                            )}
                            {/* <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/store/store-rika">
                                    Dashboard
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            
                            <BreadcrumbItem>
                                <BreadcrumbPage>Category List</BreadcrumbPage>
                            </BreadcrumbItem> */}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
        </>
    )
}

export default HeaderMain
