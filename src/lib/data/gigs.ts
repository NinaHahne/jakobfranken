export type Gig = {
  dateLabel: string; // keep it simple for now
  venue: string;
  city: string;
  url?: string;
};

export const upcomingGigs: Gig[] = [
  {
    dateLabel: '02.03.2026',
    venue: "King's Pub",
    city: 'Berlin Spandau',
    url: 'https://www.instagram.com/kingspubspandau/',
  },
  {
    dateLabel: '05.03.2026',
    venue: 'Elsterklause',
    city: 'Berlin Falkensee',
    url: 'https://www.elsterklausecucinaitaliana-falkensee.de/',
  },
  {
    dateLabel: '15.03.2026',
    venue: 'Lovelite',
    city: 'Berlin Friedrichshain',
    url: 'https://lovelit-hauke.jimdofree.com/',
  },
];
