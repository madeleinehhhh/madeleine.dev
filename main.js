document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('a.original-filter').addEventListener('click', function(event) {
    console.log('you just clicked to hide anything not original');
    
    document.querySelectorAll('.work').forEach(function(workItem) {
      workItem.style.display = 'none';
    });
    
    document.querySelectorAll('.no-work').forEach(function(noWorkItem) {
      noWorkItem.style.display = 'none';
    });

    document.querySelectorAll('img').forEach(function(img) {
      img.classList.add('smaller');
    });

    document.querySelectorAll('.original-work').forEach(function(originalWorkItem) {
      originalWorkItem.style.display = '';
    });
    
    event.preventDefault();
  });

  document.querySelector('a.ecommerce-filter').addEventListener('click', function(event) {
    console.log('you just clicked to only show e-commerce-related projects');
    
    document.querySelectorAll('.work').forEach(function(workItem) {
      workItem.style.display = 'none';
    });

    document.querySelectorAll('.no-work').forEach(function(noWorkItem) {
      noWorkItem.style.display = 'none';
    });
  
    document.querySelectorAll('img').forEach(function(img) {
      img.classList.add('smaller');
    });
  
    document.querySelectorAll('.ecommerce').forEach(function(ecommerceItem) {
      ecommerceItem.style.display = '';
    });

    event.preventDefault();
  });

  document.querySelector('a.reset-filters').addEventListener('click', function(event) {
    console.log('you just clicked to show everything');

    document.querySelectorAll('img').forEach(function(img) {
      img.classList.remove('smaller');
    });

    document.querySelectorAll('.work').forEach(function(workItem) {
      workItem.style.display = '';
    });

    event.preventDefault();
  });
});
