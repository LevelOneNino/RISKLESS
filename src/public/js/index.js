document.addEventListener('DOMContentLoaded', () => {
    // Lista de países más visitados por continente
    const countriesByContinent = {
        America: [
            "Estados Unidos", "México", "Brasil", "Argentina", "Canadá"
        ],
        Europa: [
            "Francia", "España", "Italia", "Alemania", "Reino Unido"
        ],
        Asia: [
            "China", "Japón", "Tailandia", "India", "Malasia"
        ],
        Africa: [
            "Marruecos", "Sudáfrica", "Egipto", "Túnez", "Kenia"
        ],
        Oceania: [
            "Australia", "Nueva Zelanda", "Fiji", "Samoa", "Papúa Nueva Guinea"
        ]
    };

    const btnBuscar = document.getElementById('btnBuscar');
    
    btnBuscar.addEventListener('click', () => {
        const searchSection = document.getElementById('search');
        searchSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Función para agregar los países a cada sección
    // for (const continent in countriesByContinent) {
    //     const countryListDiv = document.querySelector(`.${continent}-List`);
    //     countriesByContinent[continent].forEach(country => {
    //         const a = document.createElement('a'); // Crear un párrafo para cada país
    //         a.textContent = country; // Asignar el nombre del país
    //         a.href = "#";
    //         a.style.marginLeft = '10px';
    //         a.addEventListener('click', (e) => {
    //             e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    //             // document.getElementById('countryselected').textContent = country; // Cambiar el contenido del h1
    //             // document.getElementById('countryselected').style.margin = '20px';
    //             // document.getElementById('textselected').style.display = 'none';
    //             // const elemento = document.querySelector('.card'); // Selecciona el elemento por su clase
    //             // elemento.style.justifyContent = 'flex-start'; // Cambiar a 'left'
    //             // elemento.style.alignItems = 'flex-start'; // Cambiar a 'top'
    //             // document.getElementById('riskandnews').style.display = 'flex';
    //             // document.getElementById('riskandnews').style.justifyContent = 'center';
    //             // document.getElementById('riskandnews').style.alignItems = 'center';
    //             // document.getElementById('riskandnews').style.marginLeft = '50px';
    //         });
    //         countryListDiv.appendChild(a); // Agregar el párrafo al div correspondiente
    //         countryListDiv.appendChild(document.createElement('br'));
    //     });
    // }
});
