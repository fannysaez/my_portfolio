document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Toggle l'affichage du menu
    dropdownButton.addEventListener('click', function (e) {
      e.stopPropagation(); // Empêche la fermeture immédiate au clic
      dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
      dropdownMenu.style.opacity = dropdownMenu.style.opacity === '1' ? '0' : '1';
      dropdownMenu.style.visibility = dropdownMenu.style.visibility === 'visible' ? 'hidden' : 'visible';
    });

    // Fermer si on clique ailleurs
    document.addEventListener('click', function (e) {
      if (!dropdownMenu.contains(e.target) && !dropdownButton.contains(e.target)) {
        dropdownMenu.style.display = 'none';
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
      }
    });

    // Fermer le menu après clic sur un élément
    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function (item) {
      item.addEventListener('click', function () {
        dropdownMenu.style.display = 'none';
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
      });
    });
  });