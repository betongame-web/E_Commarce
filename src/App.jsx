const REGISTER_URL = 'https://7xbet.asia/register?aff=AFF90';

function App() {
  return (
    <a
      className="full-page-cover"
      href={REGISTER_URL}
      aria-label="Go to 7XBET registration"
    >
      <img
        className="full-page-cover__image"
        src="/assets/registration-full.jpg"
        alt="7XBET Registration"
        draggable="false"
      />
    </a>
  );
}

export default App;
