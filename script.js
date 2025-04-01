document.addEventListener("DOMContentLoaded", function () {
    // Función para obtener las reseñas desde la API
    function fetchReviews() {
        fetch("https://api.example.com/reviews") // Aquí va la URL de la API real
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudieron obtener las reseñas.");
                }
                return response.json();
            })
            .then((data) => {
                displayReviews(data); // Mostrar las reseñas
            })
            .catch((error) => {
                console.error("Error:", error);
                document.getElementById("reviews-list").innerHTML =
                    "No se pudieron cargar las reseñas.";
            });
    }

    // Función para mostrar las reseñas en la página
    function displayReviews(reviews) {
        const reviewsList = document.getElementById("reviews-list");
        reviewsList.innerHTML = ""; // Limpiar el contenedor antes de agregar las reseñas

        reviews.forEach((review) => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");

            reviewElement.innerHTML = `
          <p class="review-text">"${review.text}"</p>
          <p class="review-author">- ${review.author}</p>
        `;

            reviewsList.appendChild(reviewElement);
        });
    }

    // Llamada a la función para obtener las reseñas cuando se cargue la página
    fetchReviews();
});
