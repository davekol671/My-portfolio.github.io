function opentab(tabName, element) {
    // Hide all tab contents
    const allTabs = document.querySelectorAll('.tab-contents');
    allTabs.forEach(tab => {
      tab.classList.remove('active-tab');
    });
  
    // Remove the 'active' class from all tab links
    const allTabLinks = document.querySelectorAll('.tab-Links');
    allTabLinks.forEach(link => {
      link.classList.remove('active-Links');
    });
  
    // Show the clicked tab and add the active class to the link
    document.getElementById(tabName).classList.add('active-tab');
    element.classList.add('active-Links');
  }
 
  
