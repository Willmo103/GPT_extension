const conversations = document.querySelectorAll('div[class=conversation]');

const conversationData = {
    conversations: [],
};

conversations.forEach((conversation) => {
    const conversationObj = {
        conversation_title: conversation.children[0].innerText,
        dialogue: [],
    };

    for (let i = 1; i < conversation.children.length; i++) {
        const author = conversation.children[i].children[0].innerText;
        const text = conversation.children[i].children[1].innerText;

        conversationObj.dialogue.push({
            Author: author,
            text: text,
        });
    }

    conversationData.conversations.push(conversationObj);
});

// Convert the conversationData object to JSON
const jsonString = JSON.stringify(conversationData, null, 2);

// Create a Blob containing the JSON data
const blob = new Blob([jsonString], { type: 'application/json' });

// Create a URL for the Blob
const url = URL.createObjectURL(blob);

// Create a temporary <a> element to trigger the download
const a = document.createElement('a');
a.href = url;
a.download = 'conversation_data.json';

// Trigger the click event on the <a> element to download the JSON
a.click();

// Clean up by revoking the URL
URL.revokeObjectURL(url);
