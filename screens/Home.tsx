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
import { renderCategoryHeaderSection } from "../components/renderCategoryHeaderSection";
import { renderHeader, renderNavBar } from "../components/renderVals";

const Home = () => {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115)
  ).current;

  const [categories, setCategories] =
    useState<RenderItemProps[]>(categoriesData);
  const [viewMode, setViewMode] = useState<string>("chart");
  const [selectedCategory, setSelectedCategory] = useState<RenderItemProps>();
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  const renderCategoryList = () => {
    const renderItem: React.FC<RenderItemProps> = (item) => (
      <React.Fragment>
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
      </React.Fragment>
    );

    return (
      <View style={styles.renderCategoryListView}>
        <Animated.View style={{ height: categoryListHeightAnimationValue }}>
          <FlatList
            data={categories}
            renderItem={({ item }) => renderItem(item)}
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
