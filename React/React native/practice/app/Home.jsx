import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Modal,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  Switch,
  KeyboardAvoidingView,
} from "react-native";

export default function Home({navigation}) {
  const [text, setText] = useState("");
  const [fil, setFil] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const handleLogin = () => {
    navigation.navigate("Login")
    console.log("login pressed")
  }
  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(()=>{
      setRefresh(false)
    },3000)
  }
  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={{ fontSize: 27, color: "#000", fontWeight: "bold" }}>
            Blogger
          </Text>
          <View style={styles.navb}>
            <View style={styles.navb1}>
              <Button
                title="Create a Blog"
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
          ListFooterComponent={<View style={styles.foot}>
          <Text style={{color:"white"}}>About Us</Text>
        </View>}
        refreshing={refresh}
        onRefresh={handleRefresh}  />
          
      </View></KeyboardAvoidingView>
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
