chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    // log in
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_ID").value = ${settings.username}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_Pid").value = ${settings.pid}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_Password").value =${settings.password}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#loginButton2").autofocus = true`});
      });
  }
});