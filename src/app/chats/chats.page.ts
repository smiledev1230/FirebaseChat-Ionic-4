import { Component, OnInit } from '@angular/core';
import { User } from "../services/app.models";

import { FirebaseService } from "../services/firebase.service";
import * as firebase from 'Firebase';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  availableusers: any;
  chatuser : any;
  constructor (private firebaseService: FirebaseService ) {}

  ngOnInit() {
    //Fetch other users
    firebase.database().ref("chatuser").on('value', chatuser => {
      this.chatuser = chatuser;
      firebase.database().ref("chatuser").on('value', users => {
        console.log(users);
        this.availableusers = users;
      });
    });
  }
  // Go To Chat
  goToChat(chatpartner) {
    this.firebaseService.currentChatPairId = this.firebaseService.createPairId(
      this.chatuser,
      chatpartner
    );
    this.firebaseService.currentChatPartner = chatpartner;
  }
}
