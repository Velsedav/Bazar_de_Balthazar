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

// Role : 🎥 fficher un produit dans la page HTML
// Parametre : 📦Le produit
// Retour : 🧠Elle ne retourne rien puisqu'elle affiche

function affiche(produit) {
  // Pourquoi 'produit' ? Car c'est le produit sur lequel la boucle est actuellement

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
  let description =
    produit.description.length > 200
      ? produit.description.slice(0, 300) + "…"
      : produit.description;
  let category = produit.category;
  let price = produit.price;
  let rate = produit.rating.rate;
  let count = produit.rating.count;
  let image = produit.image;

  // On a créé cette variable pour nous faciliter la vie
  let CardsCtnr = document.querySelector(".CardsCtnr");
  // @ts-ignore
  CardsCtnr.innerHTML += `
        
        <div class="card">
          <!-- Div Image Carte -->

            <div class="Rltv">
              <img src="${image}" alt="" />
              <p class="Ctgr">${category}</p>
            </div>

          <!-- Div Partie inferieure carte -->
          <div class="innerCtnr">
            <!-- Div Description Carte -->
            <div>
              <h2>${title}</h2>
              <p class="description">${description}</p>
            </div>
            <!-- Avis et Prix -->
                   <div class="flex SpcBtwn">
                     <div class=" flex SpcBtwn">
                       <p>Note : ${rate}/5</p>
                       <a href="">${count} avis</a>
                     </div>
                     <p class="prix">${price}€</p>
                   </div>
            <button>Ajouter au panier</button>
          </div>
        </div>
      `;
}
