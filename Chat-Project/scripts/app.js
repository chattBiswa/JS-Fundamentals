// DOM queries
const chatlist = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const updateNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-mssg');
const chatrooms = document.querySelector('.chat-rooms');
  
// class instances
const chatUI = new ChatUI(chatlist);
const username = localStorage.username ? localStorage.username : 'anonymous';
const chatroom = new Chatroom('gaming', username);

// get the chats and render for default (gaming) room
chatroom.getChats(chat => chatUI.uiRender(chat));

// add new chat into DB using input taken from UI
newChatForm.addEventListener('submit', e =>{
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

// update username of the chat taken from UI
updateNameForm.addEventListener('submit', e => {
    e.preventDefault();

    const username = updateNameForm.name.value.trim();
    chatroom.updateUsername(username);
    updateNameForm.reset();
    updateMessage.innerText = `Your name was updated to ${username}`;
    setTimeout(() => updateMessage.innerText = '', 3000);
    
});


chatrooms.addEventListener('click', e => {
    if(e.target.tagName === "BUTTON"){
        // clear current room chats
        chatUI.clear();

        // update room
        chatroom.updateRoom(e.target.getAttribute('id'));

        // load updated room chats
        chatroom.getChats(chat => chatUI.uiRender(chat));
    }
});