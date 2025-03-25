import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Modal,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  SafeAreaView,
  FlatList,
  Switch,
} from "react-native";

export default function Index() {
  const [isv, setIsv] = useState(false);
  const [text, setText] = useState("");
  const [fil, setFil] = useState(false);
  const handleLogin = () => {
    console.log("login pressed")
    setIsv(true);
  }
  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={{ fontSize: 27, color: "#000", fontWeight: "bold" }}>
            Blogger
          </Text>
          <View style={styles.navb}>
            <View style={styles.navb1}>
              <Button
                title="Login"
                onPress={handleLogin}
              />
            </View>
            <View>
              <Button
                title="SignUp"
                onPress={handleLogin}
              />
            </View>
          </View>
        </View>
          <TextInput
            style={{ height: 40, padding: 5 }}
            placeholder="Search"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
            keyboardType="number-pad"
          />
          <Button
            title="Submit"
            onPress={() => {
              setIsv(true);
              setText("");
            }}
          />
          <View style={{justifyContent:"flex-start", flexDirection:"row", marginTop:10, alignItems:"center", gap:10}}>
          <Text style={{fontSize:25, fontWeight:"bold"}}>Filter</Text>
          <Switch value={fil} onValueChange={() => setFil((previous) => (!previous))} />
            </View>
            {(fil) &&
            (
              <View style={styles.fil}></View>
  )}
          <Modal
            visible={isv}
            onRequestClose={() => {
              setIsv(false);
            }}
            animationType="slide"
          >
            <View style={{ backgroundColor: "lightgray", justifyContent:"space-around", flex:1, padding:100 }}>
            <ActivityIndicator
                color={"black"}
                size={"large"}
                style={{ padding: 20 }}
              />

              <Button
                title="Close"
                onPress={() => {
                  setIsv(false);
                }}
              />
              
            </View>
          </Modal>
          <FlatList style={{marginHorizontal:"auto"}} data={data} renderItem={({item, index}) => {
            return(
            <View style={styles.box} key={index}>
            <Text style={{fontWeight:"bold", fontSize:20}}>{item}. My Blog Title</Text>
            <View style={styles.desc}>
              <Text></Text>
            </View>
          </View>
            )
          }} 
          ListEmptyComponent={<Text>No Blog to Show.</Text>}
          ListHeaderComponent={<Text style={{fontSize:25, marginHorizontal:"auto", margin:10, fontWeight:"bold"}}>Blogs</Text>}
          />
          <View style={styles.foot}>
            <Text style={{color:"white"}}>About Us</Text>
          </View>
      </View>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "lightgray",
    flex:1,
  },
  box: {
    borderWidth: 2,
    borderColor: "gray",
    height: 200,
    width: 300,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    elevation: 10,
  },
  desc: {
    backgroundColor: "lightblue",
    width: "100%",
    height: "80%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation:10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 1,
    marginBottom: 2,
    padding: 10,
  },
  navb: {
    flexDirection: "row",
  },
  navb1: {
    marginRight: 2,
  },
  foot: {
    width:"100%",
    backgroundColor: "#333",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
  },
  fil:
  {
    height:100,
    width:"80%",
    elevation:15,
    backgroundColor:"lightblue",
    alignSelf:"center"
  }
});
