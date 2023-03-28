import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  Image,
  TextInput
} from "react-native";
import Data from "./Data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import styles from "./Styles";
import { Card } from "react-native-paper";

export default function Item({
  id,
  image,
  title,
  price,
  quantity,
  description,
  itemList,
  setItemList
}) {
  // Add Item Area

  const [editItemArea, setEditItemArea] = useState("none");

  // Add Item Area

  const [addItemArea, setAddItemArea] = useState("none");

  // State Var holds Edited item ID
  const [editingId, setEditingId] = useState(null);

  const [newName, setNewName] = useState(null);

  const [newDescription, setNewDescription] = useState(null);

  // Editing Input Fields back color
  const [backColor, setBackColor] = useState("transparent");

  // DELETE
  const deleteItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
  };

  // EDIT ITEM

  // EDIT

  const handleEdit = (id) => {
    setEditingId(id);
    setBackColor("cyan");
    setAddItemArea("flex");
  };

  //  EDIT SUBMIT

  // const handleSubmit = () => {
  //   const newData = data.map((item) =>
  //     item.id === editingId
  //       ? { ...item, description: newDescription, name: newName }
  //       : item
  //   );
  //   setData(newData);
  //   setEditingId(null);
  //   setNewDescription("");
  //   setNewName("");
  // };

  // const Item = ({ id, name, description }) => (
  //   <View style={styles.item}>
  //     <Text>{name}</Text>
  //     <Text>{description}</Text>
  //     <TouchableOpacity onPress={() => handleEdit(id)}>
  //       <Text>Edit</Text>
  //     </TouchableOpacity>
  //     <View style={{ height: 20 }}></View>
  //   </View>
  // );

  // const renderItem = ({ item }) => <Item {...item} />;

  // const AddNewItemArea = () => {
  //   setAddItemArea("flex");
  //   setAddItemAreaBtn("none");
  // };

  // const handleCloseAddItemArea = () => {
  //   setAddItemArea("none");
  //   setAddItemAreaBtn("flex");
  // };

  return (
    <>
      <Swipeable
        renderRightActions={() => (
          <View style={styles.deleteContainer}>
            <TouchableWithoutFeedback onPress={() => deleteItem(id)}>
              <MaterialCommunityIcons
                name="trash-can"
                size={34}
                color="black"
              />
            </TouchableWithoutFeedback>
          </View>
        )}
        renderLeftActions={() => (
          <View style={styles.editContainer}>
            <TouchableWithoutFeedback onPress={() => handleEdit(id)}>
              <AntDesign name="edit" size={34} color="black" />
            </TouchableWithoutFeedback>
          </View>
        )}
      >
        <TouchableHighlight
          underlayColor={"#lightgrey"}
          onPress={() => console.log("Item Selected", itemList)}
        >
          <>
            <Card>
              <View
                style={[
                  styles.mainContainerColumn1,
                  styles.card,
                  styles.elevation
                ]}
              >
                <Image
                  style={[styles.image]}
                  source={{ uri: `${image}` }}
                  dataSet={{ media: styles.image }}
                />

                <Text style={[styles.spaceAround3, styles.inputText]}>
                  {title}
                </Text>
              </View>
              <Text style={[styles.spaceAround3, styles.inputText]}>
                Units: {quantity}
              </Text>
              <Text style={[styles.spaceAround3, styles.inputText]}>
                Price: ${price}
              </Text>
              <View style={[styles.card]}>
                <Text style={[styles.spaceAround3, styles.description]}>
                  Description: {description}
                </Text>
              </View>
            </Card>
          </>
        </TouchableHighlight>
      </Swipeable>
      {/* <View style={{ display: addItemArea, marginTop: 30 }}>
        <TextInput
          value={newName}
          onChangeText={setNewName}
          placeholder="Name"
          style={{ backgroundColor: backColor }}
        />
        <TextInput
          value={newDescription}
          onChangeText={setNewDescription}
          placeholder="Description"
          style={{ backgroundColor: backColor }}
        />
        <View style={{ height: 100 }}></View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
}
