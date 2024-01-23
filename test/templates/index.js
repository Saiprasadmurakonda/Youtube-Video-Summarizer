var message = "{{ message }}";
alert('message')
// Open a new tab and display the message
chrome.tabs.create({ url: 'new_tab.html' }, function (tab) {
    chrome.tabs.executeScript(tab.id, {
        code: 'var message = "' + message + '";'
    }, function () {
        chrome.tabs.executeScript(tab.id, { file: 'display_message.js'});
    });
});