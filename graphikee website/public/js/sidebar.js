class SideBar {
  constructor(sidebarElemSelector, showBtnSelector, hideBtnSelector, defaultState = 'close') {
    this._elem = document.querySelector(sidebarElemSelector);
    this._showBtn = document.querySelector(showBtnSelector);
    this._hideBtn = document.querySelector(hideBtnSelector);

    this._elem.dataset.expanded = defaultState === 'open' ? true : false;

    this.activateEventListeners();
  }

  showSideBar() {
    this._elem.dataset.expanded = true;
    document.body.style.overflow = 'hidden';
  }

  hideSideBar() {
    this._elem.dataset.expanded = false;
    document.body.style.overflow = '';
  }

  setScrollPosition() {
    document.body.style.setProperty('--scrolledBy', window.scrollY);
  }

  activateEventListeners() {
    if (!this._elem) return;
    this._showBtn.addEventListener('click', this.showSideBar.bind(this));
    this._hideBtn.addEventListener('click', this.hideSideBar.bind(this));
    window.addEventListener('scrollend', this.setScrollPosition);
    window.addEventListener('DOMContentLoaded', this.setScrollPosition);
    window.addEventListener('resize', this.setScrollPosition);
  }
}

new SideBar('[data-quotation-sidebar]', '[data-open-quotation-sidebar]', '[data-close-quotation-sidebar-btn]');

document.querySelector('[data-quotation-form]')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const SERVICE_ID = 'service_bfzaz1s';
  const TEMPLATE_ID = 'template_qrleocn';
  const USER_ID = 'eFZfyilt-wGTIUGJf';
  const PUBLIC_KEY = 'eFZfyilt-wGTIUGJf';

  const data = {
    fullName: event.target.fullName.value,
    companyName: event.target.companyName.value,
    contactNumber: event.target.contactNumber.value,
    service: event.target['service-selected'].value,
    descripiton: event.target.description.value,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
    .then((response) => {
      alert('Your request has been recorded. We will get back to you shortly');
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
});
