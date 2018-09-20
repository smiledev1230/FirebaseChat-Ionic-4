import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';
import { User, Chat } from "./app.models";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users;
  chats;
  currentChatPairId;
  currentChatPartner;
  users_endpoint: "users";
  chats_endpoint: "chats";

  constructor() {
    firebase.database().ref(this.users_endpoint).on('value', resp => {
      this.users = resp;
    });
  }

  //addUser
  addUser(payload) {
    return this.users.add(payload);
  } 
  //addChat
  addChat(chat: Chat) {
    return this.chats.add(chat);
  } 
  //createPairString
  createPairId(user1, user2) {
    let pairId;
    if (user1.dateCreted < user2.dateCreted) {
      pairId = `${user1.email}|${user2.email}`;
    } else {
      pairId = `${user2.email}|${user1.email}`;
    }
    return pairId;
  }
}
