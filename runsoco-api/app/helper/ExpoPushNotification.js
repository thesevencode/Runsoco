'use srtrict'

const { Expo } = require('expo-server-sdk')
const expo = new Expo();

//TOKENS
//Mensaje

class ExpoPushNotification{

    chunks

    constructor(tokens, mensaje){
        this.tokens = tokens
        this.mensaje = mensaje
        //iniciando
        this.prepare()
    }

    prepare(){
        let notifications = [];
        for (let pushToken of tokens) {

            if (!Expo.isExpoPushToken(pushToken)) {
                console.error(`Push token ${pushToken} is not a valid Expo push token`);
                continue;
            }
    
            notifications.push({
                to: pushToken,
                sound: "default",
                title: title,
                body: body,
                data: { body }
            })
        }
        chunks = expo.chunkPushNotifications(notifications);
    }

    async send(){
        for (let chunk of chunks) {
            try {
              let receipts = await expo.sendPushNotificationsAsync(chunk);
              console.log(receipts)
            } catch (error) {
              console.error(error)
            }
        }
    }
}


module.exports =  ExpoPushNotification