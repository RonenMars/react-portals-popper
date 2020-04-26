const emojis = require.context('./images/emojis', false, /\.(png|jpe?g|svg)$/)
const emojisMapped = emojis.keys().map(emojis);
const MessageTypes = {
    image: 'image',
    text: 'text'
};

// Thanks for the jokes Jokes4Us.com!
const botJokes = ['Q: What goes black, white, black, white, black, white? \n A: A panda rolling down a hill.',
    'Q: What\'s black and white and red all over? \n A: A sunburnt panda. ',
    'Q: Why do pandas have fur coats? \n A: Because they\'d look stupid in denim jackets. ',
    'Q: Why do pandas like old movies? \n A: Because they\'re in black and white. ',
    'Q: What do you call a bear that jumps but never lands? \n A: Peter Panda. ',
    'Q: How did the panda lose his dinner? \n A: He was "Bamboozled"! ',
    'Q: What did the panda say when he was forced out of his natural habitat? \n A: This is un-BEAR-able ',
    'Q: What\'s black and white and goes round and round? \n A: A panda stuck in a revolving door. ',
    'Q: What\'s invisible and smells like bamboo? \n A: Panda farts. '];

export {
    botJokes,
    emojisMapped,
    MessageTypes
};

