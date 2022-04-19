export function changeHomeBtnPosition(event, setHomeBtnPosition) {
  const detectedScroll = event.path[1].scrollY;
  if (detectedScroll > 52) {
    setHomeBtnPosition('logo-icon-home');
  } else {
    setHomeBtnPosition('logo-icon');
  }
}
