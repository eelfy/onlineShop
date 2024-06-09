import { Categories } from '../../shared/lib/Api.types';
import { makeAutoObservable } from 'mobx';

export class MainStore {
  categories?: Categories = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  updateCategories = (newCategories: Categories) => {
    this.categories = newCategories
  };
}
