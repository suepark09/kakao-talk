var kakaoTalk = {
  chatbox: [],
  addchat: function (kakaoText) {
    this.chatbox.push({
      kakaoText: kakaoText
    });
  }
};

// document.getElementById("addchat-text-input").addEventListener("keydown", function(e) {
//     if (!e) { var e = window.event; }
//     // e.preventDefault(); // sometimes useful

//     // Enter is pressed
//     if (e.keyCode == 13) { kakaoTalk.displayChat(); }
// }, false);

var addChatTextInput = document.getElementById('addchat-text-input');

var handlers = {
  displayChat: function () {
    kakaoTalk.displayChat();
  },
  addchat: function () {
    kakaoTalk.addchat(addChatTextInput.value);
    addChatTextInput.value = '';
    view.displayChat();
  }
};

addChatTextInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    handlers.addchat();
    var $chat = $("#chat-window");
    $chat.scrollTop($chat.height());
  }
});



var view = {
  displayChat: function () {
    var chatUl = document.querySelector('ul');
    chatUl.innerHTML = '';
    for (var i = 0; i < kakaoTalk.chatbox.length; i++) {
      var chatLi = document.createElement('li');
      chatLi.textContent = kakaoTalk.chatbox[i].kakaoText;
      chatUl.appendChild(chatLi);
      document.querySelector('li');
      // chatUl.scrollTop = chatUl.scrollHeight;
    }
  }
}

// if there is no text, dont print a bubble

// if (addChatTextInput === 0) {
// return false; 

// }