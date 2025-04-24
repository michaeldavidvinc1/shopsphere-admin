import CategoryIndex from "@/pages/category";
import CreateCategoryPage from "@/pages/category/create";
import { Route, Routes } from "react-router-dom";

export default function CategoryRoute(){
    return (
        <Routes>
            <Route path="/" element={<CategoryIndex />}/>
            <Route path="create" element={<CreateCategoryPage />}/>
        </Routes>
    )
}