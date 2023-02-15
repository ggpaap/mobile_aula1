import { View, Text, StyleSheet } from 'react-native';
export default function Header() {
    return (
        <View style={style.header}>
            <Text style={{ color: 'white', fontSize: 20 }}>
            Minha list de tarefas
           </Text>    
        </View>
    );
}

const styles = StylesSheet.create( {
    header: {
        backgroundColor: 'coral',
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    }
});