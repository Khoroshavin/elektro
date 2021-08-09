document.addEventListener("DOMContentLoaded", function (event) {

  // TABS
  // tabs counter
  let tabNavsCounter = 1;
  const btnAddTab = document.querySelector(".btn__add_tab");


  // init tabs & content
  function tabNavsInit() {
    // get elems of tabs & tab content
    const tabNavList = document.querySelectorAll(".nav-tab");
    const tabPanes = document.querySelectorAll(".tab-panel");

    // upddate tabs counter
    // tabNavsCounter = tabNavList.length;
    console.log("------------------------");
    console.log('initializing...');
    console.log('count of tabs: ' + tabNavsCounter);

    // in cykle adding listener
    for (let i = 0; i < tabNavList.length; i++) {
      tabNavList[i].addEventListener("click", function (e) {
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");
  
        for (let j = 0; j < tabNavList.length; j++) {
          let contentAttr = tabPanes[j].getAttribute("data-tabcontent");
  
          if (activeTabAttr === contentAttr) {
            tabNavList[j].classList.add("active");
            tabPanes[j].classList.add("active");
          } else {
            tabNavList[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
          }
        };
      });
    }
  }

  // adding new tab & content
  btnAddTab.addEventListener("click", function() {
    // get tabs wrapper
    const tabNavsWrap = document.querySelector(".nav-tabs");

    console.log("------------------------");
    console.log('adding...');
    // update tab counter
    tabNavsCounter++;
    console.log('tabNavsCounter upd:' + tabNavsCounter);

    // create new tab
    let newTab = document.createElement('div');
    newTab.dataset.tab = tabNavsCounter;
    newTab.classList.add("nav-tab");
    newTab.innerHTML = `
    Tab `+ tabNavsCounter +` <button data-tabremove="`+ tabNavsCounter +`" class="btn__remove_tab"></button>
    `;
    console.log(newTab);
    tabNavsWrap.append(newTab);


    // get tab contents wrapper
    const tabContentWrap = document.querySelector(".tab-content");
    // create new tab content
    let newTabContent = document.createElement('div');
    newTabContent.dataset.tabcontent = tabNavsCounter;
    newTabContent.classList.add("tab-panel");
    newTabContent.innerHTML = `
    Tab content `+ tabNavsCounter +``;
    console.log(newTabContent);
    tabContentWrap.append(newTabContent);
    
    // call func for init all tabs & tabs content
    tabNavsInit();
    deleteTabs();
  });




  // remove tab & tab content
  function deleteTabs() {
    const btnRemoveTabs = document.querySelectorAll(".btn__remove_tab");

    // in cykle adding listener
    for (let i = 0; i < btnRemoveTabs.length; i++) {

      btnRemoveTabs[i].addEventListener("click", function (e) {
        e.preventDefault();
        console.log("------------------------");
        console.log("removing...");
        // get target atribute of elem
        let activeRemoveAttr = e.target.getAttribute("data-tabremove");
        console.log('elem for removing: ' + activeRemoveAttr);

        // get target atribute of tab for remove
        let tabForDel = document.querySelector(`[data-tab=${CSS.escape(activeRemoveAttr)}]`);
        // console.log(tabForDel);
        console.log('tab for removing: ' + tabForDel);

        // get target atribute of tab content
        let tabContentForDel = document.querySelector(`[data-tabcontent=${CSS.escape(activeRemoveAttr)}]`);
        console.log(tabContentForDel);
        console.log('tab content for removing: ' + tabContentForDel);


        // remove 
        tabForDel.remove();
        console.log('removing tab' + tabForDel);
        tabContentForDel.remove();
        console.log('removing tab content' + tabContentForDel);


        tabNavsInit();

      });
    }
  }

  

  tabNavsInit();
  deleteTabs();
});