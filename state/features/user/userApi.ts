import { createAsyncThunk } from "@reduxjs/toolkit";
import myaxios from "../../../myAxios";
import { database } from "../../../db/db";


export const getUserThunk = createAsyncThunk(
  "get/user",
  async (body:any) => {
    database('DELETE FROM token', [])
    // await database('DROP TABLE token',[])
    const res = await myaxios.post("auth/login", body)
    database(
      "INSERT INTO token (refresh_token, access_token) VALUES (?, ?);",
      [res.data.refresh_token, res.data.access_token]
    );


    const { _, rows }: any = await database(
      "SELECT access_token FROM token",
      []
    );
    
    const tokens = rows?.item(0);
    // if (tokens) {      
     const {data}: any = await myaxios.get("auth/profile", {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      })
      return data
    }
  // }
);

export const addNewUserThunk = createAsyncThunk(
  "add/user",
  async (body:any) => {
    const {data}: any = await myaxios.post('users', body) 
    return data
  }
)

