// Éléments du DOM
let postDiv = document.getElementById("postSection");
console.log(postDiv)
// Requête GET
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json()) // Transformation de la réponse reçu au format JSON
.then(posts => {    // Extraction de l'ensemble des post du JSON

    // Pour chaque post extrait, créer une arboresence à ajouter au DOM
    posts.forEach(post => {
        
        let postSection = document.createElement("section")
        if (post.completed == true){
        postSection.classList.add("vert");
      } 
      else{
        postSection.classList.add("rouge");

      }
    
      let title = document.createTextNode(post.title);
      var h2 = document.createElement("h2");
        // Ajout du post au DOM
        h2.appendChild(title);
        postSection.appendChild(h2);
        postDiv.appendChild(postSection);
        
    });
});




