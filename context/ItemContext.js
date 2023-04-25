import { useState, useEffect, createContext } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc
} from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "../firebase";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [itemListFB, setItemListFB] = useState([]);
  const [itemEdit, setItemEdit] = useState({
    item: {},
    edit: false
  });

  // CART ITEMS

  const [cartListFB, setCartListFB] = useState([]);
  const [cartEdit, setCartEdit] = useState({
    item: {},
    edit: false
  });

  // USEEFFECT TRIGGERS fetchItem()

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemListFBRef = collection(db, "itemList");
        const q = query(itemListFBRef, orderBy("title"), limit(10));
        const querySnapShot = await getDocs(q);
        const itemListFB = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }));
        setItemListFB(itemListFB);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItem();
  }, []);

  // FETCH CART ITEMS

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartListFBRef = collection(db, "cartList");
        const q = query(cartListFBRef, orderBy("title"), limit(10));
        const querySnapShot = await getDocs(q);
        const cartListFB = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }));
        setCartListFB(cartListFB);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCartItems();
  }, []);

  //   ADD ITEM
  const addItem = (newItem) => {
    try {
      const docRef = addDoc(collection(db, "itemList"), newItem);
      console.log("Document written: ", docRef.id);
      setItemListFB((preItemListFB) => [
        ...preItemListFB,
        { id: docRef.id, data: newItem }
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  //   ADD CART ITEM
  const addItemToCart = (newItem) => {
    try {
      const docRef = addDoc(collection(db, "cartList"), newItem);
      console.log("Document written: ", docRef.id);
      setCartListFB((preCartListFB) => [
        ...preCartListFB,
        { id: docRef.id, data: newItem }
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT ITEM

  const editItem = (id, image, title, price, quantity, description) => {
    console.log(id, image, title, price, quantity, description);
    setItemEdit(
      { id, image, title, price, quantity, description },
      { edit: true }
    );
  };

  // EDIT CART ITEM

  const editCartItem = (id, quantity) => {
    console.log(id, quantity);
    setCartEdit({ id, quantity }, { edit: true });
  };

  // UPDATE ITEM

  const updateItem = async (id, updateItem) => {
    try {
      const docRef = doc(db, "itemList", id);
      await updateDoc(docRef, updateItem);
      const updatedItemListFB = itemListFB.map((item) => {
        if (item.id === id) {
          return {
            id,
            data: {
              ...item.data,
              ...updateItem
            }
          };
        } else {
          return item;
        }
      });
      setItemListFB(updatedItemListFB);
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE CART ITEM

  const updateCartItem = async (id, updateItem) => {
    try {
      const docRef = doc(db, "cartList", id);
      await updateDoc(docRef, updateItem);
      const updatedCartListFB = cartListFB.map((item) => {
        if (item.id === id) {
          return {
            id,
            data: {
              ...item.data,
              ...updateItem
            }
          };
        } else {
          return item;
        }
      });
      setCartListFB(updatedCartListFB);
    } catch (err) {
      console.log(err);
    }
  };

  //  DELETE ITEM

  // const deleteItem = (id) => {
  //   Alert.alert(
  //     "Delete Item",
  //     "Delete?",
  //     [
  //       {
  //         text: "Cancel",
  //         style: "cancel"
  //       },
  //       {
  //         text: "Delete",
  //         onPress: () => {
  //           try {
  //             const docRef = doc(db, "itemList", id);
  //             deleteDoc(docRef);
  //             setItemListFB((preItemListFB) =>
  //               preItemListFB.filter((item) => item.id !== id)
  //             );
  //           } catch (err) {
  //             console.log(err);
  //           }
  //         },
  //         style: "destructive"
  //       }
  //     ],
  //     { cancelable: false }
  //   );
  // };

  const deleteItem = async (id) => {
    //---------------
    await deleteDoc(doc(db, "itemList", id));
    setItemListFB((preItemListFB) =>
      preItemListFB.filter((item) => item.id !== id)
    );
  };

  const deleteCartItem = async (id) => {
    //---------------
    await deleteDoc(doc(db, "cartList", id));
    setCartListFB((preCartListFB) =>
      preCartListFB.filter((item) => item.id !== id)
    );
  };

  return (
    <ItemContext.Provider
      value={{
        itemListFB,
        cartListFB,
        addItem,
        addItemToCart,
        updateItem,
        updateCartItem,
        editItem,
        editCartItem,
        itemEdit,
        deleteItem,
        deleteCartItem,
        addItemToCart
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
