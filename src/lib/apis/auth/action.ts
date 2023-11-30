"use server";

import { cookies } from "next/headers";

import {
  FormSchema,
  getRequestToken,
  postLogin,
  createSessionID,
  getDetailAccount,
} from ".";

export async function onSubmitLogin(data: FormSchema) {
  const body = {
    ...data,
    request_token: await getRequestToken(),
  };

  try {
    // const result = await postLogin(body);
    // const getSessionID = await createSessionID(result.request_token);
    // const getUserID = await getDetailAccount(getSessionID);
    // cookies().set("userID", getUserID);
    // cookies().set("sessionID", getSessionID);
    console.log(body.username);
  } catch (error) {
    console.log(error);
  }
}
