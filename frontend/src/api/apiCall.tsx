import request, { IResult } from "./utils";

interface IgetMenuElementProps {
  locale: string;
}
interface IgetLocaleAvailableProps extends IgetMenuElementProps {}

export async function getMenuElements({ locale }: IgetMenuElementProps) {
  const requestURL = `http://localhost:1337/api/menu-items?populate[0]=cta1&populate[1]=cta2&populate[2]=submenu.element&locale=${locale}`;
  try {
    let result: IResult = await request(requestURL, {
      method: "GET",
    });
    return result.data;
  } catch (e) {
    console.error(e);
  }
}
export async function getLocaleAvailable({ locale }: IgetLocaleAvailableProps) {
  const requestURL = `http://localhost:1337/api/locale-availables?populate[0]=language&populate[1]=language.flag&locale=${locale}`;
  try {
    let result: IResult = await request(requestURL, {
      method: "GET",
    });
    return result?.data?.[0]?.attributes?.language;
  } catch (e) {
    console.error(e);
  }
}
