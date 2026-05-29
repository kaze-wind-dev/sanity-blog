import dayjs from "dayjs";
export function formatDate(date: string):string{
 const formatedDate = dayjs().format("YYYY-MM-DD");
 return formatedDate;
}