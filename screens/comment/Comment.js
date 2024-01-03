import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { Component,useEffect,useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import {getDocs,app,db,collection,query, where,auth,addDoc} from '../../firebase'

export default function CommentScreen(props) {

    let idMeal = parseInt(props.route.params, 10);
    const [comments, setComments] = useState([]);
    const [detail, setDetail] = useState('');
    const [meals, setMeals] = useState([]);
    const commentsCollection = collection(db, 'comments');

    useEffect(() => {
        getComments();
        getRecipes();
    },[]);

    const getRecipes = async () => {
        try {
            const q = query(collection(db, "meals"), where("idMeal", "==", idMeal));
            const mealsData = [];

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                mealsData.push(doc.data());
            });

            setMeals(mealsData);
            // Do something with mealsData if needed
        } catch (err) {
            console.log('error: ',err.message);
        }
    }

    const getComments = async () => {
        try {
            const q = query(collection(db, "comments"), where("idMeal", "==", idMeal));
            console.log(idMeal);
            const querySnapshot = await getDocs(q);
            const commentsData = [];

            querySnapshot.forEach((doc) => {
                commentsData.push(doc.data());
            });

            setComments(commentsData);
        } catch (err) {
            console.log('error: ', err.message);
        }
    }

    const addComment = async () => {
        try {
            const commentItem = {
                detail,
                idMeal,
                email: auth?.currentUser?.email,
            };
    
            console.log('1');
            
            const docRef = await addDoc(commentsCollection, commentItem);
            console.log('2');
            
            // Sau đó gọi hàm getComments
            getComments();
            setDetail(''); // Xóa nội dung trong TextInput sau khi đăng bình luận
        } catch (error) {
            console.log('3');
            console.error('Lỗi khi thêm bình luận: ', error.message);
        }
    };
    

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            {/* Hiển thị hình ảnh của bữa ăn */}
            {meals.map((meal, index) => (
                <View key={index}>
                    <Image source={{ uri: meal.strMealThumb }} style={styles.mealImage} />
                    <Text style={styles.mealTitle}>{meal.strMeal}</Text>
                    {/* Hiển thị các thông tin khác của bữa ăn tùy thuộc vào cấu trúc dữ liệu */}
                </View>
            ))}
            
            {/* Hiển thị danh sách comment */}
            {comments.map((comment, index) => (
                <View key={index} style={styles.comment_list}>
                    <View style={styles.user_infor}>
                        <View style={styles.avatar}>
                            <Ionicons name="people-circle" color={'gray'} size={25}></Ionicons>
                        </View>

                        <View style={styles.user_infor_account}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{comment.email}</Text>
                            {/* <Text style={{ fontSize: 15, color: 'gray', marginLeft: 10 }}>@{comment.username}</Text> */}
                        </View>
                    </View>
                    <View style={styles.user_comment}>
                        <Text style={{ fontSize: 15, color: 'gray' }}>{comment.detail}</Text>
                    </View>
                </View>
            ))}

            {/* Input để thêm comment mới */}
            <View style={styles.commentInputContainer}>
                <TextInput
                placeholder='Nhập bình luận của bạn'
                style={styles.commentInput}
                multiline
                value={detail}
                onChangeText={(text) => setDetail(text)}
                />
                <TouchableOpacity style={styles.postButton} onPress={() => addComment()}>
                <Text style={styles.postButtonText}>Đăng</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}   

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    mealImage: {
      width: '100%',
      height: 200,
      borderRadius: 12,
    },
    mealTitle: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
    },
    comment_list: {
      display: 'flex',
      flex: 1,
      padding: 10,
    },
    user_infor: {
      display: 'flex',
      flexDirection: 'row',
    },
    avatar: {
      marginRight: 10,
    },
    user_infor_account: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    user_comment: {
      padding: 5,
      marginLeft: 40,
    },
    commentInputContainer: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 50,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      alignItems: 'center',
      padding: 20,
      marginBottom: 10,
    },
    commentInput: {
      flex: 1,
      height: 50,
      fontSize: 15,
    },
    postButton: {
      marginLeft: 10,
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 8,
      position:'absolute',
      right:5,
    },
    postButtonText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });