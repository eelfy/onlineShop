import { Categories } from '../../../shared/lib/Api.types';
import { makeAutoObservable } from 'mobx';

export class MainStore {
  categories?: Categories;
  cardCount?: number

  constructor() {
    makeAutoObservable(this);
  }

  updateCategories = (newCategories: Categories) => {
    this.categories = newCategories
  };

  updateCardCount = (newCardCount: number | undefined) => {
    this.cardCount = newCardCount
  }
}
