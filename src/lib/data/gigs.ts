export type Gig = {
  dateLabel: string; // keep it simple for now
  timeLabel?: string;
  venue: string;
  city: string;
  url?: string;
};

export const upcomingGigs: Gig[] = [
  {
    dateLabel: '02.03.2026',
    timeLabel: '20:00',
    venue: "King's Pub",
    city: 'Berlin Spandau',
    url: 'https://www.instagram.com/kingspubspandau/',
  },
  {
    dateLabel: '05.03.2026',
    timeLabel: '19:00',
    venue: 'Elsterklause',
    city: 'Berlin Falkensee',
    url: 'https://maps.app.goo.gl/dqRZuQqR15u2qqgp8',
  },
  {
    dateLabel: '15.03.2026',
    timeLabel: '18:00',
    venue: 'Lovelite',
    city: 'Berlin Friedrichshain',
    url: 'https://lovelit-hauke.jimdofree.com/',
  },
];
