import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Animated,
  Platform,
} from "react-native";
import { VictoryPie } from "victory-native";

import { Svg } from "react-native-svg";

import { COLORS, FONTS, SIZES, icons } from "../constants";
import { categoriesData } from "../data";

const Home = () => {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115)
  ).current;

  const [categories, setCategories] = useState(categoriesData);
  const [viewMode, setViewMode] = useState("chart");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  const renderNavBar = () => (
    <View style={styles.renderNavBarView}>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  renderNavBarView: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
