chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    // log in to moodle
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_ID").value = ${settings.username}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_Pid").value = ${settings.pid}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#Ecom_User_Password").value =${settings.password}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#loginButton2").autofocus = true`});
      });

      // log in to tau
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#frmlogin > table > tbody > tr:nth-child(7) > td:nth-child(1) > div > table > tbody > tr:nth-child(3) > td.tdleft > input").value = ${settings.username}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#frmlogin > table > tbody > tr:nth-child(7) > td:nth-child(1) > div > table > tbody > tr:nth-child(4) > td.tdleft > input").value = ${settings.pid}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#frmlogin > table > tbody > tr:nth-child(7) > td:nth-child(1) > div > table > tbody > tr:nth-child(5) > td.tdleft > input").value =${settings.password}`});
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.querySelector("#frmlogin > table > tbody > tr:nth-child(7) > td:nth-child(1) > div > table > tbody > tr:nth-child(7) > td > input").autofocus = true`});
      });
  }
});