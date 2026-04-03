export const HERO_INTRO_QUERY = `
  *[_type == "heroIntro" && _id == "heroIntro"][0]{
    bioText,
    image,
    imageAlt,
    imageCredit
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
