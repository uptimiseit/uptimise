// constants/countries.ts

export interface CountryCode {
  code: string;
  label: string;
  flag: string;
  name: string;
}

export const countryCodes: CountryCode[] = [
  { code: "+1", label: "US", flag: "🇺🇸", name: "United States" },
  { code: "+1", label: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+7", label: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+20", label: "EG", flag: "🇪🇬", name: "Egypt" },
  { code: "+27", label: "ZA", flag: "🇿🇦", name: "South Africa" },
  { code: "+30", label: "GR", flag: "🇬🇷", name: "Greece" },
  { code: "+31", label: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "+32", label: "BE", flag: "🇧🇪", name: "Belgium" },
  { code: "+33", label: "FR", flag: "🇫🇷", name: "France" },
  { code: "+34", label: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+39", label: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+41", label: "CH", flag: "🇨🇭", name: "Switzerland" },
  { code: "+44", label: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+45", label: "DK", flag: "🇩🇰", name: "Denmark" },
  { code: "+46", label: "SE", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", label: "NO", flag: "🇳🇴", name: "Norway" },
  { code: "+48", label: "PL", flag: "🇵🇱", name: "Poland" },
  { code: "+49", label: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+52", label: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+55", label: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+60", label: "MY", flag: "🇲🇾", name: "Malaysia" },
  { code: "+61", label: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+62", label: "ID", flag: "🇮🇩", name: "Indonesia" },
  { code: "+63", label: "PH", flag: "🇵🇭", name: "Philippines" },
  { code: "+64", label: "NZ", flag: "🇳🇿", name: "New Zealand" },
  { code: "+65", label: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+66", label: "TH", flag: "🇹🇭", name: "Thailand" },
  { code: "+81", label: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+82", label: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+84", label: "VN", flag: "🇻🇳", name: "Vietnam" },
  { code: "+86", label: "CN", flag: "🇨🇳", name: "China" },
  { code: "+90", label: "TR", flag: "🇹🇷", name: "Turkey" },
  { code: "+91", label: "IN", flag: "🇮🇳", name: "India" },
  { code: "+92", label: "PK", flag: "🇵🇰", name: "Pakistan" },
  { code: "+94", label: "LK", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+95", label: "MM", flag: "🇲🇲", name: "Myanmar" },
  { code: "+98", label: "IR", flag: "🇮🇷", name: "Iran" },
  { code: "+234", label: "NG", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", label: "KE", flag: "🇰🇪", name: "Kenya" },
  { code: "+852", label: "HK", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+880", label: "BD", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+966", label: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+971", label: "AE", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "+972", label: "IL", flag: "🇮🇱", name: "Israel" },
].sort((a, b) => a.name.localeCompare(b.name)); 