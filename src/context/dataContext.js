import { createContext, useState } from "react";
import { content } from "./../data";

export const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const categories = ["products", "education", "entertainment"];
  const [productState, setproductState] = useState(
    content.filter((item) => item.category === categories[0])
  );
  const [educationState, seteducationState] = useState(
    content.filter((item) => item.category === categories[1])
  );
  const [entertainmentState, setentertainmentState] = useState(
    content.filter((item) => item.category === categories[2])
  );
  const [editItemInfo, seteditItemInfo] = useState({
    id: null,
    Title: "",
    category: "",
    Desc: "",
    Poster: "",
  });

  const [selectedItem, setselectedItem] = useState([]);
  const [watchHistory , setWatchHistory ] = useState([]);

  const moveItem = (from, to, id) => {
    let item;
    switch (from) {
      case "education":
        item = educationState.find((item) => item.id === id);
        seteducationState(educationState.filter((item) => item.id !== id));
        break;
      case "products":
        item = productState.find((item) => item.id === id);
        setproductState(productState.filter((item) => item.id !== id));
        break;
      case "entertainment":
        item = entertainmentState.find((item) => item.id === id);
        setentertainmentState(
          entertainmentState.filter((item) => item.id !== id)
        );
        break;
      default:
        break;
    }
    switch (to) {
      case "education":
        item.id = educationState.length + 1;
        item.category = "education";
        seteducationState([...educationState, item]);
        break;
      case "products":
        item.id = productState.length + 1;
        item.category = "products";
        setproductState([...productState, item]);
        break;
      case "entertainment":
        item.id = entertainmentState.length + 1;
        item.category = "entertainment";
        setentertainmentState([...entertainmentState, item]);
        break;
      default:
        break;
    }
  };

  const deleteItem = (cat, id) => {
    switch (cat) {
      case "education":
        seteducationState(educationState.filter((item) => item.id !== id));
        break;
      case "products":
        setproductState(productState.filter((item) => item.id !== id));
        break;
      case "entertainment":
        setentertainmentState(
          entertainmentState.filter((item) => item.id !== id)
        );
        break;
      default:
        break;
    }
  };

  const editItem = (item) => {
    switch (item.category) {
      case "education":
        const edu = educationState.map((obj) => {
          if (obj.id === item.id) {
            return item;
          }
          return obj;
        });
        seteducationState(edu);
        break;
      case "products":
        const pro = productState.map((obj) => {
          if (obj.id === item.id) {
            return item;
          }
          return obj;
        });
        setproductState(pro);
        break;
      case "entertainment":
        const ent = entertainmentState.map((obj) => {
          if (obj.id === item.id) {
            return item;
          }
          return obj;
        });
        setentertainmentState(ent);
        break;
      default:
        break;
    }
  };

  const addItem = (cat, item) => {
    switch (cat) {
      case "education":
        seteducationState([...educationState, item]);
        break;
      case "products":
        setproductState([...productState, item]);
        break;
      case "entertainment":
        setentertainmentState([...entertainmentState, item]);
        break;
      default:
        break;
    }
  };
  return (
    <DataContext.Provider
      value={{
        categories,
        watchHistory,
        selectedItem,
        editItemInfo,
        productState,
        educationState,
        entertainmentState,
        seteditItemInfo,
        setselectedItem,
        setWatchHistory,
        deleteItem,
        moveItem,
        addItem,
        editItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
