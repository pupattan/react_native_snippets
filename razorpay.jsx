import { Text, TouchableHighlight, View } from "react-native";
import RazorpayCheckout from "react-native-razorpay";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit something now.</Text>
      <View>
        <TouchableHighlight
          onPress={() => {
            var options = {
              description: "Credits towards consultation",
              image: "https://i.imgur.com/3g7nmJC.jpg",
              currency: "INR",
              key: "rzp_test_6GvpLSAmWckaTn",
              amount: 5000,
              name: "Acme Corp",
              order_id: "order_LGchnrymc1Pgzc", //Replace this with an order_id created using Orders API.
              prefill: {
                email: "gaurav.kumar@example.com",
                contact: "9191919191",
                name: "Gaurav Kumar",
              },
              theme: { color: "#53a20e" },
            };
            console.log(RazorpayCheckout);
            RazorpayCheckout.open(options)
              .then((data) => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch((error) => {
                // handle failure
                console.log(error);
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}
        >
          <Text> This text is the target to be highlighted </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
