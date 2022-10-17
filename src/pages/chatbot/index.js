import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import axios from "axios";
import base64 from 'react-native-base64';
import Navigator from '../../components/navigator';
import Header from "../../components/header";

export default function Chatbot ({ navigation }) {
    const [permission, setPermission] = React.useState("");
    const [recording, setRecording] = React.useState("");

    const [userInput, setUserInput] = React.useState("");
    const [botResponse, setBotResponse] = React.useState("")

    React.useEffect(() => { Speech.speak(botResponse) }, [botResponse])

    const sendMessageToChatbot = async (value) => {
        const key = "TLZoAb7jFEBGgGXMldPsC3F44BA1QEi6wsopoeoFIjyo"
        const encodedKey = base64.encode(`apikey:${key}`)
        const baseUrl = 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/95a280d6-bcc5-4145-8b77-9dd1dc47a386/v1/workspaces/ce71c9d2-0c4c-4fd5-b810-e32bfb81bc27/message'

        try{
            const request = await axios.post(baseUrl.concat('?version=2018-09-20'),
                { input: { text: value}},
                { headers: { Authorization: `Basic ${encodedKey}`, 'Content-Type': 'application/json' } });

            const response = request.data.output.text[0]

            if(response === undefined) Speech.speak('Eu não entendi, você pode reformular a frase')
            setBotResponse(response)
        }

        catch(err){
            console.log(err)
        }
    }

    const speechToText = (recording) => {
        const formData = new FormData();
        formData.append("file", {
            uri: recording.getURI(),
            name: "test.wav",
            type: "audio/wav",
        });
        axios
            .post('https://nodered-app-1tdsr-fiap-2021.mybluemix.net/transcription', formData, {
                responseType: 'text',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                setUserInput(response.data)
                sendMessageToChatbot(response.data)
            })
            .catch(function (error) {
                console.log(error);
                console.error(error.response);
            });
    }

    async function startRecording() {
        try {
            const permission = await Audio.requestPermissionsAsync();
            if (permission.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true,
                });
                const recording = new Audio.Recording();
                try {
                    await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
                    await recording.startAsync();
                } catch (err) {
                    console.log(err)
                }
                setRecording(recording)
            } else {
                setPermission("Please grant permission to app to access microphone");
            }
        } catch (err) {
            console.error("Failed to start recording", err);
        }
    }

    async function stopRecording() {
        await recording.stopAndUnloadAsync();
        let resp = recording
        setRecording(undefined)
        speechToText(resp)
    }

    return (
        <View style={styles.container}>
            <Header />
            <Text>{permission}</Text>
            <View style={{marginTop: 10}}>
                <Text style={{fontSize: 30}}>Usuário :</Text>
                <Text style={{fontSize: 20}}>{userInput}</Text>
                <Text style={{fontSize: 30}}>Bot :</Text>
                <Text style={{color: 'green', fontSize: 20}}>{botResponse}</Text>
            </View>
            <View style={{width: '100%', marginTop: 50}}>
                <Button
                    title={recording ? "PARAR" : "GRAVAR"}
                    onPress={recording ? stopRecording : startRecording}
                />
            </View>

            <StatusBar style="auto" />
            <Navigator navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
});