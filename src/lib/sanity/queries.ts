export const CONCERTS_QUERY = `
*[_type == "concert"] | order(date asc) {
  date,
  timeLabel,
  venue,
  city,
  url
}
`;
