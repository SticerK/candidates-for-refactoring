// class FilmController {
//   openDetails() {
//     const popup = new Popup();
//     this.popupOpened = true;
//   }

//   isPopupOpened() {
//     return this.popupOpened;
//   }
// }


class FilmController {
  private popupOpened: boolean;

  constructor() {
    this.popupOpened = false;
  }
  openDetails():void {
    const popup = new Popup(); // переменная popup не используется
    this.popupOpened = true;
  }

  isPopupOpened():boolean {
    return this.popupOpened;
  }
}
