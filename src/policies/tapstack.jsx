export default function TapstackPrivacy() {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto", fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1.6 }}>
      <h1 style={{ color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '10px' }}>
        Tapstack – Privacy Policy
      </h1>
      <p style={{ color: '#666666', fontSize: '14px', fontStyle: 'italic' }}>
        Last updated: December 2024
      </p>

      <p style={{ fontSize: '16px', marginBottom: '24px' }}>
        <strong>Tapstack</strong> is an Android utility app designed to simplify your phone routines by turning frequent tasks into one-tap shortcuts. 
        We are committed to protecting your privacy, and this policy explains our approach to data handling.
      </p>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        Information We Do Not Collect
      </h2>
      <p>
        Tapstack is built with privacy as a foundational principle. The app does <strong>not</strong> collect, store, or share any personal information. 
        Specifically, we do not collect:
      </p>
      <ul style={{ backgroundColor: '#fafafa', padding: '15px 15px 15px 30px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
        <li>Names, email addresses, or contact details</li>
        <li>Phone numbers or message content (app does not automate messaging)</li>
        <li>Location or GPS data</li>
        <li>Device identifiers (UDID, IMEI, MAC address)</li>
        <li>Usage analytics or tracking data</li>
        <li>Browsing or search history</li>
        <li>Payment or billing information</li>
        <li>Photos or camera data</li>
        <li>Microphone or audio recordings</li>
        <li>App usage patterns or behavior</li>
      </ul>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        Local Data Storage
      </h2>
      <p>
        The app stores the following data <strong>locally</strong> on your device:
      </p>
      <ul style={{ backgroundColor: '#fafafa', padding: '15px 15px 15px 30px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
        <li>Your created shortcuts and quick actions</li>
        <li>Action configurations (destinations, app settings)</li>
        <li>App preferences and settings</li>
        <li>Shortcut execution history (local only)</li>
      </ul>
      <p>
        This data is stored only on your device using local storage mechanisms and is <strong>never transmitted</strong> to external servers. 
        You can clear this data at any time by uninstalling the app or using your device's app data clearing function.
      </p>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        What Tapstack Accesses (And Why)
      </h2>
      <p>
        Tapstack only accesses system functions when you explicitly tap a shortcut. This access is:
      </p>
      <ul style={{ backgroundColor: '#fafafa', padding: '15px 15px 15px 30px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
        <li><strong>User-initiated:</strong> Only when you tap a shortcut</li>
        <li><strong>Transparent:</strong> You see exactly what actions will run</li>
        <li><strong>Immediate:</strong> Actions run once and stop</li>
        <li><strong>Local:</strong> No background processes or automation</li>
      </ul>
      <p>
        Example permissions and their purpose:
      </p>
      <ul style={{ backgroundColor: '#f9f9f9', padding: '15px 15px 15px 40px', borderRadius: '8px', fontSize: '14px' }}>
        <li><strong>Wi-Fi control:</strong> Only toggles Wi-Fi when you tap a shortcut that includes this action</li>
        <li><strong>Bluetooth control:</strong> Only toggles Bluetooth when included in your shortcut</li>
        <li><strong>App opening:</strong> Only opens apps you've configured, no background access</li>
        <li><strong>Volume/brightness:</strong> Only adjusts when triggered by your tap</li>
      </ul>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        No Internet Connection Required
      </h2>
      <p>
        Tapstack works <strong>entirely offline</strong>. The app does not require an internet connection to function 
        and does not send or receive any data from external servers. All shortcut execution happens locally on your device.
      </p>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        No Ads or Trackers
      </h2>
      <p>
        Tapstack contains:
      </p>
      <ul style={{ backgroundColor: '#fafafa', padding: '15px 15px 15px 30px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
        <li><strong>No advertisements</strong> of any kind</li>
        <li><strong>No tracking technologies</strong> (cookies, pixels, beacons)</li>
        <li><strong>No third-party SDKs</strong> or analytics tools</li>
        <li><strong>No social media integrations</strong> that collect data</li>
        <li><strong>No in-app purchases</strong> or payment systems</li>
        <li><strong>No subscriptions</strong> or premium features</li>
      </ul>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        Data You Provide
      </h2>
      <p>
        When creating shortcuts, you may input:
      </p>
      <ul style={{ backgroundColor: '#fafafa', padding: '15px 15px 15px 30px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
        <li><strong>Navigation destinations</strong> (e.g., "Home", "Work") – stored locally only</li>
        <li><strong>App package names</strong> for quick opening – stored locally only</li>
        <li><strong>Shortcut names and icons</strong> – stored locally only</li>
        <li><strong>Action sequences</strong> (e.g., Wi-Fi off → Silent mode) – stored locally only</li>
      </ul>
      <p>
        This information <strong>never leaves your device</strong> and is used only to execute the shortcuts you create.
      </p>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        No Background Automation
      </h2>
      <p>
        Tapstack is designed with intentionality:
      </p>
      <ul style={{ backgroundColor: '#fafafa', padding: '15px 15px 15px 30px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
        <li><strong>No automatic triggers:</strong> Shortcuts only run when you tap them</li>
        <li><strong>No scheduling:</strong> No background execution at set times</li>
        <li><strong>No event-based automation:</strong> No "when X happens, do Y" logic</li>
        <li><strong>No location-based triggers:</strong> No automatic actions based on location</li>
      </ul>
      <p>
        This design ensures that <strong>you</strong> are always in control of when and how actions execute.
      </p>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        Third-Party Services
      </h2>
      <p>
        The app does not integrate with any third-party services, including:
      </p>
      <ul style={{ backgroundColor: '#fafafa', padding: '15px 15px 15px 30px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
        <li>No Google Services or Firebase</li>
        <li>No Facebook SDK or social logins</li>
        <li>No analytics platforms (Google Analytics, Mixpanel, etc.)</li>
        <li>No crash reporting services</li>
        <li>No advertising networks</li>
        <li>No cloud synchronization services</li>
      </ul>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        Security
      </h2>
      <p>
        Since all data is stored locally on your device:
      </p>
      <ul style={{ backgroundColor: '#fafafa', padding: '15px 15px 15px 30px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
        <li>There are no servers to be compromised</li>
        <li>No data is transmitted over networks</li>
        <li>Your information is protected by your device's built-in security</li>
        <li>No databases exist that could be breached</li>
      </ul>
      <p>
        Your privacy is protected by the fundamental design: <strong>no data collection means no data exposure</strong>.
      </p>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be reflected with an updated "Last updated" date. 
        We encourage you to review this policy periodically.
      </p>

      <h2 style={{ color: '#000000', marginTop: '30px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        Contact Us
      </h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
      </p>
      <div style={{ 
        backgroundColor: '#fafafa', 
        padding: '20px', 
        borderRadius: '12px', 
        border: '2px solid #000000',
        marginTop: '15px',
        textAlign: 'center'
      }}>
        <strong style={{ fontSize: '18px', color: '#000000' }}>tapstack.app@gmail.com</strong>
      </div>
      
      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '12px',
        border: '1px solid #e9ecef',
        fontSize: '14px',
        color: '#666666'
      }}>
        <strong>Summary:</strong> Tapstack respects your privacy by collecting no data, requiring no internet, 
        containing no ads, storing everything locally, and ensuring all actions are user-initiated. It's a transparent, 
        intentional tool that puts you in complete control of your device.
      </div>
    </div>
  );
}