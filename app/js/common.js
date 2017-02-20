/*(function() {
    window.addEventListener('load', function() {
        setChatSize();
    });

    window.addEventListener('resize', function() {
        setChatSize();
    });

    window.addEventListener('orientationchange', function() {
        setChatSize();
    });

    // CALCULATE CHAT SIZE
    function setChatSize() {
        var windowHeight = window.innerHeight,
            rightChatHeaderHeight = document.querySelector('.chat-header').clientHeight,
            rightChatFormHeight = document.querySelector('.chat-form').clientHeight,
            chatHeight,
            rightChatMessagesWrapHeight;

        if (windowHeight < 1000) {
            chatHeight = 'height: ' + windowHeight + 'px;';
            rightChatMessagesWrapHeight = 'height: ' + (windowHeight - rightChatHeaderHeight - rightChatFormHeight) + 'px;';
        } else {
            chatHeight = 'height: 700px;';
            rightChatMessagesWrapHeight = 'height: 530px;';
        }

        document.querySelector('.chat-container').setAttribute('style', chatHeight);
        document.querySelector('.chat-messages').setAttribute('style', rightChatMessagesWrapHeight)
    }
})();*/
