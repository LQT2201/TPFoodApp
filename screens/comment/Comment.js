import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class CommentScreen extends Component {

    render() {

        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                <View style={styles.comment_list}>
                    <View style={styles.user_infor}>
                        <View style={styles.avatar}>
                        <Ionicons name="people-circle" size={25}></Ionicons>
                        </View>


                        <View style={styles.user_infor_account}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lương Quốc Toàn</Text>
                            <Text style={{ fontSize: 15, color: 'gray', marginLeft: 10 }}>@lqt_deadmeme</Text>
                        </View>
                    </View>
                    <View style={styles.user_comment}>
                        <Text style={{ fontSize: 18 }}>Sản phẩm ngon</Text>
                    </View>
                    {/* <TouchableOpacity style={styles.btn_reply}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Trả lời</Text>
                    </TouchableOpacity> */}

                    {/* <View style={styles.user_reply}>
                        <View style={styles.user_infor}>
                            <View style={styles.avatar_reply}>
                                <Ionicons name="people-circle" size={25}></Ionicons>
                            </View>


                            <View style={styles.user_infor_account}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lương Quốc Toàn</Text>
                                <Text style={{ fontSize: 15, color: 'gray', marginLeft: 10 }}>@lqt_deadmeme</Text>
                            </View>
                        </View>
                        <View style={styles.user_comment}>
                            <Text style={{ fontSize: 18 }}>Sản phẩm ngon</Text>
                        </View>
                        <TouchableOpacity style={styles.btn_reply}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Trả lời</Text>
                        </TouchableOpacity>
                    </View> */}


                </View>

                <View style={styles.comment_list}>
                    <View style={styles.user_infor}>
                        <View style={styles.avatar}>
                        <Ionicons name="people-circle" size={25}></Ionicons>
                        </View>


                        <View style={styles.user_infor_account}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lương Quốc Toàn</Text>
                            <Text style={{ fontSize: 15, color: 'gray', marginLeft: 10 }}>@lqt_deadmeme</Text>
                        </View>
                    </View>
                    <View style={styles.user_comment}>
                        <Text style={{ fontSize: 18 }}>Sản phẩm ngon</Text>
                    </View>

                </View>
                <View style={styles.commentInput}>

                    <TextInput placeholder='Dùng @ để nhắc đến ai đó' style={{ height: 30, fontSize: 15, }}>
                    </TextInput>
                    <Image style={{ height: 30, width: 30 }} />
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Đảm bảo ScrollView mở rộng đầy đủ
    },
    contentContainer: {
        flexGrow: 1, // Đảm bảo nội dung trong ScrollView có thể mở rộng
        justifyContent: 'space-between', // Đẩy nội dung xuống dưới cùng
    },

    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    comment_list: {
        display: 'flex',
        flex: 1
    },
    user_infor: {
        display: 'flex',
        flexDirection: 'row'
    },
    user_infor_account: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    user_comment: {
        padding: 5,
        marginLeft: 40,
    },
    btn_reply: {
        marginLeft: 40,
    },
    user_reply: {
        marginLeft: 50,
    },

    commentInput: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        padding: 20,
        marginBottom: 10,
    },

})