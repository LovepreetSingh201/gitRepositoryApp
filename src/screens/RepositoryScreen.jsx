import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';

const RepositoryScreen = () => {
    const { params: item } = useRoute()
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: 'rgb(39, 39, 39)', flex: 1 }}>
            <SafeAreaView style={{ position: 'relative' }}>
                <View style={{ marginHorizontal: wp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'rgba(174, 174, 174, 0.62)', borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon.ArrowLeft width={30} height={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon.Heart width={50} height={50} fill={'white'} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: item.owner.avatar_url }} style={{ width: wp(30), height: wp(30), borderRadius: 100 }} />
                        <Text style={{ fontSize: 25, color: 'white' }}>{item.name}</Text>
                        <Text style={{ fontSize: 18, color: 'white' }}>{item.full_name}</Text>
                        <Text style={{ fontSize: 18, color: 'white' }}>{item.private ? "Private" : "Public"}</Text>
                    </View>
                    <View style={{ marginHorizontal: wp(5), marginTop: 10, gap: 15 }}>
                        <View>
                            <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'grey', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}> Repository name</Text>
                            <Text style={{ fontSize: 18, color: 'white', paddingHorizontal: 15 }}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'grey', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}> Description</Text>
                            <Text style={{ fontSize: 18, color: 'white', paddingHorizontal: 15 }}>{item.description}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'grey', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}>Number of stars</Text>
                            <Text style={{ fontSize: 18, color: 'white', paddingHorizontal: 15 }}>{item.stargazers_count}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'grey', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}>Number of forks</Text>
                            <Text style={{ fontSize: 18, color: 'white', paddingHorizontal: 15 }}>{item.forks_count}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'grey', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}>Primary programming language</Text>
                            <Text style={{ fontSize: 18, color: 'white', paddingHorizontal: 15 }}>{item.language}</Text>
                        </View>




                        <View style={{ marginTop: 50 }}></View>
                        <Text style={{ fontSize: 18, color: 'white' }}> Owner's username and avatar</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default RepositoryScreen

const styles = StyleSheet.create({})