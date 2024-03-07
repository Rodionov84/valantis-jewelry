import md5 from "md5";
import { getPasswordForConnect } from "./getPasswordForConnect";

export async function downloadCurrentPage(page) {

  const password = getPasswordForConnect();
  const urlItems = 'http://api.valantis.store:40000/';
  const options = {
    method: 'POST',
    headers: {
      'X-Auth': md5(password),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "action": "get_ids",
      "params": { "offset": page * 50, "limit": 60 }
    }),
  };

  return fetch(urlItems, options)
    .then(response => {
      return response.json();
    })
    .then(afterResponse => {
      const ids = afterResponse.result;
      return {
        ids: ids
      }
    }).catch(error => {
      console.error('ОШИБКА!!! downloadCurrentPage Направлен повторный запрос...', page, error)
      return downloadCurrentPage(page);
    })
}
