import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

// And so this is important in order to prevent for really bad internet connections
// where then this fetch here could be running forever.

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    // So we basically propagated the error down from one async function to the other
    // by re-throwing the error here in this catch block.
    throw err;
  }
};

// export const getJSON = async function (url) {
//   try {
//     // And so as soon as any of these promises here in the race rejects or fulfills, then that promise will become the winner.
//     const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (err) {
//     // So we basically propagated the error down from one async function to the other
//     // by re-throwing the error here in this catch block.
//     throw err;
//   }
// };

// export const sendJSON = async function (url, uploadData) {
//   try {
//     const fetchPro = fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(uploadData),
//     });
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (err) {
//     // So we basically propagated the error down from one async function to the other
//     // by re-throwing the error here in this catch block.
//     throw err;
//   }
// };
