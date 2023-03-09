import { TextInput, View } from "react-native";
import { Styles } from "./login_styles";
import { Button } from "../../components/button";

function Login() {
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
          <TextInput placeholder="email" style={Styles.inputCon} />
          <TextInput placeholder="password" style={Styles.inputCon} />
          <Button primary title={"Signin"} onPress={myFunc} />
          <Button outline title={"Signin1"} onPress={myFunc2} />
          <Button pirmary title={"Signin➡️"} />
        </View>
      </View>
      <View style={Styles.bottomCon}></View>
    </View>
  );
}

export { Login };
