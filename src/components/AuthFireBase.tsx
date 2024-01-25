import { View, Text, Button } from "react-native";
import React from "react";
import { auth } from "../utils/fireBase";
import {
  GithubAuthProvider,
  User,
  signInWithCredential,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

const clientID =
  process.env.EXPO_PUBLIC_AUTH_CLIENT_ID || "CLIENT_ID IS REQUIRED";
const secret = process.env.EXPO_PUBLIC_AUTH_SECRET;

// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint: `https://github.com/settings/connections/applications/${clientID}`,
};

// This function makes a POST request for the token
async function createTokenWithCode(code: string) {
  const url =
    `https://github.com/login/oauth/access_token` +
    `?client_id=${clientID}` +
    `&client_secret=${secret}` +
    `&code=${code}`; // 👈 we are passing the code here

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // The response should come with: { token_type, scope, access_token }
  return res.json();
}

const AuthFireBase = () => {
  const [user, setUser] = React.useState<User | null>(null);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: clientID,
      scopes: ["identity", "user:email"],
      redirectUri: makeRedirectUri({
        scheme: "react-native-playground",
      }),
    },
    discovery
  );

  React.useEffect(() => {
    async function handleResponse() {
      console.log("handleResponse", response);

      // Verify that everything went well
      if (response?.type === "success") {
        // Here we grab the code from the response
        const { code } = response.params;

        // And use this code to get the access_token
        const { access_token } = await createTokenWithCode(code);

        // Just in case we don't have the token return early
        if (!access_token) return;

        // GithubAuthProvider is a class that we can import from 'firebase/auth'
        // We pass the token and it returns a credential
        const credential = GithubAuthProvider.credential(access_token);

        // Finally we use that credential to register the user in Firebase
        const data = await signInWithCredential(auth, credential);
        setUser(data.user);
      }
    }
    handleResponse();
  }, [response]);

  function onLogout() {
    signOut(auth).then(() => setUser(null));
  }
  return (
    <View>
      {!user && (
        <Button
          title={"Login FIREBASE"}
          disabled={!!user}
          onPress={() =>
            promptAsync({ windowName: "Sign to React playground" })
          }
        />
      )}
      {user && (
        <>
          <Text className="text-red-600">{"user: " + user.displayName}</Text>
          <Text className="text-red-600">{user.email}</Text>
          <Button title={`Logout FIREBASE`} onPress={onLogout} />
        </>
      )}
    </View>
  );
};

export default AuthFireBase;
