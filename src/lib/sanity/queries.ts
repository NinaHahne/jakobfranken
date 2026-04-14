export const SITE_TEXTS_QUERY = `
  *[_type == "siteTexts" && _id == "siteTexts"][0]{
    siteTitle,
    albumNavLabel,
    liveNavLabel,
    imprintLabel
  }
`;

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

export const IMPRINT_QUERY = `
  *[_type == "imprint" && _id == "imprint"][0]{
    content
  }
`;
