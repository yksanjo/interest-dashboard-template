(function () {
  const defaultConfig = {
    title: 'Interest Dashboard',
    subtitle: 'Plug in the topics you care about.',
    layout: { columns: 3 },
    sections: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Replace these cards by editing config/dashboard-config.js',
        layout: 'list',
        cards: [
          {
            title: 'Update the config',
            description: 'Open config/dashboard-config.js and tailor the sections, cards, and metadata to match your interests.',
            primaryAction: {
              label: 'Edit config file',
              url: 'config/dashboard-config.js',
            },
          },
          {
            title: 'Try a preset',
            description: 'Check the presets folder for ready-to-use configurations, then copy-paste to jump start your dashboard.',
            secondaryActions: [
              {
                label: 'View presets',
                url: 'config/presets',
              },
            ],
          },
        ],
      },
    ],
  };

  const config = window.dashboardConfig ? { ...defaultConfig, ...window.dashboardConfig } : defaultConfig;

  const root = document.documentElement;
  const titleEl = document.getElementById('dashboard-title');
  const subtitleEl = document.getElementById('dashboard-subtitle');
  const sectionsEl = document.getElementById('dashboard-sections');
  const themeToggle = document.getElementById('theme-toggle');

  if (config.layout?.columns) {
    root.style.setProperty('--columns', config.layout.columns);
  }

  if (config.title) titleEl.textContent = config.title;
  if (config.subtitle) subtitleEl.textContent = config.subtitle;

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = window.localStorage?.getItem('dashboard-theme');
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  themeToggle.checked = initialTheme === 'dark';
  themeToggle.addEventListener('change', () => {
    setTheme(themeToggle.checked ? 'dark' : 'light');
  });

  renderSections(config.sections || []);

  function setTheme(theme) {
    document.body.dataset.theme = theme;
    try {
      window.localStorage.setItem('dashboard-theme', theme);
    } catch (error) {
      console.warn('Unable to persist theme selection', error);
    }
  }

  function renderSections(sections) {
    sectionsEl.innerHTML = '';

    if (!Array.isArray(sections) || sections.length === 0) {
      sectionsEl.innerHTML = '<p>No sections defined yet. Update config/dashboard-config.js to add your interests.</p>';
      return;
    }

    sections.forEach((section) => {
      const sectionEl = document.createElement('section');
      sectionEl.className = 'section';
      sectionEl.id = section.id || '';

      const headerEl = document.createElement('div');
      headerEl.className = 'section__header';

      const titleEl = document.createElement('h2');
      titleEl.className = 'section__title';
      titleEl.textContent = section.title || 'Untitled section';

      headerEl.appendChild(titleEl);

      if (section.description) {
        const descriptionEl = document.createElement('p');
        descriptionEl.className = 'section__description';
        descriptionEl.textContent = section.description;
        headerEl.appendChild(descriptionEl);
      }

      sectionEl.appendChild(headerEl);

      const cardsEl = document.createElement('div');
      const layout = section.layout === 'list' ? 'list' : 'grid';
      cardsEl.className = `cards cards--${layout}`;

      if (Array.isArray(section.cards)) {
        section.cards.forEach((card) => cardsEl.appendChild(renderCard(card)));
      }

      sectionEl.appendChild(cardsEl);
      sectionsEl.appendChild(sectionEl);
    });
  }

  function renderCard(card = {}) {
    const cardEl = document.createElement('article');
    cardEl.className = 'card';

    if (card.title) {
      const titleEl = document.createElement('h3');
      titleEl.className = 'card__title';
      titleEl.textContent = card.title;
      cardEl.appendChild(titleEl);
    }

    if (card.description) {
      const descriptionEl = document.createElement('p');
      descriptionEl.className = 'card__description';
      descriptionEl.textContent = card.description;
      cardEl.appendChild(descriptionEl);
    }

    if (Array.isArray(card.tags) && card.tags.length) {
      const tagsEl = document.createElement('div');
      tagsEl.className = 'card__meta';
      card.tags.forEach((tag) => {
        const badgeEl = document.createElement('span');
        badgeEl.className = 'badge';
        badgeEl.textContent = tag;
        tagsEl.appendChild(badgeEl);
      });
      cardEl.appendChild(tagsEl);
    }

    const actions = document.createElement('div');
    actions.className = 'card__actions';

    if (card.primaryAction) {
      const primary = buildAction(card.primaryAction, 'button--primary');
      if (primary) actions.appendChild(primary);
    }

    if (Array.isArray(card.secondaryActions)) {
      card.secondaryActions.forEach((action) => {
        const secondary = buildAction(action, 'button--ghost');
        if (secondary) actions.appendChild(secondary);
      });
    }

    if (actions.children.length) {
      cardEl.appendChild(actions);
    }

    return cardEl;
  }

  function buildAction(action, className) {
    if (!action?.label || !action?.url) return null;

    const link = document.createElement('a');
    link.className = `button ${className}`;
    link.href = action.url;
    link.target = action.openInNewTab === false ? '_self' : '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = action.label;
    return link;
  }
})();
