export const SpotifyPlaylist = () => {
  return (
    <div className="items-center flex flex-col max-sm:mt-9 max-sm:mx-8 mx-44 ">
      <iframe
        title="spotify"
        style={{
          borderRadius: "12px",
        }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9ROcoR0cTZM?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowtransparency="true"
        loading="lazy"
      ></iframe>

      <p className="pb-2 text-lg font-extrabold text-center max-sm:text-[0.5rem]">
        While you play, do you want to listen to some music?
      </p>
    </div>
  );
};
