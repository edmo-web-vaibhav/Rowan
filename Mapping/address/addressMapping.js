/**
 * Defines the direct 1-to-1 mapping between the JSON source fields
 * and the target schema fields.
 * 
 * Key: Target Schema Field
 * Value: Source JSON Field
 */
export const addressFieldMapping = {
  "Street 1": "AddressStreet1",
  "Street 2": "AddressStreet2",
  "Street 3": "AddressStreet3",
  "Street Combined": "AddressStreetCombined",
  "City": "AddressCity",
  "County": "AddressCounty",
  "Region": "AddressRegion",
  "Postal": "AddressPostal",
  "US 5-digit ZIP Code": "AddressUS5-digitZIPCode",
  "US ZIP4 Code": "AddressUSZIP4Code",
  "Country": "AddressCountry",
  "Geomarket": "AddressGeomarket",
  "Type": "AddressType",
  "Effective Date": "AddressEffectiveDate",
  "Expiration Date": "AddressExpirationDate",
  "Created Date": "AddressCreatedDate",
  "Updated Date": "AddressUpdatedDate",
  "GUID": "AddressGUID",
  "Hemisphere": "AddressHemisphere",
  "Latitude": "AddressLatitude",
  "Longitude": "AddressLongitude",
  "Notes": "AddressNotes",
  "Priority": "AddressPriority",
  "Priority Number": "AddressPriorityNumber",
  "Rank": "AddressRank",
  "Rank Overall": "AddressRankOverall",
  "Seasonal": "AddressSeasonal",
  "Validated": "AddressValidated",
  // Persisting PersonGUID as it is essential to link Address to Person
  "PersonGUID": "PersonGUID"
};
