// ===== FILTER =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      portfolioItems.forEach(function(item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ===== MODAL =====
  var backdrop = document.getElementById('modalBackdrop');
  var modal = document.getElementById('modal');

  function openModal(item) {
    document.getElementById('modalImg').src = item.getAttribute('data-img');
    document.getElementById('modalImg').alt = item.getAttribute('data-title');
    document.getElementById('modalCat').textContent = item.getAttribute('data-cat');
    document.getElementById('modalTitle').textContent = item.getAttribute('data-title');
    document.getElementById('modalDesc').textContent = item.getAttribute('data-desc');
    document.getElementById('modalMedium').textContent = item.getAttribute('data-medium');
    document.getElementById('modalYear').textContent = item.getAttribute('data-year');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('modalClose').addEventListener('click', closeModal);

  backdrop.addEventListener('click', function(e) {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // Click on portfolio items or VIEW DETAILS button
  portfolioItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      openModal(item);
    });
  });

  // ===== NEWSLETTER =====
  document.getElementById('subscribeBtn').addEventListener('click', function() {
    var email = document.getElementById('emailInput').value;
    if (email && email.indexOf('@') > -1) {
      alert('Thank you for subscribing!');
      document.getElementById('emailInput').value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });