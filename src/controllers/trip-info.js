import TripInfo from "../components/trip-info.js";
import {Position, render, unrender} from "../utils.js";

export default class TripInfoController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards.slice().sort((a, b) => a.startTime - b.startTime);
    this._tripInfo = new TripInfo();

    this.create();
  }

  create() {
    this._tripInfo.create(this._cards);
    render(this._container, this._tripInfo.getElement(), Position.AFTERBEGIN);
  }

  updateData(cards) {
    unrender(this._tripInfo.getElement());
    this._tripInfo.removeElement();
    this._cards = cards.slice().sort((a, b) => a.startTime - b.startTime);
    this.create();
  }
}
