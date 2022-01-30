import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import lodash from "lodash";

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  };
  follow: () => void;
}

const FriendComponent: React.FC<Props> = ({ data, follow }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>
      <Text>{`Online em: ${data.online}`}</Text>
      <TouchableOpacity onPress={follow}>
        <Text style={{ color: "red" }}>Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.data, nextProps.data);
});
