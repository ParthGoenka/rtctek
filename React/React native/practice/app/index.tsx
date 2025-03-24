import { useState } from "react";
import { ActivityIndicator, Button, Modal, Pressable, ScrollView, StatusBar, Text, View, StyleSheet, Dimensions } from "react-native";

export default function Index() {
  const [isv, setIsv] = useState(false)
  const win = Dimensions.get("window");
    
  
  return (
    <View
      style={
        styles.container
      }
    >
      <ScrollView>
      <StatusBar backgroundColor={"lightgreen"} barStyle={"dark-content"}/>
        <Pressable onPress={()=>{console.log("hello pressed")}}><Text style={{padding: 20}}>Hello</Text></Pressable>
        <Button title="Submit" onPress={()=>{setIsv(true)}}/>

      <Modal visible={isv} onRequestClose={()=>{setIsv(false)}} animationType="slide">
        <View style={{backgroundColor:"lightblue", padding:60}}>
        <Pressable onPress={()=>{console.log("hello pressed")}}><Text style={{padding: 50}}>Hello in modal</Text></Pressable>
        <Button title="Close" onPress={()=>{setIsv(false)}} />
        <ActivityIndicator color={"black"} size={"large"} style={{padding:20}}/>
        </View>
      </Modal>

<View>
  
</View>



      </ScrollView>
    </View>
  );
  
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
        backgroundColor:"plum"
  }
})