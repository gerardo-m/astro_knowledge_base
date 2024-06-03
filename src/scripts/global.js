window.addEventListener('DOMContentLoaded', () => {
    new PagefindUI({ 
        element: "#search-div", 
        showSubResults: false,
        pageSize: 10,
        showImages: false,
        excerptLength: 15
    });
});