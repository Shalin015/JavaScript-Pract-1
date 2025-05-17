"use strcit";

//same origin
// iframe.onload = function()
// {
//     let iframeWindow = iframe.contentWindow;
//     try
//     {
//         let doc = iframe.contentDocument;
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
//     try
//     {
//         let href = iframe.contentWindow.location.href;
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
//     iframe.contentWindow.location = '/';
//     iframe.onload = null;
// };

// pitfall when iframe comes from same origin and we access document its document
// let oldDoc = iframe.contentDocument;
// iframe.onload = function ()
// {
//     let newDoc = iframe.contentDocument;
//     console.log(`when same origin document Before load document == after load document : ${oldDoc===newDoc}`);
// }

// collection : window.iframes
// console.log("by Frames Index : ",iframe.contentWindow == frames[0]);
// console.log("by Frames Name : ",iframe.contentWindow == frames.win);

// cross window messaging
window.addEventListener('message',function(event){
    console.log(`Receive ${event.data} from ${event.origin}`);
})