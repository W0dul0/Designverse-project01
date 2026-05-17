export function Announcement() {
  return (
    <div id="AnnouncementWrapper">
      <div id="AnnouncementText">
        <h2>Want to help prevent food waste?</h2>
        <p>We bring affordable baked goods to your door!</p>

        <button
          id="ScrollButton"
          onClick={() => {
            document
              .getElementById("AboutUs-Section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Learn More
        </button>
      </div>

      <img src="/8Mvj.gif" id="Main_Img" />
    </div>
  );
}
