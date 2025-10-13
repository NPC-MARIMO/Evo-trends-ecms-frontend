export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const filterOptions = {
  category: [{ id: "Jhumka", label: "Jhumka" },
  { id: "Maang Teek", label: "Maang Teek" },
  { id: "Earings", label: "Earings" },
  { id: "Necklace", label: "Necklace" },
  { id: "Pendant", label: "Pendant" },
  { id: "Ring", label: "Ring" },]
};

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "Jhumka", label: "Jhumka" },
      { id: "Maang Teek", label: "Maang Teek" },
      { id: "Earings", label: "Earings" },
      { id: "Necklace", label: "Necklace" },
      { id: "Pendant", label: "Pendant" },
      { id: "Ring", label: "Ring" },
    ],
  },
 
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "Jhumka",
    label: "Jhumka",
    path: "/shop/home",
  },
  {
    id: "Maang Teek",
    label: "Maang Teek",
    path: "/shop/home",
  },
  {
    id: "Earings",
    label: "Earings",
    path: "/shop/home",
  },{
    id: "Necklace",
    label: "Necklace",
    path: "/shop/home",
  },{
    id: "Pendant",
    label: "Pendant",
    path: "/shop/home", 
  },
  {
    id: "Ring",
    label: "Ring",
    path: "/shop/home",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Smart watch",
  women: "Safayar Full Lower",
  kids: "Leather Belt",
  accessories: "Self Adhesive-Tape",
  footwear: "3 inch 50 meter Transparents",
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
