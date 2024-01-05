/* function testPromise() {
  return new Promise((resolve, reject) => {
    // Le setTimeout est asynchrone (non bloquant)
    setTimeout(() => {
      // Cas favorable - le Math.random() donne le côté aléatoire
      if (Math.random() > 0.5) {
        resolve("Promesse tenue !")
      }
      // Cas défavorable
      else {
        reject("Essaie encore")
      }
    }, 2000)
  });
}
function testPromise2() {
  return new Promise((resolve, reject) => {
    // Le setTimeout est asynchrone (non bloquant)
    setTimeout(() => {
      // Cas favorable - le Math.random() donne le côté aléatoire
      if (Math.random() > 0.5) {
        resolve("Promesse 2 tenue !")
      }
      // Cas défavorable
      else {
        reject("Essaie encore encore")
      }
    }, 1000)
  });
}

testPromise()
  .then( msg => {
    console.log(`message1 : `, msg);
    return testPromise2();
  })
  .then( msg => {
    console.log(`message2 : `, msg);
  })
  .catch( error => {
    console.error("Erreur attrapée : " + error)
  });

  console.log(`Je suis en ligne 24`);

  fetch("http://localhost:3000/tasks")
  .then(response => {
    console.log(`response.status`, response.status);
    if(response.status !== 200) throw new Error("Pb dans la réponse du serveur");
    return response.json(response);
  })
  .then(data => {
    console.log(`data :`, data);
  })
  .catch(error => {
    console.error("Erreur attrapée" + error);
  })
   */

/**
 * Permet de récupérer une chaine de caractère (token) dans le cas favorable
 * @returns Promise<string>
 */
function getToken() {
  return new Promise((resolve, reject) => {
    let random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        // Cas favorable
        resolve("UI2RHuifzzef54+456");
      } else if (random < 0.3 && random > 0) resolve("");
      else reject("Problème de token");
    }, 1000);
  });
}

function getUsers(token) {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject(
        "Vous devez donner un token valide pour récupérer les utilisateurs"
      );
    }
    setTimeout(() => {
      if (Math.random() > 0.5) {
        // Cas favorable
        resolve([
          { name: "Bob", uid: 156 },
          { name: "jiji", uid: 358 },
        ]);
      } else {
        reject("Problème de récupération des utilisateurs");
      }
    }, 1000);
  });
}

const result = getToken()
  .then((token) => {
    console.log(`J'ai bien reçu le token : `, token);
    return getUsers(token);
  })
  .then((users) => {
    console.log(`J'ai bien reçu les utilisateurs`, users);
  })
  .catch((error) => {
    console.error(error);
  });
console.log(result);
console.log(`Ici `);
