import request, { IResult } from "./utils";

interface IgetMenuElementProps {
  language: string;
}
interface IgetLocaleAvailableProps extends IgetMenuElementProps {}

export async function getMenuElements({ language }: IgetMenuElementProps) {
  const requestURL = `http://localhost:1337/api/menu-items?populate[0]=cta1&populate[1]=cta2&populate[2]=submenu.element&locale=${language}`;
  try {
    let result: IResult = await request(requestURL, {
      method: "GET",
    });
    return result.data;
  } catch (e) {
    console.error(e);
  }
}
export async function getLocaleAvailable({
  language,
}: IgetLocaleAvailableProps) {
  const requestURL = `http://localhost:1337/api/locale-availables?populate[0]=language&populate[1]=language.flag&locale=${language}`;
  try {
    let result: IResult = await request(requestURL, {
      method: "GET",
    });
    return result?.data?.[0]?.attributes?.language;
  } catch (e) {
    console.error(e);
  }
}
