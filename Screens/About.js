import { View, Text, StyleSheet, Image, Pressable, Linking } from 'react-native'
import { useState, useEffect } from 'react'
const Developer = require("./components/Dhanush.jpg")

export default function About({ isDarkMode }) {
    const [darkmode, setDarkMode] = useState(isDarkMode)
    if (isDarkMode) console.log("on")
    else console.log("off la iruku dudde")
    useEffect(() => {
        setDarkMode(isDarkMode);
    }, [isDarkMode]);

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: darkmode ? "#0f222c" : "#fff" }}>
            <View style={[styles.container, { backgroundColor: darkmode ? "#1c3f52" : "#fff" }]}>

                <Image source={Developer} style={styles.image}></Image>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, { textAlign: "justify", lineHeight: 30, color: darkmode ? "#fff" : null }]}>  Hello! I'm
                        <Text style={{ fontWeight: "bold", color: darkmode ? "#36b1ad" : null }}> Dhanushkumar</Text>
                        , a passionate developer currently studying at the
                        <Text style={{ fontWeight: "bold", color: darkmode ? "#36b1ad" : null }}> College of Engineering Guindy(CEG) </Text>
                        in my third year, pursuing a B.Tech in Information Technology.</Text>

                </View>
                <View style={styles.contact}>
                    <Text style={{ fontSize: 20, marginBottom: 10, color: isDarkMode ? "#36b1ad" : null }}>Feel free to Connect with me 📱</Text>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 17, color: isDarkMode ? "#36b1ad" : null }}>Mobile :</Text>
                        <Text style={{ color: isDarkMode ? "#fff" : null, fontSize: 16 }}>+91 9025635359</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 17, color: isDarkMode ? "#36b1ad" : null }}>Email :</Text>
                        <Text style={{ color: isDarkMode ? "#fff" : null, fontSize: 16 }}>dhanushit419@gmail.com</Text></View>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: isDarkMode ? "#36b1ad" : null }}>LinkedIn :
                    </Text>
                        <Pressable onPress={() => { Linking.openURL("https://www.linkedin.com/in/dhanushkumar-sankar-448a18270/") }}>
                            <Text style={{ color: isDarkMode ? "#fff" : null, fontSize: 16, textDecorationLine: 'underline' }}>LinkedIn Profile</Text>

                        </Pressable>
                    </View>

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 20,
        borderWidth: 2,
        borderColor: "silver",
        borderRadius: 20
    },
    image: {
        flex: 2,
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        padding: 20
    },
    textContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 19
    },
    contact: {
        flex: 2,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        justifyContent: "space-around",
        alignItems: "center"
    }
})