import { createContext, useContext, useState, useEffect } from "react";
import categories from "../API/Category";
import ProductsAPI from "../API/ProductsAPI";
import { useParams } from "react-router-dom";
import cuponCode from "../API/CuponCode";
import BannerData from "../API/BannerData";
import UserDetails from "../API/UserDetails";
// import end ---------------------------------------------------------------------------->

const ProductContext = createContext();
const AllCategory = categories;
const banner = BannerData;
const cuponData = cuponCode;
const userData = UserDetails;

const ProductProvider = ({ children }) => {
  // ----------------------------------------------------------------------------------------
  // ----------------------------------- Common States ------------------------------------->
  // ----------------------------------------------------------------------------------------
  // global store data ---------------------->
  const [allData, setAllData] = useState(ProductsAPI);

  // for modal management ------------------->
  const [openModal, setOpenModal] = useState(false);

  // const [getId, setGetId] = useState();
  const [modalData, setModalData] = useState([]);

  // for category filter ------------------- >
  const [shopData, setShopData] = useState(allData);

  // for add to cart ------------------------>
  const [cart, setCart] = useState([]);

  // for add to wishlist -------------------->
  const [wish, setWish] = useState([]);

  // to pass id ----------------------------->
  const { id } = useParams();

  // to manage cart quantity stage ---------->
  const [quantity, setQuantity] = useState();

  // to manage cart quantity stage ---------->
  const [total, setTotal] = useState(0);

  // to get cupon data ---------------------->
  const [cupon, setCupon] = useState();
  const [cuponDiscount, setCuponDiscount] = useState(0);

  // for featured data ---------------------->
  const [featured, setFeatured] = useState([]);

  // for on sale data ----------------------->
  const [sale, setSale] = useState([]);

  // for login and sihnup ------------------->
  const [login, setLogin] = useState();
  const [user, setUser] = useState(userData);

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

  // function to find the id ------------->

  const FindModalData = (id) => {
    const MData = allData.find((item) => {
      return item.id === id;
    });
    setModalData(MData);
  };

  useEffect(() => {}, [modalData]);
  // <---------------------------- function to find the id
  //******************************************************
  // add to cart function ------------------------------->

  const addCart = (id) => {
    const findDuplicate = cart.find((items) => items.id === id);
    if (!findDuplicate) {
      const filterData = allData.find((items) => items.id === id);
      const newData = { ...filterData, quantity: 1 };
      setCart((curElem) => [...curElem, newData]);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    // get from localStorage---->
    const localCart = JSON.parse(localStorage.getItem("cartData"));
    if (localCart && localCart.length > 0) {
      setCart(localCart);
    }
  }, []);

  useEffect(() => {
    console.log("cart item", cart);
    // save to localStorage ---->
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

  // <-------------------------------- add to cart function
  // ******************************************************
  // cupon management function --------------------------->
  const handleOnChange = (event) => {
    setCupon(event.target.value);
  };

  const matchCupon = (code) => {
    const findCupon = cuponData.find((item) => item.code === code);
    if (!findCupon) {
      console.log("cupon not matched");
      setCuponDiscount(0);
    } else {
      console.log("cupon succesfully matched");
      const cuponDiscount = findCupon.value;
      setCuponDiscount(cuponDiscount);
    }
  };

  // <--------------------------- cupon management function
  // ******************************************************
  // cart total price management function ---------------->
  const getSubtotal = () => {
    const subTotal = cart.reduce((acc, obj) => {
      return acc + obj.price * obj.quantity;
    }, 0);
    const updateCart = subTotal.toFixed(2);
    setTotal(updateCart);
  };

  const totalSave = cart.reduce((acc, obj) => {
    return acc + (obj.price * obj.quantity - obj.offerPrice * obj.quantity);
  }, 0);
  const cuponDis = (total * cuponDiscount) / 100;
  const offerDiscount = cuponDis.toFixed(2);
  const finalTotalSave = (totalSave + cuponDis).toFixed(2);
  const checkOutPrice = (total - finalTotalSave).toFixed(2);

  useEffect(() => {
    getSubtotal();
  });

  // <---------------- cart total price management  function
  // *******************************************************
  // cart quantity management function -------------------->

  const incr = (id) => {
    const quantityIncr = cart.map((curElem) =>
      curElem.id === id
        ? { ...curElem, quantity: curElem.quantity + 1 }
        : curElem
    );
    setCart(quantityIncr);
    getSubtotal();
  };

  const decr = (id) => {
    const quantityDecr = cart.map((curElem) =>
      curElem.id === id
        ? { ...curElem, quantity: curElem.quantity - 1 }
        : curElem
    );
    setCart(quantityDecr);
    getSubtotal();
  };

  // <-------------------- cart quantity management  function
  // ********************************************************
  // remove single function -------------------------------->
  const removeSingle = (id) => {
    const removeItem = cart.filter((items) => items.id !== id);
    setCart(removeItem);
  };

  // <-------------------------------- remove single function
  // ********************************************************
  // add to wish function ---------------------------------->
  const addWish = (id) => {
    const findWish = wish.find((item) => item.id === id);
    if (!findWish) {
      const addWishQuantity = allData.find((items) => items.id === id);
      setWish((item) => [...item, addWishQuantity]);
    } else {
      const incrWish = wish.map((item) => (item.id === id ? item : item));
      setWish(incrWish);
    }
  };

  // remove single wishlist item

  const removeSingleWish = (id) => {
    const finstWishItem = wish.filter((item) => item.id !== id);
    setWish(finstWishItem);
  };

  useEffect(() => {
    const localWish = JSON.parse(localStorage.getItem("wishItem"));
    if (localWish && localWish.length > 0) {
      setWish(localWish);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishItem", JSON.stringify(wish));
  }, [wish]);

  // <----------------------------------- add to cart function
  // ----------------------------------------------------------------------------------------
  // --------------------------------- Basic Functions End --------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------ Category Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  // manage navigation menu category filter ---------------->
  const NavFilter = (category) => {
    const filCate = allData.filter((items) => items.category === category);
    setShopData(filCate);
  };
  // <---------------- manage navigation menu category filter
  // manage sale & featured data ---------------------------->

  // feature data ----->
  const getFeature = () => {
    const newFeature = allData.filter((item) => item.featured === true);
    setFeatured(newFeature);
    localStorage.setItem("featuredData", JSON.stringify(newFeature));
  };

  useEffect(() => {
    const storedFeatureData = localStorage.getItem("featuredData");
    if (storedFeatureData) {
      const parsedFeaturedData = JSON.parse(storedFeatureData);
      setFeatured(parsedFeaturedData);
    } else {
      getFeature();
    }
  }, []);

  // sale data ------>

  const saleData = () => {
    const getSale = allData.filter((item) => item.saleAvailable === true);
    setSale(getSale);
  };

  useEffect(() => {
    saleData();
  }, []);

  // <---------------------------- manage sale & featured data
  // ----------------------------------------------------------------------------------------
  // ------------------------------ Category Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ----------------------------- Shop Page Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  //Category Filter Function Start --------------------->
  const filterByCategory = (category) => {
    const filteredCategory = allData.filter((item) => {
      return item.category === category;
    });
    setShopData(filteredCategory);
  };
  // <-------------------- Category Filter Function Start
  // ----------------------------------------------------------------------------------------
  // ----------------------------- Shop Page Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // -------------------------------- Login Data Management -------------------------------->
  // ----------------------------------------------------------------------------------------
  let authLink = "";
  const CheckAuth = (userName) => {
    const authdata = login.find((item) => item.userName === userName);

    if (!authdata) {
      authLink = "/login";
    } else {
      authLink = "/user";
    }
  };

  // ----------------------------------------------------------------------------------------
  // -------------------------------- Login Data Management -------------------------------->
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
        allData,
        addWish,
        wish,
        incr,
        decr,
        total,
        removeSingle,
        cupon,
        handleOnChange,
        matchCupon,
        checkOutPrice,
        finalTotalSave,
        cuponDiscount,
        offerDiscount,
        removeSingleWish,
        featured,
        sale,
        banner,
        authLink,
        CheckAuth,
        user
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
