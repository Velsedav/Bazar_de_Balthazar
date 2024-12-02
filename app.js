fetch("https://fakestoreapi.com/products")
  .then((rep) => {
    // JavaScript reçoit une réponse de l'api (objet js pas exploitable directement) => il faut le transformer en json
    return rep.json();
  })
  .then((data) => {
    //Ensuite j'ai acces ici à ma data
    console.log(data);
    // Ici j'ai une liste de produit
    // Je boucle sur le teableau de données :
    data.forEach((prod) => {
      affiche(prod);
    });
  });

// Role afficher un produit dans la page HTML
// Parametre : Le produit

function affiche(produit) {
  // On utilise console log pour vérifier que le JSON fonctionne correctement
  // console.log(produit.title);
  // console.log(produit.description);
  // console.log(produit.category);
  // console.log(produit.price);
  // console.log(produit.rating.rate);
  // console.log(produit.rating.count);
  // console.log(produit.image);
  // afficher dans le dom les petites cartes
  let title = produit.title;
  let description = produit.description;
  let category = produit.category;
  let price = produit.price;
  let rate = produit.rating.rate;
  let count = produit.rating.count;
  let image = produit.image;

  let CardsCtnr = document.querySelector(".CardsCtnr");
  CardsCtnr.innerHTML += `
        
        <div class="card">
          <!-- Div Image Carte -->
          <div>
          <div class="Rltv">
          <img src="${image}" alt="" />
        </div>
            <p class="Ctgr">${category}</p>
          </div>
          <!-- Div Partie inferieure carte -->
          <div>
            <!-- Div Description Carte -->
            <div>
              <h2>${title}</h2>
              <p>${description}</p>
            </div>
            <!-- Avis et Prix -->
            <div>
              <p>${rate}</p>
              <p>${count}</p>
              <p>${price}€</p>
            </div>
            <button>PRIX EXTRA ACHETE VITE</button>
          </div>
        </div>
      </div>
      `;
}
