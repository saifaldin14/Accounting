import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList,
} from "react-native";
import { Value } from "react-native-reanimated";

import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { RenderItemProps } from "../../interfaces";

export const renderCategoryList = (
  categoryListHeightAnimationValue: any,
  categories: RenderItemProps[],
  showMoreToggle: boolean,
  setSelectedCategory: (arg0: React.PropsWithChildren<RenderItemProps>) => void,
  setShowMoreToggle: (arg0: boolean) => void
) => {
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

const styles = StyleSheet.create({
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
