import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { AllNotes } from '../screens/AllNotes';
import { Note } from '../screens/Note';

export function NoteRoutes() {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}>

            <Screen
                name="Todas as Notas"
                component={AllNotes}
            />
            <Screen
                name="Anotacao"
                component={Note}
            />
        </Navigator>
    )
}