import Datatable from '@/components/datatable';
import HeaderMain from '@/components/header-main'
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CategoryListBreadcrumb, ROUTES } from '@/constant'
import { useGetAllCategoryQuery } from '@/services/category.service';
import { useEffect, useMemo, useState } from 'react';
import { columns } from './column';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const CategoryIndex = () => {
  // State untuk filter
  const [filters, setFilters] = useState({
    page: 1,
    size: 10,
    name: "",
    debouncedName: "",
});

useEffect(() => {
    const timeout = setTimeout(() => {
        setFilters((prev) => ({ ...prev, debouncedName: prev.name }));
    }, 500);

    return () => clearTimeout(timeout);
}, [filters.name]);

const { data: dataCategory, isLoading: getCategoryLoading } = useGetAllCategoryQuery({
    page: filters.page,
    size: filters.size,
    name: filters.debouncedName,
});

// Menghitung total halaman (gunakan `useMemo` biar gak dihitung ulang tiap render)
const totalPage = useMemo(() => dataCategory?.data?.paging?.total_page || 1, [dataCategory]);

// Function untuk update filter dengan aman
const updateFilter = (key: keyof typeof filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
};

// Reset ke page 1 jika name atau status berubah
useEffect(() => {
    updateFilter("page", 1);
}, [filters.name]);
  return (
    <>
      <HeaderMain breadcrumbData={CategoryListBreadcrumb} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-3xl font-bold tracking-tight">Category List</h1>
        {/* Filter */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            {/* Show Size */}
            <div className="flex gap-2 items-center">
              <p>Show</p>
              <Select onValueChange={(value) => updateFilter("size", Number(value))}>
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder={filters.size.toString()} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search & Tambah */}
          <div className="flex gap-4 items-center">
            <Input
              placeholder="Search category"
              value={filters.name}
              onChange={(e) => updateFilter("name", e.target.value)}
            />
            <button className="bg-primary text-white px-2 py-2 rounded-full">
              <Link to={ROUTES.CREATE_CATEGORY}>
                <Plus className="w-4 h-4" />
              </Link>
            </button>
          </div>
        </div>

        {/* Table */}
        <Card>
          <CardContent className="pt-6">
            {getCategoryLoading ? (
              <h1>Loading...</h1>
            ) : (
              <Datatable
                data={dataCategory?.data?.data}
                columns={columns}
                page={filters.page}
                totalPage={totalPage}
                setPage={(newPage) => updateFilter("page", newPage)}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default CategoryIndex
