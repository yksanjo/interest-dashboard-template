window.dashboardConfig = {
  title: 'Curated Interests Dashboard',
  subtitle: 'A lightweight home for the resources you keep returning to.',
  layout: {
    columns: 3,
  },
  sections: [
    {
      id: 'news-and-feeds',
      title: 'Daily Feeds',
      description: 'High-signal sources to start the day informed.',
      layout: 'grid',
      cards: [
        {
          title: 'Hacker News',
          description: 'Top community-curated tech stories.',
          tags: ['Tech', 'Community'],
          primaryAction: {
            label: 'Read latest',
            url: 'https://news.ycombinator.com/',
          },
        },
        {
          title: 'The Verge',
          description: 'Tech, gadgets, and culture coverage.',
          tags: ['Tech Media'],
          primaryAction: {
            label: 'Visit site',
            url: 'https://www.theverge.com/',
          },
        },
        {
          title: 'TLDR Newsletter',
          description: 'Daily bite-sized stories on startups and tech.',
          tags: ['Newsletter'],
          primaryAction: {
            label: 'Read online',
            url: 'https://www.tldrnewsletter.com/',
          },
          secondaryActions: [
            {
              label: 'Subscribe',
              url: 'https://www.tldrnewsletter.com/subscribe',
            },
          ],
        },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Utilities',
      description: 'Low-friction helpers to boost daily workflows.',
      layout: 'grid',
      cards: [
        {
          title: 'Raycast',
          description: 'Productivity command palette for macOS.',
          tags: ['Productivity'],
          primaryAction: {
            label: 'Download',
            url: 'https://www.raycast.com/',
          },
        },
        {
          title: 'Excalidraw',
          description: 'Collaborative whiteboard for visual ideas.',
          tags: ['Diagramming'],
          primaryAction: {
            label: 'Start drawing',
            url: 'https://excalidraw.com/',
          },
        },
        {
          title: 'Cron',
          description: 'Time-zone aware calendar built for teams.',
          tags: ['Calendar'],
          primaryAction: {
            label: 'Explore',
            url: 'https://cron.com/',
          },
        },
      ],
    },
    {
      id: 'learning-tracks',
      title: 'Learning Tracks',
      description: 'Longer-form resources to deepen your craft.',
      layout: 'list',
      cards: [
        {
          title: 'Frontend Masters - Complete Intro to React',
          description: 'Brian Holt's up-to-date course on modern React patterns.',
          tags: ['React', 'Video'],
          primaryAction: {
            label: 'Watch course',
            url: 'https://frontendmasters.com/courses/complete-react-v8/',
          },
        },
        {
          title: 'Design Systems Handbook',
          description: 'InVision's guide to building, scaling, and maintaining design systems.',
          tags: ['Design Systems', 'Reading'],
          primaryAction: {
            label: 'Read online',
            url: 'https://www.designbetter.co/design-systems-handbook',
          },
        },
        {
          title: 'LLM University by Cohere',
          description: 'Hands-on curriculum for building and shipping LLM-powered apps.',
          tags: ['AI', 'Curriculum'],
          primaryAction: {
            label: 'Start learning',
            url: 'https://docs.cohere.com/docs/llmu-overview',
          },
        },
      ],
    },
  ],
};
