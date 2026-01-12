export default function Home() {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>LioApps Privacy Policies</h1>
      <p>Select a game to view its privacy policy:</p>

      <ul>
        <li>
          <a href="/privacy/color-smash">Color Smash</a>
          <a href="/privacy/color-smash"> - Color Smash Privacy Policy</a>
        </li>
        <li>
          <a href="/privacy/numero">Numero</a>
          <a href="/privacy/numero"> - Numero Privacy Policy</a>
        </li>
        <li>
          <a href="/privacy/phonefit">PhoneFit</a>
          <a href="/privacy/phonefit"> - PhoneFit Privacy Policy</a>
        </li>
        <li>
          <a href="/privacy/evomoji">Evomoji</a>
          <a href="/privacy/evomoji"> - Evomoji Privacy Policy</a>
        </li>
        <li>
          <a href="/privacy/green-light">Green Light Red Light</a>
          <a href="/privacy/green-light"> - Green Light Red Light Privacy Policy</a>
        </li>
      </ul>
    </div>
  );
}
