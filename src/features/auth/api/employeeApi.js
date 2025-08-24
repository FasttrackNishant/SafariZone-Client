/**
 * Exchange Azure AD token for internal JWT
 * @param {string} aadAccessToken
 * @returns {Promise<{success: boolean, data?: object, message?: string}>}
 */
export async function exchangeEmployeeToken(aadAccessToken) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/exchange`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${aadAccessToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (!res.ok) {
      return { success: false, message: data?.error || 'Exchange failed' };
    }

    return { success: true, data:data.data, message: "Login successful" };
  } catch (err) {
    console.error("Employee login error:", err);
    return { success: false, message: "Network error" };
  }
}