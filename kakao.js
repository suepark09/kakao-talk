var kakaoTalk = {
  chatbox: [],
addchat: function(kakaoText) {
this.chatbox.push(
  {
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



var handlers = {
displayChat: function() {
kakaoTalk.displayChat(); 
},
addchat: function() {
var addChatTextInput = document.getElementById('addchat-text-input'); 
addChatTextInput.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById('submit-btn').click(); 
}                                  
});
kakaoTalk.addchat(addChatTextInput.value);
addChatTextInput.value = ''; 
view.displayChat(); 
}
};

var view = {
displayChat: function() {
var chatUl = document.querySelector('ul');
chatUl.innerHTML = ''; 
for(var i = 0; i < kakaoTalk.chatbox.length; i++) {
var chatLi = document.createElement('li');
chatLi.textContent = kakaoTalk.chatbox[i].kakaoText; 
chatUl.appendChild(chatLi); 
}
}

}