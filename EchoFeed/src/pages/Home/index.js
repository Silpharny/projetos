import react, { useContext, useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import { CardList, Container, ButtonPost } from "./styles";

import { AuthContext } from "../../contexts/auth";
import Card from "../../components/Card";

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import Header from "../../components/Header";
import { db } from "../../firebaseConfig";
import { ActivityIndicator, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  const { authUser } = useContext(AuthContext);

  const [post, setPost] = useState([]);

  const [loading, setLoading] = useState(true);

  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [lastItem, setLastItem] = useState("");
  const [emptyList, setEmptyList] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      async function fetchPosts() {
        const postRef = collection(db, "posts");
        const orderPost = query(postRef, orderBy("createBy", "desc"), limit(7));

        await getDocs(orderPost).then((data) => {
          if (isActive) {
            let postList = [];
            data.forEach((item) => {
              postList.push({
                ...item.data(),
                id: item.id,
              });

              setEmptyList(!!data.empty);
              setPost(postList);
              setLastItem(data.docs[data.docs.length - 1]);
              setLoading(false);
            });
          }
        });
      }

      fetchPosts();

      return () => {
        isActive = false;
      };
    }, [])
  );

  async function handleRefreshPosts() {
    setLoadingRefresh(true);

    const postRef = collection(db, "posts");
    const orderPost = query(postRef, orderBy("createBy", "desc"), limit(7));

    await getDocs(orderPost).then((data) => {
      let postList = [];
      data.forEach((item) => {
        postList.push({
          ...item.data(),
          id: item.id,
        });

        setEmptyList(false);
        setPost(postList);
        setLastItem(data.docs[data.docs.length - 1]);
      });
    });
    setLoadingRefresh(false);
  }

  async function getListPosts() {
    if (emptyList) {
      setLoading(false);
      return null;
    }

    if (loading) return;

    const postRef = collection(db, "posts");
    const orderPost = query(
      postRef,
      orderBy("createBy", "desc"),
      limit(7),
      startAfter(lastItem)
    );
    await getDocs(orderPost).then((data) => {
      const postList = [];
      data.forEach((item) => {
        postList.push({
          ...item.data(),
          id: item.id,
        });
      });
      setEmptyList(!!data.empty);
      setLastItem(data.docs[data.docs.length - 1]);
      setPost((oldPosts) => [...oldPosts, ...postList]);
      setLoading(false);
    });
  }

  return (
    <Container>
      <Header />
      {loading ? (
        <View
          style={{ flex: 1, alignItem: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#dc6601" />
        </View>
      ) : (
        <CardList
          data={post}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Card data={item} userId={authUser?.uid} />}
          //userId={authUser?.uid}
          showsVerticalScrollIndicator={false}
          refreshing={loadingRefresh}
          onRefresh={handleRefreshPosts}
          onEndReached={() => getListPosts()}
          onEndReachedThreshold={0.1}
        />
      )}
      <ButtonPost onPress={() => navigation.navigate("newpost")}>
        <Feather name="edit-2" size={30} color="#f2f2f2" />
      </ButtonPost>
    </Container>
  );
}
