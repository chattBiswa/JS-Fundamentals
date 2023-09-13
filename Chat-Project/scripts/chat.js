// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
      this.room = room;
      this.username = username;
      this.chats = db.collection('chats');
      this.unsub;
    }

    async addChat(message){
      // format a chat object
      const now = new Date();

      const chat = {
        message: message,
        username: this.username,
        room: this.room,
        created_at: firebase.firestore.Timestamp.fromDate(now)
      };

      // save the chat document in DB
      const response = await this.chats.add(chat);
      return response;
    }

    getChats(callback) {

        // get all chats filtered by current room from DB on each chat addition
        // the real-time listener return an unsubscribe method which can be used to unsubscribe current event listener hook
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        // update UI on new data added in DB
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateUsername(username){
        this.username = username;
        localStorage.setItem('username', username);
    }

    updateRoom(room) {
        this.room = room;
        console.log("room updated");

        // disable real-time event listener on updating room 
        // otherwise the prev room filter will fetch prev room's chats and not the updated room's chat
        if(this.unsub){
            this.unsub();
        }
    }
}

 
