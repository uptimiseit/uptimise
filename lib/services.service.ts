// lib/services/service.service.ts
export const ServicesService = {
  async getDetails(slug: string) {
    try {
      // Ensure this matches your admin API endpoint exactly
      const res = await fetch(`https://admin.uptimiseit.com/api/services/${slug}`, {
        cache: 'no-store', // Ensures fresh data on every request
      });
      
      if (!res.ok) return { success: false };
      return await res.json();
    } catch (error) {
      console.error("Fetch error:", error);
      return { success: false };
    }
  }
};