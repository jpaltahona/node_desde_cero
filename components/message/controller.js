const { add , list } = require('./store');

function addMessage (user, message){
    return new Promise( (resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] no hay usuario o mensaje');
            return reject('Datos incorrectos');
        }else{
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            }
            add(fullMessage)
            return resolve(fullMessage); 
        }
    })
};

function getMessage() {
    return new Promise((resolve, reject) => {
        resolve(list)
    });
};
module.exports = {
    addMessage,
    getMessage
}