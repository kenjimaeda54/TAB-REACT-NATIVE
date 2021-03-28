import React from "react";
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"



export default function Home() {
   const navigation = useNavigation();

    function sobre() {
        navigation.navigate("Contato");
      
    }

    return (
        <View style={{ flex: 1, marginTop: 50, marginBottom: 10 }}>
            <Text>Bem vindo a tela homer</Text>
            <Button
              title="Ir para tela de contato"
              onPress={sobre}
            />
        </View>
    );
}