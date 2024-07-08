import { Dispatch, SetStateAction } from "react";
import { Categories } from "../../shared/lib";

export interface HeaderProps {
  categories: Categories,
  onCloseAllNavigate: () => void,
  searchValue: string,
  changeModeToNavigation: () => void,
  onSearch: () => void,
  setSearchValue: Dispatch<SetStateAction<string>>,
  changeModeToSearch: () => void,
  isSearchMode: boolean
}
