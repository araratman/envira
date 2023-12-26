import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { db } from "./db/db";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Navigation from "./navigation";

const Stack = createNativeStackNavigator();


export default function App() {

  useEffect(() => {
    db.transaction((tx: any) => {
      tx.executeSql(
        "create table if not exists token (id integer primary key not null, access_token text, refresh_token text);"
      );
    });
  }, []);


  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
}
