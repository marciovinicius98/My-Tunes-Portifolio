document.addEventListener('DOMContentLoaded', () => {

    // DADOS DOS ARTISTAS
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

    // DADOS DOS ÁLBUNS
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

    // DADOS DAS MÚSICAS
    const musicsData = [
        { name: 'Beautiful', artist: 'Akon', image: './img/musicas/beautiful-akon.jpg' },
        { name: 'Breakdown', artist: 'Seether', image: './img/musicas/breakdown-seether.jpg' },
        { name: 'Não Deixe o Samba Morrer', artist: 'Alcione', image: './img/musicas/nao-deixa-o-samba-morrer-alcione.jpg' },
        { name: 'High Hopes', artist: 'Panic At the Disco', image: './img/musicas/high-hopes-panic-at-the-disco.jpg' },
        { name: 'Carry on Wayward Son', artist: 'Kansas', image: './img/musicas/carry-on-wayward-son-kansas.jpg' },
        { name: 'Confident', artist: 'Demi Lovato', image: './img/musicas/confident-demi-lovato.jpg' },
        { name: 'Empire State of Mind (feat. Alicia Keys)', artist: 'Jay-z', image: './img/musicas/empire-state-of-mind-jay-z.jpg' },
        { name: 'Feeling Good', artist: 'Michael Bublé', image: './img/musicas/feeling-good-michael-buble.jpg' },
        { name: 'Tremendo Vacilão', artist: 'Perlla', image: './img/musicas/tremendo-vacilao-perlla.jpg' },
        { name: 'I ran (So Far Away)', artist: 'A Flock of Seagulls', image: './img/musicas/i-ran-a-flock-of-seagulls.jpg' },
        { name: 'Nem um Dia', artist: 'Djavan', image: './img/musicas/nem-um-dia-djavan.jpg' },
        { name: 'Talk Dirty', artist: 'Jason Derulo', image: './img/musicas/talk-dirty-jason-derulo.jpg' }
    ];

    // DADOS DAS NOVIDADES
    const newsData = [
        {
            title: 'From Zero',
            artist: 'Linkin Park',
            image: './img/linkin-park-from-zero.jpg',
            description: 'Um destaque para quem quer ouvir Linkin Park.',
            details:
                'From Zero está na nossa seleção de destaques. ' +
                'ALGUMA COISA. ' +
                'ALGUMA COISA. '
        },
        {
            title: 'Origins',
            artist: 'Imagine Dragons',
            image: './img/imagine-dragons-origins.jpg',
            description: 'Um destaque para quem quer ouvir Imagine Dragons.',
            details:
                'Origins está na nossa seleção de destaques. ' +
                'ALGUMA COISA. ' +
                'ALGUMA COISA. '
        },
        {
            title: 'Outsider',
            artist: 'Three Days Grace',
            image: './img/three-days-grace-outsider.jpg',
            description: 'Um destaque para quem quer ouvir Three Days Grace.',
            details:
                'Outsider está na nossa seleção de destaques. ' +
                'ALGUMA COISA. ' +
                'ALGUMA COISA. '
        },
        {
            title: 'Sobrevivendo no Inferno',
            artist: 'Racionais Mcs',
            image: './img/racionais-sobrevivendo-no-inferno.jpg',
            description: 'Racionais na seleção de destaques do MyTunes.',
            details:
                'Um espaço dedicado a Sobrevivendo no Inferno. ' +
                'Adicione aqui uma apresentação do álbum e informações ' +
                'que você gostaria de compartilhar com quem visita o site.'
        }
    ];

    // ELEMENTOS DO HTML
    const newsGrid = document.querySelector('.news-grid');
    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');
    const musicsGrid = document.querySelector('.musics-grid');

    const newsDialog = document.querySelector('.news-dialog');
    const dialogImage = newsDialog.querySelector('.news-dialog-image');
    const dialogTitle = newsDialog.querySelector('#news-dialog-title');
    const dialogArtist = newsDialog.querySelector('.news-dialog-artist');
    const dialogDescription = newsDialog.querySelector(
        '.news-dialog-description'
    );

    // CRIA OS CARDS DAS NOVIDADES
    newsData.forEach((news) => {
        const newsCard = document.createElement('button');

        newsCard.type = 'button';
        newsCard.classList.add('news-card');

        newsCard.setAttribute('aria-haspopup', 'dialog');
        newsCard.setAttribute(
            'aria-label',
            `Saiba mais sobre ${news.title}, de ${news.artist}`
        );

        newsCard.innerHTML = `
            <img
                class="news-cover"
                src="${news.image}"
                alt=""
            >

            <span class="news-info">
                <span class="news-label">Em destaque</span>
                <span class="news-title">${news.title}</span>
                <span class="news-artist">${news.artist}</span>
                <span class="news-description">${news.description}</span>

                <span class="news-action">
                    Saiba mais
                    <i
                        class="fa-solid fa-arrow-right"
                        aria-hidden="true"
                    ></i>
                </span>
            </span>
        `;

        // Preenche e abre a janela de informações.
        newsCard.addEventListener('click', () => {
            dialogImage.src = news.image;
            dialogImage.alt = `Capa de ${news.title}`;

            dialogTitle.textContent = news.title;
            dialogArtist.textContent = news.artist;
            dialogDescription.textContent = news.details;

            newsDialog.showModal();
        });

        newsGrid.appendChild(newsCard);
    });

    // CRIA OS CARDS DOS ARTISTAS
    artistData.forEach((artist, index) => {
        const artistCard = document.createElement('div');

        artistCard.classList.add('artist-card');
        artistCard.style.animationDelay = `${index * 0.06}s`;

        artistCard.innerHTML = `
            <img
                src="${artist.image}"
                alt="imagem do ${artist.name}"
            >

            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>

            <button class="play-button">
                <i class="fa-solid fa-play"></i>
            </button>
        `;

        artistGrid.appendChild(artistCard);
    });

    // CRIA OS CARDS DOS ÁLBUNS
    albumsData.forEach((album, index) => {
        const albumCard = document.createElement('div');

        albumCard.classList.add('album-card');
        albumCard.style.animationDelay = `${index * 0.06}s`;

        albumCard.innerHTML = `
            <img
                src="${album.image}"
                alt="imagem do ${album.name}"
            >

            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>

            <button class="play-button">
                <i class="fa-solid fa-play"></i>
            </button>
        `;

        albumsGrid.appendChild(albumCard);
    });

    // CRIA OS CARDS DAS MÚSICAS
    musicsData.forEach((music, index) => {
        const musicCard = document.createElement('div');

        musicCard.classList.add('music-card');
        musicCard.style.animationDelay = `${index * 0.06}s`;

        musicCard.innerHTML = `
            <img
                src="${music.image}"
                alt="imagem do ${music.name}"
            >

            <div>
                <h3>${music.name}</h3>
                <p>${music.artist}</p>
            </div>

            <button class="play-button">
                <i class="fa-solid fa-play"></i>
            </button>
        `;

        musicsGrid.appendChild(musicCard);
    });

    // NAVEGAÇÃO DOS QUATRO CARROSSÉIS
    function setupSlider(grid, prevBtn, nextBtn) {
        const scrollAmount = () => {
            const card = grid.querySelector(
                '.artist-card, .album-card, .music-card, .news-card'
            );

            if (!card) return 300;

            const gap = parseFloat(
                getComputedStyle(grid).columnGap
            ) || 0;

            return card.offsetWidth + gap;
        };

        // Guarda a animação atual e o destino da rolagem.

// Guarda a animação atual e o destino da rolagem.
let animationId = null;
let targetScroll = grid.scrollLeft;

const animateScroll = (direction) => {
    const startScroll = grid.scrollLeft;
    const maxScroll = Math.max(
        0,
        grid.scrollWidth - grid.clientWidth
    );

    // Se não há animação, parte da posição atual.
    if (animationId === null) {
        targetScroll = startScroll;
    } else {
        cancelAnimationFrame(animationId);
    }

    // Avança ou volta uma coluna sem ultrapassar os limites.
    targetScroll = Math.max(
        0,
        Math.min(
            maxScroll,
            targetScroll + scrollAmount() * direction
        )
    );

    const distance = targetScroll - startScroll;

    // Respeita quem prefere menos animações no sistema.
    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) {
        grid.scrollLeft = targetScroll;
        animationId = null;
        updateButtons();
        return;
    }

    const duration = 350;
    const startTime = performance.now();

    const step = (currentTime) => {
        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        // Começa devagar, acelera e desacelera ao terminar.
        const easing = progress < 0.5
            ? 4 * progress ** 3
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        grid.scrollLeft = startScroll + distance * easing;

        if (progress < 1) {
            animationId = requestAnimationFrame(step);
        } else {
            animationId = null;
            updateButtons();
        }
    };

    animationId = requestAnimationFrame(step);
};

// Interrompe a animação se a pessoa começar a rolar manualmente.
const stopAnimation = () => {
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    targetScroll = grid.scrollLeft;
};

grid.addEventListener('wheel', stopAnimation, { passive: true });
grid.addEventListener('touchstart', stopAnimation, { passive: true });
grid.addEventListener('pointerdown', stopAnimation);

nextBtn.addEventListener('click', () => {
    animateScroll(1);
});

prevBtn.addEventListener('click', () => {
    animateScroll(-1);
});

        const updateButtons = () => {
            prevBtn.disabled = grid.scrollLeft <= 1;
            nextBtn.disabled =
                grid.scrollLeft >= grid.scrollWidth - grid.clientWidth - 1;

            prevBtn.style.opacity = grid.scrollLeft <= 0 ? '0.3' : '1';
            prevBtn.style.pointerEvents =
                grid.scrollLeft <= 0 ? 'none' : 'auto';

            const maxScroll = grid.scrollWidth - grid.clientWidth - 1;

            nextBtn.style.opacity =
                grid.scrollLeft >= maxScroll ? '0.3' : '1';

            nextBtn.style.pointerEvents =
                grid.scrollLeft >= maxScroll ? 'none' : 'auto';
        };

        grid.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);

        updateButtons();
    }

    // ATIVA AS SETAS DOS ARTISTAS
    setupSlider(
        artistGrid,
        document.querySelector('.prev-artists'),
        document.querySelector('.next-artists')
    );

    // ATIVA AS SETAS DOS ÁLBUNS
    setupSlider(
        albumsGrid,
        document.querySelector('.prev-albums'),
        document.querySelector('.next-albums')
    );

    // ATIVA AS SETAS DAS MÚSICAS
    setupSlider(
        musicsGrid,
        document.querySelector('.prev-musics'),
        document.querySelector('.next-musics')
    );

    // ATIVA AS SETAS DAS NOVIDADES
    setupSlider(
        newsGrid,
        document.querySelector('.prev-news'),
        document.querySelector('.next-news')
    );

});