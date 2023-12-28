import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            {/* first block for name */}

            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text>({props.type})</Text>
            </View>

            {/* second block for image */}
            <Image source={props.image} accessibilityLabel={props.name} style={styles.image} resizeMode="contain"></Image>

            {/* third block for details */}

            <View style={styles.skills}>
                <Text style={styles.skillsText}>Skills : {props.skills.join(' , ')}</Text>

            </View>

            <View style={styles.contentContainer}>
                <Text ><Text style={{ fontWeight: "bold", fontSize: 16 }}>Department :</Text> {props.dept}</Text>
                <Text><Text style={{ fontWeight: "bold", fontSize: 16 }}>Batch :</Text> {props.batch}</Text>
                <Text><Text style={{ fontWeight: "bold", fontSize: 16 }}>Mobile :</Text> {props.Mobile}</Text>
            </View>



            <View style={styles.quote}>
                <Text style={styles.quoteText}>{props.Quote}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        //height: 500,
        //width: "85%",
        // borderColor: "#3887BE",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 15,
        elevation: 5,
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "center",
        marginBottom: 20
    },
    nameText: {
        fontSize: 23,
        fontFamily: "monospace",
        fontWeight: "bold"
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        // overflow: "hidden",
        alignSelf: "center",
        marginBottom: 20
    },
    skills: {
        marginBottom: 16
    },
    skillsText: {
        fontWeight: "bold",
        fontSize: 23

    },
    contentContainer: {
        marginBottom: 20
    },
    quote: {
        borderWidth: 1,
        borderColor: "silver",
        padding: 10,
        alignItems: "center",
        marginBottom: 10
    },
    quoteText: {
        fontSize: 18,
        fontFamily: "monospace",

    }
})