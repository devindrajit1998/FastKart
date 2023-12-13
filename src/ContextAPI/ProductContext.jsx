import { createContext, useContext, useState } from "react";
import categories from "../API/Category";
import ProductsAPI from "../API/ProductsAPI";
// import end ------------------------------------------------->

const ProductContext = createContext();
const AllCategory = categories;
const AllData = ProductsAPI;

const ProductProvider = ({ children }) => {
  // ----------------------------------------------------------------------------------------
  // ------------------------------- Basic Functions Start --------------------------------->
  // ----------------------------------------------------------------------------------------
  // Open Quick Modal Start -------------->
  const [openModal, setOpenModal] = useState(false);
  const [getId, setGetId] = useState();
  const [modalData, setModalData]= useState()

  const ToggleModal = (id) => {
    setOpenModal(!openModal);
    setGetId(id);
    FindModalData(id)
    console.log('modalData', modalData)
  };

  // <---------------- Open Quick Modal End
  // function to find the id --------------->

  const FindModalData = (id)=>{
    const ModalData = AllData.find((item)=>{
        return item.id === id
    })
    setModalData(ModalData)
  }

  // ----------------------------------------------------------------------------------------
  // --------------------------------- Basic Functions End --------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------ Category Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // console.log(AllCategory)
  // ----------------------------------------------------------------------------------------
  // ------------------------------ Category Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ----------------------------- Shop Page Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  const [shopData, setShopData] = useState(AllData);

  //Category Filter Function Start --------------------->
  const filterByCategory = (category) => {
    const filteredCategory = AllData.filter((item) => {
      return item.category === category;
    });
    setShopData(filteredCategory);
    console.log("filterCategoy", filteredCategory);
  };

  // ----------------------------------------------------------------------------------------
  // ----------------------------- Shop Page Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  return (
    <ProductContext.Provider
      value={{
        openModal,
        ToggleModal,
        AllCategory,
        shopData,
        filterByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductProvider = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProductProvider };
