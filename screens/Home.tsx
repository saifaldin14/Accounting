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

const Home = () => {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115)
  ).current;

  const [categories, setCategories] = useState<RenderItemProps>(categoriesData);
  const [viewMode, setViewMode] = useState("chart");
  const [selectedCategory, setSelectedCategory] = useState<RenderItemProps>();
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
      <View style={styles.renderHeaderInnerView}>
        <View style={styles.renderHeaderImageContainer}>
          <Image source={icons.calendar} style={styles.renderHeaderIcon} />
        </View>

        <View style={styles.renderHeaderTextContainer}>
          <Text style={styles.renderHeaderTextDate}>August 16th, 2021</Text>
          <Text style={styles.renderHeaderTextBody}>
            18% more than last month
          </Text>
        </View>
      </View>
    </View>
  );

  const renderCategoryList = () => {
    const renderItem = (item: RenderItemProps) => (
      <TouchableOpacity
        onPress={() => setSelectedCategory(item)}
        style={{
          ...styles.renderCategoryListItemButton,
          ...styles.shadow,
        }}
      >
        <Image
          source={item.icon}
          style={{
            ...styles.renderCategoryListItemImage,
            tintColor: item.color,
          }}
        />
        <Text style={styles.renderCategoryListText}>{item.name}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.renderCategoryListView}>
        <Animated.View style={{ height: categoryListHeightAnimationValue }}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            numColumns={2}
          />
        </Animated.View>

        <TouchableOpacity
          style={styles.renderCategoryListButton}
          onPress={() => {
            if (showMoreToggle) {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 115,
                duration: 500,
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 172.5,
                duration: 500,
                useNativeDriver: false,
              }).start();
            }

            setShowMoreToggle(!showMoreToggle);
          }}
        >
          <Text style={{ ...FONTS.body4 }}>
            {showMoreToggle ? "LESS" : "MORE"}
          </Text>
          <Image
            source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
            style={styles.renderCategoryListImage}
          />
        </TouchableOpacity>
      </View>
    );
  };
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
  renderHeaderInnerView: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    alignItems: "center",
  },
  renderHeaderImageContainer: {
    backgroundColor: COLORS.lightGray,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  renderHeaderIcon: {
    height: 20,
    width: 20,
    tintColor: COLORS.lightBlue,
  },
  renderHeaderTextContainer: {
    marginLeft: SIZES.padding,
  },
  renderHeaderTextDate: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  renderHeaderTextBody: {
    color: COLORS.darkgray,
    ...FONTS.body3,
  },
  renderCategoryListItemButton: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  renderCategoryListItemImage: {
    width: 20,
    height: 20,
  },
  renderCategoryListText: {
    marginLeft: SIZES.base,
    color: COLORS.primary,
    ...FONTS.h4,
  },
  renderCategoryListView: {
    paddingHorizontal: SIZES.padding - 5,
  },
  renderCategoryListButton: {
    flexDirection: "row",
    marginVertical: SIZES.base,
    justifyContent: "center",
  },
  renderCategoryListImage: {
    marginLeft: 5,
    width: 15,
    height: 15,
    alignSelf: "center",
  },
});
