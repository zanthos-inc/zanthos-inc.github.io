$('.main-navigation').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 75, //Height of Navigation Bar
    filter: ':not(.external)',
    changeHash: true,
    currentClass: 'active'
});