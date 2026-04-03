export const HERO_INTRO_QUERY = `
  *[_type == "heroIntro" && _id == "heroIntro"][0]{
    bioText,
    image,
    imageAlt,
    imageCredit
  }
`;

export const LIVE_SECTION_QUERY = `
  *[_type == "liveSection" && _id == "liveSection"][0]{
    eyebrow,
    heading,
    showPastLabel,
    hidePastLabel,
    emptyStateLabel,
    emptyStateText
  }
`;

export const CONCERTS_QUERY = `
*[_type == "concert"] | order(date asc) {
  date,
  timeLabel,
  venue,
  city,
  url
}
`;
