document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("myFooter");
    const main = document.getElementById("myMain");
    const locker1 = document.getElementById("locker1");
    const locker2 = document.getElementById("locker2");

    //footer.style.transform = "translateY(0px)";
    locker1.style.transform = "translateY(5px) rotate(0deg)";
    locker2.style.transform = "translateY(10px) rotate(0deg)";
    main.style.height = "640px";

    const tabs = document.querySelectorAll(".tab");
    const previews = document.querySelectorAll(".preview");
    let currentTab = 0;

    function showTab(tabIndex) {
        previews.forEach(preview => {
            preview.style.display = "none";
        });
        previews[tabIndex].style.display = "block";
        tabs.forEach(tab => {
            tab.classList.remove("active", "hover");
            tab.style.backgroundColor = "white";
        });
        tabs[tabIndex].classList.add("active");
        tabs[tabIndex].style.backgroundColor = "#7ddaff56";
    }

    function cycleTabs() {
        tabs.forEach(tab => {
            tab.classList.remove("hover");
        });
        
        showTab(currentTab);
        tabs[currentTab].classList.add("hover");
        currentTab = (currentTab + 1) % tabs.length;
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("mouseover", () => {
            showTab(index);
            clearInterval(autoCycle);
        });

        tab.addEventListener("mouseout", () => {
            tab.classList.remove("hover");
            autoCycle = setInterval(cycleTabs, 3000);
        });
    });

    let autoCycle = setInterval(cycleTabs, 3000);
    cycleTabs();
});
