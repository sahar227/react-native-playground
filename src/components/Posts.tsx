import axios from "axios";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
}

export function Posts() {
  const { data: posts, isLoading } = useQuery("posts", getPosts);

  if (isLoading) return <Text style={styles.text}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
  },
  list: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  text: {
    color: "red",
  },
});
