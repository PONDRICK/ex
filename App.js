import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button, 
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Alert,
  SectionList
} from 'react-native';

const flatListData = [
  {id: "cs001", name: "database"},
  {id: "cs002", name: "mobile"},
  {id: "cs003", name: "game"},
  {id: "cs004", name: "calculus"},
  {id: "cs005", name: "network"}
];

const sectionListData = [
  {title: ' Group A', data: ["Liverpool", "Barcelona"]},
  {title: ' Group B', data: ["Juventus", "Muang Thong"]},
  {title: ' Group C', data: ["Real Madrid", "AC Milan"]},
  {title: ' Group D', data: ["Leeds Utd.", "PSG"]}
];

export default function App() {
  const [num, setNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Lists::</Text>
        <FlatList
          data={flatListData}
          renderItem={({ item}) => (
            <TouchableOpacity onPress={() =>Alert.alert('Alert 📢',item.name)}
            >
            <View style={{
              backgroundColor: '#f7ede2',
              padding: 7,
              borderWidth: 1,
              borderColor : '#999',
              borderRadius: 7,
              elevation: 5,
              marginBottom: 3,
              }}
            >
              <Text style={{  color: '#999'}}>[{item.id}]</Text>
              <Text style={{  fontSize: 18}}>{item.name}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.title}>SectionList</Text>
        <SectionList
          sections={sectionListData}
          renderItem={({ section, item}) => (
          <View
            style={{
              backgroundColor: "#6594c0",
              padding: 5,
              borderBottomWidth: 1,
              borderBottomColor: '#0e1e5b',
              borderRightWidth: 1,
              borderRightColor: '#0e1e5b',
              elevation: 5,
            }}
            >
            <Text style={{ fontSize: 16, color: '#091442'}}>{item}</Text>
          </View>
          )}
          renderSectionHeader={({ section}) => (
          <Text style={{ fontSize: 20 }}>{section.title}</Text>
          )}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>isLoading??</Text>
        <Button 
        title= "Toggle" 
        color = "pink" 
        onPress={() => {
          setIsLoading(!isLoading)
        }} />
        <Text></Text>
        {isLoading?<ActivityIndicator size= "large" color = "red" /> : null}
      </View>
      <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>Button: {num}</Text>
      <View style={{ width: 200, justifyContent: "space-around"}}>
      <Button 
      title='Add ME 💙' 
      color= "orange" 
      onPress={() => {
        if(num < 999){
          setNum(num + 1);
        }
        }}
      />
      <Button 
      title='Remove ME 💜' 
      color= "black" 
      onPress={() => {
        if(num > 0){
          setNum(num - 1); 
        }
        }}
      />
      <Button 
      title='Reset ME 💛' 
      color= "blue" 
      onPress={() => {
        setNum(0);
        }}
      />
      </View>
      <View style={{alignItems: "center", margin: 10 }}>
        <TouchableOpacity
          onPress={() => {
            if(num + 10 <= 999){
            setNum(num + 10);  
            }
          }}>
        <Text style={{
          width: 150,
          textAlign: "center",
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 10,
          fontSize: 16,
          backgroundColor: "yellow",
          }}>
            Power Up
            </Text>
            </TouchableOpacity>
      </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>TextInput</Text>
        <TextInput style={styles.input} placeholder='Name - Lastname'/>
      </View>
    <View style={styles.section}>
      <Text style={styles.title}>Image (uri):</Text>
      <TouchableOpacity onPress={() => {
            setNum(999);
          }}>
      <Image 
      source={{
        uri: "https://cdn.shopify.com/s/files/1/1140/8354/files/Donald-Duck_480x480.jpg?v=1613726310",
      }}
      style ={styles.image}
      />
      </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Image (local):</Text>
        <Image source={require('./src/img/Disney-Character-Names.jpg')} style={styles.image}/>
      <Text style={styles.title}>TEXT:</Text>
      <Text style ={{alignSelf: "center"}}>Disney</Text>
      <Text style ={styles.subtitle}>by khemmika 💜</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  subtitle: {
    fontStyle: "italic",
    alignSelf: "center",
    color: "purple",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  section: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "skyblue",
    height: 40,
    paddingLeft: 10,
  },

});
