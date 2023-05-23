import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { theme } from '../theme/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Divider from '../common/Divider';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
    const handleDrawerItemPress = (screen: string) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: theme.colors.primary, marginBottom: 30 }}>E-commerce Store</Text>

            <Text style={styles.textTitle}>My Account</Text>
            <RowMenu title={'My Profile'} icon={'user'} onPress={() => handleDrawerItemPress('ProfileScreen')} />
            <RowMenu title={'My Wish List'} icon={'heart'} onPress={() => handleDrawerItemPress('MyWishListScreen')} />
            <RowMenu title={'My Cart'} icon={'shopping-cart'} onPress={() => handleDrawerItemPress('MyWishListScreen')} />
            <RowMenu title={'My Orders'} icon={'cart-arrow-down'} onPress={() => handleDrawerItemPress('MyWishListScreen')} />

            <Divider />
            <Text style={styles.textTitle}>Support</Text>
            <RowMenu title={'Email'} icon={'envelope'} onPress={() => handleDrawerItemPress('ProfileScreen')} />
            <RowMenu title={'Call'} icon={'phone'} onPress={() => handleDrawerItemPress('ProfileScreen')} />

            <Divider />
            <RowMenu title={'Share'} icon={'share-alt'} onPress={() => handleDrawerItemPress('ProfileScreen')} />

        </View>
    );
};

type RowMenuProps = {
    title: string,
    icon: string,
    onPress: () => void
}
const RowMenu: React.FC<RowMenuProps> = ({ title, icon, onPress }) => {
    return <TouchableOpacity onPress={onPress}>
        <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
            <View style={{ width: 50, height: 30, alignContent: 'center', justifyContent: 'center' }}>
                <FontAwesome style={{ marginHorizontal: 10 }} name={icon} size={22} color={theme.colors.primary} />
            </View>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity >
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    drawerItem: {
        marginBottom: 20,
    },
    drawerItemText: {
        fontSize: 16,
    },

    textTitle: {
        fontSize: 16,
        marginVertical: 10,
        fontWeight: '700'
    },

    textMenu: {
        fontSize: 16,
    },
});

export default CustomDrawerContent;