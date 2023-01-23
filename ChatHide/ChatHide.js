const scriptName = "ChatHide";
var roomname = ""
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
//관리자 전용 방이 있어야 하며, if(room=="이 부분에 관리자 방 이름을 써야 합니다." 또한 관리/방설정 [관리할 방이름] 명령어로 관리할 방을 설정할 수 있습니다.([와 ]괄호는 입력하지 마세요.)
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.indexOf("관리/")==0){
  if (room == "관리자 전용 방이름을 여기에 입력하세요. 이 이름의 방에서만 관리자 명령어가 작동됩니다.") { 
  if(msg.indexOf("관리/방설정 ")==0){
   roomname=msg.replace("관리/방설정 ", "");
          replier.reply(room, "관리 명령어 적용 대상인 방을 "+roomname+" 으로 변경했습니다.");
          
}
if(msg.indexOf("관리/방정보")==0){
    msg=msg.replace("관리/방정보", "");
          replier.reply(room, "현재 관리 명령어 설정된 방은 "+roomname+"입니다.");
}
  if(msg.indexOf("관리/채팅보내기 ")==0){
    msg=msg.replace("관리/채팅보내기 ", "");
          replier.reply(roomname, msg);
          
}
if(msg.indexOf("관리/이벤트주인공랜덤")==0){
    msg=msg.replace("관리/이벤트주인공랜덤", "");
    var dice = Math.floor(Math.random()*6)+1; 
    var event1 = "[✏] 오늘의 주인공 조건을 설정하겠습니다! 오늘은 🎲 " + dice + "등이신 분이 주인공이십니다!";
          replier.reply(roomname, event1);
}
if(msg.indexOf("관리/이벤트주인공 ")==0){
    msg=msg.replace("관리/이벤트주인공 ", "");
    var event1 = "[✏] 오늘의 주인공 조건을 설정하겠습니다! 오늘은 " + msg + "등이신 분이 주인공이십니다!";
          replier.reply(roomname, event1);
    
}
if(msg.indexOf("관리/이벤트게임 ")==0){
    msg=msg.replace("관리/이벤트게임 ", "");
    var event2 = "[✏] 게임 이벤트\n " + msg + "\n에 접속하시면 게임을 플레이할 수 있어요";
          replier.reply(roomname, event2);
    
}
if(msg.indexOf("관리/이벤트메시지 ")==0){
    msg=msg.replace("관리/이벤트메시지 ", "");
    var event3 = "[✏] 지금 당장 " + msg + "을/를 보내지 않으면 엄벌에 처할 것이오! 🔪🔪🔨🔨";
          replier.reply(roomname, event3);
}
}else{
  replier.reply(room, "🚫 이 명령어를 사용할 권한이 없습니다.");
}}

}
  