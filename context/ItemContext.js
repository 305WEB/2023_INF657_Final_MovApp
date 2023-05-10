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

//  -------- MOVIE API

const API_key = "&api_key=930d005e225f22ad2d72eba7084db91b";

const base_url = "https://api.themoviedb.org/3";

let search_API =
  base_url + "/search/movie?api_key=930d005e225f22ad2d72eba7084db91b&query=";

// DEFAULT URL

let url =
  base_url +
  "/discover/movie?with_genres=18&primary_release_year=2022" +
  API_key;

let categories_All = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];

// --------- END MOVIE API

export const ItemProvider = ({ children }) => {
  // -------------------------------------------------MOVIE FETCH

  //-------
  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);

  //------------

  useEffect(() => {
    fetchMovie();
  }, [url_set]);

  // To Fetch the Movie Data
  const fetchMovie = async () => {
    const response = await fetch(url_set);
    const data = await response.json();
    setMovieData(data.results);
  };

  // --------------------------------------------------- END MOVIE FETCH

  const [itemListFB, setItemListFB] = useState([]);
  // const [itemEdit, setItemEdit] = useState({
  //   item: {},
  //   edit: false
  // });

  // CART ITEMS

  const [favoritesListFB, setfavoritesListFB] = useState([]);
  // const [cartEdit, setCartEdit] = useState({
  //   item: {},
  //   edit: false
  // });

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
        const favoritesListFBRef = collection(db, "movieList");
        const q = query(favoritesListFBRef, orderBy("title"), limit(10));
        const querySnapShot = await getDocs(q);
        const favoritesListFB = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }));
        setfavoritesListFB(favoritesListFB);
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

  //   ADD FAVE ITEM
  const addItemToFaveList = (newItem) => {
    try {
      const docRef = addDoc(collection(db, "movieList"), newItem);
      console.log("Document written: ", docRef.id);
      setfavoritesListFB((prefavoritesListFB) => [
        ...prefavoritesListFB,
        { id: docRef.id, data: newItem }
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT ITEM

  // const editItem = (id, image, title, price, quantity, description) => {
  //   console.log(id, image, title, price, quantity, description);
  //   setItemEdit(
  //     { id, image, title, price, quantity, description },
  //     { edit: true }
  //   );
  // };

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
      const updatedfavoritesListFB = favoritesListFB.map((item) => {
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
      setfavoritesListFB(updatedfavoritesListFB);
    } catch (err) {
      console.log(err);
    }
  };

  //  DELETE ITEM

  const deleteItem = (id) => {
    Alert.alert(
      "Delete Item",
      "Delete?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            try {
              const docRef = doc(db, "movieList", id);
              deleteDoc(docRef);
              setfavoritesListFB((preItemListFB) =>
                preItemListFB.filter((item) => item.id !== id)
              );
            } catch (err) {
              console.log(err);
            }
          },
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  };

  // DELETE
  // const deleteItem = (id) => {
  //   //---------------
  //   deleteDoc(doc(db, "movieList", id));
  //   setfavoritesListFB((preItemListFB) =>
  //     preItemListFB.filter((item) => item.id !== id)
  //   );
  // };

  // const deleteCartItem = async (id) => {
  //   //---------------
  //   await deleteDoc(doc(db, "cartList", id));
  //   setfavoritesListFB((prefavoritesListFB) =>
  //     prefavoritesListFB.filter((item) => item.id !== id)
  //   );
  // };

  return (
    <ItemContext.Provider
      value={{
        movieData,
        itemListFB,
        favoritesListFB,
        addItem,
        addItemToFaveList,
        updateItem,
        updateCartItem,
        editCartItem,
        deleteItem
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
