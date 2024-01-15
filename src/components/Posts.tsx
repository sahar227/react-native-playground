import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );

  return posts as Post[];
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

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
