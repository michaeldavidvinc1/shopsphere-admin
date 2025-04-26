export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/",
  CATEGORY: "/category",
  CREATE_CATEGORY: "/category/create",
  UPDATE_CATEGORY: (slug: string) => `/category/${slug}`
};

export const API_URL = {
  LOGIN: "/auth/login",
  CATEGORY_GETALL: "/admin/category",
  CATEGORY_CREATE: "/admin/category/create",
  GET_SINGLE_CATEGORY: (slug: string) =>  `/admin/category/${slug}`,
  UPDATE_CATEGORY: (slug: string) =>  `/admin/category/${slug}`,
};

export const CategoryListBreadcrumb = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
  },
  {
    label: "Category List",
  },
];

export const CreateCategoryBreadcrumb = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
  },
  {
    label: "Category List",
    href: ROUTES.CATEGORY,
  },
  {
    label: "Create Category",
  },
];

export const UpdateCategoryBreadcrumb = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
  },
  {
    label: "Category List",
    href: ROUTES.CATEGORY,
  },
  {
    label: "Update Category",
  },
];
