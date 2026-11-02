/**
 * Formatting helpers (Design/patterns.md > Formatting and copy).
 * No `Intl`, so output is identical on every device.
 */

/** Groups an integer with commas: 1234567 -> "1,234,567". */
function group(value: number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Money is always integer pesewas (minor units). Never multiply floats.
 * One currency format for the vendor app: "GHS 45.00".
 */
export function formatMoney(minor: number): string {
  const sign = minor < 0 ? '-' : '';
  const abs = Math.abs(Math.round(minor));
  const cedis = Math.floor(abs / 100);
  const pesewas = String(abs % 100).padStart(2, '0');
  return `${sign}GHS ${group(cedis)}.${pesewas}`;
}

/** Whole-cedi variant for filters and summaries: 4500 -> "GHS 45". */
export function formatMoneyShort(minor: number): string {
  const sign = minor < 0 ? '-' : '';
  return `${sign}GHS ${group(Math.round(Math.abs(minor) / 100))}`;
}

/** ETA: "1 min", "18 mins". */
export function formatEta(minutes: number): string {
  const value = Math.max(0, Math.round(minutes));
  return `${value} ${value === 1 ? 'min' : 'mins'}`;
}

/** ETA range: "20–35 min". */
export function formatEtaRange(min: number, max: number): string {
  return `${Math.round(min)}–${Math.round(max)} min`;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "10 Oct, 2026 3:15 PM" in local time. */
export function formatDateTime(date: Date): string {
  const hours = date.getHours();
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours < 12 ? 'AM' : 'PM';
  return `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()} ${hour12}:${minutes} ${period}`;
}

/** Countdown: 59 -> "0:59", 125 -> "2:05". */
export function formatCountdown(totalSeconds: number): string {
  const value = Math.max(0, Math.floor(totalSeconds));
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`;
}

/** Morning 05:00–11:59, afternoon 12:00–16:59, evening otherwise. */
export function greeting(date: Date = new Date()): string {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 17) return 'Good afternoon';
  return 'Good evening';
}

/** First + last word, uppercase: "James Kofi Mensah" -> "JM". */
export function initials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  const first = words[0][0] ?? '';
  const last = words.length > 1 ? (words[words.length - 1][0] ?? '') : '';
  return (first + last).toUpperCase();
}

/** "James Mensah" -> "James". */
export function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] ?? '';
}
