/* get response script */
function getBotResponse() {
    var rawText = $("#textInput").val();

    userQuestion = '<div class="d-flex justify-content-start mb-4">'+
								'<div class="img_cont_msg">'
									+'<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">'
								+'</div>'
								+'<div class="msg_cotainer">'
                         			+'<div id="chatbox">'
									  +'<p class="botText"><span>'+rawText+'</span></p>'
								    +'</div>'
									+'<b id="userInput"/>'
								+'</div>'
							+'</div>'


    var userHtml = '<p class="userText"><span>' + rawText + '</span></p>';
    $("#textInput").val("");
    /*$("#chatbox").append(userQuestion);*/
     $('.msg_card_body').append(userQuestion);

     var objDiv = document.querySelector(".msg_card_body");
     objDiv.scrollTop = objDiv.scrollHeight;

    /*document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});*/

    $.get("/get", { msg: rawText }).done(function(data) {
      var botHtml = '<p class="botText"><span>' + data + '</span></p>';
      /*$("#chatbox").append(botHtml);*/

      responsehtml = '<div class="d-flex justify-content-end mb-4">'+
            '<div class="msg_cotainer_send">'+
                data+
                /*'<span class="msg_time_send">9:05 AM, Today</span>'*/
            '</div>'+
            '<div class="img_cont_msg">'+
            '<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">'
             +'</div>'
        +'</div>'

        $('.msg_card_body').append(responsehtml);

        objDiv.scrollTop = objDiv.scrollHeight;

        SDK.applicationId = "4164224575534809466";
        SDK.backlinkURL = "http://www.botlibre.com/login?affiliate=tayla123";
        SDK.lang = "fr";
        var sdk = new SDKConnection();
        var web = new WebChatbotListener();
        web.connection = sdk;
        web.instance = "39269831";
        web.instanceName = "AlgoCHatbot_CRMESM";
        web.prefix = "botplatform";
        web.caption = "Chat Now";
        web.boxLocation = "bottom-right";
        web.color = "#009900";
        web.background = "#fff";
        web.css = "https://www.botlibre.com/css/chatlog.css";
        web.buttoncss ="https://www.botlibre.com/css/blue_round_button.css";
        web.version = 8.5;
        web.bubble = true;
        web.backlink = true;
        web.showMenubar = true;
        web.showBoxmax = true;
        web.showSendImage = true;
        web.showChooseLanguage = true;
        web.avatar = true;
        web.chatLog = true;
        web.popupURL = "https://www.botlibre.com/chat?&id=39269831&embedded=true&chatLog=true&facebookLogin=false&application=4164224575534809466&bubble=true&menubar=true&chooseLanguage=true&sendImage=true&background=%23fff&prompt=You+say&send=Send&css=https://www.botlibre.com/css/chatlog.css&language=fr";
        web.createBox();


      /*document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});*/
    });
  }
  $("#textInput").keypress(function(e) {
      if ((e.which == 13) && document.getElementById("textInput").value != "" ){
          getBotResponse();
      }
  });
  $("#buttonInput").click(function() {
      if (document.getElementById("textInput").value != "") {
          getBotResponse();
      }
  })