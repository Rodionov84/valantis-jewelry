import md5 from "md5";
import { getPasswordForConnect } from "./getPasswordForConnect";
export async function downloadItems(arr) {
  if (arr !== undefined) {
    
    const password = getPasswordForConnect();  
    const urlItems = 'http://api.valantis.store:40000/';
    const options = {
      method: 'POST',
      headers: {
        'X-Auth': md5(password),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "action": "get_items",
        "params": { "ids": arr.ids }
      }),
    };

    return fetch(urlItems, options)
      .then(response => {
        return response.json();
      })
      .then(afterResponse => {
        const items = afterResponse.result;
        let uniq = [];
        let result = [];
        for (const uniqItem of items) {
          if (result.length > 49) { return result };
          if (!uniq.includes(uniqItem.id)) {
            uniq.push(uniqItem.id)
            result.push(uniqItem)
          }
        }
        return result.map(item => {
          return {
            brand: item.brand,
            id: item.id,
            price: item.price,
            product: item.product,
          }
        })
      }).catch(error => {
        console.error("ОШИБКА!!! downloadItems Направлен повторный запрос...", error);
        return downloadItems(arr);
      })
  }
}
