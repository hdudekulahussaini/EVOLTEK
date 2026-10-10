/**
 * Service module for handling lead submissions and contact inquiries.
 */
export const contactService = {
  /**
   * Submit a contact or consultation form inquiry.
   * @param {Object} formData
   * @returns {Promise<{success: boolean, message: string}>}
   */
  async submitInquiry(formData) {
    try {
      // In production, connect to API endpoint / CRM webhook (e.g. fetch('/api/inquiries', ...))
      console.log('[ContactService] Submitting inquiry:', formData);
      return {
        success: true,
        message: 'Thank you for reaching out! Our EV infrastructure consultant will contact you within 24 hours.',
      };
    } catch (error) {
      console.error('[ContactService] Submission failed:', error);
      return {
        success: false,
        message: 'An error occurred while submitting. Please try again or email us directly.',
      };
    }
  },
};

export const submitInquiry = contactService.submitInquiry;
export default contactService;
