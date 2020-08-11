import React from "react";

function PostPending() {
  useEffect(() => {
    props.setNav(false);
  }, [props]);

  function handleClose() {
    window.close();
  }

  return (
    <div>
      <img src="" alt="" />

      <h1>Maaf, </h1>
      <p>
        Anda harus menutup semua tab dari website KKN Covid Jogja terlebih
        dahulu untuk dapat membuka halaman ini.
      </p>

      <p>
        Copy link di bawah untuk dapat membuka halaman ini lagi setelah tab
        ditutup
      </p>

      <div className="current-link">{window.location.pathname}</div>

      <div className="close-btn" onClick={handleClose}>
        Tutup halaman
      </div>
    </div>
  );
}

export default PostPending;
