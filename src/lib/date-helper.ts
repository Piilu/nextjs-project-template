import dayjs from "dayjs"
import 'dayjs/locale/et';
import { helper } from "./helper";

dayjs.locale("et");

function isValid(value: string | Date)
{
  return dayjs(value).isValid();
}

function getTime(value: Date | string)
{
  return dayjs(value).format("HH:mm");
}

function getDay(value: Date | string)
{
  return helper.capFirstLetter(dayjs(value).format("dddd"));
}

function today()
{
  return dayjs().toDate()
}

function getDate(value: Date | string)
{
  if (!dayjs(value).isValid()) return dateHelper.today();
  return dayjs(value).toDate();
}

function formatDate(value: Date | string)
{
  return dayjs(value).format("YYYY-MM-DD");
}

function formatNormal(value: Date | string)
{
  return dayjs(value).format("D.M.YYYY");
}

function changeDay(value: Date | string, add: number, format?: string)
{
  if (!dayjs(value).isValid()) return undefined;
  return dayjs(value).add(add, "day").format(format ? format : "YYYY-MM-DD");
}

function changeMinutes(value: Date | string | undefined, add: number, format?: string)
{
  if (!dayjs(value).isValid()) return undefined;
  return dayjs(value).add(add, "minute").format(format ? format : "YYYY-MM-DD");
}

function subtract(minutes: number, date: Date | string)
{
  return dayjs(date).subtract(minutes, "minute").toDate();
}

function formatEmailSubject(value: Date | string)
{
  return dayjs(value).format('MMM D, YYYY HH:mm')
}


export const dateHelper = {
  getTime,
  getDate,
  formatDate,
  formatNormal,
  changeDay,
  getDay,
  today,
  isValid,
  changeMinutes,
  subtract,
  formatEmailSubject
}
