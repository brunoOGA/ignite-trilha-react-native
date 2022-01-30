import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";
import { Friend } from "./Friend";

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  }[];
  follow: () => void;
}

const FriendList: React.FC<Props> = ({ data, follow }) => {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friends) => {
      return likes + friends.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Friend data={item} follow={follow} />}
      />
    </View>
  );
};

export default FriendList;
