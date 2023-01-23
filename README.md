# msgbot-chatroom-manage
메신저봇을 이용하여 방을 관리할 수 있게 해주는 봇입니다. 이벤트 명령어도 있습니다.

# 응용 버전
아래 코드는 이 레포에 있는 ChatHide/ChatHide.js 에 있는 코드에서 공지 코드만 뻬서 제작한 코드입니다.

```javascript
const scriptName = "teamnotify";
var roomname = ""

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.indexOf("팀원전용공지/")==0){
  if (room == "팀원 전용 방") { 
  if(msg.indexOf("팀원전용공지/방설정 ")==0){
   roomname=msg.replace("팀원전용공지/방설정 ", "");
          replier.reply(room, "팀원전용 공지 명령어 적용 대상인 방을 "+roomname+" 으로 변경했습니다.");
          
}
if(msg.indexOf("팀원전용공지/방정보")==0){
    msg=msg.replace("팀원전용공지/방정보", "");
          replier.reply(room, "현재 팀원전용 공지 명령어 설정된 방은 "+roomname+"입니다.");
}
  if(msg.indexOf("팀원전용공지/공지 ")==0){
    msg=msg.replace("팀원전용공지/공지 ", "[😺] Team Blackcats4567 ");
          replier.reply(roomname, msg+"\n\n[팀 블랙캣츠4567]\n공지 전송자: "+
          sender);
          
}
}else{
  replier.reply(room, "🚫 이 명령어를 사용할 권한이 없습니다.");
}}

}
```
  
