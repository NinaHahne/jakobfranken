import type { Gig } from '$lib/types/gig';

// export function formatDate(dateString: string) {
//   return new Intl.DateTimeFormat('en-GB', {
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric',
//   }).format(new Date(dateString));
// }
export function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function splitGigsByDate(gigs: Gig[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // wichtig! vermeidet Zeit-Bugs

  const upcoming: Gig[] = [];
  const past: Gig[] = [];

  for (const gig of gigs) {
    const gigDate = new Date(gig.date);
    gigDate.setHours(0, 0, 0, 0);

    if (gigDate >= today) {
      upcoming.push(gig);
    } else {
      past.push(gig);
    }
  }

  upcoming.sort((a, b) => +new Date(a.date) - +new Date(b.date));
  past.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return { upcoming, past };
}
