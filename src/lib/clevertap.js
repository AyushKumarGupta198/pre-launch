let clevertapInstance = null;

async function getClevertap() {
  if (typeof window === "undefined") return null;
  if (clevertapInstance) return clevertapInstance;

  // Dynamic import is the only reliable way in Next.js
  const mod = await import("clevertap-web-sdk");
  clevertapInstance = mod.default; // ← this is the key fix
  return clevertapInstance;
}

export async function initCleverTap() {
  const clevertap = await getClevertap();
  if (!clevertap) return;

  clevertap.init(
    process.env.NEXT_PUBLIC_CLEVERTAP_ACCOUNT_ID,
     process.env.NEXT_PUBLIC_CLEVERTAP_REGION
  );
   clevertap.setLogLevel(3);
  clevertap.privacy.push({ optOut: false });
  clevertap.privacy.push({ useIP: false });
  clevertap.spa = true;
}

const getUtmParams = () => {
  if (typeof window === 'undefined') {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
  };
};

const getBrowserName = () => {
  if (typeof window === 'undefined') return 'Unknown';
  const ua = navigator.userAgent;
  if (ua.includes('Edg/')) return 'Edge';
  if (ua.includes('Chrome/') && !ua.includes('Edg/')) return 'Chrome';
  if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'Safari';
  if (ua.includes('Firefox/')) return 'Firefox';
  return 'Unknown';
};

const getDeviceType = () => {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent.toLowerCase();
  if (/ipad|tablet/.test(ua)) return 'tablet';
  if (/mobile|iphone|android/.test(ua)) return 'phone';
  return 'desktop';
};

const getDeviceInfo = () => {
  if (typeof window === 'undefined') {
    return {
      Device_name: 'Unknown',
      Device_Platform: 'Unknown',
      Device_OS_Version: '',
      Device_Model: 'Unknown',
      Device_Type: 'Unknown',
      Browser_Name: 'Unknown',
    };
  }

  const ua = navigator.userAgent;
  const deviceType = getDeviceType();
  const osMatch =
    ua.match(/Android\s([\d.]+)/i) ||
    ua.match(/OS\s([\d_]+)\slike Mac OS X/i) ||
    ua.match(/Windows NT\s([\d.]+)/i) ||
    ua.match(/Mac OS X\s([\d_]+)/i);

  return {
    Device_name: navigator.userAgentData?.platform || navigator.platform || 'Web Device',
    Device_Platform: 'Web',
    Device_OS_Version: osMatch ? `${osMatch[1]}`.replace(/_/g, '.') : '',
    Device_Model: ua,
    Device_Type: deviceType,
    Browser_Name: getBrowserName(),
  };
};

const getDefaultEventPayload = () => ({
  ...getUtmParams(),
  ...getDeviceInfo(),
});

export async function pushEvent(eventName, props) {
  const clevertap = await getClevertap();
  if (!clevertap) return;
  const payload = {
    ...getDefaultEventPayload(),
    ...props,
  };
  clevertap.event.push(eventName, payload);
  // if (props) {
  //   clevertap.event.push(eventName, props);
  // } else {
  //   clevertap.event.push(eventName);
  // }
}