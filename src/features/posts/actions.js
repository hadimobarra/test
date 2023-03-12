import { createAction } from "@reduxjs/toolkit";

export const SEND_POST = 'post/SendPost';
export const addSendPost = createAction(SEND_POST)