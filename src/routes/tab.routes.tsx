import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CreateNote } from '../screens/CreateNotes';
import { AllNotes } from '../screens/AllNotes';
import { NoteRoutes } from '../routes/stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2874A6',
                tabBarInactiveTintColor: '#95A5A6',      
                tabBarActiveBackgroundColor: "#FFFFFF",
                tabBarInactiveBackgroundColor: '#FFFFFF',
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 68,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,                    
                }
            }}
        >
            <Screen 
                name='Criar Notas'
                component={CreateNote}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="note-add"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
           <Screen 
                name='Todas as Notas'
                component={NoteRoutes}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="note"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}