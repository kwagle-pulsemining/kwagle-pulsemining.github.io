// JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
    const tableOfContents = document.getElementById("tableOfContents");

    const tocData = [
        "Why a Talend Framework",
        // Add more items as needed
    ];

    // Dynamically generate the table of contents
    tocData.forEach((item, index) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.textContent = item;
        anchor.href = `#section-${index + 1}`;
        listItem.appendChild(anchor);
        tableOfContents.appendChild(listItem);
    });
});
