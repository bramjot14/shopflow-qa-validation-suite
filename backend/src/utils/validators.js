export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function requireFields(body, fields) {
  const missing = fields.filter((field) => !body[field]);
  if (missing.length > 0) {
    const error = new Error(`Missing required field(s): ${missing.join(', ')}`);
    error.statusCode = 400;
    throw error;
  }
}

export function validateQuantity(quantity) {
  const numberQuantity = Number(quantity);
  if (!Number.isInteger(numberQuantity) || numberQuantity < 1) {
    const error = new Error('Quantity must be a positive whole number');
    error.statusCode = 400;
    throw error;
  }
  return numberQuantity;
}
