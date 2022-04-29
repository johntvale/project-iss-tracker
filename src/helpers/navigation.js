export const setHomeBtnPosition = (event, setHomeBtnClassName) => {
  // set button home on bottom with page down event
  const detectedScroll = event.path[1].scrollY;
  if (detectedScroll > 52) {
    setHomeBtnClassName('logo-icon-home');
  } else {
    setHomeBtnClassName('logo-icon');
  }
};

export const setInitialNavigationMode = (screenSize, setShowMenuList) => {
  // set the initial navigation mode to Menu List if the screen width were bigger than 999px or keep it on Dropdown mode if were not
  if (screenSize > 999) setShowMenuList(true);
  else setShowMenuList(false);
};

export const setNavigationMode = (screenSize, setScreenSize, setShowMenuList) => {
  // update the navigation mode if there were resize and change on screen width
  window.addEventListener('resize', (event) => {
    const currentScreenSize = event.target.window.innerWidth;
    if (screenSize !== currentScreenSize && currentScreenSize > 999) setShowMenuList(true);
    else if (screenSize !== currentScreenSize && currentScreenSize < 999) setShowMenuList(false);
    setScreenSize(currentScreenSize);
  });
};

export const hideMenuIfScrolling = (event, positionScrollBeforeEvent, setShowMenuList) => {
  // hide the menu if were detected scrolling with the menu open
  const detectedScroll = event.path[1].scrollY;
  if (window.innerWidth < 1000 && positionScrollBeforeEvent !== detectedScroll)
    setShowMenuList(false);
};
