/* eslint-disable no-unused-vars */
/* eslint-disable no-return-await */
/* eslint-disable import/no-extraneous-dependencies */

import "isomorphic-fetch";

export const logResult = async (reduction) => {
  var urlencoded = new URLSearchParams();

  for (let key in reduction) {
    if (reduction.hasOwnProperty(key)) {
      urlencoded.append(key, reduction[key]);
    }
  }

  urlencoded.append("requestOrigin", "mietendeckelrechner.de");

  return await fetch("https://mdr-api-serverless-2.vercel.app/api/logResult", {
    method: "PUT",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    body: urlencoded,
  });
};

export default logResult;
