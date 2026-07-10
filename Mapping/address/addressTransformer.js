/**
 * Combines latitude and longitude into a single proximity format.
 * Returns null if either latitude or longitude is missing.
 *
 * @param {string|number|null} latitude - The latitude value
 * @param {string|number|null} longitude - The longitude value
 * @returns {string|null} Formatted representation, e.g., "Lat, Long"
 */
export function transformGeographicProximity(latitude, longitude) {
  if (latitude === null || longitude === null || latitude === undefined || longitude === undefined) {
    return null;
  }
  
  return `${latitude}, ${longitude}`;
}
