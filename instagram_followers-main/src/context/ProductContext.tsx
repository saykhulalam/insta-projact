"use client";
import { createContext, useState, useContext, ReactNode } from "react";
import { productType } from "../type";
import { toast } from "react-toastify";
interface ProductContextType {
  products: productType[];
  loading: boolean;
  addProduct: any;
  updateProduct: any;
  deleteProduct: any;
  storeDetails: any;
  addStoreDetails: any;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [storeDetails, setStoreDetails] = useState<any>({});

  console.log(products, "products");

  const addStoreDetails = (product: any) => {
    // I will have an object if there is already data inside the object then update the data or push new data.
    if (Object.keys(storeDetails).length) {
      setStoreDetails((prev: any) => ({ ...prev, ...product }));
    } else {
      setStoreDetails(product);
    }
  };

  const addProduct = (product: any) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateProduct = async (id: string, updatedProduct: any) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? updatedProduct : product))
    );
  };

  const deleteProduct = async (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
    toast.error("Product deleted successfully");
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        storeDetails,
        addStoreDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
