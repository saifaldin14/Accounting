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
      <TouchableOpacity style={styles.renderNavBarButtonBack}>
        <Image source={icons.back_arrow} style={styles.renderNavBarBackIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.renderNavBarButtonMore}>
        <Image source={icons.more} style={styles.renderNavBarBackIcon} />
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.renderHeaderView}>
      <View>
        <Text style={styles.renderHeaderH2}>My Expenses</Text>
        <Text style={styles.renderHeaderH3}>Summary</Text>
      </View>
      <View>
        <View>
          <Image />
        </View>

        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
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
  renderNavBarButtonBack: {
    justifyContent: "center",
    width: 50,
  },
  renderNavBarBackIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  renderNavBarButtonMore: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: 50,
  },
  renderHeaderView: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  renderHeaderH2: {
    color: COLORS.primary,
    ...FONTS.h2,
  },
  renderHeaderH3: {
    color: COLORS.darkgray,
    ...FONTS.h3,
  },
});
