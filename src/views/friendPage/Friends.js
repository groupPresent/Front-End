import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";

const Friends = () => {
  const [data] = useState([
    {
      id: 1,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      username: "¹®ÇÏ´Ã"
    },
    {
      id: 2,
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      username: "±èÇö¼ö"
    },
    {
      id: 3,
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
      username: "ÀÓ¿¹¶÷"
    },
    {
      id: 4,
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
      username: "Á¶¹ÎÈ£"
    },
    {
      id: 5,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "±è¹Î¼­"
    },
    {
      id: 6,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      username: "±è¹Î¼ö"
    }
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>Ä£±¸¸ñ·Ï</Text>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          style={styles.container}
          enableEmptySections={true}
          data={data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <Text style={styles.username}>{item.username}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Friends;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink"
  },
  headerContent: {
    padding: 30,
    alignItems: "center"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom: 10
  },
  image: {
    width: 60,
    height: 60
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    padding: 30,
    backgroundColor: "pink"
  },
  box: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10
  }
});
