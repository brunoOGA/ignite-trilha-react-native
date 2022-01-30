import React, { useCallback, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import FriendList from "../components/FriendList";

interface Data {
  id: string;
  name: string;
  likes: number;
}

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://192.168.0.34:3333/friends?q=${name}`);

    const data = await response.json();

    const formattedDate = data.map((item: Data) => {
      return {
        id: item.id,
        name: item.name,
        likes: item.likes,
        online: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
    });

    setFriends(formattedDate);
  }

  const handleFollow = useCallback(() => {
    console.log("unfollow");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Amigos</Text>

      <TextInput
        placeholder="Nome do cliente"
        onChangeText={setName}
        style={styles.input}
      />

      <Button title="Buscar" onPress={handleSearch} />
      <FriendList data={friends} follow={handleFollow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
  },
});

export default Home;
