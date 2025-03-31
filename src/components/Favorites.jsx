import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData } from '../../storage/storageFunc';
import FavoriteItem from './FavoriteItem';
import { useTheme } from '../../context/themeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Favorites = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const storedItems = await getData('@items_key');
            setItems(storedItems);
        };
        loadData();
    });

    const { theme, toggleTheme } = useTheme();


    return (
        <View >
            <Text style={{ color: theme.text, textAlign: 'center', fontSize: hp(3), fontWeight: 800, marginBottom: hp(2) }}>Favorites</Text>
            <View>
                {items.length === 0 ? (
                    <Text>No items stored yet.</Text>
                ) : (
                    items.map((item, index) => (
                        <FavoriteItem key={index} data={item.id} />
                    ))
                )}
            </View>
        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({})