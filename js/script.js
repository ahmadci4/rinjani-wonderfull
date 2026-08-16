 <!-- JavaScript -->
    <script>
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-primary', 'shadow-md');
                navbar.classList.remove('py-4'); navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('bg-primary', 'shadow-md');
                navbar.classList.add('py-4'); navbar.classList.remove('py-2');
            }
        });
        const langBtn = document.getElementById('lang-btn');
        const langDropdown = document.getElementById('lang-dropdown');
        langBtn.addEventListener('click', (e) => { e.stopPropagation(); langDropdown.classList.toggle('hidden'); });
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) langDropdown.classList.add('hidden');
        });
    </script>
