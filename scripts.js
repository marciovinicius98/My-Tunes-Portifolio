document.addEventListener('DOMContentLoaded', () => {
    const artistData = [
        { name: 'Bob Marley & The Wailers', image: './img/bob-marley.jpg' },
        { name: 'Imagine Dragons', image: './img/imagine-dragons.jpg' },
        { name: 'Linkin Park', image: './img/Linkin-Park.jpg' },
        { name: 'Racionais Mcs', image: './img/racionais.jpg' },
        { name: 'Thirty Seconds to Mars', image: './img/thirty-seconds-mars.jpg' },
        { name: 'Three Days Grace', image: './img/three-days-grace.jpg' },
        { name: 'Queen', image: './img/queen.jpg' },
        { name: 'Metallica', image: './img/metallica.jpg' },
        { name: 'Nirvana', image: './img/nirvana.jpg' },
        { name: 'The Beatles', image: './img/the-beatles.jpg' },
        { name: 'AC/DC', image: './img/ac-dc.jpg' },
        { name: 'Coldplay', image: './img/coldplay.jpg' }
    ];

    const albumsData = [
        { name: 'Outsider', artist: 'Three Days Grace', image: './img/three-days-grace-outsider.jpg' },
        { name: 'A Beautiful Lie', artist: 'Thirty Seconds to Mars', image: './img/thirty-seconds-to-mars-a-beautiful-lie.jpg' },
        { name: 'Sobrevivendo no Inferno', artist: 'Racionais Mcs', image: './img/racionais-sobrevivendo-no-inferno.jpg' },
        { name: 'Meteora', artist: 'Linkin Park', image: './img/linkin-park-meteora.jpg' },
        { name: 'Origins', artist: 'Imagine Dragons', image: './img/imagine-dragons-origins.jpg' },
        { name: 'Uprising', artist: 'Bob Marley & The Wailers', image: './img/bob-marley-Uprising.jpg' },
        { name: 'The End', artist: 'The Black Eyed Peas', image: './img/the-black-eyed-peas-the-end.jpg' },
        { name: 'One-X', artist: 'Three Days Grace', image: './img/three-days-grace-one-x.jpg' },
        { name: 'From Zero', artist: 'Linkin Park', image: './img/linkin-park-from-zero.jpg' },
        { name: 'Leave This Town', artist: 'Daughtry', image: './img/daughtry-leav-this-town.jpg' },
        { name: 'Let Go', artist: 'Avril Lavigne', image: './img/avril-lavigne-let-go.jpg' },
        { name: 'Trouble', artist: 'Akon', image: './img/akon-trouble.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    artistData.forEach((artist, index) => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        artistCard.style.animationDelay = `${index * 0.06}s`;

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `;

        artistGrid.appendChild(artistCard);
    });

    albumsData.forEach((album, index) => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');
        albumCard.style.animationDelay = `${index * 0.06}s`;

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `;

        albumsGrid.appendChild(albumCard);
    });

    // Função única de slider, usada pros dois grids (evita duplicar/errar código)
    function setupSlider(grid, prevBtn, nextBtn) {
        const scrollAmount = () => {
            const card = grid.querySelector('.artist-card, .album-card');
            if (!card) return 300;
            const gap = parseInt(getComputedStyle(grid).gap) || 10;
            return card.offsetWidth + gap;
        };

        nextBtn.addEventListener('click', () => {
            grid.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            grid.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        });

        const updateButtons = () => {
            prevBtn.style.opacity = grid.scrollLeft <= 0 ? '0.3' : '1';
            prevBtn.style.pointerEvents = grid.scrollLeft <= 0 ? 'none' : 'auto';

            const maxScroll = grid.scrollWidth - grid.clientWidth - 1;
            nextBtn.style.opacity = grid.scrollLeft >= maxScroll ? '0.3' : '1';
            nextBtn.style.pointerEvents = grid.scrollLeft >= maxScroll ? 'none' : 'auto';
        };

        grid.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        updateButtons();
    }

    // artistas
    setupSlider(
        artistGrid,
        document.querySelector('.prev-artists'),
        document.querySelector('.next-artists')
    );

    // álbuns (agora com os seletores certos: .prev-albums / .next-albums)
    setupSlider(
        albumsGrid,
        document.querySelector('.prev-albums'),
        document.querySelector('.next-albums')
    );
});