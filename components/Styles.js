import StyleSheet from "react-native-media-query";

const { ids, styles } = StyleSheet.create({
  mainContainerColumn1: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    flex: 1
  },
  image: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 13,
    height: 120,
    width: 120,
    "@media (min-width: 568px)": {
      height: 150,
      width: 150
    },
    resizeMode: "contain"
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    position: "relative",
    zIndex: 1,
    borderBottomColor: "#d3f1fb",
    borderBottomWidth: 15
  },
  containerColumn3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: 50
  },
  containerRow3: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "green"
  },
  spaceAround3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    backgroundColor: "#fff"
  },
  show: {
    display: "flex"
  },
  noShow: {
    display: "none"
  },
  iconText: {
    marginTop: 5
  },
  iconDel: {
    marginLeft: 10
  },
  deleteContainer: {
    backgroundColor: "#A8B053",
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  editContainer: {
    backgroundColor: "#CDD665",
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  inputText: {
    paddingTop: 14
  },
  inputTextRight: {
    paddingRight: 20,
    paddingTop: 8,
    fontSize: 12.5
  },

  elevation: {
    elevation: 20,
    shadowColor: "#52006A"
  },
  formField: {
    borderColor: "darkblue",
    width: "80%",
    borderWidth: 0.5,
    padding: 8,
    marginBottom: 10,
    color: "darkblue",
    backgroundColor: "#f9fec2"
  },
  addItemAreaHeader: {
    width: "100%",
    backgroundColor: "#f1fc77",
    height: 54,
    position: "fixed"
  },
  headerTitle: {
    width: "40%",
    marginTop: 10,
    marginLeft: 20,
    "@media (min-width: 568px)": {
      marginLeft: 30
    },
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  },
  flexRowEnd: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignContent: "normal"
  },
  flex1Center: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  flex1CenterChild: {
    marginTop: "50%",
    flexBasis: "auto",
    alignSelf: "center",
    opacity: 0.4
  },
  selectedPhoto: {
    width: 100,
    height: 100,
    marginVertical: 15,
    borderWidth: 0.5,
    borderColor: "darkblue",
    backgroundColor: "#f9fec2"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 4,
    elevation: 3,
    marginLeft: 15,
    marginRight: 15,
    alignContent: "center"
  },
  buttonText: {
    fontSize: 13,
    lineHeight: 21,
    color: "#053B62",
    borderWidth: 0.5,
    borderColor: "darkblue",
    paddingVertical: 7,
    paddingHorizontal: 22,
    borderRadius: 5,
    backgroundColor: "#f9fec2"
  },
  descBoldText: {
    fontWeight: "bold",
    fontSize: 12.5,
    paddingTop: 8,
    // marginTop: 7,
    paddingLeft: 14
  },
  titleBoldText: {
    fontWeight: "bold",
    fontSize: 12.5,
    paddingTop: 8,
    marginTop: 8,
    paddingLeft: 14
  },
  itemPropBoldText: {
    fontWeight: "bold",
    fontSize: 12.5,
    marginTop: 8
  },
  description: {
    fontSize: 12.5,
    paddingBottom: 15,
    paddingTop: 8,
    backgroundColor: "#f9fec2",
    paddingLeft: 15,
    // color: "#565a29"
    color: "#666b31"
  },
  itemProp: {
    fontSize: 12.5,
    color: "#666b31",
    marginTop: -5
  },
  notBoldText: {
    fontWeight: "normal"
  },
  descBack: {
    backgroundColor: "#f9fec2"
  },
  signImage: {
    width: 100,
    height: 100,
    borderRadius: 15
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 14.5,
    marginTop: 8,
    marginVertical: 20
  },
  addToCartWrap: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#f9fec2"
  },
  addToCartBtn: {
    color: "orangered",
    backgroundColor: "#f9fec2",
    marginBottom: 15
  }
});

export default styles;
