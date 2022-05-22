const tabsContainer = document.querySelector(".tabs-container");
const tabList = tabsContainer.querySelector(".tabs");

const tabs = [...tabList.querySelectorAll(".tab")];
const tabContents = [...tabsContainer.querySelectorAll(".tab-content")];

const clickToTabs = (e) => {
    const tab = e.target;
    const target = tab.dataset.target;
    const tabContent = tabsContainer.querySelector("#" + target);

    //remove is-selected class from every tab and add it to current tab
    tabs.forEach((t) => t.classList.remove("is-selected"));
    tab.classList.add("is-selected");

    //remove is-selected class from every tabContent and add it to the current one
    tabContents.forEach((c) => c.classList.remove("is-selected"));
    tabContent.classList.add("is-selected");
};

tabList.addEventListener("click", clickToTabs);
