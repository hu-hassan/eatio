import { useState } from "react";
import { TextInput, View } from "react-native";
import { Styles } from "./register_styles";
import { Button } from "../../components/button";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const myFunc = () => {
    alert("asfas");
  };

  const myFunc2 = () => {
    alert("func 2");
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.formCon}>
        <View style={Styles.form}>
          <TextInput
            onChangeText={setFirstName}
            placeholder="first Name"
            style={Styles.inputCon}
          />
          <TextInput
            onChangeText={setLastName}
            placeholder="last Name"
            style={Styles.inputCon}
          />
          <TextInput
            onChangeText={setEmail}
            placeholder="email"
            style={Styles.inputCon}
          />
          <TextInput
            onChangeText={setPassword}
            placeholder="password"
            style={Styles.inputCon}
          />
          <TextInput
            onChangeText={setConfirmPassword}
            placeholder="confirm Passowrd"
            style={Styles.inputCon}
          />
          <View style={{ flexDirection: "row" }}>
            <Button primary title={"Register"} onPress={myFunc} />
          </View>
        </View>
      </View>
      <View style={Styles.bottomCon}></View>
    </View>
  );
}

export { Register };
