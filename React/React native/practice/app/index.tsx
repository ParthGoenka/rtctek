import { useState } from "react";
import { ActivityIndicator, Button, Modal, Pressable, ScrollView, StatusBar, Text, View } from "react-native";

export default function Index() {
  const [isv, setIsv] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
        backgroundColor:"plum"
      }}
    >
      <ScrollView>
      <StatusBar backgroundColor={"lightgreen"} barStyle={"dark-content"}/>
        <Pressable onPress={()=>{console.log("hello pressed")}}><Text style={{padding: 20}}>Hello</Text></Pressable>
        <Button title="Submit" onPress={()=>{setIsv(true)}}/>
        <ActivityIndicator color={"black"} size={"large"} style={{padding:20}}/>

      <Modal visible={isv} onRequestClose={()=>{setIsv(false)}} animationType="slide">
        <View style={{backgroundColor:"lightblue", padding:60}}>
        <Pressable onPress={()=>{console.log("hello pressed")}}><Text style={{padding: 50}}>Hello in modal</Text></Pressable>
        <Button title="Close" onPress={()=>{setIsv(false)}} />
        </View>
      </Modal>
      </ScrollView>
      
    </View>
  );
}
