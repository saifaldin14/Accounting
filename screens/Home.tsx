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
import { RenderItemProps } from "../interfaces";
import { renderCategoryHeaderSection } from "../components/expenseTracker/renderCategoryHeaderSection";
import {
  renderHeader,
  renderNavBar,
} from "../components/expenseTracker/renderVals";
import { renderCategoryList } from "../components/expenseTracker/renderCategoryList";
import { renderIncomingExpensesTitle } from "../components/expenseTracker/renderIncomingExpensesTitle";
import { renderIncomingExpenses } from "../components/expenseTracker/renderIncomingExpenses";
import { processCategoryDataToDisplay } from "../components/expenseTracker/processCategoryDataToDisplay";

const Home = () => {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115)
  ).current;

  const [categories, setCategories] =
    useState<RenderItemProps[]>(categoriesData);
  const [viewMode, setViewMode] = useState<string>("chart");
  const [selectedCategory, setSelectedCategory] = useState<RenderItemProps>();
  const [showMoreToggle, setShowMoreToggle] = useState<boolean>(false);

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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
