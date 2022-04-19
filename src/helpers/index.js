export const changeHomeBtnPosition = (event, setHomeBtnPosition, setShowMenuList) => {
  const detectedScroll = event.path[1].scrollY;
  if (detectedScroll > 52) {
    setHomeBtnPosition('logo-icon-home');
  } else {
    setHomeBtnPosition('logo-icon');
  }
  setShowMenuList(false); // desativa o menu caso esteja aberto
};

export const setMenuByWindowWidth = (event, setShowMenuList) => {
  const deviceWidth = event.target.window.innerWidth;
  if (deviceWidth > 999) setShowMenuList(true);
  else setShowMenuList(false);
};
