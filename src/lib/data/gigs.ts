export type Gig = {
  date: string; // ISO format: YYYY-MM-DD
  timeLabel?: string;
  venue: string;
  city: string;
  url?: string;
};

export const allGigs: Gig[] = [
  {
    date: '2026-03-02',
    timeLabel: '20:00',
    venue: "King's Pub",
    city: 'Berlin Spandau',
    url: 'https://www.instagram.com/kingspubspandau/',
  },
  {
    date: '2026-03-05',
    timeLabel: '19:00',
    venue: 'Elsterklause',
    city: 'Berlin Falkensee',
    url: 'https://maps.app.goo.gl/dqRZuQqR15u2qqgp8',
  },
  {
    date: '2026-03-15',
    timeLabel: '18:00',
    venue: 'Lovelite',
    city: 'Berlin Friedrichshain',
    url: 'https://lovelit-hauke.jimdofree.com/',
  },
];

export function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
