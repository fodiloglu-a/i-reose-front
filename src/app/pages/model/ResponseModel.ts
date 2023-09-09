import {CurrentDTO} from "./CurrentDTO";

export interface ResponseModel {
  oznakaFirs: string|null;
  oznakaSecont: string|null;
  startDate: Date|null;
  endDate: Date|null;
  currencyDTO: CurrentDTO|null;
  currencyDTOs: CurrentDTO[]|null;

}
