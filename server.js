
//引入ws模块
var WebSocket = require('ws');
//创建websocket服务，端口port为：****
var WebSocketServer = WebSocket.Server,
wss = new WebSocketServer({port:8080});
console.log("listening on 8080");
var sf = new Array();
wss.on('connection',connection);
function connection(ws)
{
    console.log(ws);
    sf.push(ws);
    ws.on('message',incoming);
}
function incoming(message)
{
    console.log(message);
    for(var i = 0;i<sf.length;i++)
    {
        sf[i].send(message);
    }
}