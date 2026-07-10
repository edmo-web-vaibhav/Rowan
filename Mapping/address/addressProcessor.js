import { addressFieldMapping } from './addressMapping.js';
import { transformGeographicProximity } from './addressTransformer.js';

/**
 * Validates that minimum required fields are present.
 * Throws an error if required fields are missing.
 * 
 * @param {Object} sourceRecord - The raw JSON address object
 */
function validateRecord(sourceRecord) {
  if (!sourceRecord.AddressGUID) {
    throw new Error('Validation Error: AddressGUID is missing.');
  }
  if (!sourceRecord.PersonGUID) {
    throw new Error('Validation Error: PersonGUID is missing.');
  }
}

/**
 * Maps direct fields from source to target based on the mapping dictionary.
 * 
 * @param {Object} sourceRecord - The raw JSON address object
 * @returns {Object} - Mapped record without transformations
 */
function mapDirectFields(sourceRecord) {
  const targetRecord = {};
  
  for (const [targetField, sourceField] of Object.entries(addressFieldMapping)) {
    // If field exists in source, assign it. Otherwise, default to null.
    targetRecord[targetField] = sourceRecord[sourceField] !== undefined ? sourceRecord[sourceField] : null;
  }
  
  return targetRecord;
}

/**
 * Applies necessary transformations to the mapped record.
 * 
 * @param {Object} targetRecord - The partially mapped record
 * @param {Object} sourceRecord - The raw JSON address object
 * @returns {Object} - Final record with transformations applied
 */
function applyTransformations(targetRecord, sourceRecord) {
  // Apply Geographic Proximity transformation based on source Lat/Long
  targetRecord["Geographic Proximity by Lat/Long"] = transformGeographicProximity(
    sourceRecord.AddressLatitude,
    sourceRecord.AddressLongitude
  );
  
  return targetRecord;
}

/**
 * Processes a single address object from source to target schema.
 * 
 * @param {Object} sourceRecord - The raw JSON address object
 * @returns {Object} - The processed and mapped target object
 */
export function processAddress(sourceRecord) {
  // 1. Validate the minimum requirements (GUIDs)
  validateRecord(sourceRecord);
  
  // 2. Map the direct 1-to-1 fields
  const mappedRecord = mapDirectFields(sourceRecord);
  
  // 3. Apply business logic and transformations
  const finalRecord = applyTransformations(mappedRecord, sourceRecord);
  
  return finalRecord;
}
