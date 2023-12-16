import { createContext, useContext, useState, useEffect } from "react";
import categories from "../API/Category";
import ProductsAPI from "../API/ProductsAPI";
import { useParams } from "react-router-dom";
// import end ------------------------------------------------->

const ProductContext = createContext();
const AllCategory = categories;
const AllData = ProductsAPI;

const ProductProvider = ({ children }) => {
  // ----------------------------------------------------------------------------------------
  // ----------------------------------- Common States ------------------------------------->
  // ----------------------------------------------------------------------------------------
  // for modal management -------- >
  const [openModal, setOpenModal] = useState(false);
  // const [getId, setGetId] = useState();
  const [modalData, setModalData] = useState([]);
  // for category filter --------- >
  const [shopData, setShopData] = useState(AllData);

  // for add to cart ------------- >
  const [cart, setCart] = useState([]);

  // for add to wishlist --------- >
  const [wish, setWish] = useState([]);

  // to pass id ------------------->
  const {id} = useParams();

  // ----------------------------------------------------------------------------------------
  // ----------------------------------- Common States ------------------------------------->
  // ----------------------------------------------------------------------------------------
  //*****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------- Basic Functions Start --------------------------------->
  // ----------------------------------------------------------------------------------------
  // Open Quick Modal Start -------------->
  const ToggleModal = (id) => {
    setOpenModal(!openModal);
    FindModalData(id);
  };

  // <---------------- Open Quick Modal End

  // function to find the id -------------->

  const FindModalData = (id) => {
    const MData = AllData.find((item) => {
      return item.id === id;
    });
    setModalData(MData);
  };

  useEffect(() => {}, [modalData]);
  // <---------------- function to find the id

  // add to cart function ------------------->

  const addCart = (id) => {
    const findDuplicate = cart.find((items) => items.id === id);
if(!findDuplicate){
  const filterData = AllData.find((items) => items.id === id);
  const newData = {...filterData, quantity: 1}
  setCart((curElem) => [...curElem, newData]);
  // console.log("new cart", cart)
} else {
  const updatedCart = cart.map((item)=>item.id === id ? ({...item, quantity:item.quantity + 1}): item)
  setCart(updatedCart )
}
  };
  useEffect(() => {
    // console.log("cart item", cart);
  }, [cart]);

  // <-------------------- add to cart function
  // ******************************************
  // add to wish function ------------------->
const addWish = (id)=>{


const filterWish = AllData.find((items)=>items.id === id)
setWish((curElem)=>[...curElem, filterWish])
} 
useEffect(()=>{
  console.log("wish items",wish)
},[wish])

  // <-------------------- add to cart function
  // ----------------------------------------------------------------------------------------
  // --------------------------------- Basic Functions End --------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------ Category Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  // manage navigation menu category filter ---------------->
  const NavFilter = (category) => {
    const filCate = AllData.filter((items) => items.category === category);
    setShopData(filCate);
  };
  // <---------------- manage navigation menu category filter
  // ----------------------------------------------------------------------------------------
  // ------------------------------ Category Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ----------------------------- Shop Page Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  //Category Filter Function Start --------------------->
  const filterByCategory = (category) => {
    const filteredCategory = AllData.filter((item) => {
      return item.category === category;
    });
    setShopData(filteredCategory);
    console.log("filterCategoy", filteredCategory);
  };
  // <-------------------- Category Filter Function Start
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
        NavFilter,
        modalData,
        addCart,
        cart,
        AllData,
        addWish,
        wish
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
