import React from "react";
import { View } from 'react-native';
import { Menu } from 'react-native-paper';

const MenuComponent = () => {
    return (
        <View style={{ flex: 1 }}>
          <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
          <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
        </View>
    );
};

export default MenuComponent;