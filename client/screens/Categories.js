import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

import Header from "../components/Header";
import CategorieCard from "../components/CategorieCard";

const apiLink = process.env.REACT_APP_API_LINK;
export default class Categories extends React.Component {
  state = {
    categorieData: [],
    eventData: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    axios
      .get(`http://localhost:8080/categories`)
      .then((response) => {
        this.setState({
          categorieData: response.data,
        });
        this.getEventData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getEventData = () => {
    axios
      .get("http://localhost:8080")
      .then((response) => {
        this.setState({
          eventData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <ScrollView style={styles.categories}>
        {/* <Header/> */}
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesContainer}>
          {this.state.eventData.length > 0 ? (
            this.state.categorieData.map((item) => {
              return (
                <CategorieCard
                  categorieData={item}
                  key={item.id}
                  onPress={() => {
                    this.props.navigation.navigate("CategoryDetail", {
                      data: item,
                      eventData: this.state.eventData,
                    });
                  }}
                />
              );
            })
          ) : (
            <ActivityIndicator />
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  catagories: {
    paddingLeft: 12,
    paddingRight: 12,
    width: "100%",
    flex: 1,
  },
  categoriesTitle: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  categoriesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "space-between",
  },
});
