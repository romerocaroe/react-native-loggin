import React from "react";
import { StyleSheet, View, Platform } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import MenuComponent from "./Menu"

const Nav = () => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const [visibleMenu, setVisibleMenu] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <section>
            <Appbar.Header style={styles.container}>
                <Avatar.Icon style={styles.icon} backgroundColor="#5989B3" size={55} icon="handshake" />
                <Appbar.Content title="NaN Team" subtitle={'React Native'} />
                <Appbar.Action icon={MORE_ICON} visibleMenu={visibleMenu} onPress={{openMenu}} />
            </Appbar.Header>
            {/* <View
                style={{
                paddingTop: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                }}>
                <MenuComponent
                visibleMenu={visibleMenu}
                onDismiss={closeMenu}></MenuComponent>
            </View> */}
        </section>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:0,
        backgroundColor: "#5989B3",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        backgroundColor:"#5989B3"
    }
});

export default Nav;