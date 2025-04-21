document.addEventListener('DOMContentLoaded', () => {
    console.log('Solar System Explorer app loaded!');

    // Theme toggle functionality
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
        }
    }

    // Vanilla JS hover class logic
    const planetCards = document.querySelectorAll('.cards-container .card');
    planetCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseout', () => {
            card.classList.remove('hovered');
        });
    });

    // jQuery animations (you can combine both)
    $('.card').hover(
        function () {
            $(this).stop().animate({ marginTop: '-10px' }, 300);
        },
        function () {
            $(this).stop().animate({ marginTop: '0px' }, 300);
        }
    );

    $('#hero').hide().fadeIn(1500);
});


document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    searchInput.addEventListener('input', filterGallery);
    categoryFilter.addEventListener('change', filterGallery);

    function filterGallery() {
        const searchValue = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        console.log('Search:', searchValue, 'Category:', selectedCategory); // Debugging

        galleryItems.forEach(item => {
            const imageAlt = item.querySelector('img').alt.toLowerCase();
            const category = item.dataset.category;

            if (
                (imageAlt.includes(searchValue) || searchValue === '') &&
                (category === selectedCategory || selectedCategory === '')
            ) {
                item.classList.remove('hidden'); // Show item
            } else {
                item.classList.add('hidden'); // Hide item
            }
        });
    }

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = item.querySelector('img').src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Toggle zoom functionality
    document.querySelectorAll('.zoom-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the lightbox
            const image = button.parentElement.querySelector('img');
            image.classList.toggle('zoomed'); // Toggle zoom on the image
        });
    });

    // Optional: Reset zoom on clicking the image in lightbox
    lightboxImg.addEventListener('click', () => {
        lightboxImg.classList.toggle('zoomed'); // Toggle zoom on image in lightbox
    });
});
