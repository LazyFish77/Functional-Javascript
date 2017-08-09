let getShortMessages = (message) => {
    message = message.filter(m => m.length < 50);
};
let messages = [ 'Tempor quis esse consequat sunt ea eiusmod.',
      'Id culpa ad proident ad nulla laborum incididunt.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.' ];
getShortMessages(messages);
module.exports = getShortMessages;