chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    // log in
    chrome.tabs.query({ active: true, currentWindow: true}, async function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_ID").value = ${settings.username}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_Pid").value = ${settings.pid}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_Password").value =${settings.password}`});
        await sleep(1000);
        chrome.tabs.executeScript(activeTabs[0].id, { code: 'document.querySelector("#loginButton2").click()'});
        chrome.tabs.executeScript(activeTabs[0].id, { code: 'document.querySelector("#loginButton2").click()'});
        chrome.tabs.executeScript(activeTabs[0].id, { code: 'document.querySelector("#loginButton2").click()'});
      });
  }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}