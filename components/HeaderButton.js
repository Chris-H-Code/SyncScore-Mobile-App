import React from "react";
// import { HeaderButton, HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from "../Colors/Colors";

const MenuButton = props => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Colors.secondaryColor}/>
    )}

export default MenuButton;