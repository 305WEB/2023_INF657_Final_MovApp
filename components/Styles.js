import StyleSheet from "react-native-media-query";
import Constants from "expo-constants";

const { ids, styles } = StyleSheet.create({
  mainContainerColumn1: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    flex: 1
    // maxHeight: 150,
    // height: 150
  },
  image: {
    // flex: 1,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "lightgreen",
    maxHeight: 150,
    height: 150,
    width: 150,
    // "@media (min-width: 800px)": {
    //   display: "none"
    // },

    resizeMode: "contain"
  },
  containerColumn3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "orangered",
    minHeight: 50
    // width: "70%"
  },
  containerRow3: {
    flex: 3,
    flexDirection: "row",
    // marginTop: 10,
    backgroundColor: "green"
  },
  spaceAround3: {
    flex: 1,
    justifyContent: "space-around",
    // margin: 10,
    paddingLeft: 10,
    backgroundColor: "pink"
  },
  show: {
    display: "flex"
  },
  noShow: {
    display: "none"
  },
  deleteContainer: {
    backgroundColor: "red",
    marginTop: 10,
    width: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  editContainer: {
    backgroundColor: "lightblue",
    marginTop: 10,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 150
  },
  inputText: {
    color: "darkblue",
    backgroundColor: "yellow",
    maxHeight: 70,
    paddingBottom: 8
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    marginVertical: 10,
    position: "relative",
    zIndex: 1
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A"
  },
  description: {
    paddingBottom: 20
  },
  formField: {
    borderColor: "darkblue",
    width: "80%",
    borderWidth: 1,
    // borderRadius: 10,
    padding: 8,
    marginLeft: 30,
    marginBottom: 10
  },
  addItemAreaHeader: {
    // bottom: 60,
    width: "100%",
    backgroundColor: "cyan",
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "darkblue",
    position: "fixed"

    // right: 20,
    // // position: "absolute",
    // zIndex: 3
  }
});

export default styles;
