export const formatDate = (dateISO: string): string => {
  const date = new Date(dateISO);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

export const formatNumber = (number: string): string => {
  const cleanNumber = number.replace(/\D/g, "");

  if (cleanNumber.length !== 13) {
    throw new Error("Invalid number. The number must be 13 digits long.");
  }

  const countryCode = cleanNumber.slice(0, 2);
  const ddd = cleanNumber.slice(2, 4);
  const partOne = cleanNumber.slice(4, 9);
  const partTwo = cleanNumber.slice(9);

  return `+${countryCode} (${ddd}) ${partOne}-${partTwo}`;
};
