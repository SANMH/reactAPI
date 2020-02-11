const getListasubasta = async () => {
    const data = await fetch('http://localhost:8000/api/subastas.json');
    return await data.json();
};

const Events = {
    getListasubasta
};

export default Events;