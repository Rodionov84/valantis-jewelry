import md5 from "md5";
import { getPasswordForConnect } from "./getPasswordForConnect";

export async function downloadFilteredIds(filterName, payloadValue, page) {

  if (filterName !== undefined && payloadValue !== undefined) {
    let obj = {
      "action":
        "filter",
      "params": {
        [filterName]: filterName === 'price'
          ? Number(String(payloadValue.split('.')[0].replace(/[\D]/g, "")))
          : payloadValue
      }
    };
   
    const password = getPasswordForConnect();
    const urlItems = 'http://api.valantis.store:40000/';
    const options = {
      method: 'POST',
      headers: {
        'X-Auth': md5(password),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };

    return fetch(urlItems, options)
      .then(response => {
        return response.json();
      })
      .then(afterResponse => {
        const ids = afterResponse.result;
        console.log("ids - length", ids.length);
        return {
          ids: ids.slice((page) * 50, (page * 50) + 60),
          length: ids.length,
        }
      })
      .catch(() => {
        console.error("ОШИБКА!!! downloadFilteredIds Направлен повторный запрос...");
        return downloadFilteredIds(filterName, payloadValue, page);
      })
  }
  return;
}
