import { View, Text, StyleSheet, Pressable, Switch } from 'react-native'
import { useState } from 'react'


export default function Calculator({ isDarkMode, onDarkModeToggle }) {


    //for darkmode

    const [isDarkModeON, setIsDarkMode] = useState(isDarkMode)


    //for num1 
    const [num1, setNum1] = useState(0)
    const [num1Active, setNum1Active] = useState(true)

    //for operator
    const [op, setOp] = useState("")
    const [opActive, setOpActive] = useState(false)

    //for num2
    const [num2, setNum2] = useState(0)
    const [num2Active, setNum2Active] = useState(false)

    //for result

    const [result, setResult] = useState(0)
    const [resultActive, setResultActive] = useState(false)

    const HandleButtonPress = (cmd) => {

        console.log(" Pressed : " + cmd)
        if (resultActive) {
            if (cmd == '+' || cmd == '-' || cmd == '*' || cmd == '/' || cmd == '%') {
                setResultActive(false)
                setNum1(result)
                setOp(cmd)
                setNum1Active(false)
                setNum2(0)

                //setOpActive(true)
                setResultActive(false)
                setNum2Active(true)
            }
        }
        if (cmd == 'C') {
            setNum1(0)
            setNum2(0)
            setNum1Active(true)
            setNum2Active(false)
            setOpActive(false)
            setOp("")
            setResultActive(false)
            setResult(0)
        }

        if (cmd == 'X') {
            if (num1Active) {
                let num = Math.floor(num1 / 10)
                if (num1 != 0) setNum1(num)
            }
            else if (num2Active) {
                let num = Math.floor(num2 / 10)
                if (num2 != 0) setNum2(num)
            }
        }

        if (cmd == '=' && !num1Active && num2Active && !opActive) {
            setResultActive(true)
            if (op == '+') setResult(num1 + num2)
            else if (op == '-') setResult(num1 - num2)
            else if (op == '*') setResult(num1 * num2)
            else if (op == '/') setResult(num1 / num2)
            else if (op == '%') setResult(num1 % num2)
        }

        if (num1Active) {
            if (cmd == '+' || cmd == '-' || cmd == '*' || cmd == '/' || cmd == '%') {
                if (!num2Active) {
                    setOp(cmd)
                    setOpActive(true)
                }
                console.log("op pressed")
                setNum1Active(false)
                setNum2Active(true)
            }
            else if (cmd >= '0' && cmd <= '9') {
                let num = parseInt(cmd)
                let prevNum = num1
                setNum1(prevNum * 10 + num)

                console.log("Number 1 : " + num1)
            }
        }

        if (opActive) {
            if (cmd == '+' || cmd == '-' || cmd == '*' || cmd == '/' || cmd == '%') {
                setOp(cmd)
            }
            else {
                setOpActive(false)
                setNum2Active(true)
            }
        }

        if (num2Active) {
            if (cmd >= '0' && cmd <= '9') {
                let num = parseInt(cmd)
                let prevNum = num2
                setNum2(prevNum * 10 + num)

                console.log("Number 2 : " + num2)
            }
            if (cmd == '=') setNum2Active(false)
        }
    }



    const [buttonElevations, setButtonElevations] = useState({
        C: 0, X: 0, plus: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 0: 0, star: 0, minus: 0, divide: 0, modulo: 0, equal: 0,
    });

    const handleElevationChange = (button, isPressed) => {
        setButtonElevations((prevElevations) => ({
            ...prevElevations,
            [button]: isPressed ? 8 : 0,
        }));
    };


    return (
        <View style={[styles.mainContainer, { backgroundColor: isDarkModeON ? "#0f222c" : "#f7f7f7", margin: isDarkMode ? 0 : 5, }]}>

            <View style={[styles.topContainer, { backgroundColor: isDarkModeON ? "#0f222c" : null }]}>

                <View style={styles.subContainerTop}>
                    <Text style={[styles.text, { color: isDarkModeON ? "#fff" : null }]}>Num 1     :</Text>
                    <Text style={[styles.text1, { color: isDarkModeON ? "#36b1ad" : null }]}>{num1}</Text>
                </View>
                <View style={styles.subContainerTop}>
                    <Text style={[styles.text, { color: isDarkModeON ? "#fff" : null }]}>Operator : </Text>
                    <Text style={[styles.text1, { color: isDarkModeON ? "#36b1ad" : null }]}>{op}</Text>
                </View>
                <View style={styles.subContainerTop}>
                    <Text style={[styles.text, { color: isDarkModeON ? "#fff" : null }]}>Num 2     :</Text>
                    <Text style={[styles.text1, { color: isDarkModeON ? "#36b1ad" : null }]}>{num2}</Text>
                </View>
                <View style={styles.subContainerTop}>
                    <Text style={[styles.text, { color: isDarkModeON ? "#fff" : null }]}>Result     :</Text>
                    <Text style={[styles.text1, { color: isDarkModeON ? "#36b1ad" : null }]}>{resultActive ? result : "-"}</Text>

                </View>
                <View><Text style={{ alignSelf: "center", fontSize: 20, color: isDarkModeON ? "#fff" : null }}>{resultActive ? "Press C to Restart" : ""}</Text></View>

            </View>



            <View style={[styles.bottomContainer, { backgroundColor: isDarkModeON ? "#0f222c" : "#fff" }]}>

                <View style={styles.subContainerBottom}>
                    <View style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }]}>
                        <Switch value={isDarkModeON}
                            onValueChange={() => {
                                setIsDarkMode((isDarkModeON) => !isDarkModeON)
                                onDarkModeToggle()
                            }}
                        //thumbColor="white"
                        />
                        <Text style={{ color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }} >Dark Mode</Text>


                    </View>
                    <Pressable style={[styles.box, { flex: 2, elevation: buttonElevations.C, backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }]}
                        onPress={() => HandleButtonPress('C')}
                        onPressIn={() => handleElevationChange('C', true)}
                        onPressOut={() => handleElevationChange('C', false)}
                    >
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }]}>C</Text>
                    </Pressable>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations.X }]}
                        onPress={() => HandleButtonPress('X')}
                        onPressIn={() => handleElevationChange('X', true)}
                        onPressOut={() => handleElevationChange('X', false)}
                    >
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }]}>X</Text>

                    </Pressable>


                </View>
                <View style={styles.subContainerBottom}>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[1] }]}
                        onPressIn={() => handleElevationChange('1', true)}
                        onPressOut={() => handleElevationChange('1', false)}
                        onPress={() => HandleButtonPress('1')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>1</Text>
                    </Pressable>

                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[2] }]}
                        onPressIn={() => handleElevationChange('2', true)}
                        onPressOut={() => handleElevationChange('2', false)}
                        onPress={() => HandleButtonPress('2')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>2</Text>
                    </Pressable>

                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[3] }]}
                        onPressIn={() => handleElevationChange('3', true)}
                        onPressOut={() => handleElevationChange('3', false)}
                        onPress={() => HandleButtonPress('3')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>3</Text>
                    </Pressable>

                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations.plus }]}
                        onPressIn={() => handleElevationChange('plus', true)}
                        onPressOut={() => handleElevationChange('plus', false)}
                        onPress={() => HandleButtonPress('+')} >

                        <Text style={[styles.boxText, { color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }]}>+</Text>

                    </Pressable>




                </View>
                <View style={styles.subContainerBottom}>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[4] }]}
                        onPressIn={() => handleElevationChange('4', true)}
                        onPressOut={() => handleElevationChange('4', false)}
                        onPress={() => HandleButtonPress('4')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>4</Text>
                    </Pressable>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[5] }]}
                        onPressIn={() => handleElevationChange('5', true)}
                        onPressOut={() => handleElevationChange('5', false)}
                        onPress={() => HandleButtonPress('5')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>5</Text>
                    </Pressable>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[6] }]}
                        onPressIn={() => handleElevationChange('6', true)}
                        onPressOut={() => handleElevationChange('6', false)}
                        onPress={() => HandleButtonPress('6')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>6</Text>
                    </Pressable>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations.minus }]}
                        onPressIn={() => handleElevationChange('minus', true)}
                        onPressOut={() => handleElevationChange('minus', false)}
                        onPress={() => HandleButtonPress('-')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }]}>-</Text>
                    </Pressable>




                </View>
                <View style={styles.subContainerBottom}>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[7] }]}
                        onPressIn={() => handleElevationChange('7', true)}
                        onPressOut={() => handleElevationChange('7', false)}
                        onPress={() => HandleButtonPress('7')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]} >7</Text>
                    </Pressable>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[8] }]}
                        onPressIn={() => handleElevationChange('8', true)}
                        onPressOut={() => handleElevationChange('8', false)}
                        onPress={() => HandleButtonPress('8')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>8</Text>
                    </Pressable>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[9] }]}
                        onPressIn={() => handleElevationChange('9', true)}
                        onPressOut={() => handleElevationChange('9', false)}
                        onPress={() => HandleButtonPress('9')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>9</Text>
                    </Pressable>

                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations.star }]}
                        onPressIn={() => handleElevationChange('star', true)}
                        onPressOut={() => handleElevationChange('star', false)}
                        onPress={() => HandleButtonPress('*')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }]}>*</Text>
                    </Pressable>




                </View>
                <View style={styles.subContainerBottom}>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations.modulo }]}
                        onPressIn={() => handleElevationChange('modulo', true)}
                        onPressOut={() => handleElevationChange('modulo', false)}
                        onPress={() => HandleButtonPress('%')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }]}>%</Text>
                    </Pressable>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations[0] }]}
                        onPressIn={() => handleElevationChange('0', true)}
                        onPressOut={() => handleElevationChange('0', false)}
                        onPress={() => HandleButtonPress('0')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#fff" : null }]}>0</Text>
                    </Pressable>
                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations.divide }]}
                        onPressIn={() => handleElevationChange('divide', true)}
                        onPressOut={() => handleElevationChange('divide', false)}
                        onPress={() => HandleButtonPress('/')}>
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }]}>/</Text>
                    </Pressable>

                    <Pressable style={[styles.box, { backgroundColor: isDarkModeON ? "#1c3f52" : "#fff" }, { elevation: buttonElevations.equal }]}
                        onPress={() => HandleButtonPress('=')}
                        onPressIn={() => handleElevationChange('equal', true)}
                        onPressOut={() => handleElevationChange('equal', false)}
                    >
                        <Text style={[styles.boxText, { color: isDarkModeON ? "#36b1ad" : "#ff5d1f" }]}>=</Text>
                    </Pressable>

                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 5,
        borderRadius: 5,
        borderWidth: 0.5,
        margin: 5,
        // backgroundColor: "#164863"
    },
    topContainer: {
        flex: 2,
        backgroundColor: "#fff",
        //backgroundColor: "#0f222c",
        padding: 20

    },
    bottomContainer: {
        flex: 4,
        backgroundColor: "#f7f7f7",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,

    },
    subContainerTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        // color: "#fff"
    },
    text1: {
        fontSize: 28,
        // color: "#36b1ad"
    },
    subContainerBottom: {
        flex: 1,
        flexDirection: "row"
    },
    box: {
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "silver",
        borderRadius: 5,
        margin: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    boxText: {
        fontSize: 35,
        fontFamily: "monospace"
    }
})